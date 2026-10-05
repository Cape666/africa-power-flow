import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, PageHero, Section, SectionHeading } from "@/components/site/Bits";
import workshopImg from "@/assets/mechanical.jpg";

const title = "About Us — Technical-Commercial Sourcing for Industry";
const description =
  "Nexbridge helps industrial customers source the right products, services and technical solutions by working with qualified suppliers and service providers across Africa.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `${title} | Nexbridge Engineering` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A technical-commercial bridge for African industry"
        intro="Nexbridge helps industrial customers source the right products, services and technical solutions by working with qualified suppliers and service providers."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Technical expertise, customer-focused" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-justify">
              <p>
                Nexbridge helps industrial customers find and source the right electrical,
                mechanical and industrial products, services and technical solutions. We work with
                qualified suppliers, service providers and technical partners to help customers
                meet their specific requirements.
              </p>
              <p>
                Our role is to understand the customer's requirement, identify suitable solutions,
                obtain relevant commercial options and coordinate with the appropriate supplier or
                service provider. Where appropriate, Nexbridge can provide the customer with a
                direct commercial quotation and manage the opportunity through to fulfilment.
              </p>
              <p>
                Our focus includes electric motors, alternators, pumps, rotating equipment,
                industrial components, spare parts, maintenance solutions and technical sourcing.
              </p>
            </div>
          </div>
          <img
            src={workshopImg}
            alt="Industrial pumps and mechanical components"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full border border-border object-cover"
          />
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Our Vision" title="Connecting industrial customers with qualified partners" />
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-justify">
          <p>
            Our vision is to become a trusted technical-commercial bridge between industrial
            customers and qualified suppliers and service providers across Africa.
          </p>
          <p>
            We aim to make it easier for industrial customers to find suitable products, services
            and technical solutions while helping engineering suppliers and manufacturers develop
            new business opportunities in African markets.
          </p>
          <p>
            By building reliable relationships between customers and technical partners, Nexbridge
            aims to create practical, commercially sustainable solutions for industry.
          </p>
        </div>
        <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
          {[
            ["Technical first", "Specifications, duty conditions and compatibility come before the quote."],
            ["Reliable sourcing", "We work with suppliers and manufacturers we can stand behind."],
            ["Clear communication", "Honest lead times, honest pricing, no overstated claims."],
          ].map(([heading, text]) => (
            <div key={heading} className="bg-background p-7">
              <h3 className="text-base font-bold">{heading}</h3>
              <p className="mt-2.5 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
