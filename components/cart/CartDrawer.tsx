"use client";

import { ShoppingCart, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { CartLine } from "@/components/cart/CartLine";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { useScrollLock } from "@/hooks/useScrollLock";
import { formatBRL } from "@/lib/currency";

const ease = [0.22, 1, 0.36, 1] as const;

export function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, count } = useCart();
  const reduce = useReducedMotion();
  const [locked, setLocked] = useState(false);
  useScrollLock(locked);

  useEffect(() => {
    if (isOpen) setLocked(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeCart();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeCart, isOpen]);

  const transition = { duration: reduce ? 0 : 0.34, ease };

  return (
    <AnimatePresence onExitComplete={() => setLocked(false)}>
      {isOpen ? (
        <motion.div
          key="cart-drawer"
          className="fixed inset-0 z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={transition}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-ink/40"
            aria-label="Fechar carrinho"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            onClick={closeCart}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={transition}
          >
            <header className="flex items-center justify-between border-b border-line px-4 py-3">
              <div>
                <h2 id="cart-title" className="text-base font-bold text-ink">
                  Seu carrinho
                </h2>
                <p className="text-xs text-muted">
                  {count === 1 ? "1 item" : `${count} itens`}
                </p>
              </div>
              <button
                type="button"
                className="grid size-8 place-items-center rounded-full text-ink transition hover:bg-surface"
                aria-label="Fechar carrinho"
                onClick={closeCart}
              >
                <X className="size-4" />
              </button>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto px-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <span className="grid size-14 place-items-center rounded-full bg-surface text-brand">
                    <ShoppingCart className="size-6" />
                  </span>
                  <p className="mt-4 text-base font-bold">Seu carrinho está vazio</p>
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
              <footer className="border-t border-line px-4 py-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-muted">Subtotal</span>
                  <span className="text-base font-extrabold text-ink">{formatBRL(subtotal)}</span>
                </div>
                <p className="mb-3 text-xs text-muted">
                  Pagamento fica para a próxima etapa. Este resumo é uma demonstração.
                </p>
                <Button href="/carrinho" className="w-full" onClick={closeCart}>
                  Ver carrinho
                </Button>
              </footer>
            ) : null}
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
