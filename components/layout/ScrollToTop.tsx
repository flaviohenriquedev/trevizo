"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    document.getElementById("site-scroll")?.scrollTo({ top: 0 });
  }, [pathname, searchParams]);

  return null;
}
