import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckList, CtaBanner, PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Field, Select, SubmitButton, SuccessNote, TextArea, TextInput } from "@/components/site/FormBits";
import sourcingImg from "@/assets/sourcing.jpg";

const title = "Industrial Equipment & Technical Sourcing";
const description =
  "Tell us what you need and Nexbridge will help identify, source and coordinate the right product, equipment or technical solution through qualified suppliers and service providers.";

const examples = [
  "Electric Motors",
  "Alternators",
  "Industrial Pumps",
  "Bearings",
  "Mechanical Seals",
  "Couplings",
  "Gearboxes",
  "Shafts",
  "Industrial Spare Parts",
  "Electrical Equipment",
  "Mechanical Equipment",
  "Maintenance Services",
  "Repair Services",
  "Other Industrial Requirements",
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
  "Other",
];

export const Route = createFileRoute("/equipment-sourcing")({
  head: () => ({
    meta: [
      { title: `${title} | Nexbridge Engineering` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: EquipmentSourcing,
});

function EquipmentSourcing() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Equipment & Sourcing"
        title="Industrial Equipment & Technical Sourcing"
        intro="Tell us what you need and Nexbridge will help identify, source and coordinate the right product, equipment or technical solution through qualified suppliers and service providers."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How It Works"
              title="A simple sourcing process"
              intro="Nexbridge coordinates the sourcing process by understanding the customer requirement, identifying suitable options and working with qualified suppliers and service providers to develop the appropriate commercial solution."
            />
            <div className="mt-8 grid gap-px bg-border">
              {[
                ["Tell Us What You Need", "Send us your equipment, product, service or technical requirement, including any available specification, quantity, application or enquiry details."],
                ["We Identify Suitable Options", "We work with qualified suppliers and service providers to identify suitable products, services or technical solutions based on your requirement."],
                ["We Provide a Commercial Solution", "We obtain relevant technical and commercial information and, where appropriate, provide the customer with a quotation or commercial proposal."],
                ["We Coordinate the Requirement", "We help coordinate the requirement between the customer and the appropriate supplier or service provider through the agreed commercial process."],
              ].map(([heading, text], i) => (
                <div key={heading} className="flex gap-4 bg-surface p-5">
                  <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="text-sm font-bold text-primary">{heading}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="mt-10 text-lg font-bold">Examples of requirements</h3>
            <div className="sm:columns-2">
              <CheckList items={examples} />
            </div>
            <img
              src={sourcingImg}
              alt="Warehouse shelves of industrial mechanical and electrical spare parts"
              loading="lazy"
              width={1200}
              height={900}
              className="mt-8 w-full border border-border object-cover"
            />
          </div>

          <div className="border border-border bg-card p-7 shadow-card">
            <h2 className="text-xl font-bold">Equipment & Technical Enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete the form below with your requirement. We will review the information and work with suitable suppliers or service providers to develop an appropriate commercial response.
            </p>

            {sent ? (
              <div className="mt-7">
                <SuccessNote>
                  We have your equipment request and will respond by email with availability,
                  pricing and lead time.
                </SuccessNote>
              </div>
            ) : (
              <form
                className="mt-7 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <TextInput name="name" required placeholder="Full name" />
                  </Field>
                  <Field label="Company">
                    <TextInput name="company" required placeholder="Company name" />
                  </Field>
                  <Field label="Country">
                    <TextInput name="country" required placeholder="Country" />
                  </Field>
                  <Field label="Email">
                    <TextInput type="email" name="email" required placeholder="name@company.com" />
                  </Field>
                  <Field label="Phone / WhatsApp">
                    <TextInput name="phone" required placeholder="+00 000 000 0000" />
                  </Field>
                  <Field label="Quantity">
                    <TextInput name="quantity" placeholder="e.g. 2 units" />
                  </Field>
                  <Field label="Delivery location">
                    <TextInput name="deliveryLocation" required placeholder="e.g. Johannesburg, South Africa" />
                  </Field>
                  <Field label="Required date">
                    <TextInput type="date" name="requiredDate" />
                  </Field>
                </div>
                <Field label="Industry">
                  <Select name="industry" required defaultValue="">
                    <option value="" disabled>
                      Select your industry
                    </option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </Select>
                </Field>
                <Field label="Equipment / Service Required">
                  <TextInput name="equipment" required placeholder="e.g. 75 kW electric motor" />
                </Field>
                <Field label="Preferred manufacturer / brand">
                  <TextInput name="preferredBrand" placeholder="e.g. ABB, WEG, Siemens — or leave blank for options" />
                </Field>
                <Field label="Specification / details">
                  <TextArea
                    name="details"
                    rows={5}
                    placeholder="Ratings, dimensions, part numbers, application, duty conditions..."
                  />
                </Field>
                <Field label="File upload">
                  <input
                    type="file"
                    name="attachment"
                    className="w-full border border-input bg-background px-3 py-2.5 text-sm file:mr-3 file:border-0 file:bg-primary file:px-3 file:py-1.5 file:font-display file:text-xs file:font-bold file:uppercase file:tracking-widest file:text-primary-foreground"
                  />
                </Field>
                <SubmitButton>Request Equipment</SubmitButton>
              </form>
            )}
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Have an Equipment or Technical Requirement?"
        text="Send us your requirement and let us help source the right solution."
        label="Request a Quote"
      />
    </>
  );
}
