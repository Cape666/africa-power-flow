import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Bits";
import { categories, formatDate, posts } from "@/data/posts";

const title = "Engineering Insights Blog — Motors, Pumps, Maintenance & Sourcing";
const description =
  "Articles on electrical and mechanical engineering, pumps, motors, industrial maintenance, equipment sourcing and African industrial markets.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: `${title} | Nexbridge Engineering` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Engineering insights for industrial teams"
        intro="Practical articles on electrical and mechanical engineering, maintenance, equipment sourcing and African industrial markets."
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="border border-border bg-surface px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-primary"
            >
              {category}
            </span>
          ))}
        </div>

        <article className="mt-10 border border-border bg-card p-8 shadow-card">
          <p className="eyebrow">{featured.category}</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="hover:text-accent"
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

        <div className="mt-8 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article key={post.slug} className="bg-background p-7">
              <p className="eyebrow">{post.category}</p>
              <h2 className="mt-3 text-lg font-bold">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                {formatDate(post.date)} · {post.readingTime}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
