import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import PhotoGallery from "@/components/PhotoGallery";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialty Oil & Gas Products",
  description:
    "Cortec® VpCI® corrosion protection products for oil and gas applications. Pipeline preservation, vessel mothballing, hydrostatic testing and equipment layup. Available from Cortec Ireland.",
};

const featuredProducts: { name: string; description: string; image?: string }[] = [
  {
    name: "VpCI®-705",
    description:
      "Pipeline preservation additive for long-term layup and mothballing. Provides both liquid phase and vapour phase corrosion protection for carbon steel, stainless steel and multi-metal piping systems. A single fill-and-leave treatment protects the entire pipeline — including areas above the waterline that conventional liquid inhibitors cannot reach.",
  },
  {
    name: "VpCI®-707",
    description:
      "Mothballing compound for vessels, tanks, heat exchangers and process equipment during extended shutdown periods. Forms a persistent protective layer on all internal metal surfaces, with VpCI® vapour phase protection reaching into voids, dead legs and vapour spaces. Dramatically reduces re-commissioning time and cost.",
  },
  {
    name: "VpCI®-708",
    description:
      "Hydrostatic test water additive that provides corrosion protection during and after pressure testing. Prevents flash rusting and pitting that commonly occurs when test water remains in contact with carbon steel. Eliminates the need for immediate drying or nitrogen purging after testing.",
  },
  {
    name: "VpCI®-649",
    image: "/images/products/vpci-649.webp",
    description:
      "Multi-metal corrosion inhibitor for closed-loop water systems, glycol systems and cooling circuits. Provides long-term protection for systems that must remain filled during idle periods. Effective on carbon steel, copper, aluminium and mixed-metal systems.",
  },
  {
    name: "Cor-Pak® VpCI® Tank Inserts",
    description:
      "Large-format VpCI® emitter devices designed to be placed inside empty tanks, vessels and large enclosures. Release VpCI® vapour continuously to protect internal surfaces during dry layup without the need for nitrogen blanketing or dehumidification equipment.",
  },
  {
    name: "CorrLogic® Slurry",
    description:
      "Injectable VpCI® slurry for protecting the floors and hard-to-reach internals of aboveground storage tanks. Fills the tank-bottom interstitial space and releases corrosion inhibitors to protect surfaces that liquid inhibitors cannot coat.",
  },
  {
    name: "CorrLogic® CUI Inhibitor",
    description:
      "Corrosion-under-insulation (CUI) inhibitor injected beneath insulation on pipes and vessels. Delivers VpCI® protection to hidden external surfaces where trapped moisture would otherwise cause severe, undetected corrosion.",
  },
  {
    name: "EcoLine® Wire Rope Grease",
    description:
      "Biobased, VpCI®-enhanced grease for wire ropes, chains and open gears on rigs and offshore equipment. Penetrates strands to protect the core while resisting wash-off in wet and marine environments.",
  },
];

const keyApplications = [
  "Pipeline mothballing and preservation during construction delays or shutdowns",
  "Vessel and tank layup for planned turnarounds and extended idle periods",
  "Hydrostatic testing of pipelines, vessels and pressure equipment",
  "Preservation of heat exchangers, boilers and fired equipment during downtime",
  "Protection of wellhead equipment, christmas trees and subsea components",
  "Equipment preservation during fabrication-to-installation transit",
  "Closed-loop system treatment for glycol, cooling water and fire water systems",
];

const fieldPhotos = [
  {
    src: "/images/applications/vpci-337-fogging-pail-inuse.webp",
    caption: "VpCI®-337 fogging fluid applied on site",
  },
  {
    src: "/images/applications/vessel-manway-open.webp",
    caption: "Open vessel manway prepared for internal preservation",
  },
  {
    src: "/images/applications/tank-interior-manway.webp",
    caption: "Tank interior access for VpCI® layup treatment",
  },
  {
    src: "/images/applications/storage-tank-manway-scaffold.webp",
    caption: "Storage tank preparation for mothballing",
  },
  {
    src: "/images/applications/corroded-flange-tank.webp",
    caption: "Internal corrosion VpCI® preservation is designed to prevent",
  },
  {
    src: "/images/applications/gearbox-wrapped-vpci.webp",
    caption: "Rotating equipment protected with VpCI® film during storage",
  },
];

