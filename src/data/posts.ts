export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "choosing-the-right-industrial-electric-motor",
    title: "Choosing the Right Industrial Electric Motor",
    category: "Electrical Engineering",
    date: "2026-08-12",
    readingTime: "5 min read",
    excerpt:
      "Rating, duty cycle, mounting and enclosure decide whether a replacement motor lasts a decade or fails in a season.",
    body: [
      "Replacing an industrial electric motor is rarely as simple as matching the kilowatt rating. Duty cycle, ambient temperature, mounting arrangement, frame size, insulation class and enclosure protection all influence whether the new machine will survive its application.",
      "Start with the nameplate. Power, voltage, frequency, speed, frame and IP rating give you the baseline specification. Photograph the plate before removing the machine — it is the single most useful piece of information when sourcing a replacement.",
      "Then look at the application. A motor driving a centrifugal pump behaves very differently from one driving a crusher or conveyor with high starting torque. Starting method, expected number of starts per hour, and load inertia should be confirmed before ordering.",
      "Finally, consider environment. Dust, washdown, corrosive atmospheres and high ambient temperatures all demand a higher protection rating or specific construction. Specifying these correctly up front costs far less than a premature failure.",
    ],
  },
  {
    slug: "common-causes-of-industrial-pump-failure",
    title: "Common Causes of Industrial Pump Failure",
    category: "Mechanical Engineering",
    date: "2026-07-28",
    readingTime: "4 min read",
    excerpt:
      "Most pump failures trace back to a handful of avoidable conditions — cavitation, misalignment, seal selection and poor lubrication.",
    body: [
      "Pumps are among the most common sources of unplanned downtime in industrial plants, and the causes repeat across sectors.",
      "Cavitation remains the leading culprit. Insufficient net positive suction head causes vapour bubbles to collapse against the impeller, eroding metal and destroying efficiency. Suction-side restrictions and incorrect installation height are usual contributors.",
      "Misalignment between pump and driver is the second. Even small angular or parallel offsets place cyclic loads on bearings and mechanical seals. Laser alignment at installation and after any maintenance intervention pays for itself quickly.",
      "Mechanical seal selection is the third. A seal chosen without regard to fluid chemistry, temperature or solids content will fail early. Match the seal faces and elastomers to the actual duty, not to what was fitted last time.",
    ],
  },
  {
    slug: "building-a-practical-industrial-maintenance-programme",
    title: "Building a Practical Industrial Maintenance Programme",
    category: "Industrial Maintenance",
    date: "2026-07-09",
    readingTime: "6 min read",
    excerpt:
      "Reliability improves fastest when maintenance is targeted at critical equipment rather than spread evenly across the plant.",
    body: [
      "Maintenance programmes fail when they try to treat all equipment equally. The starting point is criticality: which machines stop production, threaten safety, or carry long replacement lead times?",
      "For critical rotating equipment, condition monitoring — vibration analysis, thermography, oil analysis — delivers early warning and lets you plan interventions instead of reacting to them.",
      "For the remainder, straightforward preventive routines are usually enough: lubrication schedules, alignment checks, insulation resistance testing and periodic inspection.",
      "The overlooked element is spares strategy. Knowing which components have long lead times, and holding or pre-qualifying those items, converts a multi-week outage into a single shift of work.",
    ],
  },
  {
    slug: "sourcing-industrial-spare-parts-in-africa",
    title: "Sourcing Industrial Spare Parts in Africa: What Actually Slows You Down",
    category: "Equipment Sourcing",
    date: "2026-06-21",
    readingTime: "5 min read",
    excerpt:
      "Lead times are rarely about manufacturing. Specification gaps, logistics and documentation cause most of the delay.",
    body: [
      "Procurement teams often assume that long lead times come from the factory. In practice, the delay usually begins earlier — with an incomplete specification.",
      "A part number, a nameplate photo, a drawing or a dimensional sketch turns a week of back-and-forth into a same-day quotation. Where the original equipment is obsolete, physical measurements and material details allow equivalents to be identified.",
      "Logistics and documentation are the second bottleneck. Import requirements, certificates of origin and inspection requirements differ by country and should be confirmed at quotation stage, not at the port.",
      "Finally, supplier reliability matters more than headline price. A slightly cheaper component that arrives late, or fails early, costs far more than the saving.",
    ],
  },
  {
    slug: "electrical-testing-that-prevents-unplanned-downtime",
    title: "Electrical Testing That Prevents Unplanned Downtime",
    category: "Electrical Engineering",
    date: "2026-06-03",
    readingTime: "4 min read",
    excerpt:
      "Insulation resistance, winding tests and thermography catch most electrical failures long before they stop production.",
    body: [
      "Electrical failures often announce themselves well in advance, provided someone is testing for the signs.",
      "Insulation resistance testing on motors and alternators tracks the gradual degradation of winding insulation caused by moisture, heat and contamination. Trending results over time is far more informative than a single reading.",
      "Winding resistance and polarisation index tests add detail, identifying turn-to-turn faults and moisture ingress before a machine fails under load.",
      "Thermographic inspection of panels, terminations and busbars is quick, non-invasive and consistently finds loose connections — one of the most common and most preventable causes of electrical downtime.",
    ],
  },
  {
    slug: "industrial-growth-and-equipment-demand-in-african-markets",
    title: "Industrial Growth and Equipment Demand in African Markets",
    category: "African Industrial Markets",
    date: "2026-05-15",
    readingTime: "5 min read",
    excerpt:
      "Mining, water infrastructure and food processing are driving sustained demand for rotating equipment and electrical systems.",
    body: [
      "Industrial activity across Africa continues to expand in sectors that are equipment-intensive: mining and mineral processing, water and wastewater infrastructure, agriculture and food processing, and energy generation.",
      "Each of these depends heavily on rotating equipment — motors, pumps, gearboxes — and on electrical distribution and control systems. That creates steady demand not only for new equipment, but for spare parts, repairs and maintenance support.",
      "The constraint is rarely demand. It is access: to correctly specified equipment, to technically competent suppliers, and to after-sales support that does not disappear once the invoice is paid.",
      "For manufacturers, this is an opportunity that requires local technical presence rather than catalogue distribution. For industrial customers, it means partners who understand the equipment, not only the price list.",
    ],
  },
  {
    slug: "gearbox-and-coupling-alignment-fundamentals",
    title: "Gearbox and Coupling Alignment Fundamentals",
    category: "Mechanical Engineering",
    date: "2026-04-30",
    readingTime: "4 min read",
    excerpt:
      "Alignment is the cheapest reliability improvement available on most drive trains — and the most frequently skipped.",
    body: [
      "Shaft alignment sits at the intersection of low cost and high impact. Misaligned drive trains consume more energy, load bearings unevenly, and shorten seal and coupling life.",
      "Flexible couplings tolerate misalignment; they do not correct it. Relying on coupling flexibility to absorb installation error simply transfers the load into bearings.",
      "Soft foot should be resolved before alignment begins. A machine that rocks on its base cannot hold alignment regardless of how carefully it is set.",
      "Finally, allow for thermal growth. Machines aligned cold will move as they reach operating temperature, and the target offsets should reflect that.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const categories = Array.from(new Set(posts.map((p) => p.category)));

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
