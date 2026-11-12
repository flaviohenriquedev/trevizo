import { photo } from "@/lib/images";
import type { Category } from "@/types/category";

export const categories: Category[] = [
  {
    slug: "hortifruti",
    name: "Hortifrúti",
    description: "Frutas, verduras e legumes frescos, escolhidos todos os dias.",
    image: photo("photo-1560806887-1e4cd0b6cbd6"),
    imageAlt: "Maçã vermelha",
    navOrder: 1,
    homeOrder: 1,
    subcategories: [
      { slug: "frutas", name: "Frutas" },
      { slug: "verduras", name: "Verduras" },
      { slug: "legumes", name: "Legumes" },
      { slug: "organicos", name: "Orgânicos" },
    ],
  },
  {
    slug: "carnes",
    name: "Carnes",
    description: "Açougue com cortes bovinos, aves, suínos e peixes.",
    image: photo("photo-1603048297172-c92544798d5a"),
    imageAlt: "Corte bovino fresco",
    navOrder: 2,
    homeOrder: 2,
    subcategories: [
      { slug: "bovinas", name: "Bovinas" },
      { slug: "aves", name: "Aves" },
      { slug: "suinas", name: "Suínas" },
      { slug: "peixes", name: "Peixes" },
    ],
  },
  {
    slug: "bebidas",
    name: "Bebidas",
    description: "Refrigerantes, sucos, cervejas e águas para todos os momentos.",
    image: photo("photo-1608270586620-248524c67de9"),
    imageAlt: "Garrafas de cerveja",
    navOrder: 3,
    homeOrder: 3,
    subcategories: [
      { slug: "refrigerantes", name: "Refrigerantes" },
      { slug: "sucos", name: "Sucos" },
      { slug: "cervejas", name: "Cervejas" },
      { slug: "aguas", name: "Águas" },
    ],
  },
  {
    slug: "limpeza",
    name: "Limpeza",
    description: "Tudo para deixar a casa, a cozinha e as roupas impecáveis.",
    image: photo("photo-1563453392212-326f5e854473"),
    imageAlt: "Produtos de limpeza",
    navOrder: 4,
    homeOrder: 4,
    subcategories: [
      { slug: "roupas", name: "Roupas" },
      { slug: "casa", name: "Casa" },
      { slug: "cozinha", name: "Cozinha" },
      { slug: "descartaveis", name: "Descartáveis" },
    ],
  },
  {
    slug: "mercearia",
    name: "Mercearia",
    description: "O básico da despensa, com preço justo e marcas conhecidas.",
    image: photo("photo-1621939514649-280e2ee25f60"),
    imageAlt: "Snacks de mercearia",
    navOrder: 5,
    homeOrder: 5,
    subcategories: [
      { slug: "arroz-e-feijao", name: "Arroz e feijão" },
      { slug: "massas", name: "Massas" },
      { slug: "oleos", name: "Óleos" },
      { slug: "laticinios", name: "Laticínios" },
    ],
  },
  {
    slug: "lanches",
    name: "Lanches",
    description: "Salgadinhos, biscoitos e chocolates para a hora do lanche.",
    image: photo("photo-1558961363-fa8fdf82db35"),
    imageAlt: "Biscoitos e lanches",
    homeOrder: 6,
    subcategories: [
      { slug: "salgadinhos", name: "Salgadinhos" },
      { slug: "biscoitos", name: "Biscoitos" },
      { slug: "chocolates", name: "Chocolates" },
    ],
  },
  {
    slug: "higiene",
    name: "Higiene",
    description: "Cuidados para cabelo, corpo e boca de toda a família.",
    image: photo("photo-1556228720-195a672e8a03"),
    imageAlt: "Frascos de higiene pessoal",
    homeOrder: 7,
    subcategories: [
      { slug: "cabelo", name: "Cabelo" },
      { slug: "corpo", name: "Corpo" },
      { slug: "bucal", name: "Bucal" },
    ],
  },
  {
    slug: "eletro",
    name: "Eletro",
    description: "Pequenos eletrodomésticos, pilhas e iluminação.",
    image: photo("photo-1570222094114-d054a817e56b"),
    imageAlt: "Eletrodoméstico de cozinha",
    navOrder: 6,
    subcategories: [
      { slug: "pequenos-eletros", name: "Pequenos eletros" },
      { slug: "pilhas", name: "Pilhas" },
      { slug: "lampadas", name: "Lâmpadas" },
    ],
  },
  {
    slug: "utilidades",
    name: "Utilidades",
    description: "Panelas, utensílios e organização para o dia a dia.",
    image: photo("photo-1556911220-bff31c812dba"),
    imageAlt: "Panela de cozinha",
    navOrder: 7,
    homeOrder: 8,
    subcategories: [
      { slug: "panelas", name: "Panelas" },
      { slug: "utensilios", name: "Utensílios" },
      { slug: "organizacao", name: "Organização" },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function navigationCategories() {
  return categories
    .filter((category) => category.navOrder !== undefined)
    .sort((a, b) => (a.navOrder ?? 0) - (b.navOrder ?? 0));
}

export function homeCategories() {
  return categories
    .filter((category) => category.homeOrder !== undefined)
    .sort((a, b) => (a.homeOrder ?? 0) - (b.homeOrder ?? 0));
}
