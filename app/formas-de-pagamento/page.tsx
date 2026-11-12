import type { Metadata } from "next";
import { PaymentsPage } from "@/components/pages/PaymentsPage";

export const metadata: Metadata = {
  title: "Formas de Pagamento",
};

export default function Page() {
  return <PaymentsPage />;
}
