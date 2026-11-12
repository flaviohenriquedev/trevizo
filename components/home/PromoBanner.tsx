import Image from "next/image";
import { ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function PromoBanner({
  tone,
  eyebrow,
  title,
  description,
  href,
  cta,
  image,
  imageAlt,
}: {
  tone: "brand" | "light";
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
}) {
  const brand = tone === "brand";

  return (
    <article
      className={cn(
        "relative flex min-h-60 overflow-hidden rounded-3xl",
        brand ? "bg-brand text-white" : "bg-white text-ink",
      )}
    >
      <div className="relative z-10 flex max-w-sm flex-col justify-center p-6 sm:p-8">
        <h3 className={cn("text-2xl font-extrabold leading-tight sm:text-3xl", brand ? "text-white" : "text-brand")}>
          {eyebrow ? (
            <>
              <span className="block">{eyebrow}</span>
              <span className="block">{title}</span>
            </>
          ) : (
            title
          )}
        </h3>
        <p className={cn("mt-2 text-sm sm:text-base", brand ? "text-white/85" : "text-muted")}>
          {description}
        </p>
        <Button href={href} variant="dark" className="mt-5 w-fit">
          {cta}
          <ArrowRight className="size-4" aria-hidden />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-0 z-0 w-[46%] sm:w-[42%]">
        <Image src={image} alt={imageAlt} fill sizes="40vw" className="object-cover object-center" />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent",
            brand ? "from-brand" : "from-white",
          )}
        />
      </div>
      {brand ? (
        <div className="pointer-events-none absolute top-6 right-24 z-10 hidden size-24 rotate-6 place-items-center rounded-2xl bg-accent text-white shadow-lg sm:grid">
          <Percent className="size-12" />
        </div>
      ) : null}
    </article>
  );
}
