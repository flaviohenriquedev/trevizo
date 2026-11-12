import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPage } from "@/components/pages/ProductPage";
import { CatalogSkeleton } from "@/components/ui/CatalogSkeleton";
import { getProduct, products } from "@/data/products";

type RouteParams = { slug: string };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product?.name ?? "Produto",
    description: product ? `${product.name} — ${product.unit}` : undefined,
  };
}

async function ProductRoute({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  if (!getProduct(slug)) notFound();
  return <ProductPage slug={slug} />;
}

export default function Page({ params }: { params: Promise<RouteParams> }) {
  return (
    <Suspense fallback={<CatalogSkeleton />}>
      <ProductRoute params={params} />
    </Suspense>
  );
}
