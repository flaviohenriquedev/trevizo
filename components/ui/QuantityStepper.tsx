"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export function QuantityStepper({
  value,
  onChange,
  label,
  min = 1,
  size = "md",
}: {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  size?: "sm" | "md";
}) {
  const compact = size === "sm";

  return (
    <div className="inline-flex items-center rounded-lg border border-line bg-white">
      <button
        type="button"
        className={cn(
          "grid place-items-center text-ink transition hover:text-brand",
          compact ? "size-7" : "size-9",
        )}
        aria-label={`Diminuir quantidade de ${label}`}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus className={compact ? "size-3.5" : "size-4"} />
      </button>
      <span
        className={cn(
          "text-center font-semibold",
          compact ? "min-w-6 text-xs" : "min-w-8 text-sm",
        )}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        className={cn(
          "grid place-items-center text-ink transition hover:text-brand",
          compact ? "size-7" : "size-9",
        )}
        aria-label={`Aumentar quantidade de ${label}`}
        onClick={() => onChange(value + 1)}
      >
        <Plus className={compact ? "size-3.5" : "size-4"} />
      </button>
    </div>
  );
}
