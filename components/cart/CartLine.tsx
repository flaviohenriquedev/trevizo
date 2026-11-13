"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { useCart } from "@/hooks/useCart";
import { formatBRL } from "@/lib/currency";
import type { CartItem } from "@/components/cart/CartProvider";

export function CartLine({ item }: { item: CartItem }) {
  const { setQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <article className="grid grid-cols-[3.25rem_minmax(0,1fr)] items-center gap-3 border-b border-line py-3 last:border-b-0">
      <Link
        href={`/produto/${product.slug}`}
        className="relative size-[3.25rem] overflow-hidden rounded-lg border border-line bg-white"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="52px"
          className="object-contain p-1"
        />
      </Link>
      <div className="flex min-w-0 flex-col gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link
              href={`/produto/${product.slug}`}
              className="line-clamp-2 text-sm leading-tight font-semibold text-ink hover:text-brand"
            >
              {product.name}
            </Link>
            <p className="mt-0.5 text-xs text-muted">{product.unit}</p>
          </div>
          <button
            type="button"
            className="grid size-7 shrink-0 place-items-center rounded-full text-muted transition hover:bg-accent/10 hover:text-accent"
            aria-label={`Remover ${product.name}`}
            onClick={() => removeItem(product.id)}
          >
            <Trash2 className="size-3.5" />
          </button>
        </div>
        <div className="flex items-center justify-between gap-2">
          <QuantityStepper
            size="sm"
            value={quantity}
            label={product.name}
            min={0}
            onChange={(next) => setQuantity(product.id, next)}
          />
          <p className="text-sm font-bold text-ink tabular-nums">
            {formatBRL(product.price * quantity)}
          </p>
        </div>
      </div>
    </article>
  );
}
