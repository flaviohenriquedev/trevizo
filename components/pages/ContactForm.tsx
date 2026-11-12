"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const fields = [
  { name: "name", label: "Nome", type: "text" },
  { name: "email", label: "E-mail", type: "email" },
  { name: "phone", label: "Telefone", type: "tel" },
] as const;

export function ContactForm({ submitLabel }: { submitLabel: string }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="rounded-2xl bg-brand/5 px-4 py-3 text-sm font-medium text-brand" role="status">
        Mensagem registrada nesta demonstração. Nenhum dado foi enviado a um servidor.
      </p>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {fields.map((field) => (
        <label key={field.name} className="grid gap-1 text-sm font-semibold text-ink">
          {field.label}
          <input
            required
            name={field.name}
            type={field.type}
            className="h-11 rounded-xl border border-line bg-white px-3 font-normal outline-none focus:border-brand"
          />
        </label>
      ))}
      <label className="grid gap-1 text-sm font-semibold text-ink">
        Mensagem
        <textarea
          required
          name="message"
          rows={5}
          className="rounded-xl border border-line bg-white px-3 py-2 font-normal outline-none focus:border-brand"
        />
      </label>
      <Button type="submit" className="w-fit">
        {submitLabel}
      </Button>
    </form>
  );
}
