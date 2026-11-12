export type Product = {
  id: string;
  slug: string;
  name: string;
  unit: string;
  price: number;
  originalPrice?: number;
  /** Selo exibido no card. Quando omitido, o desconto é calculado pelos preços. */
  discount?: number;
  image: string;
  imageAlt: string;
  category: string;
  subcategory: string;
  featured?: boolean;
};

export function discountOf(product: Product) {
  if (product.discount) return product.discount;
  if (!product.originalPrice || product.originalPrice <= product.price) return 0;
  return Math.round((1 - product.price / product.originalPrice) * 100);
}
