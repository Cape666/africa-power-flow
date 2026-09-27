import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Cog, PackageSearch, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";
import electricalImg from "@/assets/electrical.jpg";
import mechanicalImg from "@/assets/mechanical.jpg";
import sourcingImg from "@/assets/sourcing.jpg";
import { CtaBanner, Section, SectionHeading } from "@/components/site/Bits";

const title = "Industrial Electrical & Mechanical Solutions Across Africa";
const description =
  "Engineering solutions, industrial equipment sourcing and technical sales for African industry — motors, pumps, generators, gearboxes, spare parts and maintenance.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${title} | Nexbridge Engineering` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const areas = [
  {
    icon: Zap,
    title: "Electrical Engineering",
    text: "Motors, generators, alternators, panels, testing and maintenance.",
    img: electricalImg,
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    text: "Pumps, gearboxes, bearings, mechanical seals, couplings, machining, alignment and maintenance.",
    img: mechanicalImg,
  },
  {
    icon: PackageSearch,
    title: "Equipment & Sourcing",
    text: "Helping customers source electrical and mechanical equipment and industrial spare parts from reliable suppliers.",
    img: sourcingImg,
  },
];

const industries = [
  "Mining",
  "Manufacturing",
  "Water & Wastewater",
  "Agriculture",
  "Energy",
  "Food & Beverage",
  "Marine",
  "Industrial Infrastructure",
];

const repServices = [
  "Technical sales",
  "Market development",
  "Customer acquisition",
  "Lead generation",
  "Product representation",
  "Distributor development",
];

function Home() {
  return (
    <>
      <section className="relative bg-primary">
        <img
          src={heroImg}
          alt="Industrial electric motor and pump set being inspected by an engineer"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="container-page relative py-24 md:py-32">
          <p className="eyebrow">Electrical • Mechanical • Industrial Supply</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            Industrial Electrical &amp; Mechanical Solutions Across Africa
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Engineering solutions, industrial equipment sourcing and technical sales for African
            industry.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="bg-accent px-7 py-3.5 text-center font-display text-sm font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              Request a Quote
            </Link>
            <Link
              to="/technical-sales"
              className="border border-primary-foreground/40 px-7 py-3.5 text-center font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Three core areas of support for industrial operations"
          intro="From rotating equipment and electrical systems to hard-to-find spare parts, we support maintenance and procurement teams with practical engineering solutions."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {areas.map((area) => (
            <article key={area.title} className="border border-border bg-card shadow-card">
              <img
                src={area.img}
                alt={area.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <area.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="mt-4 text-lg font-bold">{area.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
              </div>
            </article>
          ))}
        </div>
        <Link
          to="/services"
          className="mt-9 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-primary hover:text-accent"
        >
          View all services <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Industries"
          title="Built for demanding industrial environments"
          intro="We work with procurement and maintenance departments in sectors where downtime is expensive and equipment reliability matters."
        />
        <div className="mt-10 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="bg-background p-6">
              <span className="font-display text-sm font-bold text-primary">{industry}</span>
            </div>
          ))}
        </div>
        <Link
          to="/industries"
          className="mt-9 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-primary hover:text-accent"
        >
          Explore industries <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="For Manufacturers & OEMs"
              title="Technical Sales & Manufacturer Representation"
              intro="We work with engineering manufacturers and OEMs to develop customers and business opportunities across African markets — representing their products with technical credibility."
            />
            <Link
              to="/technical-sales"
              className="mt-8 inline-block bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
            >
              Become a Partner
            </Link>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {repServices.map((item) => (
              <div key={item} className="bg-surface p-5 text-sm font-medium text-primary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Why Work With Us?"
          title="A practical engineering partner, not just a supplier"
          intro="We combine engineering knowledge with an established supplier network, so enquiries move quickly and equipment arrives fit for purpose."
        />
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Technical expertise", "Electrical and mechanical engineers review every enquiry before we quote."],
            ["Reliable sourcing", "Established relationships with reputable manufacturers and suppliers."],
            ["Fast response", "Enquiries acknowledged quickly, with clear lead times up front."],
            ["One point of contact", "From enquiry to delivery and after-sales follow-up."],
            ["Honest advice", "If a part is unsuitable or unavailable, we say so and suggest alternatives."],
            ["Africa-wide experience", "We understand logistics and delivery realities across African markets."],
          ].map(([heading, text]) => (
            <div key={heading} className="bg-background p-6">
              <h3 className="text-sm font-bold text-primary">{heading}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
