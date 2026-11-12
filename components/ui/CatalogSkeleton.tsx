import { Container } from "@/components/ui/Container";

export function CatalogSkeleton() {
  return (
    <Container className="py-8">
      <div className="h-8 w-56 animate-pulse rounded-lg bg-line" />
      <div className="mt-3 h-4 w-80 max-w-full animate-pulse rounded bg-line" />
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="overflow-hidden rounded-2xl border border-line bg-white">
            <div className="aspect-square animate-pulse bg-line/70" />
            <div className="space-y-2 p-4">
              <div className="h-4 w-3/4 animate-pulse rounded bg-line" />
              <div className="h-3 w-1/3 animate-pulse rounded bg-line" />
              <div className="h-6 w-1/2 animate-pulse rounded bg-line" />
              <div className="h-10 animate-pulse rounded-lg bg-line" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
