import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function CategoryCard({
  href,
  name,
  image,
  imageAlt,
  className,
}: {
  href: string;
  name: string;
  image: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center rounded-2xl border border-line bg-white px-3 py-4 text-center shadow-card transition hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <span className="relative size-16 sm:size-20">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="80px"
          className="object-contain transition duration-300 group-hover:scale-105"
        />
      </span>
      <span className="mt-2 text-sm font-semibold text-ink">{name}</span>
    </Link>
  );
}
