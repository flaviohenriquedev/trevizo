import { ContactForm } from "@/components/pages/ContactForm";
import { PageIntro } from "@/components/pages/PageIntro";

const areas = ["Loja e caixa", "Açougue e hortifrúti", "Entrega", "Reposição"];

export function JobsPage() {
  return (
    <PageIntro
      title="Trabalhe Conosco"
      description="O Trevizo contrata para loja, açougue, hortifrúti e entrega em Goiânia."
    >
      <ul className="mb-6 flex flex-wrap gap-2">
        {areas.map((area) => (
          <li key={area} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand shadow-card">
            {area}
          </li>
        ))}
      </ul>
      <div className="max-w-xl rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6">
        <h2 className="mb-4 text-lg font-bold">Envie seu interesse</h2>
        <ContactForm submitLabel="Quero me candidatar" />
      </div>
    </PageIntro>
  );
}
