import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function NotFoundPage() {
  return (
    <Container className="py-20 text-center">
      <p className="text-sm font-bold tracking-wide text-brand">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-ink">Página não encontrada</h1>
      <p className="mx-auto mt-2 max-w-md text-muted">
        Esse corredor não existe. Volte para a home ou veja as ofertas da semana.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button href="/">Ir para o início</Button>
        <Button href="/ofertas" variant="outline">
          Ver ofertas
        </Button>
      </div>
    </Container>
  );
}
