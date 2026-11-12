"use client";

import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { EmptyState } from "@/components/catalog/EmptyState";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { cn } from "@/lib/cn";

export function StorePage() {
  const [category, setCategory] = useState("todos");
  const visible = useMemo(
    () => (category === "todos" ? products : products.filter((item) => item.category === category)),
    [category],
  );

  return (
    <Container className="py-6 md:py-8">
      <Breadcrumb items={[{ label: "Loja" }]} />
      <h1 className="text-3xl font-extrabold text-ink">Loja</h1>
      <p className="mt-2 max-w-2xl text-muted">
        O sortimento Trevizo em um só lugar. Escolha um departamento e monte seu carrinho.
      </p>
      <div className="scroll-x -mx-4 mt-5 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {[{ slug: "todos", name: "Tudo" }, ...categories].map((item) => (
          <button
            key={item.slug}
            type="button"
            aria-pressed={category === item.slug}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
              category === item.slug
                ? "border-brand bg-brand text-white"
                : "border-line bg-white text-ink hover:border-brand",
            )}
            onClick={() => setCategory(item.slug)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <EmptyState title="Nada por aqui" description="Escolha outro departamento." href="/loja" action="Ver a loja" />
      ) : (
        <ProductGrid products={visible} />
      )}
    </Container>
  );
}
