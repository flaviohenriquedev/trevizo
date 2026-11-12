"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { SearchBar } from "@/components/layout/SearchBar";
import { categories, navigationCategories } from "@/data/categories";
import { helpLinks, institutionalLinks } from "@/data/navigation";
import { useScrollLock } from "@/hooks/useScrollLock";
import { cn } from "@/lib/cn";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  useScrollLock(open);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="grid size-10 place-items-center rounded-full text-brand transition hover:bg-brand/5"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu className="size-6" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex h-full w-[min(100%,22rem)] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <Logo />
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
              <SearchBar />
              <nav className="mt-4" aria-label="Menu mobile">
                <Link
                  href="/ofertas"
                  className="block rounded-xl px-3 py-3 font-semibold text-brand hover:bg-surface"
                >
                  Ofertas
                </Link>
                {navigationCategories().map((category) => {
                  const full = categories.find((item) => item.slug === category.slug);
                  const isOpen = expanded === category.slug;
                  return (
                    <div key={category.slug} className="border-t border-line">
                      <div className="flex items-center">
                        <Link
                          href={`/${category.slug}`}
                          className="flex-1 rounded-xl px-3 py-3 font-semibold text-ink hover:text-brand"
                        >
                          {category.name}
                        </Link>
                        <button
                          type="button"
                          className="grid size-10 place-items-center"
                          aria-expanded={isOpen}
                          aria-label={`Subcategorias de ${category.name}`}
                          onClick={() => setExpanded(isOpen ? null : category.slug)}
                        >
                          <ChevronDown className={cn("size-4 transition", isOpen && "rotate-180")} />
                        </button>
                      </div>
                      {isOpen && full ? (
                        <ul className="pb-2 pl-6">
                          {full.subcategories.map((subcategory) => (
                            <li key={subcategory.slug}>
                              <Link
                                href={`/${category.slug}?sub=${subcategory.slug}`}
                                className="block py-1.5 text-sm text-muted hover:text-brand"
                              >
                                {subcategory.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  );
                })}
                <div className="mt-4 border-t border-line pt-3">
                  {[...institutionalLinks, ...helpLinks].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-sm text-muted hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <button
            type="button"
            className="min-w-0 flex-1 bg-ink/40"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />
        </div>
      ) : null}
    </div>
  );
}
