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
    <article className="flex gap-3 border-b border-line py-4">
      <Link
        href={`/produto/${product.slug}`}
        className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-surface"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="80px"
          className="object-cover"
        />
      </Link>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link href={`/produto/${product.slug}`} className="font-semibold text-ink hover:text-brand">
              {product.name}
            </Link>
            <p className="text-sm text-muted">{product.unit}</p>
          </div>
          <button
            type="button"
            className="grid size-8 place-items-center rounded-full text-muted transition hover:bg-accent/10 hover:text-accent"
            aria-label={`Remover ${product.name}`}
            onClick={() => removeItem(product.id)}
          >
            <Trash2 className="size-4" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <QuantityStepper
            value={quantity}
            label={product.name}
            min={0}
            onChange={(next) => setQuantity(product.id, next)}
          />
          <p className="font-bold text-ink">{formatBRL(product.price * quantity)}</p>
        </div>
      </div>
    </article>
  );
}
