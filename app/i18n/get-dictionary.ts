import type { Locale } from './config';
import type { Dictionary } from './dictionaries/en';
import en from './dictionaries/en';
import fr from './dictionaries/fr';

const dictionaries: Record<Locale, Dictionary> = { en, fr };

/* Called from server components only; the chosen dictionary is passed to
   the client as plain props, so each page ships a single language. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
