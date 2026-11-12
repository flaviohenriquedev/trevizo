import type { Metadata } from "next";
import { DeliveryPage } from "@/components/pages/DeliveryPage";

export const metadata: Metadata = {
  title: "Entrega",
};

export default function Page() {
  return <DeliveryPage />;
}
