import { ProductGrid } from "@/components/catalog/ProductGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { offerProducts } from "@/data/products";

export function OffersPage() {
  const products = offerProducts();

  return (
    <Container className="py-6 md:py-8">
      <Breadcrumb items={[{ label: "Ofertas" }]} />
      <h1 className="text-3xl font-extrabold text-ink">Ofertas</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Os melhores preços para você economizar ainda mais. Valores de demonstração para apresentação.
      </p>
      <div className="mt-6">
        <ProductGrid products={products} />
      </div>
    </Container>
  );
}
