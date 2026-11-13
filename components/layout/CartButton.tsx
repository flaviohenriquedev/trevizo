"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/cn";

export function CartButton({ className }: { className?: string }) {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      className={cn("inline-flex items-center", className)}
      aria-label={`Abrir carrinho, ${count} ${count === 1 ? "item" : "itens"}`}
      onClick={openCart}
    >
      <span className="relative grid size-8 place-items-center rounded-full text-brand transition hover:bg-brand/5">
        <ShoppingCart className="size-4" />
        <span className="absolute -top-1 -right-1 grid min-w-4 place-items-center rounded-full bg-accent px-1 text-[10px] leading-4 font-bold text-white">
          {count > 99 ? "99+" : count}
        </span>
      </span>
    </button>
  );
}
