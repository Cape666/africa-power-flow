import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaBanner, Section } from "@/components/site/Bits";
import motorImage from "@/assets/electrical.jpg";
import { formatDate, getPost } from "@/data/posts";

const articleUrl = "https://africa-power-flow.lovable.app/blog/choosing-the-right-industrial-electric-motor";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | Kilimanjaro Engineering" },
          { name: "description", content: "This article is unavailable." },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: post.seoTitle ?? `${post.title} | Kilimanjaro Engineering` },
        { name: "description", content: post.excerpt },
        { name: "keywords", content: post.keywords?.join(", ") ?? "" },
        { property: "og:title", content: post.seoTitle ?? post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: articleUrl },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: articleUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
            author: { "@type": "Organization", name: "Kilimanjaro Engineering" },
            publisher: { "@type": "Organization", name: "Kilimanjaro Engineering" },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

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
        <div className="max-w-3xl text-base leading-relaxed text-foreground">
          <img
            src={motorImage}
            alt={post.imageAlt ?? "Industrial electric motor"}
            className="mb-8 aspect-[16/7] w-full object-cover"
          />
          <div className="space-y-5">
            {post.introduction?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {post.sections?.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="mb-4 text-xl font-bold">{section.heading}</h2>
              <div className="space-y-4">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.bullets && (
                <ul className="my-5 list-disc space-y-2 pl-6">
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.subsections?.map((subsection) => (
                <div key={subsection.heading} className="mt-6">
                  <h3 className="mb-3 text-lg font-semibold">{subsection.heading}</h3>
                  <div className="space-y-4">
                    {subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              ))}
            </section>
          ))}
          <div className="mt-8 space-y-4 border-t border-border pt-6">
            <p>
              Learn more about our <Link to="/services" className="text-soft underline">services</Link> for industrial requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block font-display text-sm font-bold uppercase tracking-widest text-primary hover:text-brand"
            >
              Contact us to discuss your industrial electric motor sourcing requirements.
            </Link>
          </div>
        </div>
        <Link
          to="/blog"
          className="mt-10 inline-block font-display text-sm font-bold uppercase tracking-widest text-primary hover:text-brand"
        >
          ← Back to all articles
        </Link>
      </Section>

      <CtaBanner />
    </>
  );
}
