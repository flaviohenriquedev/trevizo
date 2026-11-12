import { Clock, MapPin, Truck } from "lucide-react";
import { PageIntro } from "@/components/pages/PageIntro";
import { store } from "@/data/store";

const points = [
  { icon: Truck, title: "Entrega no dia", text: "Pedidos feitos até 16h podem sair na mesma faixa, conforme a região." },
  { icon: MapPin, title: store.city, text: "A cobertura desta demonstração é a capital. O CEP confirma taxa e prazo." },
  { icon: Clock, title: "Pedido mínimo", text: "R$ 50 para entrega. Acima de R$ 150, frete promocional na região central." },
];

export function DeliveryPage() {
  return (
    <PageIntro
      title="Entrega rápida e segura"
      description="Receba suas compras no conforto de casa, com a mesma equipe que atende a loja."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {points.map((point) => (
          <article key={point.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
            <point.icon className="size-6 text-brand" aria-hidden />
            <h2 className="mt-3 text-lg font-bold">{point.title}</h2>
            <p className="mt-2 text-sm text-muted">{point.text}</p>
          </article>
        ))}
      </div>
    </PageIntro>
  );
}
