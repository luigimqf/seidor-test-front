import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const NumbetToFixed = (number: number) => {
  return Number(number.toFixed(2));
}
