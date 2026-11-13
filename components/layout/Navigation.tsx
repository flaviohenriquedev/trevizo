"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { categories, navigationCategories } from "@/data/categories";
import { cn } from "@/lib/cn";

const links = [
  { href: "/ofertas", label: "Ofertas" },
  ...navigationCategories().map((category) => ({
    href: `/${category.slug}`,
    label: category.name,
  })),
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav className="relative hidden border-t border-line lg:block" aria-label="Categorias">
      <Container className="flex flex-wrap items-center justify-center gap-x-1">
        <div ref={panelRef} className="relative">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-3 text-[13px] font-semibold text-brand"
            aria-expanded={open}
            aria-controls="category-menu"
            onClick={() => setOpen((current) => !current)}
          >
            <Menu className="size-3.5" aria-hidden />
            Todas as Categorias
            <ChevronDown className={cn("size-3.5 transition", open && "rotate-180")} aria-hidden />
          </button>
          {open ? (
            <div
              id="category-menu"
              className="absolute top-full left-0 z-50 mt-1 w-[720px] max-w-[80vw] rounded-2xl border border-line bg-white shadow-card"
            >
              <div className="max-h-[min(70vh,520px)] overflow-y-auto p-4">
                <div className="grid grid-cols-3 gap-2">
                  {categories.map((category) => (
                    <div key={category.slug} className="rounded-xl p-3 hover:bg-surface">
                      <Link
                        href={`/${category.slug}`}
                        className="font-semibold text-brand hover:underline"
                      >
                        {category.name}
                      </Link>
                      <ul className="mt-2 space-y-1">
                        {category.subcategories.map((subcategory) => (
                          <li key={subcategory.slug}>
                            <Link
                              href={`/${category.slug}?sub=${subcategory.slug}`}
                              className="text-sm text-muted transition hover:text-brand"
                            >
                              {subcategory.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-lg px-2.5 py-3 text-[13px] font-semibold transition hover:text-accent",
                active ? "text-accent" : "text-brand",
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </Container>
    </nav>
  );
}
