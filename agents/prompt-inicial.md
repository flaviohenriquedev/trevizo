# Projeto: Supermercado Trevizo — E-commerce

Desenvolva um site moderno, profissional e responsivo para o supermercado **Trevizo**, seguindo fielmente o conceito visual da referência apresentada.

O projeto deve ter aparência de um e-commerce de supermercado de alto padrão, com experiência de compra intuitiva, excelente hierarquia visual e identidade de marca consistente.

## 1. Tecnologias

- Next.js com App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Lucide React para ícones.
- Componentes reutilizáveis.
- Estrutura organizada e escalável.

## 2. Identidade visual

Utilizar obrigatoriamente a paleta:

- Azul principal: #0100A6
- Vermelho: #EC0000
- Branco: #FFFFFF

Cores auxiliares:
- Fundo: #F7F8FC
- Texto principal: #151A35
- Texto secundário: #687085
- Bordas: #E8EAF2

Diretrizes:
- Azul como identidade predominante.
- Vermelho para preços promocionais, descontos e CTAs.
- Branco nos cards e superfícies.
- Cantos arredondados.
- Sombras suaves.
- Tipografia moderna, preferencialmente Inter ou Manrope.
- Animações discretas e transições suaves.

Utilizar o logotipo original Trevizo no header, alinhado à esquerda. Não redesenhar nem modificar o logo. Deixar o arquivo preparado em `/public/images/logo-trevizo.png`.

## 3. Layout global

Criar um container centralizado com:
- max-width entre 1200px e 1280px.
- Padding lateral responsivo.
- Layout fluido.
- Excelente aproveitamento de espaço.
- Compatibilidade com desktop, tablet e celular.

## 4. Header

Criar um cabeçalho dividido em três níveis.

### Barra superior
- Informação de entrega: "Entrega para: Goiânia, GO".
- Mensagem promocional central: "Ofertas incríveis toda semana!".
- Acesso para entrar ou cadastrar.
- Ícone do carrinho com contador de itens.

### Header principal
- Logotipo Trevizo à esquerda.
- Campo de pesquisa centralizado e destacado.
- Placeholder: "Buscar produtos...".
- Botão de pesquisa azul.
- Ícone de usuário e carrinho quando houver espaço disponível.

### Menu de navegação
Criar navegação horizontal com:
- Todas as Categorias
- Ofertas
- Hortifrúti
- Carnes
- Bebidas
- Limpeza
- Mercearia
- Eletro
- Utilidades

O menu "Todas as Categorias" deve possuir dropdown com as categorias e subcategorias.

No mobile, utilizar menu hambúrguer e busca adaptada.

## 5. Hero principal

Criar um banner principal impactante, com proporção ampla.

Texto:
"Tudo o que você precisa,
pertinho de você!"

Subtítulo:
"Qualidade, variedade e economia em um só lugar."

Botão:
"Ver ofertas"

Utilizar imagem profissional de uma família fazendo compras em supermercado.

O fundo deve ser predominantemente azul, com elementos gráficos vermelhos e brancos.

Adicionar indicadores de carrossel e suporte para banners promocionais futuros.

## 6. Categorias

Criar uma seção horizontal com cards de categorias, contendo imagem, nome e interação hover.

Categorias:
- Hortifrúti
- Carnes
- Bebidas
- Limpeza
- Mercearia
- Lanches
- Higiene
- Utilidades

Os cards devem ser claros, elegantes e visualmente uniformes.

## 7. Banners promocionais secundários

Criar dois banners lado a lado:

Banner 1:
Título: "Ofertas imperdíveis!"
Texto: "Economia de verdade para sua família."
Botão: "Aproveite"

Banner 2:
Título: "Entrega rápida e segura!"
Texto: "Receba suas compras no conforto de casa."
Botão: "Saiba mais"

Utilizar imagens ilustrativas de produtos e veículo de entrega.

## 8. Ofertas da semana

Criar uma seção de produtos com título:
"Ofertas da Semana"

Subtítulo:
"Os melhores preços para você economizar ainda mais!"

Cada produto deverá possuir:
- Fotografia.
- Selo de desconto.
- Nome.
- Unidade ou quantidade.
- Preço original riscado.
- Preço promocional destacado.
- Botão "Adicionar".

Criar pelo menos cinco produtos de exemplo:
- Leite Integral.
- Acém Bovino.
- Arroz.
- Cerveja.
- Sabão em Pó.

Os produtos devem ficar em cards individuais com design profissional.

Utilizar dados estruturados em arrays para facilitar a inclusão de novos produtos.

## 9. Carrinho de compras

Implementar interação funcional no frontend:
- Adicionar produtos.
- Remover produtos.
- Alterar quantidades.
- Atualizar contador do carrinho.
- Calcular subtotal.
- Exibir resumo dos produtos.
- Abrir painel lateral (drawer) do carrinho.

Não é necessário implementar pagamentos ou integração real com backend nesta primeira etapa.

## 10. Banner de chamada para ação

Criar uma faixa azul de destaque:

"Faça suas compras agora!"

Subtítulo:
"Rápido, fácil e seguro."

Botão vermelho:
"Ir para a loja"

## 11. Footer

Criar rodapé azul institucional dividido em colunas:

**Identidade**
- Logo Trevizo.
- Frase: "Sempre com você!"

**Institucional**
- Sobre Nós.
- Trabalhe Conosco.
- Fale Conosco.

**Ajuda**
- Perguntas Frequentes.
- Trocas e Devoluções.
- Formas de Pagamento.

**Redes sociais**
- Facebook.
- Instagram.
- YouTube.
- WhatsApp.

**Newsletter**
- Título: "Receba nossas ofertas".
- Campo de e-mail.
- Botão de inscrição.

Adicionar uma faixa inferior com direitos reservados.

## 12. Experiência e responsividade

O site deve:
- Ser totalmente responsivo.
- Ter excelente desempenho.
- Utilizar imagens otimizadas com Next.js Image.
- Possuir estados de hover e focus.
- Ter acessibilidade básica.
- Utilizar skeleton loading quando apropriado.
- Ter navegação intuitiva.
- Possuir componentes reutilizáveis.
- Evitar excesso de elementos visuais.
- Manter consistência de espaçamentos e tipografia.

## 13. Organização sugerida

Separar os componentes:

- Header
- TopBar
- SearchBar
- Navigation
- HeroBanner
- CategorySection
- CategoryCard
- PromotionalBanners
- ProductSection
- ProductCard
- CartDrawer
- CallToAction
- Footer
- Newsletter

Criar também:
- `data/products.ts`
- `data/categories.ts`
- `types/product.ts`
- `hooks/useCart.ts`

## 14. Resultado esperado

Entregar uma página inicial completa, com acabamento visual profissional, inspirada no layout de referência.

A prioridade é reproduzir a identidade visual Trevizo, mantendo:
- Azul e vermelho como cores centrais.
- Header elegante com logo à esquerda.
- Hero de grande impacto.
- Categorias organizadas.
- Produtos em cards modernos.
- Carrinho funcional.
- Footer institucional completo.

Não criar um template genérico de loja virtual. O resultado deve parecer um e-commerce real de uma rede de supermercados, pronto para evoluir para produção.

Antes de finalizar, revisar responsividade, espaçamentos, alinhamentos, consistência visual e funcionamento das interações.