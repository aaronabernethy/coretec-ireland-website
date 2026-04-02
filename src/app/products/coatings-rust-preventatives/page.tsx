import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coatings & Rust Preventatives",
  description:
    "Cortec VpCI coatings and rust preventatives for long-term surface protection. Removable and permanent options in water-based and solvent-based formulations. Available from Cortec Ireland.",
};

const featuredProducts = [
  {
    name: "VpCI\u00AE-368",
    description:
      "Removable VpCI coating that forms a tough, transparent protective film. Easily peeled or washed off when protection is no longer needed. Ideal for machined surfaces, tooling and precision components that must remain clean and ready for use after depreservation.",
  },
  {
    name: "VpCI\u00AE-369",
    description:
      "Non-removable, permanent VpCI coating for long-term outdoor exposure and aggressive environments. Provides a durable barrier against moisture, salt spray, industrial pollutants and UV radiation. Suitable for structural steel, equipment frames and outdoor installations.",
  },
  {
    name: "VpCI\u00AE-391 Water-Based Coating",
    description:
      "Water-based VpCI coating with low VOC content. Provides excellent corrosion protection without the environmental and safety concerns of solvent-based products. Meets strict regulatory requirements for enclosed space application and environmentally sensitive areas.",
  },
  {
    name: "Nano VpCI\u00AE Coatings",
    description:
      "Advanced nanotechnology-enhanced coatings that combine an ultra-thin barrier with VpCI vapour phase protection. Extremely thin dry film thickness with exceptional corrosion resistance. Ideal for precision components where dimensional tolerances are critical.",
  },
  {
    name: "EcoLine\u00AE Biobased Rust Preventatives",
    description:
      "Rust preventatives formulated from biobased, renewable raw materials. USDA Certified Biobased products that provide effective temporary corrosion protection for metalworking, storage and transit applications. Available as sprays, dips and wipe-on formulations.",
  },
];

const keyApplications = [
  "Protecting machined surfaces and tooling during storage and between production runs",
  "Temporary rust prevention for parts awaiting assembly or further processing",
  "Long-term outdoor protection for structural steel and equipment",
  "Preserving metal surfaces during extended plant shutdowns and mothballing",
  "Protecting metal in transit \u2014 especially for overseas shipment",
  "Corrosion prevention for metal parts in uncontrolled warehouse environments",
];

const industriesServed = [
  { name: "Metalworking & Manufacturing", href: "/industries/manufacturing" },
  { name: "Energy & Power Generation", href: "/industries/energy" },
  { name: "Marine & Offshore", href: "/industries/marine" },
  { name: "Automotive & Transport", href: "/industries/automotive" },
  { name: "Construction & Infrastructure", href: "/industries/construction" },
];

export default function CoatingsRustPreventativesPage() {
  return (
    <main>
      <HeroSection
        title="Coatings & Rust Preventatives"
        subtitle="Spray-on, dip and brush-on coatings that stop corrosion in its tracks. Removable and permanent options, water-based and solvent-based formulations, biobased alternatives \u2014 all with built-in VpCI\u00AE technology."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Download Datasheet", href: "/contact?subject=datasheet" }}
      />

      {/* What These Products Do */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What These Products Do" centered={false} />
          <div className="max-w-3xl">
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              Cortec coatings and rust preventatives provide a physical barrier
              on the metal surface combined with Vapour Phase Corrosion Inhibitor
              technology. The coating itself blocks moisture, oxygen and
              contaminants from reaching the metal, while VpCI molecules migrate
              into recesses and underfilm areas that the coating alone cannot
              fully seal.
            </p>
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              This dual-action approach delivers superior protection compared to
              conventional barrier coatings alone. Even if the coating is
              scratched or damaged, the VpCI molecules continue to protect the
              exposed metal at the point of damage \u2014 a level of
              self-healing capability that standard coatings cannot match.
            </p>
            <p className="text-grey-600 text-base leading-relaxed">
              Products are available for temporary protection (easily removable
              when no longer needed) and permanent protection (weather-resistant
              for long-term outdoor use). Water-based formulations meet strict
              VOC regulations, while biobased options address sustainability
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Key Applications" centered={false} />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {keyApplications.map((app) => (
              <li key={app} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                <span className="text-grey-600 text-base leading-relaxed">
                  {app}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries Served"
            subtitle="Cortec coatings and rust preventatives are used across industries that need reliable surface protection for metal in storage, transit and outdoor exposure."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {industriesServed.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="px-6 py-3 bg-grey-100 hover:bg-steel-500 hover:text-white text-navy-900 font-medium rounded-lg transition-colors text-sm"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cortec */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Why Cortec Coatings & Rust Preventatives?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dual-Action Protection",
                text: "Physical barrier plus VpCI vapour phase protection. Even at points of coating damage, VpCI molecules continue to protect the exposed metal.",
              },
              {
                title: "Removable Options",
                text: "VpCI-368 peels or washes off cleanly when protection is no longer needed, leaving parts ready for immediate use or further processing.",
              },
              {
                title: "Water-Based & Low VOC",
                text: "VpCI-391 meets strict VOC regulations, making it safe for enclosed space application and environmentally sensitive locations.",
              },
              {
                title: "Biobased Formulations",
                text: "EcoLine rust preventatives are USDA Certified Biobased, manufactured from renewable raw materials for lower environmental impact.",
              },
              {
                title: "Multiple Application Methods",
                text: "Available as spray, dip, brush-on and wipe-on formulations. Choose the method that best fits your production workflow.",
              },
              {
                title: "Non-Toxic & Worker-Safe",
                text: "Free from nitrites, phosphates, chromates and heavy metals. Safe to handle, apply and dispose of in normal waste streams.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-orange-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-grey-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Products"
            subtitle="The most widely specified Cortec coatings and rust preventatives, available from stock in Ireland."
          />
          <div className="space-y-12">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
              >
                <div className="bg-grey-100 rounded-lg aspect-video flex items-center justify-center text-grey-600 text-sm font-medium lg:col-span-1">
                  [PRODUCT IMAGE \u2014 Cortec {product.name}]
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-grey-600 text-base leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a Quote or Datasheet */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              title="Request a Quote or Datasheet"
              subtitle="For a full quote or technical datasheet on any Cortec coating or rust preventative, contact our team."
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?subject=datasheet"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-navy-900 text-lg font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
              >
                Request Datasheet
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold rounded-lg transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Help Selecting the Right Coating?"
        subtitle="Our team will recommend the right Cortec coating or rust preventative for your application."
        primaryCTA={{ text: "Talk to Our Team", href: "/contact" }}
      />
    </main>
  );
}
