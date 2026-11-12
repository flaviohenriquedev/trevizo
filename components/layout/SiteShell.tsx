"use client";

import { Suspense } from "react";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        onClick={(event) => {
          const target = document.getElementById("conteudo");
          if (!target) return;
          event.preventDefault();
          target.focus();
        }}
      >
        Pular para o conteúdo
      </a>
      <div className="flex h-dvh flex-col">
        <Header />
        <div id="site-scroll" className="min-h-0 flex-1 overflow-y-auto">
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          <main id="conteudo" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </div>
      </div>
      <CartDrawer />
    </CartProvider>
  );
}
