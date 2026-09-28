import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, PageHero, Section } from "@/components/site/Bits";

const title = "Industries We Serve — Mining, Manufacturing, Water, Energy & More";
const description =
  "Nexbridge sources products, services and technical solutions for mining, manufacturing, water and wastewater, agriculture, energy and power, food and beverage, marine and industrial infrastructure across Africa.";

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
  ["Mining", "Electrical and mechanical equipment, pumps, motors, bearings, spare parts and related industrial solutions."],
  ["Manufacturing", "Motors, pumps, rotating equipment, electrical equipment, mechanical components, spare parts and maintenance solutions."],
  ["Water & Wastewater", "Pumps, motors, mechanical components, electrical equipment, spare parts and maintenance support."],
  ["Agriculture", "Irrigation pumps, motors, mechanical equipment, spare parts and related industrial solutions."],
  ["Energy & Power", "Alternators, motors, rotating equipment and related technical solutions."],
  ["Food & Beverage", "Pumps, motors, gearboxes, mechanical components, spare parts and maintenance solutions."],
  ["Marine", "Motors, alternators, pumps, bearings, couplings and other electrical and mechanical equipment."],
  ["Industrial Infrastructure", "Electrical equipment, mechanical equipment, industrial spare parts, maintenance support and technical solutions."],
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries we serve"
        intro="If your company operates in one of these industries and has an electrical, mechanical or industrial requirement, you can approach Nexbridge. We identify suitable solutions and source them by working with qualified suppliers and service providers."
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
        title="Have an Industrial Requirement?"
        text="Tell us what you need and Nexbridge will help identify and source the right product, service or technical solution."
        label="Request a Quote"
      />
    </>
  );
}
