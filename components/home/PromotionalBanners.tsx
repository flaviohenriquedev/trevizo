import { PromoBanner } from "@/components/home/PromoBanner";
import { Container } from "@/components/ui/Container";
import { photo } from "@/lib/images";

export function PromotionalBanners() {
  return (
    <section className="pt-6 md:pt-8" aria-label="Promoções">
      <Container className="grid gap-4 lg:grid-cols-2">
        <PromoBanner
          tone="brand"
          eyebrow="Ofertas"
          title="imperdíveis!"
          description="Economia de verdade para sua família."
          href="/ofertas"
          cta="Aproveite"
          image={photo("photo-1542838132-92c53300491e")}
          imageAlt="Carrinho cheio de compras"
        />
        <PromoBanner
          tone="light"
          eyebrow="Entrega rápida"
          title="e segura!"
          description="Receba suas compras no conforto de casa."
          href="/entrega"
          cta="Saiba mais"
          image={photo("photo-1601584115197-04ecc0da31d7")}
          imageAlt="Veículo de entrega"
        />
      </Container>
    </section>
  );
}
