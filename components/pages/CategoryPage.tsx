"use client";

import { useSearchParams } from "next/navigation";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { EmptyState } from "@/components/catalog/EmptyState";
import { SubcategoryChips } from "@/components/catalog/SubcategoryChips";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { getCategory } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { NotFoundPage } from "@/components/pages/NotFoundPage";

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug);
  const params = useSearchParams();
  const sub = params.get("sub") ?? "todos";

  if (!category) return <NotFoundPage />;

  const products = productsByCategory(slug).filter(
    (product) => sub === "todos" || product.subcategory === sub,
  );

  return (
    <Container className="pt-6 pb-4 md:pt-8">
      <Breadcrumb items={[{ label: category.name }]} />
      <h1 className="text-3xl font-extrabold text-ink">{category.name}</h1>
      <p className="mt-2 max-w-2xl text-muted">{category.description}</p>
      <div className="mt-5">
        <SubcategoryChips
          baseHref={`/${category.slug}`}
          subcategories={category.subcategories}
          active={sub}
        />
      </div>
      {products.length === 0 ? (
        <EmptyState
          title="Nenhum item nesta seleção"
          description="Escolha outra subcategoria ou veja o departamento completo."
          href={`/${category.slug}`}
          action="Ver tudo"
        />
      ) : (
        <ProductGrid products={products} />
      )}
    </Container>
  );
}
