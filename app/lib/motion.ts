'use client';

import { useEffect, useState } from 'react';
import type { Variants, Transition } from 'framer-motion';

/* ──────────────────────────────────────────────────────────────
   Shared motion system — one language across every section.
   Refined / premium-minimal: confident, fast, transform-only.
   ────────────────────────────────────────────────────────────── */

/** Signature easing — expo-out. Used everywhere for entrance motion. */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** Spring presets for physical hover / magnetic interactions. */
export const SPRING_SOFT: Transition = { type: 'spring', stiffness: 220, damping: 26, mass: 0.7 };
export const SPRING_SNAPPY: Transition = { type: 'spring', stiffness: 400, damping: 30, mass: 0.6 };

/* ── Reveal variants (used with whileInView) ───────────────────── */

/** Fade up + a touch of blur-to-sharp so content "resolves" into place. */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Container that staggers its children's reveals. */
export const staggerContainer = (stagger = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** A child item meant to be staggered inside `staggerContainer`. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Standard viewport config for one-shot scroll reveals.
    `amount: 0.15` fires once ~15% of the element is visible, which is
    reliable on short mobile viewports; the small negative margin keeps
    it from triggering too early on desktop. */
export const viewportOnce = { once: true, amount: 0.15, margin: '-40px' } as const;

/* ── Reduced-motion hook ───────────────────────────────────────
   Returns true when the user prefers reduced motion. Sections use
   this to swap rich variants for a plain fade (or none).            */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}

/** Pointer: fine = device has a precise pointer (mouse). Used to gate
    cursor-following effects so they never run on touch devices.       */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return fine;
}
