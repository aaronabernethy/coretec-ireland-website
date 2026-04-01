import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import IndustryCard from "@/components/IndustryCard";

export const metadata: Metadata = {
  title: "Industries We Serve | Cortec Ireland",
  description:
    "Cortec Ireland provides tailored VpCI® corrosion protection solutions across automotive, marine, oil & gas, aerospace, electronics, construction, pharmaceutical, and agri-food industries.",
};

const industries = [
  {
    title: "Automotive",
    description:
      "VCI packaging protects stamped parts, machined components, and assemblies from humidity and condensation during transit and storage.",
    href: "/industries/automotive",
  },
  {
    title: "Marine",
    description:
      "Comprehensive corrosion solutions for vessels, offshore equipment, and marine hardware exposed to saltwater and aggressive marine atmospheres.",
    href: "/industries/marine",
  },
  {
    title: "Oil & Gas",
    description:
      "Pipeline preservation, vessel mothballing, and equipment protection during shutdowns — without hazardous chemicals.",
    href: "/industries/oil-gas",
  },
  {
    title: "Aerospace",
    description:
      "Zero-residue corrosion protection for turbine blades, landing gear, avionics, and structural parts during manufacturing and transit.",
    href: "/industries/aerospace",
  },
  {
    title: "Electronics",
    description:
      "Contactless VpCI emitters protect circuit boards, contacts, and sensitive components inside electrical enclosures and control cabinets.",
    href: "/industries/electronics",
  },
  {
    title: "Construction",
    description:
      "MCI® migrating corrosion inhibitor technology extends the service life of reinforced concrete structures by 3–5 times.",
    href: "/industries/construction",
  },
  {
    title: "Pharmaceutical & Medical",
    description:
      "Clean-room compatible, non-toxic corrosion protection for medical devices, surgical instruments, and pharmaceutical equipment.",
    href: "/industries/pharmaceutical-medical",
  },
  {
    title: "Agri-Food",
    description:
      "Food-safe, non-toxic corrosion protection for agricultural machinery, food processing equipment, and storage facilities.",
    href: "/industries/agri-food",
  },
];

const valueProps = [
  "Free initial corrosion assessment and product recommendation from our specialist engineers",
  "ISO-accredited testing and verification to confirm product performance for your application",
  "Full Cortec product range available — we are Ireland's exclusive authorised distributor",
  "Ongoing technical support and training for your maintenance and operations teams",
];

export default function IndustriesPage() {
  return (
    <main>
      <HeroSection
        title="Industries We Serve"
        subtitle="Corrosion affects every sector differently. We provide tailored Cortec VpCI® solutions for your specific industry challenges — backed by ISO-accredited testing and specialist technical support."
        primaryCTA={{ text: "Talk to an Engineer", href: "/contact" }}
        secondaryCTA={{ text: "View All Products", href: "/products" }}
      />

      {/* Industries Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sector-Specific Corrosion Solutions"
            subtitle="Every industry has unique corrosion challenges. Select your sector to see how Cortec VpCI® technology addresses your specific needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                description={industry.description}
                href={industry.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Value Props */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Whatever Your Industry, You Get:"
            subtitle="Cortec Ireland delivers the same high standard of service and expertise across every sector we work with."
          />
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-5">
              {valueProps.map((prop, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-base sm:text-lg text-navy-900 leading-relaxed">
                    {prop}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        title="Tell Us About Your Corrosion Challenge"
        subtitle="Our corrosion protection specialists will recommend the right Cortec solution for your industry."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
