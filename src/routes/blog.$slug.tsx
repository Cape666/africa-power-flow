import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaBanner, Section } from "@/components/site/Bits";
import { formatDate, getPost, posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found | Nexbridge Engineering" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Nexbridge Engineering` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="bg-primary py-16 md:py-20">
        <div className="container-page">
          <p className="eyebrow">{post.category}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-primary-foreground md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-xs uppercase tracking-widest text-primary-foreground/60">
            {formatDate(post.date)} · {post.readingTime}
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-foreground">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <Link
          to="/blog"
          className="mt-10 inline-block font-display text-sm font-bold uppercase tracking-widest text-primary hover:text-accent"
        >
          ← Back to all articles
        </Link>
      </Section>

      <Section muted>
        <h2 className="text-xl font-bold">More articles</h2>
        <div className="mt-8 grid gap-px bg-border md:grid-cols-3">
          {related.map((item) => (
            <article key={item.slug} className="bg-background p-6">
              <p className="eyebrow">{item.category}</p>
              <h3 className="mt-3 text-base font-bold">
                <Link to="/blog/$slug" params={{ slug: item.slug }} className="hover:text-accent">
                  {item.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
