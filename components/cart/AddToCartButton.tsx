"use client";

import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/cn";

export function AddToCartButton({
  productId,
  quantity = 1,
  className,
}: {
  productId: string;
  quantity?: number;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        className,
      )}
      onClick={() => {
        addItem(productId, quantity);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1200);
      }}
    >
      <ShoppingCart className="size-4" aria-hidden />
      {added ? "Adicionado" : "Adicionar"}
    </button>
  );
}
