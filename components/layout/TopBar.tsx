import Link from "next/link";
import { MapPin, User } from "lucide-react";
import { CartButton } from "@/components/layout/CartButton";
import { Container } from "@/components/ui/Container";
import { store } from "@/data/store";

export function TopBar() {
  return (
    <div className="border-b border-line">
      <Container className="flex h-12 items-center justify-between gap-2">
        <p className="flex min-w-0 items-center gap-1 text-[11px] text-muted sm:text-xs">
          <MapPin className="size-3 shrink-0 text-brand" aria-hidden />
          <span className="truncate whitespace-nowrap">
            Entrega para: <strong className="font-semibold text-brand">{store.city}</strong>
          </span>
        </p>
        <p className="hidden shrink-0 items-center gap-1 text-[11px] font-semibold whitespace-nowrap text-brand min-[680px]:flex">
          <MapPin className="size-3 shrink-0" aria-hidden />
          {store.promo}
        </p>
        <div className="flex shrink-0 items-center gap-0.5">
          <Link
            href="/entrar"
            className="inline-flex items-center gap-1 rounded-full px-1.5 py-1 text-[11px] font-semibold whitespace-nowrap text-brand transition hover:bg-brand/5 sm:px-2 sm:text-xs"
          >
            <User className="size-3 shrink-0" aria-hidden />
            <span className="hidden min-[420px]:inline">Entrar ou Cadastrar</span>
            <span className="min-[420px]:hidden">Entrar</span>
          </Link>
          <span className="hidden md:inline-flex">
            <CartButton />
          </span>
        </div>
      </Container>
    </div>
  );
}
