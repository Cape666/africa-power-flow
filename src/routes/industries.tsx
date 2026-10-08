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
  ["Mining", "Motors, pumps, bearings, rotating equipment, mechanical components, industrial spare parts and other electrical and mechanical requirements."],
  ["Manufacturing", "Electric motors, pumps, rotating equipment, electrical equipment, mechanical components, industrial spare parts and maintenance-related requirements."],
  ["Water & Wastewater", "Industrial pumps, motors, mechanical components, electrical equipment, spare parts and maintenance-related requirements."],
  ["Agriculture", "Irrigation pumps, motors, mechanical equipment, industrial spare parts and related electrical and mechanical requirements."],
  ["Energy & Power", "Alternators, motors, rotating equipment, electrical equipment, mechanical components and related industrial requirements."],
  ["Food & Beverage", "Pumps, motors, gearboxes, mechanical components, industrial spare parts and maintenance-related requirements."],
  ["Marine", "Motors, alternators, pumps, bearings, couplings and other electrical and mechanical equipment."],
  ["Industrial Infrastructure", "Electrical equipment, mechanical equipment, industrial spare parts, rotating equipment and maintenance-related requirements."],
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries we serve"
        intro="Nexbridge supports industrial customers across a range of sectors by helping them identify and source the right electrical, mechanical and industrial products, services and technical solutions. The specific requirement may vary by industry, but our role remains the same: understand the requirement, identify suitable options and coordinate with qualified suppliers and service providers."
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
        text="Tell us what you need and Nexbridge will help identify, source and coordinate the right product, service or technical solution through qualified suppliers and service providers."
        label="Request a Quote"
      />
    </>
  );
}
