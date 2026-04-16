import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Pharmaceutical & Medical Corrosion Protection | Cortec Ireland",
  description:
    "Clean-room compatible, non-toxic VpCI® corrosion protection for medical devices, surgical instruments, and pharmaceutical processing equipment. FDA-compliant solutions.",
};

const solutions = [
  {
    name: "VpCI®-126 Films",
    description:
      "Clean, non-toxic VCI films for packaging medical devices, surgical instruments, and implant components. The VCI molecules leave no visible residue and do not affect biocompatibility. Available in custom sizes and configurations to suit medical device packaging requirements.",
    href: "/products/vci-films-bags",
  },
  {
    name: "VpCI® Emitters",
    description:
      "Contactless corrosion protection for instrument storage cabinets, equipment enclosures, and clean-room tool cribs. The emitters release VpCI molecules that protect all metal surfaces within the enclosed space. No particles, no outgassing of harmful substances, and no effect on clean-room classification.",
    href: "/products/vci-emitters",
  },
  {
    name: "EcoLine® Biobased Products",
    description:
      "USDA-certified biobased corrosion protection products made from renewable, plant-derived raw materials. Ideal for pharmaceutical and medical environments where environmental and toxicological profiles are closely scrutinised. Available as films, coatings, and rust preventatives.",
    href: "/products/coatings-rust-preventatives",
  },
];

const applications = [
  "Surgical instrument packaging and long-term sterile storage",
  "Orthopaedic implant component protection during manufacturing and warehousing",
  "Pharmaceutical processing equipment — reactors, mixers, and filling lines — during shutdown periods",
  "Stainless steel and titanium component protection in clean-room environments",
  "Medical device shipping protection for domestic and export markets",
  "Laboratory equipment and analytical instrument storage",
  "Hospital and clinical equipment preservation during facility upgrades",
];

export default function PharmaceuticalMedicalPage() {
  return (
    <main>
      <HeroSection
        title="Pharmaceutical & Medical"
        subtitle="Clean-room compatible, non-toxic corrosion protection for medical devices, surgical instruments, and pharmaceutical equipment — meeting the strictest compliance requirements."
        primaryCTA={{ text: "Discuss Your Requirements", href: "/contact" }}
        secondaryCTA={{ text: "View Compatible Products", href: "/products/vci-films-bags" }}
      />

      {/* The Corrosion Challenge */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Corrosion Challenge"
            subtitle="Corrosion protection in pharmaceutical and medical environments must meet uniquely stringent standards."
            centered={false}
          />
          <div className="max-w-4xl space-y-5 text-base sm:text-lg text-navy-900 leading-relaxed">
            <p>
              Medical devices and pharmaceutical equipment are manufactured from high-grade stainless steels, titanium alloys, and speciality metals — but even these corrosion-resistant materials are not immune. Chloride-containing cleaning agents, autoclave steam cycles, and long-term storage in humid conditions can all initiate localised corrosion, particularly in crevices, under gaskets, and at welded joints.
            </p>
            <p>
              The challenge is compounded by the regulatory environment. Any corrosion protection product used in contact with medical devices must be non-toxic, leave no harmful residue, and not compromise the cleanliness or biocompatibility of the protected surface. Traditional rust preventatives — oils, greases, and solvent-based coatings — are typically unsuitable because they require aggressive cleaning to remove and may leave trace contaminants.
            </p>
            <p>
              Cortec VpCI® products are specifically formulated to meet these requirements. The VCI molecules form a protective layer that is just a few molecules thick, invisible, and leaves no residue that would affect downstream processing or patient safety. Many Cortec products comply with FDA requirements for indirect food contact, providing an additional layer of regulatory assurance for medical and pharmaceutical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Cortec VpCI® products for pharmaceutical and medical corrosion protection."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            subtitle="Where Cortec VpCI® technology is used in pharmaceutical and medical settings."
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

      <CTABanner
        title="Tell Us About Your Corrosion Challenge"
        subtitle="Our corrosion protection specialists will recommend the right Cortec solution for your pharmaceutical or medical application."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </main>
  );
}
