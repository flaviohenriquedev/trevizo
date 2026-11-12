import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
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
  icons: {
    icon: [{ url: "/assets/favicon.png", type: "image/png" }],
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <body className="h-full overflow-hidden font-sans text-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
