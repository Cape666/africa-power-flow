import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, PageHero, Section, SectionHeading } from "@/components/site/Bits";
import workshopImg from "@/assets/mechanical.jpg";

const title = "About Us — Industrial Engineering & Technical Sales";
const description =
  "Nexbridge Engineering provides electrical and mechanical engineering solutions, equipment sourcing and technical sales, connecting reliable manufacturers with African industry.";

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
        title="An engineering and technical sales business focused on African industry"
        intro="We combine engineering knowledge with commercial capability to support industrial customers and the manufacturers who supply them."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Engineering-led, customer-driven" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We are an electrical and mechanical engineering business serving industrial
                customers. Our work covers engineering solutions, industrial equipment and
                spare-parts sourcing, repair and maintenance support, technical sales and
                manufacturer representation.
              </p>
              <p>
                We focus on the equipment that industrial plants depend on every day — motors,
                alternators, transformers, pumps, gearboxes, bearings, seals and
                couplings — and on getting the right specification to the right site.
              </p>
              <p>
                Our approach is deliberately simple: understand the technical requirement, source
                or solve it properly, and communicate clearly on price and lead time.
              </p>
            </div>
          </div>
          <img
            src={workshopImg}
            alt="Industrial pumps and mechanical components in an engineering workshop"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full border border-border object-cover"
          />
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Our Vision" title="Connecting manufacturers with African industry" />
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Our long-term goal is to build strong technical and commercial relationships across
          Africa — connecting reliable engineering manufacturers and suppliers with the industrial
          customers who need them. We aim to be the dependable technical link between global
          equipment quality and local industrial requirements.
        </p>
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
