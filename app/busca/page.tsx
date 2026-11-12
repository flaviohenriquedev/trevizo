import { Suspense } from "react";
import type { Metadata } from "next";
import { SearchPage } from "@/components/pages/SearchPage";
import { CatalogSkeleton } from "@/components/ui/CatalogSkeleton";

export const metadata: Metadata = { title: "Busca" };

export default function Page() {
  return (
    <Suspense fallback={<CatalogSkeleton />}>
      <SearchPage />
    </Suspense>
  );
}
