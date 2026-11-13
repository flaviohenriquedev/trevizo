import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { Container } from "@/components/ui/Container";
import { helpLinks, institutionalLinks, socialLinks } from "@/data/navigation";
import { store } from "@/data/store";

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <Container className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <Logo variant="footer" />
          <p className="mt-3 text-sm text-white/85">{store.tagline}</p>
        </div>

        <nav aria-label="Institucional">
          <h2 className="text-sm font-bold">Institucional</h2>
          <ul className="mt-3 space-y-2">
            {institutionalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Ajuda">
          <h2 className="text-sm font-bold">Ajuda</h2>
          <ul className="mt-3 space-y-2">
            {helpLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold">Redes Sociais</h2>
          <ul className="mt-3 flex gap-2">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="grid size-9 place-items-center rounded-full border border-white/30 transition hover:bg-white hover:text-brand"
                >
                  <SocialIcon name={link.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold">Receba nossas ofertas</h2>
          <NewsletterForm />
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-4 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>{store.copyright}</p>
          <p>Atendimento {store.phone}</p>
        </Container>
      </div>
    </footer>
  );
}
