import type { Wine } from "@/types/wine";

/** Bottles charged per box */
export const BOX_PAID_BOTTLES = 6;
/** Free bottles included with each box */
export const BOX_FREE_BOTTLES = 1;
/** Total bottles shipped per box */
export const BOX_TOTAL_BOTTLES = BOX_PAID_BOTTLES + BOX_FREE_BOTTLES;

export function boxUnitPrice(wine: Wine): number {
  return wine.price * BOX_PAID_BOTTLES;
}

export function lineTotal(
  wine: Wine,
  bottles: number,
  boxes: number
): number {
  return wine.price * bottles + boxUnitPrice(wine) * boxes;
}

export function bottlesPaid(bottles: number, boxes: number): number {
  return bottles + boxes * BOX_PAID_BOTTLES;
}

export function bottlesFree(boxes: number): number {
  return boxes * BOX_FREE_BOTTLES;
}

export function bottlesShipped(bottles: number, boxes: number): number {
  return bottles + boxes * BOX_TOTAL_BOTTLES;
}

export function hasOrderUnits(bottles: number, boxes: number): boolean {
  return bottles > 0 || boxes > 0;
}
