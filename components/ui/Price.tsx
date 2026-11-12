import { formatBRL } from "@/lib/currency";
import { cn } from "@/lib/cn";

export function Price({
  price,
  originalPrice,
  size = "md",
}: {
  price: number;
  originalPrice?: number;
  size?: "md" | "lg";
}) {
  const promotional = Boolean(originalPrice && originalPrice > price);

  return (
    <div>
      {promotional ? (
        <p className="text-sm text-muted line-through">{formatBRL(originalPrice ?? 0)}</p>
      ) : null}
      <p
        className={cn(
          "font-extrabold leading-tight",
          size === "lg" ? "text-3xl" : "text-xl",
          promotional ? "text-accent" : "text-ink",
        )}
      >
        {formatBRL(price)}
      </p>
    </div>
  );
}
