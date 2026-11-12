"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "invalid">("idle");

  return (
    <form
      className="mt-3"
      onSubmit={(event) => {
        event.preventDefault();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setStatus(valid ? "success" : "invalid");
      }}
    >
      <div className="flex items-center rounded-full border border-white/25 bg-white/10 pr-1 pl-4">
        <label htmlFor="newsletter-email" className="sr-only">
          Seu e-mail
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          placeholder="Seu e-mail"
          onChange={(event) => {
            setEmail(event.target.value);
            setStatus("idle");
          }}
          className="h-11 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/70"
        />
        <button
          type="submit"
          aria-label="Inscrever e-mail"
          className="grid size-9 place-items-center rounded-full bg-accent text-white transition hover:bg-[#c40000]"
        >
          <Send className="size-4" />
        </button>
      </div>
      <p className="mt-2 min-h-5 text-xs text-white/80" role="status">
        {status === "success" ? "Inscrição registrada nesta demonstração." : null}
        {status === "invalid" ? "Informe um e-mail válido." : null}
      </p>
    </form>
  );
}
