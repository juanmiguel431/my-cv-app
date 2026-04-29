import { cvEn } from "@/constants/translations/en";
import { cvEs } from "@/constants/translations/es";
import type { CvDictionary, Locale } from "@/models/cv";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, CvDictionary> = {
  en: cvEn,
  es: cvEs,
};

export function hasLocale(locale: string): locale is Locale {
  return locale in dictionaries;
}

export function getCvDictionary(locale: Locale): CvDictionary {
  return dictionaries[locale];
}
