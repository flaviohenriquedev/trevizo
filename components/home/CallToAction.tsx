import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CallToAction() {
  return (
    <section className="py-8 md:py-10">
      <Container>
        <div className="relative flex flex-col gap-4 overflow-hidden rounded-3xl bg-brand px-5 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <ShoppingCart className="pointer-events-none absolute -right-4 -bottom-6 size-36 text-white/10" aria-hidden />
          <div className="relative flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/10">
              <ShoppingCart className="size-6" aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl">Faça suas compras agora!</h2>
              <p className="text-sm text-white/80">Rápido, fácil e seguro.</p>
            </div>
          </div>
          <Button href="/loja" variant="accent" className="relative w-fit">
            Ir para a loja
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
