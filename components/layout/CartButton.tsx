"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export function CartButton({ className }: { className?: string }) {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      className={className}
      aria-label={`Abrir carrinho, ${count} ${count === 1 ? "item" : "itens"}`}
      onClick={openCart}
    >
      <span className="relative grid size-10 place-items-center rounded-full text-brand transition hover:bg-brand/5">
        <ShoppingCart className="size-5" />
        <span className="absolute -top-0.5 -right-0.5 grid min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold leading-5 text-white">
          {count > 99 ? "99+" : count}
        </span>
      </span>
    </button>
  );
}
