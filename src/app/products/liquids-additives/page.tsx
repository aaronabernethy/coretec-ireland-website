import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VpCI® Liquids & Additives",
  description:
    "Cortec® VpCI® liquids and additives for water treatment, metalworking fluids, lubricants and industrial cleaning. Built-in corrosion inhibition for process fluids. Available from Cortec Ireland.",
};

const featuredProducts: { name: string; description: string; image?: string }[] = [
  {
    name: "VpCI®-649",
    image: "/images/products/vpci-649.webp",
    description:
      "Multi-metal corrosion inhibitor for boiler systems, closed-loop cooling water and hydrotest water. Provides vapour phase and liquid phase protection simultaneously. A single product replaces multiple individual inhibitors, simplifying treatment programmes and reducing inventory.",
  },
  {
    name: "VpCI®-337",
    image: "/images/products/vpci-337.webp",
    description:
      "Additive for paints, coatings and primers that adds VpCI® corrosion protection to the finished coating system. Enhances the anti-corrosion performance of existing coating formulations without affecting their physical or aesthetic properties.",
  },
  {
    name: "M-645",
    description:
      "High-performance metalworking fluid with built-in VpCI® corrosion inhibition. Provides lubrication and cooling during machining, grinding and forming operations while simultaneously protecting the workpiece and machine tool from corrosion between operations.",
  },
  {
    name: "EcoLine® Cutting Fluids",
    description:
      "Biobased metalworking fluids formulated from renewable vegetable oils. USDA Certified Biobased products that deliver excellent cutting and grinding performance with built-in corrosion protection and a significantly lower environmental footprint.",
  },
  {
    name: "VpCI®-414",
    description:
      "Cleaner and corrosion inhibitor in one product. Removes soils, oils and contaminants from metal surfaces while depositing a thin VpCI® protective layer. Ideal for cleaning between manufacturing steps where parts need both cleaning and temporary rust prevention.",
  },
  {
    name: "VpCI®-648",
    description:
      "Concentrated multi-metal corrosion inhibitor for closed-loop cooling and heating systems. Protects mixed-metal systems containing steel, copper, aluminium and solder against corrosion during operation and idle periods.",
  },
  {
    name: "VpCI®-649 BD Winterized",
    description:
      "Ready-to-use, winterized formulation of VpCI®-649 for hydrostatic testing and closed systems in cold conditions. Provides freeze protection alongside vapour and liquid phase corrosion inhibition.",
  },
  {
    name: "G-6 Corrosion Inhibitor",
    description:
      "General-purpose liquid corrosion inhibitor additive for water-based systems and process fluids. Builds corrosion protection directly into cleaning, cooling and treatment solutions without a separate application step.",
  },
  {
    name: "EcoSpray® VpCI®-416 Cleaner & Degreaser",
    image: "/images/products/ecospray-416.webp",
    description:
      "Heavy-duty, non-toxic cleaner and degreaser that lifts grease, oil and industrial soils from metal surfaces while providing multi-metal corrosion protection during cleaning. USDA-approved for use in food-processing environments.",
  },
  {
    name: "Boiler Lizard®",
    image: "/images/products/boiler-lizard.webp",
    description:
      "VpCI® powder pre-packed in EcoSol® water-soluble bags for the dry layup of boilers and closed water systems. Dropped straight into the boiler, it releases vapour phase corrosion inhibitors that protect tubes, internal surfaces and the vapour space during idle periods — with no messy clean-out on start-up.",
  },
];

const keyApplications = [
  "Boiler water treatment and closed-loop cooling systems",
  "Hydrostatic testing of pipelines, vessels and pressure equipment",
  "Metalworking fluids for machining, grinding and forming",
  "Parts cleaning and degreasing with built-in corrosion protection",
  "Additive for paints, coatings and primers to boost anti-corrosion performance",
  "Layup and preservation of idle process equipment and systems",
  "Fog and spray applications for hard-to-reach interior surfaces",
];

export default function LiquidsAdditivesPage() {
  return (
    <main>
      <HeroSection
        title="VpCI® Liquids & Additives"
        subtitle="Drop-in corrosion inhibitors for water treatment, metalworking fluids, lubricants and cleaning solutions. Built-in protection for every industrial process that involves metal and liquid."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Request Datasheet", href: "/contact?subject=datasheet" }}
      />

      {/* What These Products Do */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What These Products Do" centered={false} />
          <div className="max-w-3xl">
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              Cortec® VpCI® liquids and additives bring corrosion inhibition
              directly into the fluids and processes that are already part of
              your operations. Rather than applying corrosion protection as a
              separate step, these products build it into the water treatment,
              metalworking, cleaning or coating process itself.
            </p>
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              VpCI® liquids work in both the liquid phase (protecting submerged
              surfaces) and the vapour phase (protecting surfaces above the
              waterline). This dual-phase action is particularly valuable in
              systems where both liquid-contacted and vapour-space surfaces need
              protection — such as boilers, storage tanks and partially
              filled pipelines.
            </p>
            <p className="text-grey-600 text-base leading-relaxed">
              Products are available for a wide range of applications: boiler
              treatment, closed-loop cooling, hydrostatic testing, metalworking,
              cleaning, painting and coating. Many formulations are biobased,
              biodegradable and free from hazardous substances.
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

      {/* Why Cortec */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Why Cortec® VpCI® Liquids?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dual-Phase Protection",
                text: "Protects both submerged surfaces and vapour-space surfaces simultaneously. One product covers the entire system.",
              },
              {
                title: "Drop-In Simplicity",
                text: "Add directly to existing water systems, metalworking fluids and cleaning baths. No process changes or new equipment required.",
              },
              {
                title: "Multi-Metal Compatible",
                text: "Effective on carbon steel, stainless steel, aluminium, copper, brass, zinc and galvanised surfaces in the same system.",
              },
              {
                title: "Biobased & Biodegradable",
                text: "EcoLine cutting fluids and many VpCI® liquids are formulated from renewable resources and are readily biodegradable.",
              },
              {
                title: "Replaces Multiple Products",
                text: "VpCI-649 replaces separate oxygen scavengers, film-forming amines and passivation chemicals. Simpler treatment, lower inventory.",
              },
              {
                title: "Environmentally Compliant",
                text: "Low toxicity, low VOC and free from nitrites, chromates and heavy metals. Meets regulatory requirements for discharge and disposal.",
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
            title="Products"
            subtitle="The full range of Cortec® VpCI® liquids and additives."
          />
          <div className="space-y-12">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
              >
                {product.image ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-white border border-grey-200 lg:col-span-1">
                    <Image
                      src={product.image}
                      alt={`Cortec ${product.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain p-3"
                    />
                  </div>
                ) : (
                  <div className="bg-grey-100 rounded-lg aspect-video flex items-center justify-center text-grey-600 text-sm font-medium lg:col-span-1">
                    Product image coming soon
                  </div>
                )}
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
          <div className="mt-14 text-center">
            <a
              href="https://www.cortecvci.com/products/vpci-water-treatment-products/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-steel-500 hover:text-steel-600 font-semibold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-steel-300 focus:ring-offset-2 rounded"
            >
              Browse the full VpCI® water treatment &amp; additives range on cortecvci.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Request a Quote or Datasheet */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              title="Request a Quote or Datasheet"
              subtitle="For a full quote or technical datasheet on any Cortec® VpCI® liquid or additive, contact our team."
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
        title="Need a Process Fluid with Built-In Corrosion Protection?"
        subtitle="Our team will recommend the right VpCI® liquid or additive for your application."
        primaryCTA={{ text: "Talk to Our Team", href: "/contact" }}
      />
    </main>
  );
}
