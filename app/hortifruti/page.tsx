import { Suspense } from "react";
import type { Metadata } from "next";
import { CategoryPage } from "@/components/pages/CategoryPage";
import { CatalogSkeleton } from "@/components/ui/CatalogSkeleton";

export const metadata: Metadata = {
  title: "Hortifrúti",
};

export default function Page() {
  return (
    <Suspense fallback={<CatalogSkeleton />}>
      <CategoryPage slug="hortifruti" />
    </Suspense>
  );
}
