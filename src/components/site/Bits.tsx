import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-primary py-16 md:py-20">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold text-primary-foreground md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  muted,
  className = "",
}: {
  children: ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <section className={`${muted ? "bg-surface" : "bg-background"} py-16 md:py-20 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-bold md:text-3xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function CtaBanner({
  title = "Tell Us What You Need",
  text = "Tell us what you need. We will help identify the right product, service or technical solution through our network of qualified suppliers and service providers.",
  label = "Request a Quote",
}: {
  title?: string;
  text?: string;
  label?: string;
}) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">{title}</h2>
          <p className="mt-3 text-primary-foreground/75">{text}</p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}
