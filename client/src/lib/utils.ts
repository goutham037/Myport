import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Deploy subpath (e.g. "/Myport" on GitHub Pages, "" at the domain root on Vercel) — prefix hand-written internal hrefs with this. */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, "")
