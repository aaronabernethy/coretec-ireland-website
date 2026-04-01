import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Marine Corrosion Protection | Cortec Ireland",
  description:
    "Cortec VpCI® corrosion protection for marine vessels, offshore equipment, and harbour infrastructure. Solutions for layup, storage, and active service in saltwater environments.",
};

const solutions = [
  {
    name: "VpCI® Coatings",
    description:
      "High-performance, VpCI-enhanced coatings for above-waterline surfaces, deck machinery, and superstructure protection. These coatings combine barrier protection with vapour-phase corrosion inhibition, reaching into crevices and hard-to-coat areas that conventional coatings miss.",
    href: "/products/coatings-rust-preventatives",
  },
  {
    name: "VpCI®-705 Pipeline & System Protection",
    description:
      "Liquid VpCI additive for treating ballast tanks, cooling systems, and internal pipework. Provides multi-metal protection and is suitable for systems containing both ferrous and non-ferrous metals. Biocide-free formulation.",
    href: "/products/liquids-additives",
  },
  {
    name: "MilCorr® Shrink Film",
    description:
      "Military-grade VCI shrink wrap for long-term outdoor storage and layup. UV-stabilised, waterproof, and infused with VpCI molecules that protect enclosed equipment from corrosion for years. Ideal for mothballing vessels, engines, and deck equipment.",
    href: "/products/vci-films-bags",
  },
  {
    name: "VpCI® Emitters for Electrical Systems",
    description:
      "Self-adhesive VCI emitter cups and strips for protecting switchboards, navigation electronics, and control panels. Place inside the enclosure — no wiring or power required. The VCI vapour protects all metal surfaces within the enclosed space.",
    href: "/products/vci-emitters",
  },
];

const applications = [
  "Vessel layup and mothballing — engines, generators, and auxiliary systems",
  "Offshore platform equipment during decommissioning or extended downtime",
  "Marine hardware storage — winches, davits, anchor systems, and chain lockers",
  "Ballast tank and void space corrosion treatment",
  "Navigation and communications electronics in sealed enclosures",
  "Spare parts storage in port warehouses and onboard stores",
  "Yacht and leisure craft winterisation programs",
];

export default function MarinePage() {
  return (
    <main>
      <HeroSection
        title="Marine"
        subtitle="Defending vessels, offshore assets, and marine infrastructure against the most aggressive corrosion environment on earth."
        primaryCTA={{ text: "Discuss Your Application", href: "/contact" }}
        secondaryCTA={{ text: "View Marine Products", href: "/products/coatings-rust-preventatives" }}
      />

      {/* The Corrosion Challenge */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Corrosion Challenge"
            subtitle="Saltwater, humidity, and marine atmospheres create a relentless corrosion environment."
            centered={false}
          />
          <div className="max-w-4xl space-y-5 text-base sm:text-lg text-navy-900 leading-relaxed">
            <p>
              Marine environments are uniquely destructive. Salt-laden air accelerates corrosion on exposed surfaces. Condensation forms inside enclosed spaces as temperatures fluctuate between day and night. Bilge water, ballast tanks, and void spaces trap moisture in areas that are almost impossible to inspect or maintain regularly.
            </p>
            <p>
              During layup periods — whether planned maintenance, seasonal downtime, or decommissioning — the corrosion risk intensifies. Engines, generators, hydraulics, and electrical systems sit idle without the heat and circulation that normally help keep moisture at bay. Without active protection, pitting corrosion can render precision components unserviceable within months.
            </p>
            <p>
              Cortec VpCI® technology provides comprehensive protection across all these scenarios. VpCI molecules reach into crevices, threaded connections, and internal surfaces that conventional coatings and oils cannot access. The protection is self-replenishing — as long as the VCI source remains in place, the molecular barrier continuously renews itself on the metal surface.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Cortec VpCI® products for above-waterline and below-waterline marine protection."
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
            subtitle="Where Cortec VpCI® technology is deployed in the marine sector."
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
              [CASE STUDY — to be added: project in marine industry]
            </p>
            <p className="mt-2 text-base text-steel-500">
              We are preparing a detailed case study from a marine client. Contact us to discuss your specific requirements in the meantime.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Tell Us About Your Corrosion Challenge"
        subtitle="Our corrosion protection specialists will recommend the right Cortec solution for your marine application."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </main>
  );
}