export default function SpecialtyOilGasPage() {
  return (
    <main>
      <HeroSection
        title="Specialty Oil & Gas Products"
        subtitle="Purpose-built corrosion protection for pipeline preservation, vessel mothballing, hydrostatic testing and equipment layup. Safe for personnel, environmentally compliant, and proven to reduce re-commissioning time and cost."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Request Datasheet", href: "/contact?subject=datasheet" }}
        backgroundImage="/images/applications/fogging-vessel-offshore.webp"
      />

      {/* What These Products Do */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What These Products Do" centered={false} />
          <div className="max-w-3xl">
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              In the oil and gas industry, equipment frequently sits idle during
              construction delays, planned turnarounds, market-driven shutdowns
              and seasonal layup periods. Without proper preservation, internal
              corrosion can cause pitting, scaling and deposit formation that
              leads to costly repairs, delayed start-ups and even equipment
              replacement.
            </p>
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              Cortec® VpCI® products for oil and gas provide dual-phase corrosion
              protection — inhibiting corrosion in both the liquid phase
              (where water contacts metal) and the vapour phase (where moisture
              in the air above the waterline attacks exposed surfaces). This
              means a single treatment protects the entire system, including dead
              legs, vapour spaces and areas above the fill level that
              conventional liquid-only inhibitors miss entirely.
            </p>
            <p className="text-grey-600 text-base leading-relaxed">
              These products are formulated to be safe for personnel, compliant
              with environmental regulations and easy to dispose of after use.
              Many can be left in the system during re-commissioning, eliminating
              the time and cost of draining, flushing and refilling before
              start-up.
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

      {/* In the Field */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="In the Field"
            subtitle="Cortec® VpCI® corrosion protection applied on live oil, gas and process sites across Ireland and the UK."
          />
          <PhotoGallery photos={fieldPhotos} />
        </div>
      </section>

      {/* Why Cortec */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Why Cortec® for Oil & Gas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dual-Phase Protection",
                text: "Vapour phase and liquid phase inhibition in a single product. Protects the entire system including vapour spaces, dead legs and areas above the waterline.",
              },
              {
                title: "Faster Re-Commissioning",
                text: "Many Cortec® preservation products can remain in the system during start-up, eliminating draining, flushing and refilling steps. Days off the schedule.",
              },
              {
                title: "No Nitrogen Blanketing",
                text: "VpCI® tank inserts and vapour-phase products protect dry-stored equipment without nitrogen generators, regulators or continuous monitoring.",
              },
              {
                title: "Personnel Safety",
                text: "Non-toxic, non-flammable and free from hazardous substances. No special PPE beyond standard site requirements. No confined space hazards.",
              },
              {
                title: "Environmental Compliance",
                text: "Low toxicity to aquatic organisms, readily biodegradable formulations and low VOC content. Meets discharge and disposal regulations.",
              },
              {
                title: "Proven Track Record",
                text: "Used globally by major operators, EPCs and fabrication yards for pipeline preservation, vessel layup and hydrostatic testing.",
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
            subtitle="The Cortec® product range for oil and gas corrosion protection."
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
              href="https://www.cortecvci.com/products/vpci-for-oil-gas-and-process-industries/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-steel-500 hover:text-steel-600 font-semibold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-steel-300 focus:ring-offset-2 rounded"
            >
              Browse the full oil &amp; gas range on cortecvci.com
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
              subtitle="For a full quote or technical datasheet on any Cortec® oil and gas product, contact our team."
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
        title="Need Corrosion Protection for Pipeline or Equipment Preservation?"
        subtitle="Our team will recommend the right Cortec® product for your oil and gas preservation needs."
        primaryCTA={{ text: "Talk to Our Team", href: "/contact" }}
      />
    </main>
  );
}
