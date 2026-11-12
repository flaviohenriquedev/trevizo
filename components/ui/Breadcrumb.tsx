import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({
  items,
}: {
  items: Array<{ href?: string; label: string }>;
}) {
  return (
    <nav aria-label="Você está em" className="mb-4 flex flex-wrap items-center gap-1 text-sm text-muted">
      <Link href="/" className="transition hover:text-brand">
        Início
      </Link>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-1">
          <ChevronRight className="size-3.5" aria-hidden />
          {item.href ? (
            <Link href={item.href} className="transition hover:text-brand">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-ink">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
