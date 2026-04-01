import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Automotive Corrosion Protection | Cortec Ireland",
  description:
    "VCI packaging solutions for the automotive industry. Protect stamped parts, machined components, tools, and assemblies from corrosion during transit and storage with Cortec VpCI® technology.",
};

const solutions = [
  {
    name: "VpCI®-126 Films",
    description:
      "Multi-metal VCI stretch and shrink films for wrapping automotive parts, sub-assemblies, and palletised shipments. Provides up to 24 months of corrosion protection in sealed packaging.",
    href: "/products/vci-films-bags",
  },
  {
    name: "VpCI®-146 Papers",
    description:
      "VCI-impregnated kraft papers for interleaving between stamped panels, wrapping machined components, and lining boxes. Ideal for protecting ferrous and non-ferrous metal parts simultaneously.",
    href: "/products/vci-papers",
  },
  {
    name: "VpCI® Emitters",
    description:
      "Self-adhesive VCI emitter devices for protecting parts stored in enclosed containers, tool cribs, and shipping crates. No contact with the metal surface required.",
    href: "/products/vci-emitters",
  },
  {
    name: "EcoShield® Biobased Films",
    description:
      "USDA-certified biobased VCI films made from renewable resources. Deliver the same corrosion protection as conventional VCI films while helping automotive manufacturers meet sustainability and carbon reduction targets.",
    href: "/products/vci-films-bags",
  },
];

const applications = [
  "Stamped body panels and structural pressings during inter-plant shipment",
  "Machined engine and transmission components in warehouse storage",
  "Tooling and dies during seasonal shutdowns",
  "Brake rotors, drums, and cast iron components on distributor shelves",
  "Fasteners, springs, and small parts in bulk packaging",
  "Finished assemblies during export shipment in containers",
  "Electric vehicle battery tray and motor housing protection",
];

export default function AutomotivePage() {
  return (
    <main>
      <HeroSection
        title="Automotive"
        subtitle="Protecting metal parts from corrosion throughout the automotive supply chain — from stamping plant to assembly line to aftermarket warehouse."
        primaryCTA={{ text: "Get a Recommendation", href: "/contact" }}
        secondaryCTA={{ text: "View VCI Packaging", href: "/products/vci-films-bags" }}
      />

      {/* The Corrosion Challenge */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Corrosion Challenge"
            subtitle="Why automotive manufacturers lose millions to in-process corrosion every year."
            centered={false}
          />
          <div className="max-w-4xl space-y-5 text-base sm:text-lg text-navy-900 leading-relaxed">
            <p>
              Metal parts in the automotive supply chain are constantly at risk. Humidity fluctuations in warehouses, condensation inside shipping containers, and temperature swings during transit all create conditions where corrosion starts within hours — long before parts reach the assembly line.
            </p>
            <p>
              Traditional corrosion prevention methods — oil coatings, wax dips, desiccants — create their own problems. Oil-coated parts must be cleaned before assembly, adding cost and chemical waste. Desiccants only absorb moisture rather than actively protecting metal surfaces. And neither approach addresses the full range of metals used in modern vehicles: steel, aluminium, zinc, and copper alloys all need simultaneous protection.
            </p>
            <p>
              Cortec VpCI® (Vapour Phase Corrosion Inhibitor) technology solves these problems. VCI molecules vaporise from the packaging material and form an invisible, self-replenishing molecular layer on all exposed metal surfaces. No oils to clean off. No residue to affect paint adhesion. Parts come out of the packaging ready to use.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Cortec VpCI® products engineered for automotive corrosion protection."
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
            subtitle="Where Cortec VpCI® technology is used across the automotive sector."
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
              [CASE STUDY — to be added: project in automotive industry]
            </p>
            <p className="mt-2 text-base text-steel-500">
              We are preparing a detailed case study from an automotive client. Contact us to discuss your specific requirements in the meantime.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Tell Us About Your Corrosion Challenge"
        subtitle="Our corrosion protection specialists will recommend the right Cortec solution for your automotive application."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </main>
  );
}
