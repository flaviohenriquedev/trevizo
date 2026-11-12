import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  variant = "header",
  className,
}: {
  variant?: "header" | "footer";
  className?: string;
}) {
  const light = variant === "footer";

  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)} aria-label="Trevizo, página inicial">
      <Image
        src={light ? "/assets/logo-trevizo-light.png" : "/assets/logo-trevizo-header.png"}
        alt="Trevizo"
        width={1684}
        height={572}
        priority={variant === "header"}
        className={cn("w-auto", light ? "h-12" : "h-10 sm:h-12")}
        style={{ width: "auto" }}
      />
    </Link>
  );
}
