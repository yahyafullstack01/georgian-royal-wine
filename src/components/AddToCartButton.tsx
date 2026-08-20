"use client";

import { Wine } from "@/types/wine";
import { useCart } from "@/context/CartContext";
import { useLocale } from "@/context/LocaleContext";
import { formatPrice } from "@/lib/format";
import {
  bottlesFree,
  bottlesPaid,
  bottlesShipped,
  boxUnitPrice,
  hasOrderUnits,
  lineTotal,
} from "@/lib/packing";
import { useState } from "react";

interface AddToCartButtonProps {
  wine: Wine;
  size?: "sm" | "lg";
  /** Dual bottle/box counters. Off on shop cards (adds 1 bottle). */
  showPackOptions?: boolean;
}

function QtyStepper({
  label,
  hint,
  value,
  onChange,
  disabled,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (next: number) => void;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex flex-1 flex-col rounded-lg border border-burgundy-900/15 bg-white p-3 dark:border-gold-500/20 dark:bg-stone-950 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <span className="text-sm font-medium text-burgundy-950 dark:text-cream-100">
        {label}
      </span>
      <span className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
        {hint}
      </span>
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          disabled={disabled || value <= 0}
          onClick={() => onChange(Math.max(0, value - 1))}
          className="flex h-8 w-8 items-center justify-center rounded border border-stone-300 text-stone-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-stone-600 dark:text-stone-200"
          aria-label={`Decrease ${label}`}
        >
          −
        </button>
        <span className="w-8 text-center text-sm font-medium tabular-nums">
          {value}
        </span>
        <button
          type="button"
          disabled={disabled}
          onClick={() => onChange(value + 1)}
          className="flex h-8 w-8 items-center justify-center rounded border border-stone-300 text-stone-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-stone-600 dark:text-stone-200"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function AddToCartButton({
  wine,
  size = "lg",
  showPackOptions = size === "lg",
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const { t } = useLocale();
  const [bottles, setBottles] = useState(0);
  const [boxes, setBoxes] = useState(0);
  const [added, setAdded] = useState(false);

  const canAdd = showPackOptions
    ? hasOrderUnits(bottles, boxes)
    : wine.inStock;

  const handleClick = () => {
    if (!wine.inStock) return;
    if (showPackOptions) {
      if (!hasOrderUnits(bottles, boxes)) return;
      addToCart(wine, bottles, boxes);
      setBottles(0);
      setBoxes(0);
    } else {
      addToCart(wine, 1, 0);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isSm = size === "sm";
  const total = lineTotal(wine, bottles, boxes);
  const shipped = bottlesShipped(bottles, boxes);
  const paid = bottlesPaid(bottles, boxes);
  const free = bottlesFree(boxes);

  const addBtnClasses = isSm
    ? "shrink-0 px-2 py-1.5 text-[10px] leading-tight sm:px-3 sm:text-xs"
    : "w-full px-6 py-3 text-sm";

  return (
    <div
      className={`flex ${showPackOptions ? "w-full flex-col gap-4" : "shrink-0"}`}
    >
      {showPackOptions && (
        <>
          <div className="flex flex-col gap-2 sm:flex-row">
            <QtyStepper
              label={t.product.packBottle}
              hint={formatPrice(wine.price)}
              value={bottles}
              onChange={setBottles}
              disabled={!wine.inStock}
            />
            <QtyStepper
              label={t.product.packBox}
              hint={`${t.product.packBoxDesc} · ${formatPrice(boxUnitPrice(wine))}`}
              value={boxes}
              onChange={setBoxes}
              disabled={!wine.inStock}
            />
          </div>

          {hasOrderUnits(bottles, boxes) ? (
            <p className="text-sm text-stone-600 dark:text-stone-300">
              {t.product.comboSummary
                .replace("{bottles}", String(bottles))
                .replace("{boxes}", String(boxes))
                .replace("{paid}", String(paid))
                .replace("{free}", String(free))
                .replace("{total}", String(shipped))
                .replace("{price}", formatPrice(total))}
            </p>
          ) : (
            <p className="text-sm text-stone-500 dark:text-stone-400">
              {t.product.chooseQtyHint}
            </p>
          )}
        </>
      )}

      <button
        onClick={handleClick}
        disabled={!wine.inStock || (showPackOptions && !canAdd)}
        className={`${addBtnClasses} rounded font-medium tracking-wide uppercase transition-all ${
          wine.inStock && canAdd
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
    </div>
  );
}
