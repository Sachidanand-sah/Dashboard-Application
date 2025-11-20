import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names safely.
 * Ensures no duplicate Tailwind classes override each other incorrectly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
