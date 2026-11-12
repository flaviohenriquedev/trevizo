import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Trevizo Supermercados" },
  description: "Tudo o que você precisa, pertinho de você.",
};

export default function Page() {
  return <HomePage />;
}
