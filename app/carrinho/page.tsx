import type { Metadata } from "next";
import { CartPage } from "@/components/pages/CartPage";

export const metadata: Metadata = {
  title: "Carrinho",
};

export default function Page() {
  return <CartPage />;
}
