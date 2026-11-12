import type { Metadata } from "next";
import { ReturnsPage } from "@/components/pages/ReturnsPage";

export const metadata: Metadata = {
  title: "Trocas e Devoluções",
};

export default function Page() {
  return <ReturnsPage />;
}
