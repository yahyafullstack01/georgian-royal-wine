"use client";

import { Wine } from "@/types/wine";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { useState } from "react";

interface AddToCartButtonProps {
  wine: Wine;
  size?: "sm" | "lg";
}

export default function AddToCartButton({
  wine,
  size = "lg",
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const { t } = useLocale();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    if (!wine.inStock) return;
    addToCart(wine);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const sizeClasses =
    size === "sm" ? "px-3 py-1.5 text-xs" : "px-6 py-3 text-sm";

  return (
    <button
      onClick={handleClick}
      disabled={!wine.inStock}
      className={`${sizeClasses} rounded font-medium tracking-wide uppercase transition-all ${
        wine.inStock
          ? added
            ? "bg-green-700 text-white"
            : "bg-burgundy-900 text-cream-100 hover:bg-burgundy-800 dark:bg-gold-500 dark:text-burgundy-950 dark:hover:bg-gold-400"
          : "cursor-not-allowed bg-stone-200 text-stone-400 dark:bg-stone-700 dark:text-stone-500"
      }`}
    >
      {added
        ? t.product.added
        : wine.inStock
          ? t.product.addToCart
          : t.product.soldOut}
    </button>
  );
}
