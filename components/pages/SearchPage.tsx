"use client";

import { useSearchParams } from "next/navigation";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { EmptyState } from "@/components/catalog/EmptyState";
import { SearchBar } from "@/components/layout/SearchBar";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { searchProducts } from "@/data/products";

export function SearchPage() {
  const params = useSearchParams();
  const query = params.get("q")?.trim() ?? "";
  const results = searchProducts(query);

  return (
    <Container className="py-6 md:py-8">
      <Breadcrumb items={[{ label: "Busca" }]} />
      <h1 className="text-3xl font-extrabold text-ink">
        {query ? `Resultados para “${query}”` : "Buscar produtos"}
      </h1>
      <p className="mt-2 text-muted">
        {query
          ? `${results.length} ${results.length === 1 ? "produto encontrado" : "produtos encontrados"}.`
          : "Digite o nome de um produto para ver o sortimento."}
      </p>
      <SearchBar className="mt-5 max-w-xl" />
      <div className="mt-6">
        {!query ? null : results.length === 0 ? (
          <EmptyState
            title="Nenhum produto encontrado"
            description="Tente outro termo, como leite, arroz ou carne."
          />
        ) : (
          <ProductGrid products={results} />
        )}
      </div>
    </Container>
  );
}
