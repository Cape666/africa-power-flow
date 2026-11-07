export type PostSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: { heading: string; paragraphs: string[] }[];
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  published: boolean;
  body?: string[];
  seoTitle?: string;
  keywords?: string[];
  imageAlt?: string;
  introduction?: string[];
  sections?: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "choosing-the-right-industrial-electric-motor",
    title: "How to Choose the Right Industrial Electric Motor: 7 Factors to Consider",
    category: "Electrical Engineering",
    date: "2026-11-06",
    readingTime: "8 min read",
    excerpt:
      "Learn how to choose the right industrial electric motor by comparing power, speed, torque, efficiency and operating conditions.",
    published: true,
    seoTitle: "How to Choose the Right Industrial Electric Motor",
    keywords: [
      "choosing the right industrial electric motor",
      "industrial motor selection",
      "electric motor specifications",
      "industrial electric motor suppliers",
    ],
    imageAlt: "Industrial electric motor beside its equipment control systems",
    introduction: [
      "Choosing the right industrial electric motor is important for equipment reliability, energy efficiency and operating costs. A motor that is incorrectly selected for its application may consume more energy than necessary, experience repeated failures or struggle to deliver the required performance.",
      "For maintenance teams, engineers, procurement professionals and industrial operators, motor selection should involve more than comparing prices or choosing a motor with the same power rating as the existing unit.",
      "The right choice depends on the driven equipment, operating conditions, electrical supply, speed and torque requirements, installation dimensions and expected operating hours.",
      "This guide explains seven important factors to consider when choosing an industrial electric motor.",
    ],
    sections: [
      {
        heading: "1. Understand the Application",
        paragraphs: [
          "Start by identifying what the motor needs to drive. Different applications place different demands on a motor.",
          "For example, pumps, fans, conveyors, compressors and other industrial machines may have different starting requirements, load characteristics and operating cycles.",
          "Consider the following questions:",
        ],
        bullets: [
          "What equipment will the motor drive?",
          "Will the load remain constant or vary during operation?",
          "Does the application require frequent starting and stopping?",
          "Will the motor operate continuously or intermittently?",
          "Are there special requirements for the driven equipment?",
        ],
      },
      {
        heading: "2. Confirm the Required Power Rating",
        paragraphs: [
          "The motor must provide sufficient power for the driven equipment under its expected operating conditions.",
          "Motor power is commonly expressed in kilowatts (kW). However, selecting a motor based only on the power rating can lead to problems if the load characteristics and operating requirements are not properly considered.",
          "An undersized motor may struggle under load, overheat or trip during operation. An oversized motor may increase the initial purchase cost and may operate inefficiently if poorly matched to the application.",
          "Check the equipment requirements and existing motor nameplate where available. Confirm the required power with the relevant technical specifications rather than relying on assumptions.",
        ],
      },
      {
        heading: "3. Check Speed and Torque Requirements",
        paragraphs: [
          "Motor speed and torque determine how the motor delivers mechanical power to the driven equipment.",
          "Motor speed is usually expressed in revolutions per minute (rpm). The required speed depends on the application and may be influenced by the motor's design, supply frequency, number of poles, load and any connected gearbox or variable-speed drive.",
          "Torque is the turning force available at the motor shaft. Applications that require high starting torque or experience changing loads may need particular attention during selection.",
          "Before choosing a motor, confirm:",
        ],
        bullets: [
          "Required operating speed",
          "Starting torque and starting conditions",
          "Expected load during operation",
          "Whether speed control is required",
          "Compatibility with any gearbox, coupling or variable-speed drive",
        ],
        subsections: [
          {
            heading: "Match the application's performance requirements",
            paragraphs: [
              "A suitable motor must match the application's actual performance requirements, not just its rated power.",
            ],
          },
        ],
      },
      {
        heading: "4. Verify the Electrical Supply",
        paragraphs: [
          "The motor must be compatible with the available electrical supply and the site's electrical installation.",
          "Important details include:",
        ],
        bullets: [
          "Rated voltage",
          "Supply frequency, such as 50 Hz or 60 Hz",
          "Single-phase or three-phase supply, as applicable",
          "Rated current",
          "Starting method and starting-current limitations",
          "Compatibility with the motor control and protection equipment",
        ],
        subsections: [
          {
            heading: "Check supply and drive compatibility",
            paragraphs: [
              "Voltage and frequency differences can affect motor performance. Starting current may also be important in facilities where the electrical supply has limited capacity.",
              "Where a variable-speed drive is involved, confirm that the motor and drive are suitable for the intended operating range and installation.",
            ],
          },
        ],
      },
      {
        heading: "5. Consider the Operating Environment",
        paragraphs: [
          "Industrial motors often operate in demanding environments. Dust, moisture, high ambient temperatures, corrosive conditions and restricted ventilation can affect motor performance and service life.",
          "Review the following specifications:",
        ],
        subsections: [
          {
            heading: "Ingress protection (IP)",
            paragraphs: [
              "The required protection against the entry of solid objects and water depends on the installation environment.",
            ],
          },
          {
            heading: "Insulation class and temperature",
            paragraphs: [
              "Check that the motor's thermal characteristics are suitable for the operating conditions.",
            ],
          },
          {
            heading: "Cooling and ventilation",
            paragraphs: [
              "Restricted airflow or excessive ambient temperature can increase the risk of overheating.",
            ],
          },
          {
            heading: "Hazardous areas",
            paragraphs: [
              "If the installation is classified as hazardous, the motor must meet the applicable area classification and certification requirements.",
              "The correct environmental specification helps reduce the risk of premature failure and unnecessary maintenance.",
            ],
          },
        ],
      },
      {
        heading: "6. Compare Energy Efficiency and Total Cost",
        paragraphs: [
          "The purchase price is only one part of the cost of owning an industrial electric motor.",
          "For motors that operate for long periods, electricity consumption can represent a significant portion of the total lifecycle cost.",
          "When comparing suitable options, consider:",
        ],
        bullets: [
          "Motor efficiency at the expected operating load",
          "Annual operating hours",
          "Electricity costs",
          "Maintenance requirements",
          "Expected service life",
          "Initial purchase and installation costs",
        ],
        subsections: [
          {
            heading: "Compare options using realistic operating assumptions",
            paragraphs: [
              "A motor with a higher purchase price may offer better long-term value if it provides meaningful energy savings over its operating life.",
              "However, the best option depends on the actual duty cycle, load profile, installation and operating costs. Compare alternatives using realistic operating assumptions rather than efficiency claims alone.",
            ],
          },
        ],
      },
      {
        heading: "7. Confirm Installation Compatibility and Supplier Support",
        paragraphs: [
          "Before ordering a replacement motor, confirm that it will fit the existing installation and meet the equipment requirements.",
          "Check the motor frame size, mounting arrangement, shaft dimensions, rotation requirements, terminal box position and coupling compatibility. Depending on the application, foundation dimensions and available installation space may also need to be checked.",
          "For replacement projects, collect the existing motor's nameplate details, photographs, dimensions and equipment information wherever possible.",
          "Working with a supplier that can help verify specifications and identify suitable alternatives can reduce the risk of ordering an incompatible motor.",
          "For specialist applications, additional engineering review may be required before the replacement is approved.",
        ],
      },
      {
        heading: "Industrial Electric Motor Selection Checklist",
        paragraphs: [
          "Before requesting a quotation, prepare as much of the following information as possible:",
        ],
        bullets: [
          "Application and driven equipment",
          "Required motor power in kW",
          "Rated voltage and frequency",
          "Operating speed in rpm",
          "Phase and rated current, where available",
          "Mounting arrangement and frame size",
          "Shaft and coupling dimensions",
          "Environmental conditions and required IP rating",
          "Starting method or variable-speed drive requirements",
          "Existing motor nameplate photograph",
          "Quantity required and delivery location",
        ],
        subsections: [
          {
            heading: "Share the information available",
            paragraphs: [
              "Not every application will require every item, but providing accurate information makes it easier to identify a suitable motor and compare quotations.",
            ],
          },
        ],
      },
      {
        heading: "Frequently Asked Questions",
        subsections: [
          {
            heading: "How do I choose the correct kW rating for an industrial electric motor?",
            paragraphs: [
              "Start with the driven equipment's power and operating requirements. Consider the load profile, starting conditions, duty cycle and any applicable design requirements. Confirm the selection against the equipment specifications and obtain technical assistance when needed.",
            ],
          },
          {
            heading: "Can I replace an existing motor with one that has the same kW rating?",
            paragraphs: [
              "Not automatically. The replacement must also be compatible with the voltage, frequency, speed, mounting arrangement, shaft dimensions, environmental conditions and application requirements.",
            ],
          },
          {
            heading: "Is a higher-efficiency motor always the best option?",
            paragraphs: [
              "Not necessarily. Efficiency is important, particularly for motors with long operating hours, but the final decision should also consider the application, operating load, lifecycle cost, installation compatibility and technical requirements.",
            ],
          },
          {
            heading: "What information should I provide when requesting an industrial motor quotation?",
            paragraphs: [
              "Provide the motor nameplate details, application, power rating, voltage, frequency, speed, mounting details, operating environment, quantity and delivery location. Photographs and dimensional information are useful when replacing an existing motor.",
            ],
          },
        ],
      },
      {
        heading: "Need Help Sourcing an Industrial Electric Motor?",
        paragraphs: [
          "Selecting a suitable industrial motor starts with understanding the application and confirming the technical requirements.",
          "Kilimanjaro Engineering helps industrial customers source electrical and mechanical equipment by working with suitable suppliers and service providers to develop the right commercial solution. If you need a new motor, a replacement unit or assistance identifying suitable sourcing options, share your requirements so the available options can be assessed.",
        ],
      },
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
    published: false,
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
    published: false,
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
    published: false,
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
    published: false,
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
    published: false,
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
    published: false,
  },
];

export const publishedPosts = posts.filter((post) => post.published);

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug && post.published);
}

export const categories = Array.from(new Set(publishedPosts.map((post) => post.category)));

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}