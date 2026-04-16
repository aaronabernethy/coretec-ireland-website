import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VpCI\u00AE-126 Films, Bags & Shrink Films",
  description:
    "Cortec VpCI films, bags and shrink films for corrosion-free packaging and storage of metal parts. Multi-metal protection with no oils, no residue and no cleanup. Available from Cortec Ireland.",
};

const featuredProducts = [
  {
    name: "VpCI\u00AE-126 Blue Film",
    description:
      "The industry standard multi-metal VpCI film. Protects ferrous and non-ferrous metals simultaneously. Available as bags, sheeting, tubing and custom fabrications. Up to 5 years of corrosion protection in sealed packaging.",
  },
  {
    name: "VpCI\u00AE-126 HP",
    description:
      "Heavy-duty version of the VpCI-126 for demanding applications. Thicker gauge polyethylene with enhanced puncture resistance, ideal for heavy castings, machined parts and assemblies with sharp edges.",
  },
  {
    name: "EcoShield\u00AE VpCI\u00AE-144",
    description:
      "USDA Certified Biobased film made from renewable resources. Delivers the same multi-metal VpCI protection as conventional films while meeting sustainability and environmental procurement requirements.",
  },
  {
    name: "Cor-Pak\u00AE VpCI\u00AE Stretch Film",
    description:
      "Stretch wrap film infused with VpCI technology for pallet wrapping and bundling. Combines load containment with corrosion protection in a single step, eliminating the need for separate VpCI packaging inside the wrap.",
  },
  {
    name: "MilCorr\u00AE VpCI\u00AE Shrink Film",
    description:
      "Military-grade shrink film that meets MIL-PRF-22019 requirements. Heat-shrinkable for tight, conforming enclosures around large equipment, vehicles and outdoor storage. UV-stabilised for extended outdoor exposure.",
  },
];

const keyApplications = [
  "Wrapping individual machined parts, castings and forgings for storage or shipment",
  "Bagging fasteners, bearings, springs and small metal components",
  "Shrink-wrapping large equipment, engines and vehicles for outdoor storage",
  "Pallet wrapping finished goods for export and transit",
  "Lining wooden crates and steel containers for overseas shipping",
  "Protecting spare parts and maintenance inventory in warehouses",
  "Interplant transfer of work-in-progress metal assemblies",
];

const industriesServed = [
  { name: "Automotive & Transport", href: "/industries/automotive" },
  { name: "Aerospace & Defence", href: "/industries/aerospace" },
  { name: "Metalworking & Manufacturing", href: "/industries/manufacturing" },
  { name: "Marine & Offshore", href: "/industries/marine" },
  { name: "Energy & Power Generation", href: "/industries/energy" },
];

export default function VciFilmsBagsPage() {
  return (
    <main>
      <HeroSection
        title="VpCI\u00AE-126 Films, Bags & Shrink Films"
        subtitle="High-performance polyethylene films infused with Cortec\u00AE's Vapour Phase Corrosion Inhibitor technology. No oils, no residue, no cleanup required."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Request Datasheet", href: "/contact?subject=datasheet" }}
      />

      {/* What These Products Do */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What These Products Do"
            centered={false}
          />
          <div className="max-w-3xl">
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              VpCI films work by releasing invisible, non-toxic Vapour Phase
              Corrosion Inhibitor molecules from within the polyethylene. Once
              sealed around a metal part, these molecules saturate the enclosed
              air space and form a protective molecular layer on all exposed
              metal surfaces \u2014 including hard-to-reach recesses, cavities
              and internal passages that traditional oil-based methods cannot
              protect.
            </p>
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              The protection begins immediately and remains effective for as
              long as the packaging stays sealed. When the part is unwrapped, the
              VpCI layer dissipates naturally, leaving a clean, dry surface that
              is ready for use, painting or further processing with no cleaning
              step required.
            </p>
            <p className="text-grey-600 text-base leading-relaxed">
              These films protect both ferrous metals (carbon steel, stainless
              steel, cast iron) and non-ferrous metals (aluminium, copper, brass,
              zinc, silver) simultaneously. Available as flat sheeting, tubing,
              pre-formed bags, gusseted bags, stretch film and shrink film.
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
            subtitle="VpCI films and bags are used across a wide range of sectors where metal parts require reliable, residue-free corrosion protection during storage and transit."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {industriesServed.map((industry) => (
              <Link
                key={industry.href}
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
            Why Cortec VpCI\u00AE Films?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "No Oils or Residue",
                text: "Parts come out clean and dry. No degreasing, no solvent cleaning, no waste disposal costs. Ready for use or further processing immediately.",
              },
              {
                title: "Multi-Metal Protection",
                text: "A single film protects ferrous and non-ferrous metals simultaneously. No need to stock different packaging materials for different metal types.",
              },
              {
                title: "Biobased Options",
                text: "EcoShield VpCI-144 is USDA Certified Biobased, helping you meet sustainability targets and green procurement requirements without sacrificing performance.",
              },
              {
                title: "Military & Aerospace Approved",
                text: "MilCorr shrink film meets MIL-PRF-22019. Cortec VpCI films are approved by major aerospace and defence OEMs worldwide.",
              },
              {
                title: "Non-Toxic & Safe",
                text: "VpCI molecules are non-toxic, non-hazardous and contain no nitrites, phosphates or heavy metals. Safe for workers and the environment.",
              },
              {
                title: "Cost Effective",
                text: "Eliminates the cost of oils, desiccants, degreasing solvents and associated labour. One-step packaging replaces multi-step legacy processes.",
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
            subtitle="The most widely specified Cortec VpCI films and bags, available from stock in Ireland."
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
              subtitle="For a full quote or technical datasheet on any Cortec VpCI film, bag or shrink film product, contact our team."
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
        title="Need Help Choosing the Right VpCI\u00AE Film?"
        subtitle="Our team will recommend the right VpCI film, bag, or shrink film for your application."
        primaryCTA={{ text: "Talk to Our Team", href: "/contact" }}
      />
    </main>
  );
}
