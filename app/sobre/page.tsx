import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Sobre Nós",
};

export default function Page() {
  return <AboutPage />;
}
