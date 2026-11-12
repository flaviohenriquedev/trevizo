import type { Metadata } from "next";
import { OffersPage } from "@/components/pages/OffersPage";

export const metadata: Metadata = {
  title: "Ofertas",
};

export default function Page() {
  return <OffersPage />;
}
