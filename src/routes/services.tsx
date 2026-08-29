import { createFileRoute } from "@tanstack/react-router";
import { Zap, Cog, Wrench } from "lucide-react";
import { CheckList, CtaBanner, Section, SectionHeading, PageHero } from "@/components/site/Bits";

const title = "Engineering Services — Electrical, Mechanical & Industrial Support";
const description =
  "Electrical services for motors, generators, alternators and transformers; mechanical services for pumps, gearboxes, bearings and seals; plus sourcing, spares and maintenance support.";

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
    intro: "Electrical rotating machines, power equipment and testing.",
    items: [
      "Motors",
      "Generators",
      "Alternators",
      "Transformers",
      "Electrical testing",
      "Maintenance",
    ],
  },
  {
    icon: Cog,
    title: "Mechanical",
    intro: "Rotating equipment, drive components and precision work.",
    items: [
      "Pumps",
      "Gearboxes",
      "Bearings",
      "Mechanical seals",
      "Couplings",
      "Shafts",
      "Machining",
      "Alignment",
      "Maintenance",
    ],
  },
  {
    icon: Wrench,
    title: "Industrial Support",
    intro: "Practical support for procurement and maintenance teams.",
    items: [
      "Equipment sourcing",
      "Spare parts",
      "Technical assistance",
      "Repair coordination",
      "Maintenance solutions",
    ],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Electrical, mechanical and industrial support services"
        intro="A focused service offering built around the equipment that keeps industrial plants running."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <article key={group.title} className="border border-border bg-card p-7 shadow-card">
              <group.icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
              <h2 className="mt-5 text-xl font-bold">{group.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{group.intro}</p>
              <CheckList items={group.items} />
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="How We Work"
          title="A straightforward technical process"
          intro="No complicated portals — you send the requirement, we handle the engineering and commercial detail."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Enquiry", "You share the requirement, specification, drawing or part number."],
            ["02", "Technical review", "We confirm the specification and identify suitable options."],
            ["03", "Proposal", "You receive pricing, lead time and technical details."],
            ["04", "Delivery & support", "We coordinate supply, repair or maintenance work."],
          ].map(([num, heading, text]) => (
            <div key={num} className="border-t-2 border-accent bg-background p-6">
              <span className="font-display text-2xl font-bold text-accent">{num}</span>
              <h3 className="mt-3 text-base font-bold">{heading}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
