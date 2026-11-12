import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";

export function PageIntro({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <Container className="py-6 md:py-8">
      <Breadcrumb items={[{ label: title }]} />
      <h1 className="text-3xl font-extrabold text-ink">{title}</h1>
      {description ? <p className="mt-2 max-w-2xl text-muted">{description}</p> : null}
      <div className="mt-6">{children}</div>
    </Container>
  );
}
