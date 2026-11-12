"use client";

import { Minus, Plus } from "lucide-react";

export function QuantityStepper({
  value,
  onChange,
  label,
  min = 1,
}: {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
}) {
  return (
    <div className="inline-flex items-center rounded-lg border border-line bg-white">
      <button
        type="button"
        className="grid size-9 place-items-center text-ink transition hover:text-brand"
        aria-label={`Diminuir quantidade de ${label}`}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus className="size-4" />
      </button>
      <span className="min-w-8 text-center text-sm font-semibold" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className="grid size-9 place-items-center text-ink transition hover:text-brand"
        aria-label={`Aumentar quantidade de ${label}`}
        onClick={() => onChange(value + 1)}
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
