import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, Globe } from "lucide-react";
import { PageHero, Section } from "@/components/site/Bits";
import { Field, Select, SubmitButton, SuccessNote, TextArea, TextInput } from "@/components/site/FormBits";

const title = "Contact Us — Enquiries, Quotes & Partnerships";
const description =
  "Contact our team for electrical, mechanical, equipment, spare parts, maintenance, technical sales or manufacturer partnership enquiries across Africa.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `${title} | Nexbridge Engineering` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

const enquiryTypes = [
  "Electrical",
  "Mechanical",
  "Equipment",
  "Spare Parts",
  "Maintenance",
  "Technical Sales",
  "Manufacturer Partnership",
  "Other",
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need"
        intro="Send us your requirement, specification or partnership proposal. We respond to every enquiry."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-xl font-bold">Get in touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Whether you are an industrial customer with an equipment or maintenance requirement,
              or a manufacturer looking for representation in African markets, we would like to hear
              from you.
            </p>
            <ul className="mt-8 grid gap-px bg-border">
              {[
                [Mail, "Email enquiries", "Send specifications, drawings and part numbers."],
                [MessageCircle, "Phone / WhatsApp", "Share the number you prefer and we will call."],
                [Globe, "Across Africa", "We work with customers and suppliers throughout the continent."],
              ].map(([Icon, heading, text]) => {
                const IconComp = Icon as typeof Mail;
                return (
                  <li key={heading as string} className="flex gap-4 bg-surface p-5">
                    <IconComp className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                    <div>
                      <h3 className="text-sm font-bold text-primary">{heading as string}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{text as string}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border border-border bg-card p-7 shadow-card">
            {sent ? (
              <SuccessNote>
                Thank you for contacting us. A member of our team will review your enquiry and
                respond shortly.
              </SuccessNote>
            ) : (
              <form
                className="grid gap-5"
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
                  <Field label="Enquiry type">
                    <Select name="enquiryType" required defaultValue="">
                      <option value="" disabled>
                        Select an enquiry type
                      </option>
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </Select>
                  </Field>
                </div>
                <Field label="Message">
                  <TextArea
                    name="message"
                    rows={6}
                    required
                    placeholder="Describe your requirement, equipment, application or proposal..."
                  />
                </Field>
                <Field label="File upload">
                  <input
                    type="file"
                    name="attachment"
                    className="w-full border border-input bg-background px-3 py-2.5 text-sm file:mr-3 file:border-0 file:bg-primary file:px-3 file:py-1.5 file:font-display file:text-xs file:font-bold file:uppercase file:tracking-widest file:text-primary-foreground"
                  />
                </Field>
                <SubmitButton>Send Enquiry</SubmitButton>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
