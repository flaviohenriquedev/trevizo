import { Banknote, CreditCard, QrCode, Wallet } from "lucide-react";
import { PageIntro } from "@/components/pages/PageIntro";

const methods = [
  { icon: QrCode, title: "Pix", text: "Confirmação na hora, sem taxa para o cliente." },
  { icon: CreditCard, title: "Cartão de crédito", text: "Principais bandeiras, à vista ou parcelado na loja." },
  { icon: Wallet, title: "Cartão de débito", text: "Débito à vista no caixa e na entrega." },
  { icon: Banknote, title: "Vale-alimentação", text: "Vale-refeição e vale-alimentação aceitos no checkout da loja." },
];

export function PaymentsPage() {
  return (
    <PageIntro
      title="Formas de Pagamento"
      description="Meios previstos para a loja. O pagamento online ainda não está ligado nesta etapa."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {methods.map((method) => (
          <article key={method.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
            <method.icon className="size-6 text-brand" aria-hidden />
            <h2 className="mt-3 text-lg font-bold">{method.title}</h2>
            <p className="mt-2 text-sm text-muted">{method.text}</p>
          </article>
        ))}
      </div>
    </PageIntro>
  );
}
