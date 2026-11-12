"use client";

import { ShoppingCart, X } from "lucide-react";
import { CartLine } from "@/components/cart/CartLine";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { useScrollLock } from "@/hooks/useScrollLock";
import { formatBRL } from "@/lib/currency";

export function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, count } = useCart();
  useScrollLock(isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Fechar carrinho"
        onClick={closeCart}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <h2 id="cart-title" className="text-lg font-bold text-ink">
              Seu carrinho
            </h2>
            <p className="text-sm text-muted">
              {count === 1 ? "1 item" : `${count} itens`}
            </p>
          </div>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-ink transition hover:bg-surface"
            aria-label="Fechar carrinho"
            onClick={closeCart}
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <span className="grid size-16 place-items-center rounded-full bg-surface text-brand">
                <ShoppingCart className="size-7" />
              </span>
              <p className="mt-4 text-lg font-bold">Seu carrinho está vazio</p>
              <p className="mt-1 text-sm text-muted">
                Adicione produtos das ofertas da semana.
              </p>
              <Button href="/ofertas" className="mt-5" onClick={closeCart}>
                Ver ofertas
              </Button>
            </div>
          ) : (
            items.map((item) => <CartLine key={item.productId} item={item} />)
          )}
        </div>

        {items.length > 0 ? (
          <footer className="border-t border-line px-5 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-muted">Subtotal</span>
              <span className="text-xl font-extrabold text-ink">{formatBRL(subtotal)}</span>
            </div>
            <p className="mb-4 text-xs text-muted">
              Pagamento fica para a próxima etapa. Este resumo é uma demonstração.
            </p>
            <Button href="/carrinho" className="w-full" onClick={closeCart}>
              Ver carrinho
            </Button>
          </footer>
        ) : null}
      </aside>
    </div>
  );
}
