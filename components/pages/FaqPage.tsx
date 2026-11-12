"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { PageIntro } from "@/components/pages/PageIntro";
import { faqItems } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function FaqPage() {
  const [open, setOpen] = useState(0);

  return (
    <PageIntro
      title="Perguntas Frequentes"
      description="Respostas rápidas sobre horário, entrega, ofertas e atendimento."
    >
      <div className="max-w-3xl divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-card">
        {faqItems.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                {item.question}
                <ChevronDown className={cn("size-4 shrink-0 transition", expanded && "rotate-180")} />
              </button>
              {expanded ? <p className="px-5 pb-4 text-sm text-muted">{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </PageIntro>
  );
}
