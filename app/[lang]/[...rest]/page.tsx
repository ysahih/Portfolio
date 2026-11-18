import { notFound } from 'next/navigation';

// Unknown paths under /fr or /en render the localized not-found page.
export default function CatchAll() {
  notFound();
}
