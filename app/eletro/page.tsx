import { Suspense } from "react";
import type { Metadata } from "next";
import { CategoryPage } from "@/components/pages/CategoryPage";
import { CatalogSkeleton } from "@/components/ui/CatalogSkeleton";

export const metadata: Metadata = {
  title: "Eletro",
};

export default function Page() {
  return (
    <Suspense fallback={<CatalogSkeleton />}>
      <CategoryPage slug="eletro" />
    </Suspense>
  );
}
