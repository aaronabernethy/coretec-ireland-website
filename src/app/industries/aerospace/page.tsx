import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Aerospace Corrosion Protection | Cortec Ireland",
  description:
    "Zero-residue VpCI® corrosion protection for turbine blades, landing gear, avionics, and structural components. MilCorr-certified solutions for aerospace and defence applications.",
};

const solutions = [
  {
    name: "VpCI®-126 Films",
    description:
      "Multi-metal VCI films that protect precision aerospace components during storage and transit without leaving residue. Parts can be unpacked and installed directly — no cleaning step required. Protects ferrous metals, aluminium, copper, and their alloys simultaneously.",
    href: "/products/vci-films-bags",
  },
  {
    name: "MilCorr® Shrink Films",
    description:
      "Military-specification VCI shrink film for long-term outdoor storage of engines, landing gear assemblies, and airframe sections. UV-stabilised for extended outdoor exposure. Meets MIL-PRF-22019 requirements for military preservation packaging.",
    href: "/products/vci-films-bags",
  },
  {
    name: "VpCI® Emitters",
    description:
      "Self-adhesive emitter devices for protecting avionics bays, instrument panels, and sealed electronics compartments. The VpCI vapour reaches all metal surfaces within the enclosed space without any contact, wiring, or power source.",
    href: "/products/vci-emitters",
  },
  {
    name: "Nano VpCI® Coatings",
    description:
      "Ultra-thin VpCI-enhanced coatings that provide corrosion protection at coating thicknesses measured in microns. Will not affect dimensional tolerances on precision-machined components. Suitable for turbine blade roots, actuator housings, and fastener bores.",
    href: "/products/coatings-rust-preventatives",
  },
];

const applications = [
  "Turbine blade and engine component protection during overhaul and storage",
  "Landing gear assemblies in preservation during scheduled maintenance",
  "Avionics and flight control electronics in sealed bays and shipping containers",
  "Structural airframe components — stringers, ribs, and skins — during manufacturing hold periods",
  "Fasteners, bearings, and precision hardware in warehouse storage",
  "Military and defence equipment mothballing and long-term preservation",
  "Tooling and ground support equipment protection between deployments",
];

export default function AerospacePage() {
  return (
    <main>
      <HeroSection
        title="Aerospace"
        subtitle="Zero-residue corrosion protection for precision components — from turbine blades to avionics, during manufacturing, storage, and transit."
        primaryCTA={{ text: "Discuss Your Application", href: "/contact" }}
        secondaryCTA={{ text: "View Aerospace Products", href: "/products/vci-films-bags" }}
      />

      {/* The Corrosion Challenge */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Corrosion Challenge"
            subtitle="Precision components demand corrosion protection that is as exacting as the parts themselves."
            centered={false}
          />
          <div className="max-w-4xl space-y-5 text-base sm:text-lg text-navy-900 leading-relaxed">
            <p>
              Aerospace components are manufactured to tolerances measured in thousandths of a millimetre. Even microscopic corrosion pitting can render a turbine blade, bearing surface, or actuator housing unserviceable. The cost of a scrapped aerospace part is orders of magnitude higher than in other industries — and the safety implications of undetected corrosion are severe.
            </p>
            <p>
              Traditional preservation methods — barrier greases, wax coatings, vacuum packaging — all have drawbacks. Greases and waxes must be completely removed before installation, requiring solvents and careful cleaning that adds time and introduces contamination risk. Vacuum packaging is expensive and puncture-prone during handling.
            </p>
            <p>
              Cortec VpCI® technology provides a fundamentally different approach. VCI molecules form an invisible, self-replenishing molecular layer on metal surfaces — just a few molecules thick. This layer provides effective corrosion protection but leaves absolutely no residue that could affect tolerances, paint adhesion, or subsequent processing. Components are protected inside the packaging and ready to install the moment they are unwrapped.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Cortec VpCI® products meeting the exacting requirements of aerospace and defence."
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
            subtitle="Where Cortec VpCI® technology is deployed across aerospace and defence."
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
              [CASE STUDY — to be added: project in aerospace industry]
            </p>
            <p className="mt-2 text-base text-steel-500">
              We are preparing a detailed case study from an aerospace client. Contact us to discuss your specific requirements in the meantime.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Tell Us About Your Corrosion Challenge"
        subtitle="Our corrosion protection specialists will recommend the right Cortec solution for your aerospace application."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </main>
  );
}
