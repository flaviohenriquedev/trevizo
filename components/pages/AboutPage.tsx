import { PageIntro } from "@/components/pages/PageIntro";
import { store } from "@/data/store";

const highlights = [
  { title: "Perto de você", text: "Loja de bairro com o sortimento de uma rede, da hortifruti ao eletro." },
  { title: "Preço da semana", text: "Ofertas renovadas para a compra do mês caber no orçamento da família." },
  { title: "Entrega em Goiânia", text: "Receba em casa ou retire na Av. das Nações, no horário das lojas." },
];

export function AboutPage() {
  return (
    <PageIntro
      title="Sobre Nós"
      description="O Trevizo nasceu para deixar a compra do mercado mais simples: qualidade, variedade e economia no mesmo lugar."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
            <h2 className="text-lg font-bold text-brand">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 max-w-3xl space-y-3 text-ink/90">
        <p>
          Atendemos {store.city} com equipe de loja e entrega. O horário é {store.hours.toLowerCase()}, na{" "}
          {store.address}.
        </p>
        <p>
          Esta versão do site é uma apresentação ao cliente: catálogo, busca e carrinho funcionam no
          navegador, sem pagamento nem cadastro real.
        </p>
      </div>
    </PageIntro>
  );
}
