import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, PageHero, Section } from "@/components/site/Bits";

const title = "Industries We Serve — Mining, Manufacturing, Water, Energy & More";
const description =
  "We support mining, manufacturing, water and wastewater, agriculture, energy, food and beverage, marine and industrial infrastructure operations across Africa.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: `${title} | Nexbridge Engineering` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Industries,
});

const industries = [
  ["Mining", "Motors, pumps, gearboxes and drive components for processing plants and dewatering."],
  ["Manufacturing", "Rotating equipment, electrical systems and spare parts for production lines."],
  ["Water & Wastewater", "Pump sets, mechanical seals, couplings and electrical panels."],
  ["Agriculture", "Irrigation pumps, motors, generators and mechanical drive components."],
  ["Energy", "Generators, alternators, transformers and electrical testing support."],
  ["Food & Beverage", "Hygienic pumps, gearboxes, bearings and maintenance components."],
  ["Marine", "Pumps, shafts, couplings, bearings and electrical machine support."],
  ["Industrial Infrastructure", "Utilities, workshops and facilities requiring reliable equipment."],
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Engineering support for African industry"
        intro="Every sector has different equipment, duty cycles and procurement realities. We tailor our technical and sourcing support accordingly."
      />

      <Section>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(([name, text]) => (
            <article key={name} className="bg-background p-7">
              <h2 className="text-lg font-bold">{name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Working in one of these sectors?"
        text="Tell us about your equipment and maintenance requirements and we will come back with practical options."
        label="Send an Enquiry"
      />
    </>
  );
}
