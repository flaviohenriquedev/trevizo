import { CallToAction } from "@/components/home/CallToAction";
import { CategorySection } from "@/components/home/CategorySection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { ProductSection } from "@/components/home/ProductSection";
import { PromotionalBanners } from "@/components/home/PromotionalBanners";
import { weeklyOffers } from "@/data/products";

export function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategorySection />
      <PromotionalBanners />
      <ProductSection
        id="ofertas-da-semana"
        title="Ofertas da Semana"
        subtitle="Os melhores preços para você economizar ainda mais!"
        products={weeklyOffers()}
        action={{ href: "/ofertas", label: "Ver todas as ofertas" }}
      />
      <CallToAction />
    </>
  );
}
