import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductSection } from "@/components/home/ProductSection";
import { ProductPurchase } from "@/components/pages/ProductPurchase";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { DiscountBadge } from "@/components/ui/DiscountBadge";
import { Price } from "@/components/ui/Price";
import { getCategory } from "@/data/categories";
import { getProduct, relatedProducts } from "@/data/products";
import { discountOf } from "@/types/product";

export function ProductPage({ slug }: { slug: string }) {
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);

  return (
    <>
      <Container className="py-6 md:py-8">
        <Breadcrumb
          items={[
            ...(category ? [{ href: `/${category.slug}`, label: category.name }] : []),
            { label: product.name },
          ]}
        />
        <div className="grid items-start gap-6 rounded-3xl border border-line bg-white p-4 shadow-card md:grid-cols-2 md:p-8">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
            <DiscountBadge value={discountOf(product)} />
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-6"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-brand">{category?.name}</p>
            <h1 className="mt-1 text-3xl font-extrabold text-ink">{product.name}</h1>
            <p className="mt-1 text-muted">{product.unit}</p>
            <div className="mt-4">
              <Price price={product.price} originalPrice={product.originalPrice} size="lg" />
            </div>
            <p className="mt-4 max-w-md text-muted">
              {product.name} ({product.unit}) do sortimento Trevizo. Preço de demonstração para
              apresentação ao cliente, sujeito ao estoque da loja.
            </p>
            <ProductPurchase productId={product.id} name={product.name} />
          </div>
        </div>
      </Container>
      <ProductSection
        id="relacionados"
        title="Você também pode gostar"
        products={relatedProducts(product)}
      />
    </>
  );
}
