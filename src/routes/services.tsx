import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Cog, Wrench } from "lucide-react";
import { CheckList, CtaBanner, Section, SectionHeading, PageHero } from "@/components/site/Bits";

const title = "Services — Electrical, Mechanical & Industrial Support";
const description =
  "Electrical, mechanical and industrial support solutions sourced and coordinated by Nexbridge through qualified suppliers and service providers.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `${title} | Nexbridge Engineering` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Services,
});

const groups = [
  {
    icon: Zap,
    title: "Electrical",
    intro: "Electrical products and technical solutions for industrial requirements.",
    items: [
      "Electric Motors",
      "Alternators",
      "Electrical Testing",
      "Electrical Maintenance",
      "Related Electrical Equipment",
    ],
    message: "Tell us your electrical requirement and we will help identify and source a suitable solution.",
  },
  {
    icon: Cog,
    title: "Mechanical",
    intro: "Mechanical products and technical solutions for industrial requirements.",
    items: [
      "Industrial Pumps",
      "Bearings",
      "Mechanical Seals",
      "Couplings",
      "Gearboxes",
      "Shafts",
      "Alignment",
      "Mechanical Maintenance",
      "Related Mechanical Equipment",
    ],
    message: "Tell us your mechanical requirement and we will help identify and source a suitable solution.",
  },
  {
    icon: Wrench,
    title: "Industrial Support",
    intro: "Industrial equipment, spare parts and technical support for a range of industrial requirements.",
    items: [
      "Industrial Equipment",
      "Spare Parts",
      "Maintenance Support",
      "Repair Services",
      "Technical Support",
      "Equipment Sourcing",
      "Other Industrial Requirements",
    ],
    message:
      "Have an industrial requirement that does not fit into a specific category? Tell us what you need and we will help identify the right solution.",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Electrical, Mechanical and Industrial Support"
        intro="Nexbridge helps industrial customers source the right products, services and technical solutions by working with qualified suppliers and service providers."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <article key={group.title} className="flex flex-col items-start border border-border bg-card p-7 shadow-card">
              <group.icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
              <h2 className="mt-5 text-xl font-bold">{group.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{group.intro}</p>
              <CheckList items={group.items} />
              <p className="mt-6 text-sm leading-relaxed text-foreground">{group.message}</p>
              <Link
                to="/contact"
                className="mt-5 inline-block bg-accent px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
              >
                Request a Quote
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="How We Work"
          title="From your requirement to a coordinated solution"
          intro="You tell us what you need. We understand the requirement, identify suitable options, obtain the relevant commercial information and coordinate the solution with you."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Understand", "We review your requirement, specification, drawing or part number to understand exactly what you need."],
            ["02", "Identify & Source", "We identify suitable products or services based on your requirement and source the appropriate solution."],
            ["03", "Quote", "We obtain relevant technical and commercial information and, where appropriate, provide you with a commercial quotation."],
            ["04", "Coordinate", "We coordinate the agreed solution with you and the appropriate technical or supply partner through to completion."],
          ].map(([num, heading, text]) => (
            <div key={num} className="border-t-2 border-accent bg-background p-6">
              <span className="font-display text-2xl font-bold text-accent">{num}</span>
              <h3 className="mt-3 text-base font-bold">{heading}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner text="Tell us what you need. We will help identify, source and coordinate the right product, service or technical solution for your requirement." />
    </>
  );
}
