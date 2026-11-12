import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/home/ProductCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Product } from "@/types/product";

export function ProductSection({
  id,
  title,
  subtitle,
  products,
  action,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  products: Product[];
  action?: { href: string; label: string };
}) {
  return (
    <section className="pt-8 md:pt-10" aria-labelledby={id}>
      <Container>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id={id} className="text-2xl font-extrabold text-ink sm:text-3xl">
              {title}
            </h2>
            {subtitle ? <p className="mt-1 text-muted">{subtitle}</p> : null}
          </div>
          {action ? (
            <Button href={action.href} variant="outline" className="w-fit">
              {action.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          ) : null}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
