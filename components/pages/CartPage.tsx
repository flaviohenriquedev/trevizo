"use client";

import { CartLine } from "@/components/cart/CartLine";
import { EmptyState } from "@/components/catalog/EmptyState";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { useCart } from "@/hooks/useCart";
import { formatBRL } from "@/lib/currency";

export function CartPage() {
  const { items, subtotal, count } = useCart();

  return (
    <Container className="py-6 md:py-8">
      <Breadcrumb items={[{ label: "Carrinho" }]} />
      <h1 className="text-3xl font-extrabold text-ink">Carrinho</h1>
      {items.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            title="Seu carrinho está vazio"
            description="Escolha os produtos das ofertas da semana e volte para revisar o pedido."
          />
        </div>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-3xl border border-line bg-white px-4 shadow-card sm:px-6">
            {items.map((item) => (
              <CartLine key={item.productId} item={item} />
            ))}
          </div>
          <aside className="h-fit rounded-3xl border border-line bg-white p-6 shadow-card">
            <h2 className="text-lg font-bold">Resumo</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">Itens</dt>
                <dd>{count}</dd>
              </div>
              <div className="flex justify-between text-base">
                <dt className="font-semibold">Subtotal</dt>
                <dd className="font-extrabold">{formatBRL(subtotal)}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-muted">
              O pagamento não faz parte desta etapa. O resumo mostra o carrinho funcional da demonstração.
            </p>
          </aside>
        </div>
      )}
    </Container>
  );
}
