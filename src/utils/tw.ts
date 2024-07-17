import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function tw(defaultClasses: ClassValue, additionalClasses?: ClassValue) {
  // return twMerge(defaultClasses, additionalClasses)
  return twMerge(clsx(defaultClasses, additionalClasses))
}