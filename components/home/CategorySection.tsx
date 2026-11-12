import { CategoryCard } from "@/components/home/CategoryCard";
import { Container } from "@/components/ui/Container";
import { homeCategories } from "@/data/categories";

export function CategorySection() {
  const categories = homeCategories();

  return (
    <section className="pt-6 md:pt-8" aria-labelledby="categorias-titulo">
      <Container>
        <h2 id="categorias-titulo" className="sr-only">
          Categorias
        </h2>
        <div className="scroll-x -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-8 lg:overflow-visible">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              href={`/${category.slug}`}
              name={category.name}
              image={category.image}
              imageAlt={category.imageAlt}
              className="w-28 shrink-0 snap-start lg:w-auto"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
