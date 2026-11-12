import type { Metadata } from "next";
import { StorePage } from "@/components/pages/StorePage";

export const metadata: Metadata = {
  title: "Loja",
};

export default function Page() {
  return <StorePage />;
}
