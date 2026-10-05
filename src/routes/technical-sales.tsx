import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckList, PageHero, Section, SectionHeading } from "@/components/site/Bits";

const title = "Technical Sales Support for Manufacturers, OEMs & Suppliers";
const description =
  "We help manufacturers, OEMs and technical suppliers identify industrial opportunities, develop customer relationships and support technical-commercial sales across African markets.";

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
  ["Technical Sales", "Supporting the technical-commercial sales process by understanding customer requirements and communicating suitable product solutions."],
  ["Market Development", "Identifying potential industrial applications, sectors and customer opportunities for suitable products."],
  ["Customer Acquisition", "Helping identify and engage potential industrial customers with relevant requirements."],
  ["Lead Generation", "Developing qualified enquiries based on genuine industrial requirements, specifications and project needs."],
  ["Product Representation", "Presenting suitable products and technical solutions accurately to potential industrial customers."],
  ["Distributor Development", "Supporting manufacturers and suppliers in exploring suitable local sales and distribution opportunities where appropriate."],
];

function TechnicalSales() {
  return (
    <>
      <PageHero
        eyebrow="For Manufacturers, OEMs & Technical Suppliers"
        title="Helping Engineering Suppliers Reach African Industrial Customers"
        intro="We help manufacturers, OEMs and technical suppliers identify industrial opportunities, develop customer relationships and support technical-commercial sales across African markets."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="What We Offer"
            title="A technical partner on the ground"
            intro="Many manufacturers and suppliers have strong products but may not have direct access to industrial customers in African markets. Nexbridge helps bridge this gap by identifying opportunities, understanding customer requirements and supporting the technical-commercial sales process."
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
                "Electric motors and alternators",
                "Electrical equipment",
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
                "We assess potential market and customer fit",
                "We discuss the appropriate scope and commercial arrangement",
                "We begin agreed technical sales and market development activities",
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

      <Section>
        <SectionHeading
          eyebrow="Why Partner With Us?"
          title="What suppliers gain from working with us"
          intro="Subject to agreed commercial arrangements, Nexbridge supports suppliers in developing opportunities with industrial customers in African markets."
        />
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Market Access", "Support in identifying potential industrial customers and opportunities in African markets."],
            ["Technical Understanding", "Technical-commercial communication focused on understanding customer requirements and product fit."],
            ["Market Development", "Support in exploring potential applications, sectors and customer opportunities."],
            ["Qualified Enquiries", "Focus on enquiries with relevant specifications, quantities, applications and timelines where available."],
            ["Market Feedback", "Practical feedback on customer requirements, pricing considerations, competition and product fit."],
            ["Flexible Commercial Approach", "Commercial arrangements can be discussed based on the supplier's objectives, market opportunity and agreed scope."],
          ].map(([heading, text]) => (
            <div key={heading} className="bg-surface p-6">
              <h3 className="text-sm font-bold text-primary">{heading}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
