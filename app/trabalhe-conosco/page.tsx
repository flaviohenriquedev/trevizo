import type { Metadata } from "next";
import { JobsPage } from "@/components/pages/JobsPage";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
};

export default function Page() {
  return <JobsPage />;
}
