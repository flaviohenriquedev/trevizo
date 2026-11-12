import { Button } from "@/components/ui/Button";

export function EmptyState({
  title,
  description,
  href = "/ofertas",
  action = "Ver ofertas",
}: {
  title: string;
  description: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-white px-6 py-16 text-center">
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-muted">{description}</p>
      <Button href={href} className="mt-6">
        {action}
      </Button>
    </div>
  );
}
