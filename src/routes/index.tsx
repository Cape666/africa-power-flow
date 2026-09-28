import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Cog, PackageSearch, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";
import electricalImg from "@/assets/electrical.jpg";
import mechanicalImg from "@/assets/mechanical.jpg";
import sourcingImg from "@/assets/sourcing.jpg";
import { CtaBanner, Section, SectionHeading } from "@/components/site/Bits";

const title = "Connecting Industry With the Right Engineering Solutions";
const description =
  "Nexbridge helps industrial customers source electrical, mechanical and industrial products and services through qualified suppliers and service providers.";

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
    title: "Electrical",
    text: "Electrical products and technical solutions sourced through qualified suppliers and service providers — motors, alternators, testing and maintenance.",
    img: electricalImg,
  },
  {
    icon: Cog,
    title: "Mechanical",
    text: "Mechanical products and technical solutions sourced through qualified suppliers and service providers — pumps, bearings, seals, couplings, gearboxes, alignment and maintenance.",
    img: mechanicalImg,
  },
  {
    icon: PackageSearch,
    title: "Industrial Support",
    text: "Industrial equipment, spare parts and technical support sourced and coordinated through our qualified network.",
    img: sourcingImg,
  },
];

const industries = [
  "Mining",
  "Manufacturing",
  "Water & Wastewater",
  "Agriculture",
  "Energy & Power",
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
            Connecting Industry With the Right Engineering Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Nexbridge helps industrial customers source the right electrical, mechanical and
            industrial products and services through qualified suppliers and service providers.
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
          title="Have an industrial requirement? Come to us directly."
          intro="We help industrial customers find and source the right products, services and technical solutions through our network of qualified suppliers and service providers."
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
              eyebrow="For Suppliers, Service Providers & Manufacturers"
              title="A Channel to Industrial Customers"
              intro="Nexbridge helps engineering manufacturers, OEMs and service providers reach industrial customers and develop new business opportunities across African markets."
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
          title="One point of contact for your industrial requirements"
          intro="We combine technical understanding with a network of qualified suppliers and service providers — sourcing, quoting and coordinating the right solution for you."
        />
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Technical expertise", "Every enquiry is technically reviewed before we source and quote."],
            ["Reliable sourcing", "A network of qualified suppliers, service providers and manufacturers."],
            ["Fast response", "Enquiries acknowledged quickly, with clear lead times up front."],
            ["One point of contact", "We quote, coordinate the solution and manage the relationship — we do not simply refer you elsewhere."],
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

      <CtaBanner text="Tell us what you need. Nexbridge will help identify and coordinate the right product, service or technical solution through our qualified supplier and service-provider network." />
    </>
  );
}
