'use client';

import { createContext, useContext, Fragment } from 'react';
import type { Locale } from './config';
import type { Dictionary } from './dictionaries/en';

const DictionaryContext = createContext<{ locale: Locale; dict: Dictionary } | null>(null);

export function DictionaryProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return <DictionaryContext.Provider value={{ locale, dict }}>{children}</DictionaryContext.Provider>;
}

export function useDictionary() {
  const ctx = useContext(DictionaryContext);
  if (!ctx) throw new Error('useDictionary must be used inside <DictionaryProvider>');
  return ctx;
}

/* Renders "**text**" segments as accent-coloured spans. */
export function Accented({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} style={{ color: 'var(--accent)' }}>{part}</span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
