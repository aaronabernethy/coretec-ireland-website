import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import IndustryCard from "@/components/IndustryCard";
import { industryCategories } from "@/data/industryCategories";

export const metadata: Metadata = {
  title: "Industries We Serve | Cortec Ireland",
  description:
    "Cortec Ireland provides tailored VpCI® corrosion protection solutions across aerospace, mining, marine, military, MRO, automotive, basic metals, oil & gas, desalination, transportation, food & pharmaceutical and more.",
};

const industries = industryCategories.map((industry) => ({
  title: industry.name,
  description: industry.cardDescription,
  href: `/industries/${industry.slug}`,
}));

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
        backgroundImage="/images/applications/film-wrap-crew-2.webp"
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
