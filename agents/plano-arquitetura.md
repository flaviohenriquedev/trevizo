# Plano de arquitetura — Supermercado Trevizo

Documento de obediência para agentes. A home e as páginas internas seguem `agents/prompt-inicial.md` e o layout de `agents/modelo.png`.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- `lucide-react` para ícones
- `next/font`: Manrope
- `next/image` para imagens locais e remotas

## Identidade

- Azul `#0100A6` (`brand`), azul escuro `#000080` (`brand-dark`)
- Vermelho `#EC0000` (`accent`) para preço promocional, selo e CTA
- Branco `#FFFFFF` em cards e header
- Fundo `#F7F8FC` (`surface`), texto `#151A35` (`ink`), secundário `#687085` (`muted`), borda `#E8EAF2` (`line`)
- Container central: `max-w-[1240px]`, padding lateral responsivo
- Mobile first. Estados de hover e `focus-visible` em controles

## Logo

O arquivo original `public/assets/logo-trevizo.png` tem fundo transparente e wordmark branco (some no header branco). Não redesenhar o traço.

- Header (fundo branco): `public/assets/logo-trevizo-header.png` — o mesmo recorte, com o branco trocado pelo azul da marca
- Footer (fundo azul): `public/assets/logo-trevizo-light.png` — o mesmo recorte, wordmark branco
- Favicon: `public/assets/favicon.png` via `metadata.icons`
- Não usar os SVG padrão do Next (`file.svg`, `window.svg`, `vercel.svg`)

## Rolagem

O header fica fora da área que rola. O documento (`html`/`body`) não rola.

- `SiteShell` é uma coluna `h-dvh`
- `Header` é `shrink-0`
- O único scroll da página é o elemento `#site-scroll` (`overflow-y-auto`), que contém a página e o `Footer`
- Dropdown de categorias, menu mobile e drawer do carrinho rolam dentro do próprio painel (`overflow-y-auto`) e travam `#site-scroll` enquanto abertos
- A faixa de categorias no mobile rola na horizontal dentro de `CategorySection`

## Onde fica o código

A pasta `pages/` na raiz ativaria o Pages Router e conflitaria com o App Router. Componentes de página ficam em `components/pages/`.

Cada arquivo em `app/**/page.tsx` só exporta metadata e renderiza o componente importado. Não escrever UI de página direto na rota.

## Pastas

```
app/                         rotas finas
components/layout/           SiteShell, Header, TopBar, SearchBar, Navigation, Footer, NewsletterForm
components/home/             HeroBanner, CategoryCard, CategorySection, PromoBanner, PromotionalBanners, ProductCard, ProductSection, CallToAction
components/catalog/          ProductGrid, SubcategoryChips, EmptyState
components/cart/             CartProvider, CartDrawer, CartLine, AddToCartButton
components/pages/            páginas importadas pelas rotas
components/ui/               Button, Container, Price, DiscountBadge, QuantityStepper, Breadcrumb, CatalogSkeleton
data/                        products, categories, navigation, store, hero
hooks/useCart.ts
lib/                         cn, currency
types/                       product, category, cart
public/assets/               logo, favicon
```

Nomes de componentes em inglês, PascalCase. Textos de interface em português.

Não criar `pages/` na raiz nem `src/pages`: o Next.js trata essas pastas como Pages Router e entra em conflito com `app/`. Ícones de redes sociais ficam em `SocialIcon`, porque o pacote atual do Lucide não exporta marcas.

## Rotas

| Rota | Página | Origem no modelo |
| --- | --- | --- |
| `/` | `HomePage` | home |
| `/ofertas` | `OffersPage` | menu Ofertas e "Ver todas as ofertas" |
| `/loja` | `StorePage` | CTA "Ir para a loja" |
| `/hortifruti` `/carnes` `/bebidas` `/limpeza` `/mercearia` `/eletro` `/utilidades` | `CategoryPage` | menu |
| `/lanches` `/higiene` | `CategoryPage` | cards da home |
| `/produto/[slug]` | `ProductPage` | card de produto |
| `/busca` | `SearchPage` | campo "Buscar produtos..." |
| `/carrinho` | `CartPage` | carrinho |
| `/entrar` `/cadastrar` | `AuthPage` | "Entrar ou Cadastrar" |
| `/sobre` | `AboutPage` | Sobre Nós |
| `/trabalhe-conosco` | `JobsPage` | Trabalhe Conosco |
| `/contato` | `ContactPage` | Fale Conosco |
| `/perguntas-frequentes` | `FaqPage` | Perguntas Frequentes |
| `/trocas-e-devolucoes` | `ReturnsPage` | Trocas e Devoluções |
| `/formas-de-pagamento` | `PaymentsPage` | Formas de Pagamento |
| `/entrega` | `DeliveryPage` | banner "Saiba mais" |

"Todas as Categorias" é um dropdown (desktop) e um acordeão (mobile), com subcategorias. Não é uma rota própria.

## Dados e carrinho

Produtos, categorias e textos institucionais são mocks em `data/` para apresentação ao cliente. Fotos vêm do Unsplash (`images.unsplash.com`), liberado em `next.config.ts`.

`CartProvider` guarda linhas em `localStorage` (`trevizo-cart`): adicionar, remover, alterar quantidade, contador, subtotal e drawer lateral. Sem pagamento e sem backend.

## Home (ordem visual do modelo)

1. Top bar: entrega, frase promocional, entrar/cadastrar, carrinho
2. Header: logo à esquerda, busca central, botão azul
3. Menu horizontal
4. Hero com carrossel
5. Cards de categoria
6. Dois banners promocionais
7. Ofertas da Semana (5 produtos do prompt)
8. Faixa "Faça suas compras agora!"
9. Footer institucional + newsletter + faixa de direitos
