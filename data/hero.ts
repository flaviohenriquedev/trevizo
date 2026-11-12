import { photo } from "@/lib/images";

export type HeroSlide = {
  id: string;
  title: string;
  highlight: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "familia",
    title: "Tudo o que você precisa,",
    highlight: "pertinho de você!",
    subtitle: "Qualidade, variedade e economia em um só lugar.",
    cta: "Ver Ofertas",
    href: "/ofertas",
    image: photo("photo-1534723452862-4c874018d66d"),
    imageAlt: "Família fazendo compras no supermercado",
  },
  {
    id: "hortifruti",
    title: "Hortifrúti fresco,",
    highlight: "todos os dias.",
    subtitle: "Frutas, verduras e legumes selecionados para a sua mesa.",
    cta: "Ver hortifrúti",
    href: "/hortifruti",
    image: photo("photo-1610348725531-843dff563e2c"),
    imageAlt: "Frutas e verduras frescas",
  },
  {
    id: "entrega",
    title: "Receba em casa,",
    highlight: "com segurança.",
    subtitle: "Entrega rápida para Goiânia, no horário que você escolher.",
    cta: "Saiba mais",
    href: "/entrega",
    image: photo("photo-1604719312566-8912e9227c6a"),
    imageAlt: "Corredor de supermercado",
  },
];
