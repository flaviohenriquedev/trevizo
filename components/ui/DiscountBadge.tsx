export function DiscountBadge({ value }: { value: number }) {
  if (value <= 0) return null;

  return (
    <span className="absolute top-2 left-2 z-10 rounded-md bg-accent px-1.5 py-0.5 text-[11px] font-bold text-white">
      -{value}%
    </span>
  );
}
