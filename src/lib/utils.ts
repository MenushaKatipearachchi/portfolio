import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function withBasePath(path: string) {
  if (!path) {
    return publicBasePath
  }

  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) {
    return path
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  if (!publicBasePath || normalizedPath === publicBasePath || normalizedPath.startsWith(`${publicBasePath}/`)) {
    return normalizedPath
  }

  return `${publicBasePath}${normalizedPath}`
}
