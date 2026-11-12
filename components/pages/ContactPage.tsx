import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/pages/ContactForm";
import { PageIntro } from "@/components/pages/PageIntro";
import { store } from "@/data/store";

const channels = [
  { icon: MapPin, label: "Loja", value: store.address },
  { icon: Phone, label: "Telefone", value: store.phone },
  { icon: Mail, label: "E-mail", value: store.email },
];

export function ContactPage() {
  return (
    <PageIntro
      title="Fale Conosco"
      description="Dúvidas sobre pedido, entrega ou produtos. O atendimento segue o horário das lojas."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <ul className="space-y-3">
          {channels.map((channel) => (
            <li key={channel.label} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
              <channel.icon className="mt-0.5 size-5 text-brand" aria-hidden />
              <div>
                <p className="text-sm font-bold">{channel.label}</p>
                <p className="text-sm text-muted">{channel.value}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6">
          <ContactForm submitLabel="Enviar mensagem" />
        </div>
      </div>
    </PageIntro>
  );
}
