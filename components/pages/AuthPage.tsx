"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function AuthPage({ mode }: { mode: "login" | "register" }) {
  const register = mode === "register";
  const [sent, setSent] = useState(false);

  return (
    <Container className="py-8 md:py-12">
      <div className="mx-auto max-w-md rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
        <h1 className="text-2xl font-extrabold text-ink">
          {register ? "Criar conta" : "Entrar"}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {register
            ? "Cadastre-se para acompanhar pedidos quando a loja estiver no ar."
            : "Acesse sua conta Trevizo."}
        </p>
        {sent ? (
          <p className="mt-6 rounded-2xl bg-brand/5 px-4 py-3 text-sm font-medium text-brand" role="status">
            {register ? "Cadastro" : "Acesso"} de demonstração registrado. Nenhum dado foi enviado.
          </p>
        ) : (
          <form
            className="mt-6 grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            {register ? (
              <label className="grid gap-1 text-sm font-semibold">
                Nome
                <input required className="h-11 rounded-xl border border-line px-3 font-normal outline-none focus:border-brand" />
              </label>
            ) : null}
            <label className="grid gap-1 text-sm font-semibold">
              E-mail
              <input required type="email" className="h-11 rounded-xl border border-line px-3 font-normal outline-none focus:border-brand" />
            </label>
            <label className="grid gap-1 text-sm font-semibold">
              Senha
              <input required type="password" minLength={6} className="h-11 rounded-xl border border-line px-3 font-normal outline-none focus:border-brand" />
            </label>
            <Button type="submit">{register ? "Cadastrar" : "Entrar"}</Button>
          </form>
        )}
        <p className="mt-5 text-sm text-muted">
          {register ? "Já tem conta?" : "Ainda não tem conta?"}{" "}
          <Link href={register ? "/entrar" : "/cadastrar"} className="font-semibold text-brand hover:underline">
            {register ? "Entrar" : "Cadastrar"}
          </Link>
        </p>
      </div>
    </Container>
  );
}
