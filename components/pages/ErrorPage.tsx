"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ErrorPage({ onRetry }: { onRetry: () => void }) {
  return (
    <Container className="py-20 text-center">
      <h1 className="text-3xl font-extrabold text-ink">Algo saiu do lugar</h1>
      <p className="mx-auto mt-2 max-w-md text-muted">
        Não foi possível abrir esta página. Tente de novo ou volte para as ofertas.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button onClick={onRetry}>Tentar de novo</Button>
        <Button href="/ofertas" variant="outline">
          Ver ofertas
        </Button>
      </div>
    </Container>
  );
}
