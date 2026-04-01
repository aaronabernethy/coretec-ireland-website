import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Agri-Food Corrosion Protection | Cortec Ireland",
  description:
    "Food-safe, non-toxic corrosion protection for agricultural machinery, food processing equipment, and storage facilities. Cortec VpCI® and EcoLine® solutions for the agri-food sector.",
};

const solutions = [
  {
    name: "EcoLine® Biobased Products",
    description:
      "USDA-certified biobased corrosion inhibitors derived from renewable, plant-based raw materials. Safe for use in food-adjacent environments. Available as rust preventatives, lubricants, and coatings for equipment that must meet food-safety and environmental compliance standards.",
    href: "/products/coatings-rust-preventatives",
  },
  {
    name: "VpCI® Films",
    description:
      "VCI-infused packaging films for protecting metal components, spare parts, and machinery during seasonal storage. Wrap equipment at the end of the season and it stays protected until spring — no oils or greases to clean off before use. Available in rolls, bags, and custom-cut sheets.",
    href: "/products/vci-films-bags",
  },
  {
    name: "VpCI® Emitters",
    description:
      "Self-adhesive emitter devices for protecting electrical control panels, sensor housings, and instrument enclosures on food processing lines. Contactless protection means no risk of contamination — the emitter never touches the equipment or the product.",
    href: "/products/vci-emitters",
  },
  {
    name: "VpCI®-414 Cleaner/Corrosion Inhibitor",
    description:
      "Water-based, biodegradable cleaner that removes existing rust and deposits while leaving behind a thin VpCI protective film. Ideal for cleaning and protecting food processing equipment during changeovers and shutdown maintenance. Non-toxic and free from hazardous solvents.",
    href: "/products/liquids-additives",
  },
];

const applications = [
  "Agricultural machinery winterisation — tractors, combines, tillage equipment, and implements",
  "Dairy processing equipment protection during seasonal downtime and CIP cycles",
  "Meat and poultry processing line maintenance — conveyors, cutters, and packaging equipment",
  "Grain storage facility protection — silos, augers, and drying equipment",
  "Brewery and beverage equipment — fermentation vessels, kegging lines, and bottling machinery",
  "Cold storage and refrigeration system metal component protection",
  "Spare parts and replacement component warehouse storage",
];

export default function AgriFoodPage() {
  return (
    <main>
      <HeroSection
        title="Agri-Food"
        subtitle="Food-safe, non-toxic corrosion protection for agricultural machinery, food processing equipment, and storage facilities — keeping Ireland's agri-food sector running."
        primaryCTA={{ text: "Get a Recommendation", href: "/contact" }}
        secondaryCTA={{ text: "View EcoLine Products", href: "/products/coatings-rust-preventatives" }}
      />

      {/* The Corrosion Challenge */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Corrosion Challenge"
            subtitle="Moisture, chemicals, and seasonal use patterns make corrosion a constant threat in agri-food operations."
            centered={false}
          />
          <div className="max-w-4xl space-y-5 text-base sm:text-lg text-navy-900 leading-relaxed">
            <p>
              The agri-food sector operates in conditions that are inherently corrosive. Agricultural machinery sits idle for months between seasons, exposed to moisture and temperature swings in unheated sheds. Food processing equipment undergoes daily washdowns with water, steam, and chemical cleaning agents that strip away protective coatings and leave bare metal vulnerable.
            </p>
            <p>
              Traditional corrosion prevention in this sector often means coating equipment with oil or grease before storage — a messy, time-consuming process that requires equally time-consuming removal before the equipment can be used again. In food processing, the challenge is even greater: any corrosion protection product must be non-toxic, food-safe, and leave no residue that could contaminate the product.
            </p>
            <p>
              Cortec offers a range of products specifically suited to agri-food requirements. EcoLine biobased products are made from renewable, plant-derived materials and carry USDA BioPreferred certification. VpCI films and emitters provide clean, dry, contactless protection that eliminates the need for oils and greases entirely. And VpCI-414 cleaner combines equipment cleaning with corrosion protection in a single, non-toxic step.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Food-safe Cortec products for the agri-food sector."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.name}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {solution.name}
                </h3>
                <p className="text-base text-navy-900 leading-relaxed mb-4">
                  {solution.description}
                </p>
                <Link
                  href={solution.href}
                  className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                >
                  View product range
                  <svg
                    className="ml-1.5 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Key Applications"
            subtitle="Where Cortec products are used across the agri-food sector."
            centered={false}
          />
          <ul className="max-w-4xl space-y-4">
            {applications.map((application, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-base sm:text-lg text-navy-900 leading-relaxed">
                  {application}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case Study Placeholder */}
      <section className="bg-grey-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-dashed border-steel-500 rounded-lg p-8 text-center">
            <p className="text-lg font-semibold text-navy-900">
              [CASE STUDY — to be added: project in agri-food industry]
            </p>
            <p className="mt-2 text-base text-steel-500">
              We are preparing a detailed case study from an agri-food client. Contact us to discuss your specific requirements in the meantime.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Tell Us About Your Corrosion Challenge"
        subtitle="Our corrosion protection specialists will recommend the right Cortec solution for your agri-food application."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </main>
  );
}
