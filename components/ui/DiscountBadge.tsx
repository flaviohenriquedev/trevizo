export function DiscountBadge({ value }: { value: number }) {
  if (value <= 0) return null;

  return (
    <span className="absolute top-3 left-3 z-10 rounded-md bg-accent px-2 py-1 text-xs font-bold text-white">
      -{value}%
    </span>
  );
}
