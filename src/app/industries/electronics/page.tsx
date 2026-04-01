import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Electronics Corrosion Protection | Cortec Ireland",
  description:
    "Contactless VpCI® emitters protect circuit boards, contacts, and sensitive electronics inside control cabinets, switchgear, and enclosures. Prevent equipment failure and costly downtime.",
};

const solutions = [
  {
    name: "VpCI®-101 Emitters",
    description:
      "Compact, self-adhesive emitter cups that release VpCI molecules into enclosed spaces. Designed for control cabinets, junction boxes, and instrument enclosures. Each emitter protects up to 1 cubic metre of enclosed volume for 12–24 months. Simply peel and stick — no wiring, no power, no maintenance.",
    href: "/products/vci-emitters",
  },
  {
    name: "VpCI®-105 Emitters",
    description:
      "Higher-capacity cylindrical emitters for larger enclosures, switchgear cabinets, and electrical rooms. Protects up to 5 cubic metres of enclosed space. The controlled-release formulation provides consistent VpCI vapour concentration throughout the protected volume.",
    href: "/products/vci-emitters",
  },
  {
    name: "VpCI®-111 Strips",
    description:
      "Thin, flexible VCI-impregnated foam strips that can be cut to size and placed inside narrow enclosures, cable trays, and terminal boxes. Ideal for retrofit applications where space is limited. Provides the same contactless corrosion protection as emitter cups in a more adaptable format.",
    href: "/products/vci-emitters",
  },
  {
    name: "Cor-Pak® VpCI® Pouches",
    description:
      "Breathable VCI pouches for protecting electronics during shipping and storage. Place inside the packaging alongside circuit boards, connectors, and assemblies. The VCI vapour permeates through the pouch material and saturates the enclosed air space within hours.",
    href: "/products/vci-emitters",
  },
];

const applications = [
  "Control cabinets and PLC enclosures in manufacturing plants",
  "Electrical switchgear and distribution panels in humid or coastal locations",
  "Telecommunications equipment in outdoor cabinets and base stations",
  "Data centre power distribution and UPS equipment",
  "HVAC control panels and building management system enclosures",
  "Shipping protection for assembled PCBs, connectors, and electronic modules",
  "Wind turbine nacelle electronics and transformer protection",
];

export default function ElectronicsPage() {
  return (
    <main>
      <HeroSection
        title="Electronics"
        subtitle="Contactless corrosion protection that keeps electrical systems, control cabinets, and sensitive electronics operational — without any contact with components."
        primaryCTA={{ text: "Get a Recommendation", href: "/contact" }}
        secondaryCTA={{ text: "View VpCI Emitters", href: "/products/vci-emitters" }}
      />

      {/* The Corrosion Challenge */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Corrosion Challenge"
            subtitle="Electrical and electronic equipment failures often trace back to one root cause: corrosion."
            centered={false}
          />
          <div className="max-w-4xl space-y-5 text-base sm:text-lg text-navy-900 leading-relaxed">
            <p>
              Inside every electrical enclosure, moisture from temperature cycling condenses on metal contacts, relay pins, circuit board traces, and terminal connections. Over time, this moisture — combined with airborne contaminants like chlorides, sulphur compounds, and industrial pollutants — creates corrosion that increases contact resistance, causes intermittent faults, and eventually leads to complete equipment failure.
            </p>
            <p>
              The problem is particularly acute in coastal, industrial, and humid environments, but it affects indoor installations too. Air conditioning systems cycle enclosure temperatures above and below dew point. Washdown procedures in food and pharmaceutical plants introduce moisture directly. Even sealed enclosures breathe as barometric pressure changes, drawing in humid air.
            </p>
            <p>
              Cortec VpCI® emitters solve this problem elegantly. A small emitter device placed inside the enclosure releases VpCI molecules that form a protective molecular layer on all exposed metal surfaces — contacts, pins, traces, bus bars, and connectors. The protection is contactless (the emitter never touches the components), requires no power, and does not affect electrical conductivity or signal integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Cortec VpCI® emitters and pouches for protecting electronics and electrical systems."
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
                  View product details
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
            subtitle="Where Cortec VpCI® emitters are deployed to protect electronics and electrical systems."
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
              [CASE STUDY — to be added: project in electronics industry]
            </p>
            <p className="mt-2 text-base text-steel-500">
              We are preparing a detailed case study from an electronics client. Contact us to discuss your specific requirements in the meantime.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Tell Us About Your Corrosion Challenge"
        subtitle="Our corrosion protection specialists will recommend the right VpCI emitter for your electronics application."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </main>
  );
}
