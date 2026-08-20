"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { Wine, CartItem } from "@/types/wine";
import { hasOrderUnits, lineTotal } from "@/lib/packing";

interface CartContextType {
  items: CartItem[];
  addToCart: (wine: Wine, bottles?: number, boxes?: number) => void;
  removeFromCart: (wineId: string) => void;
  setBottles: (wineId: string, bottles: number) => void;
  setBoxes: (wineId: string, boxes: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "grw-wines-cart-v2";

function normalizeItems(raw: unknown): CartItem[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) => {
      if (!item || typeof item !== "object" || !("wine" in item)) return null;
      const row = item as Record<string, unknown>;
      const wine = row.wine as Wine;

      // New shape
      if (typeof row.bottles === "number" || typeof row.boxes === "number") {
        const bottles = Math.max(0, Number(row.bottles) || 0);
        const boxes = Math.max(0, Number(row.boxes) || 0);
        if (!hasOrderUnits(bottles, boxes)) return null;
        return { wine, bottles, boxes };
      }

      // Legacy pack shape → migrate
      const quantity = Math.max(0, Number(row.quantity) || 0);
      if (quantity <= 0) return null;
      if (row.pack === "box") {
        return { wine, bottles: 0, boxes: quantity };
      }
      return { wine, bottles: quantity, boxes: 0 };
    })
    .filter((item): item is CartItem => item !== null);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored =
        localStorage.getItem(CART_STORAGE_KEY) ??
        localStorage.getItem("vinea-wines-cart");
      if (stored) {
        setItems(normalizeItems(JSON.parse(stored)));
      }
    } catch {
      // ignore parse errors
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  const addToCart = useCallback(
    (wine: Wine, bottles = 0, boxes = 0) => {
      const nextBottles = Math.max(0, bottles);
      const nextBoxes = Math.max(0, boxes);
      if (!hasOrderUnits(nextBottles, nextBoxes)) return;

      setItems((prev) => {
        const existing = prev.find((item) => item.wine.id === wine.id);
        if (existing) {
          return prev.map((item) =>
            item.wine.id === wine.id
              ? {
                  ...item,
                  bottles: item.bottles + nextBottles,
                  boxes: item.boxes + nextBoxes,
                }
              : item
          );
        }
        return [
          ...prev,
          { wine, bottles: nextBottles, boxes: nextBoxes },
        ];
      });
    },
    []
  );

  const removeFromCart = useCallback((wineId: string) => {
    setItems((prev) => prev.filter((item) => item.wine.id !== wineId));
  }, []);

  const setBottles = useCallback((wineId: string, bottles: number) => {
    const next = Math.max(0, bottles);
    setItems((prev) =>
      prev
        .map((item) =>
          item.wine.id === wineId ? { ...item, bottles: next } : item
        )
        .filter((item) => hasOrderUnits(item.bottles, item.boxes))
    );
  }, []);

  const setBoxes = useCallback((wineId: string, boxes: number) => {
    const next = Math.max(0, boxes);
    setItems((prev) =>
      prev
        .map((item) =>
          item.wine.id === wineId ? { ...item, boxes: next } : item
        )
        .filter((item) => hasOrderUnits(item.bottles, item.boxes))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce(
    (sum, item) => sum + item.bottles + item.boxes,
    0
  );
  const totalPrice = items.reduce(
    (sum, item) => sum + lineTotal(item.wine, item.bottles, item.boxes),
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        setBottles,
        setBoxes,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
