import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { DiscountBadge } from "@/components/ui/DiscountBadge";
import { Price } from "@/components/ui/Price";
import { discountOf, type Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-1.5 shadow-card transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative">
        <Link
          href={`/produto/${product.slug}`}
          className="relative block aspect-square overflow-hidden rounded-xl border border-line bg-white"
        >
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 50vw, 20vw"
            className="object-contain p-2"
          />
        </Link>
        <DiscountBadge value={discountOf(product)} />
      </div>
      <div className="mt-2 flex flex-1 flex-col px-1.5 pb-1.5">
        <h3 className="font-semibold text-ink">
          <Link href={`/produto/${product.slug}`} className="hover:text-brand">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted">{product.unit}</p>
        <div className="mt-2">
          <Price price={product.price} originalPrice={product.originalPrice} />
        </div>
        <div className="mt-auto pt-2">
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </article>
  );
}
