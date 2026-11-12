export type Subcategory = {
  slug: string;
  name: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  subcategories: Subcategory[];
  /** Ordem no menu. Ausente fica fora da barra. */
  navOrder?: number;
  /** Ordem na faixa da home. Ausente fica fora da faixa. */
  homeOrder?: number;
};
