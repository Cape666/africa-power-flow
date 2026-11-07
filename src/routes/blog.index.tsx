import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
import motorImage from "@/assets/electrical.jpg";
import { formatDate, publishedPosts } from "@/data/posts";

const title = "Engineering Insights Blog — Motors, Pumps, Maintenance & Sourcing";
const description =
  "Articles on electrical and mechanical engineering, pumps, motors, industrial maintenance, equipment sourcing and African industrial markets.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: `${title} | Kilimanjaro Engineering` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://africa-power-flow.lovable.app/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://africa-power-flow.lovable.app/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const featured = publishedPosts[0];
  if (!featured) return null;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Engineering insights for industrial teams"
        intro="Practical articles on electrical and mechanical engineering, maintenance, equipment sourcing and African industrial markets."
      />

      <Section>
        <article className="mt-10 border border-border bg-card p-8 shadow-card">
          <img
            src={motorImage}
            alt={featured.imageAlt ?? "Industrial electric motor"}
            className="mb-6 aspect-[16/7] w-full object-cover"
          />
          <p className="eyebrow">{featured.category}</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="hover:text-brand"
            >
              {featured.title}
            </Link>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {featured.excerpt}
          </p>
          <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
            {formatDate(featured.date)} · {featured.readingTime}
          </p>
        </article>
      </Section>
    </>
  );
}
