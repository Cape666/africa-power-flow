import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { Field, Select, SubmitButton, SuccessNote, TextArea, TextInput } from "@/components/site/FormBits";
import sourcingImg from "@/assets/sourcing.jpg";

const title = "Industrial Equipment & Spare Parts Sourcing";
const description =
  "Request electrical and mechanical equipment, components and industrial spare parts. Send your specification, drawing or part number and we will source it from reliable suppliers.";

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
        title="Source industrial equipment, components and spare parts"
        intro="Tell us what you need and we will identify suitable equipment or parts from reliable suppliers and manufacturers."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How It Works"
              title="From part number to delivered equipment"
              intro="Customers can request electrical and mechanical equipment, components and spare parts — whether it is a complete pump set, a replacement motor, or a single bearing or mechanical seal."
            />
            <div className="mt-8 grid gap-px bg-border">
              {[
                ["Send your requirement", "Specification, drawing, nameplate photo or part number."],
                ["We identify options", "We check compatibility, availability and lead time."],
                ["You receive a quotation", "Clear pricing, delivery terms and technical details."],
                ["Supply and follow-up", "We coordinate supply and remain available for support."],
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
            <h2 className="text-xl font-bold">Equipment Enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete the form below and our team will respond with options and pricing.
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
                </div>
                <Field label="Equipment required">
                  <TextInput name="equipment" required placeholder="e.g. 75 kW electric motor" />
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
    </>
  );
}
