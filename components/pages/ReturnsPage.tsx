import { PageIntro } from "@/components/pages/PageIntro";

const steps = [
  {
    title: "Guarde a nota",
    text: "Trocas de produto industrializado pedem a nota e a embalagem em até 7 dias.",
  },
  {
    title: "Hortifrúti e frios",
    text: "Itens perecíveis são analisados na loja no mesmo dia da compra ou da entrega.",
  },
  {
    title: "Como devolver",
    text: "Leve à loja da Av. das Nações ou fale com o atendimento para combinar a coleta.",
  },
];

export function ReturnsPage() {
  return (
    <PageIntro
      title="Trocas e Devoluções"
      description="Política de demonstração, no tom de uma rede de supermercados."
    >
      <ol className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
            <span className="grid size-8 place-items-center rounded-full bg-brand text-sm font-bold text-white">
              {index + 1}
            </span>
            <h2 className="mt-3 text-lg font-bold">{step.title}</h2>
            <p className="mt-2 text-sm text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </PageIntro>
  );
}
