'use client';

import { useEffect } from 'react';

export function useMagnetic(
  ref: React.RefObject<HTMLElement | null>,
  strength: number = 0.35
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const PROXIMITY = 80;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX * distX + distY * distY);

      if (dist < PROXIMITY + rect.width / 2) {
        el.style.transform = `translate(${distX * strength}px, ${distY * strength}px)`;
        el.style.transition = 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)';
      }
    };

    const onMouseLeave = () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    };

    document.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [ref, strength]);
}
