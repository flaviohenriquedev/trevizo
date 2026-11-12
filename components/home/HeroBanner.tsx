"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroSlides } from "@/data/hero";
import { cn } from "@/lib/cn";

export function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = heroSlides[index];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <Container className="pt-4 md:pt-6">
      <section
        className="relative overflow-hidden rounded-3xl bg-brand text-white"
        aria-roledescription="carrossel"
        aria-label="Destaques"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid md:min-h-[420px] md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 md:py-14 md:pr-6">
            <h1 className="max-w-xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {slide.title}{" "}
              <span className="text-accent">{slide.highlight}</span>
            </h1>
            <p className="mt-4 max-w-md text-base text-white/90 sm:text-lg">{slide.subtitle}</p>
            <Button href={slide.href} variant="accent" className="mt-6 w-fit px-6">
              {slide.cta}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>

          <div className="relative min-h-56 md:min-h-full">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-brand to-transparent md:block" />
          </div>
        </div>

        <svg
          viewBox="0 0 160 420"
          className="pointer-events-none absolute top-0 right-[38%] hidden h-full w-40 text-accent md:block"
          aria-hidden
        >
          <path d="M150 0C40 80 20 220 130 420" fill="none" stroke="currentColor" strokeWidth="28" />
        </svg>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroSlides.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Mostrar banner ${itemIndex + 1}`}
              aria-current={itemIndex === index ? "true" : undefined}
              className={cn(
                "size-2.5 rounded-full transition",
                itemIndex === index ? "bg-accent" : "bg-white/80",
              )}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
