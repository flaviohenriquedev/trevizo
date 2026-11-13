import type {Metadata} from "next";
import {Suspense} from "react";
import {Manrope} from "next/font/google";
import {CartDrawer} from "@/components/cart/CartDrawer";
import {CartProvider} from "@/components/cart/CartProvider";
import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {ScrollToTop} from "@/components/layout/ScrollToTop";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    title: {
        default: "Trevizo Supermercados",
        template: "%s | Trevizo",
    },
    description:
        "Supermercados Trevizo. Qualidade, variedade e economia em um só lugar. Ofertas da semana, hortifrúti, carnes e entrega em Goiânia.",
};

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
        <body className="h-full overflow-hidden font-sans text-ink">
        <CartProvider>
            <a
                href="#conteudo"
                className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
            >
                Pular para o conteúdo
            </a>
            <div className="flex h-dvh w-full flex-col">
                <Header/>
                <div id="site-scroll" className="min-h-0 w-full flex-1 overflow-y-auto">
                    <Suspense fallback={null}>
                        <ScrollToTop/>
                    </Suspense>
                    <main id="conteudo" tabIndex={-1} className="outline-none">
                        {children}
                    </main>
                    <Footer/>
                </div>
            </div>
            <CartDrawer/>
        </CartProvider>
        </body>
        </html>
    );
}
