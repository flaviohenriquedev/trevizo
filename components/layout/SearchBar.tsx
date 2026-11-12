"use client";

import { Search } from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/cn";

export function SearchBar({
  className,
  autoFocus = false,
}: {
  className?: string;
  autoFocus?: boolean;
}) {
  const id = useId();

  return (
    <form action="/busca" role="search" className={cn("w-full", className)}>
      <label htmlFor={id} className="sr-only">
        Buscar produtos
      </label>
      <div className="flex h-12 items-center rounded-full border border-line bg-white pr-1.5 pl-5 shadow-sm transition focus-within:border-brand">
        <input
          id={id}
          name="q"
          type="search"
          autoFocus={autoFocus}
          placeholder="Buscar produtos..."
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          aria-label="Buscar"
          className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-white transition hover:bg-brand-dark"
        >
          <Search className="size-4" />
        </button>
      </div>
    </form>
  );
}
