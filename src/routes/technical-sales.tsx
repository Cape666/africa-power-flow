import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckList, PageHero, Section, SectionHeading } from "@/components/site/Bits";

const title = "Technical Sales & Manufacturer Representation in Africa";
const description =
  "We help engineering manufacturers and OEMs reach African markets through technical sales, market development, lead generation, product representation and distributor development.";

export const Route = createFileRoute("/technical-sales")({
  head: () => ({
    meta: [
      { title: `${title} | Nexbridge Engineering` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TechnicalSales,
});

const capabilities = [
  ["Technical sales", "Engineering-literate selling into maintenance and procurement teams."],
  ["Market development", "Identifying where your products fit across African industrial sectors."],
  ["Customer acquisition", "Direct engagement with end users and plant operators."],
  ["Lead generation", "Qualified enquiries with real technical requirements behind them."],
  ["Product representation", "Presenting your range accurately and professionally."],
  ["Distributor development", "Building and supporting local routes to market."],
];

function TechnicalSales() {
  return (
    <>
      <PageHero
        eyebrow="For Manufacturers & OEMs"
        title="Helping Engineering Manufacturers Reach African Markets"
        intro="We work with manufacturers and OEMs to develop customers and business opportunities across Africa."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="What We Offer"
            title="A technical partner on the ground"
            intro="Many manufacturers have excellent products but limited visibility of African industrial demand. We bridge that gap with technical selling, direct customer relationships and honest market feedback."
          />
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {capabilities.map(([heading, text]) => (
              <div key={heading} className="bg-surface p-6">
                <h3 className="text-base font-bold">{heading}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Product Categories" title="Where we are most effective" />
            <CheckList
              items={[
                "Electric motors, generators and alternators",
                "Transformers, panels and electrical equipment",
                "Pumps and pump components",
                "Gearboxes, couplings and drive components",
                "Bearings, mechanical seals and shafts",
                "Industrial spare parts and consumables",
              ]}
            />
          </div>
          <div>
            <SectionHeading eyebrow="How Partnerships Start" title="A simple first conversation" />
            <CheckList
              items={[
                "You share your product range and target sectors",
                "We assess fit against known industrial demand",
                "We agree on scope, territory and commercial terms",
                "We begin technical sales and market development",
              ]}
            />
            <Link
              to="/contact"
              className="mt-8 inline-block bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
