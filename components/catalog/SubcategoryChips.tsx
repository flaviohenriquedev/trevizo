"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Subcategory } from "@/types/category";

export function SubcategoryChips({
  baseHref,
  subcategories,
  active,
}: {
  baseHref: string;
  subcategories: Subcategory[];
  active: string;
}) {
  const chips = [{ slug: "todos", name: "Todos" }, ...subcategories];

  return (
    <div className="scroll-x -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
      {chips.map((chip) => {
        const href = chip.slug === "todos" ? baseHref : `${baseHref}?sub=${chip.slug}`;
        const selected = active === chip.slug;
        return (
          <Link
            key={chip.slug}
            href={href}
            aria-current={selected ? "page" : undefined}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
              selected
                ? "border-brand bg-brand text-white"
                : "border-line bg-white text-ink hover:border-brand hover:text-brand",
            )}
          >
            {chip.name}
          </Link>
        );
      })}
    </div>
  );
}
