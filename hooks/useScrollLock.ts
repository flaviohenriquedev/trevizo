"use client";

import { useEffect } from "react";

export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const scroller = document.getElementById("site-scroll");
    if (!scroller) return;
    const previousOverflow = scroller.style.overflow;
    const previousPadding = scroller.style.paddingRight;
    const scrollbar = Math.max(0, scroller.offsetWidth - scroller.clientWidth);
    const computed = window.getComputedStyle(scroller).paddingRight;
    const currentPadding = Number.parseFloat(computed) || 0;
    scroller.style.paddingRight = `${currentPadding + scrollbar}px`;
    scroller.style.overflow = "hidden";
    return () => {
      scroller.style.overflow = previousOverflow;
      scroller.style.paddingRight = previousPadding;
    };
  }, [active]);
}
