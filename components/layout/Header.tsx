import { CartButton } from "@/components/layout/CartButton";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navigation } from "@/components/layout/Navigation";
import { SearchBar } from "@/components/layout/SearchBar";
import { TopBar } from "@/components/layout/TopBar";
import { Container } from "@/components/ui/Container";

function HeaderDecor() {
  return (
    <div className="pointer-events-none absolute top-0 right-0 hidden h-28 w-56 overflow-hidden lg:block" aria-hidden>
      <svg viewBox="0 0 220 120" className="h-full w-full" preserveAspectRatio="none">
        <path d="M220 0C150 8 130 70 70 120H220V0Z" fill="#EC0000" />
        <path d="M220 0C180 28 190 78 130 120H220V0Z" fill="#0100A6" />
      </svg>
    </div>
  );
}

export function Header() {
  return (
    <header className="relative z-40 shrink-0 bg-white shadow-[0_8px_24px_rgba(21,26,53,0.04)]">
      <TopBar />
      <div className="relative">
        <HeaderDecor />
        <Container className="flex items-center gap-3 py-3 md:grid md:grid-cols-[11rem_minmax(0,1fr)_11rem] md:items-center md:gap-6 md:py-4">
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
      <Navigation />
    </header>
  );
}
