"use client";

import { useEffect } from "react";

/**
 * layout.tsx からのみマウントする統合ガード。
 * - すべての <a> の既定遷移の阻止
 * - window.open によるポップアップの阻止
 */
export function LayoutNavigationGuards() {
  useEffect(() => {
    const originalOpen = window.open;
    window.open = () => null;

    const onActivate = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      const t = e.target;
      const el = t instanceof Element ? t : (t as Node).parentElement;
      const anchor = el?.closest("a");
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    };

    document.addEventListener("click", onActivate, true);
    document.addEventListener("auxclick", onActivate, true);
    return () => {
      window.open = originalOpen;
      document.removeEventListener("click", onActivate, true);
      document.removeEventListener("auxclick", onActivate, true);
    };
  }, []);

  return null;
}
