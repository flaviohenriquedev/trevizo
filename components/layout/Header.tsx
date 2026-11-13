import { CartButton } from "@/components/layout/CartButton";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navigation } from "@/components/layout/Navigation";
import { SearchBar } from "@/components/layout/SearchBar";
import { TopBar } from "@/components/layout/TopBar";
import { Container } from "@/components/ui/Container";

function HeaderDecor() {
  return (
    <div className="pointer-events-none absolute top-0 right-0 z-0 hidden h-full w-80 overflow-hidden lg:block" aria-hidden>
      <svg viewBox="0 0 320 160" className="h-full w-full" preserveAspectRatio="xMaxYMin meet">
        <defs>
          <linearGradient id="trevizo-decor-fade" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="42%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <mask id="trevizo-decor-mask">
            <rect width="320" height="160" fill="url(#trevizo-decor-fade)" />
          </mask>
        </defs>
        <g mask="url(#trevizo-decor-mask)" opacity="0.9">
          <path d="M320 0C230 10 190 52 130 92C86 122 40 146 0 160H320V0Z" fill="#EC0000" />
          <path d="M320 0C250 26 240 68 176 100C130 124 72 148 8 168H320V0Z" fill="#0100A6" />
        </g>
      </svg>
    </div>
  );
}

export function Header() {
  return (
    <header className="relative z-40 w-full shrink-0 bg-white shadow-[0_8px_24px_rgba(21,26,53,0.04)]">
      <div className="relative overflow-hidden">
        <HeaderDecor />
        <div className="relative z-10">
        <TopBar />
        <Container className="flex items-center gap-3 py-4 md:grid md:grid-cols-[11rem_minmax(0,1fr)_11rem] md:items-center md:gap-6 md:py-5">
          <div className="flex items-center gap-2">
            <MobileMenu />
            <Logo />
          </div>
          <SearchBar className="hidden md:mx-auto md:block md:max-w-2xl" />
          <div className="ml-auto md:ml-0 md:justify-self-end">
            <CartButton className="md:hidden" />
          </div>
        </Container>
        <Container className="pb-3 md:hidden">
          <SearchBar />
        </Container>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
