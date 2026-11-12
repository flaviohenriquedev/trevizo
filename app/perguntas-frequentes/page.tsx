import type { Metadata } from "next";
import { FaqPage } from "@/components/pages/FaqPage";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
};

export default function Page() {
  return <FaqPage />;
}
