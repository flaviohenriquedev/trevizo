import type { Metadata } from "next";
import { AuthPage } from "@/components/pages/AuthPage";

export const metadata: Metadata = { title: "Entrar" };

export default function Page() {
  return <AuthPage mode="login" />;
}
