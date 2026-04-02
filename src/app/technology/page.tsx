import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "VpCI\u00AE Technology",
  description:
    "Learn how Cortec's Vapour Phase Corrosion Inhibitors (VpCI) protect metals more effectively, more safely, and more sustainably than traditional methods like oils, greases, and desiccants.",
};

const comparisonData = [
  {
    feature: "Multi-metal protection",
    vpci: true,
    oils: "Limited",
    desiccants: false,
    coatings: "Varies",
  },
  {
    feature: "Hard-to-reach areas",
    vpci: true,
    oils: false,
    desiccants: false,
    coatings: false,
  },
  {
    feature: "No cleanup required",
    vpci: true,
    oils: false,
    desiccants: "N/A",
    coatings: "N/A",
  },
  {
    feature: "Environmentally friendly",
    vpci: true,
    oils: false,
    desiccants: true,
    coatings: false,
  },
  {
    feature: "Biodegradable options",
    vpci: true,
    oils: false,
    desiccants: false,
    coatings: false,
  },
  {
    feature: "Long-term protection",
    vpci: true,
    oils: "Limited",
    desiccants: "Limited",
    coatings: true,
  },
];

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 rounded-full">
        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 bg-red-100 rounded-full">
        <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    );
  }
  return <span className="text-sm text-grey-500 font-medium">{value}</span>;
}

const productCategories = [
  { label: "VCI Films & Bags", href: "/products/vci-films-bags", description: "Shrink films, stretch films, bags, and tubing infused with VpCI molecules for packaging protection." },
  { label: "VCI Papers", href: "/products/vci-papers", description: "Kraft papers and interleaving sheets that release VpCI to protect metal parts during storage and shipping." },
  { label: "VCI Emitters", href: "/products/vci-emitters", description: "Compact devices that release VpCI into enclosed spaces such as electrical cabinets and equipment housings." },
  { label: "Coatings & Rust Preventatives", href: "/products/coatings-rust-preventatives", description: "Liquid coatings and rust preventative sprays enhanced with VpCI for long-term outdoor and indoor protection." },
  { label: "Liquids & Additives", href: "/products/liquids-additives", description: "Water treatment additives, cleaning solutions, and metalworking fluids incorporating VpCI technology." },
  { label: "Construction & Concrete", href: "/products/construction-concrete", description: "MCI products for protecting rebar and embedded metals in concrete structures." },
  { label: "Specialty Oil & Gas", href: "/products/specialty-oil-gas", description: "Specialised formulations for pipelines, tanks, and equipment in the oil and gas sector." },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Understanding VpCI\u00AE Technology"
        subtitle="How Cortec's Vapour Phase Corrosion Inhibitors protect metals more effectively, more safely, and more sustainably than traditional methods."
        primaryCTA={{ text: "Talk to an Expert", href: "/contact" }}
        secondaryCTA={{ text: "How VCI Works ↗", href: "https://www.cortecvci.com/how-vci-works/" }}
      />

      {/* The Cost of Corrosion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="mb-2">
                <span className="text-sm font-semibold text-steel-500 uppercase tracking-wider">
                  The Scale of the Problem
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">
                The Cost of Corrosion
              </h2>
              <div className="space-y-6 text-grey-700 leading-relaxed">
                <p>
                  Corrosion costs the global economy an estimated 3.4% of GDP — over
                  $2.5 trillion annually. In Ireland alone, the cost to industry runs
                  into billions. Equipment failures, unplanned downtime, premature
                  replacements, and safety incidents driven by corrosion represent a
                  constant drain on operational budgets across every sector.
                </p>
                <p>
                  Much of this cost is preventable with the right protection strategy.
                  The challenge is that many traditional corrosion prevention methods
                  are messy, expensive to apply and remove, harmful to the
                  environment, and only partially effective. VpCI technology changes
                  this equation entirely.
                </p>
              </div>
            </div>
            <div className="bg-navy-900 rounded-2xl p-10 text-center">
              <p className="text-7xl sm:text-8xl font-bold text-orange-400">
                3.4%
              </p>
              <p className="text-xl text-grey-300 mt-4 font-medium">
                of Global GDP
              </p>
              <div className="w-16 h-0.5 bg-steel-500 mx-auto my-6" />
              <p className="text-3xl sm:text-4xl font-bold text-white">
                $2.5 Trillion
              </p>
              <p className="text-grey-400 mt-2">
                Annual cost of corrosion worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Corrosion? */}
      <section className="py-20 bg-grey-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="What is Corrosion?"
              subtitle="Understanding the enemy is the first step to defeating it."
            />
            <div className="space-y-6 text-grey-700 leading-relaxed">
              <p>
                Corrosion is the natural process by which metals deteriorate through
                chemical reactions with their environment — primarily oxygen and
                moisture. Iron rusts. Steel pits. Aluminium oxidises. Copper develops
                patina. Every metal is vulnerable, and the process never stops.
              </p>
              <p>
                Left unchecked, corrosion weakens structures, damages equipment, causes
                electrical failures, contaminates products, and creates serious safety
                hazards. It affects every industry — from manufacturing and
                construction to electronics, automotive, marine, oil and gas, and
                aerospace.
              </p>
              <p>
                The electrochemical nature of corrosion means that wherever metal is
                exposed to air and moisture, degradation begins. Traditional
                protection methods attempt to create a physical barrier between the
                metal and its environment. VpCI technology takes a fundamentally
                different approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How VpCI Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How VpCI\u00AE Works"
            subtitle="A fundamentally different approach to corrosion protection."
          />

          {/* SVG Diagram */}
          <div className="mb-16">
            <div className="bg-grey-100 rounded-2xl p-6 sm:p-10 overflow-hidden">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Diagram showing how VpCI molecules vaporise from a source and form a protective layer on a metal surface"
                role="img"
              >
                {/* Background enclosure */}
                <rect x="50" y="30" width="700" height="340" rx="16" fill="#E5E9F0" stroke="#B5BFCF" strokeWidth="2" strokeDasharray="8 4" />
                <text x="400" y="60" textAnchor="middle" className="text-xs" fill="#6B7A91" fontSize="13" fontWeight="600">ENCLOSED SPACE</text>

                {/* Metal surface - bottom */}
                <rect x="100" y="300" width="600" height="50" rx="4" fill="#8A96AA" />
                <rect x="100" y="300" width="600" height="8" rx="2" fill="#6B7A91" />
                <text x="400" y="332" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="700">METAL SURFACE</text>

                {/* Protective molecular layer on metal */}
                <rect x="100" y="290" width="600" height="10" rx="2" fill="#1E5EA8" opacity="0.35" />
                <rect x="100" y="290" width="600" height="3" rx="1" fill="#1E5EA8" opacity="0.7" />
                <text x="710" y="298" textAnchor="start" fill="#1E5EA8" fontSize="10" fontWeight="600" />

                {/* VpCI Source - left side */}
                <rect x="120" y="200" width="100" height="70" rx="8" fill="#E8640C" />
                <text x="170" y="230" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">VpCI</text>
                <text x="170" y="248" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">SOURCE</text>
                <text x="170" y="290" textAnchor="middle" fill="#E8640C" fontSize="10" fontWeight="600">(Film / Emitter / Liquid)</text>

                {/* VpCI molecules emanating - animated feel with different sizes/positions */}
                {/* Row 1 - near source */}
                <circle cx="240" cy="210" r="5" fill="#E8640C" opacity="0.9" />
                <circle cx="260" cy="195" r="4" fill="#E8640C" opacity="0.8" />
                <circle cx="250" cy="230" r="5" fill="#E8640C" opacity="0.85" />
                <circle cx="270" cy="215" r="3.5" fill="#E8640C" opacity="0.75" />

                {/* Row 2 - mid travel */}
                <circle cx="320" cy="180" r="4.5" fill="#E8640C" opacity="0.65" />
                <circle cx="340" cy="210" r="4" fill="#E8640C" opacity="0.6" />
                <circle cx="310" cy="240" r="3.5" fill="#E8640C" opacity="0.55" />
                <circle cx="360" cy="170" r="4" fill="#E8640C" opacity="0.5" />
                <circle cx="350" cy="250" r="3" fill="#E8640C" opacity="0.5" />

                {/* Row 3 - spreading out */}
                <circle cx="420" cy="150" r="3.5" fill="#E8640C" opacity="0.45" />
                <circle cx="440" cy="200" r="4" fill="#E8640C" opacity="0.4" />
                <circle cx="410" cy="260" r="3" fill="#E8640C" opacity="0.4" />
                <circle cx="460" cy="170" r="3.5" fill="#E8640C" opacity="0.35" />
                <circle cx="430" cy="240" r="3" fill="#E8640C" opacity="0.35" />

                {/* Row 4 - reaching far surfaces */}
                <circle cx="520" cy="140" r="3" fill="#E8640C" opacity="0.3" />
                <circle cx="540" cy="190" r="3.5" fill="#E8640C" opacity="0.3" />
                <circle cx="510" cy="250" r="3" fill="#E8640C" opacity="0.3" />
                <circle cx="560" cy="160" r="3" fill="#E8640C" opacity="0.25" />
                <circle cx="530" cy="230" r="2.5" fill="#E8640C" opacity="0.25" />

                {/* Row 5 - at the far end */}
                <circle cx="620" cy="150" r="3" fill="#E8640C" opacity="0.2" />
                <circle cx="640" cy="200" r="2.5" fill="#E8640C" opacity="0.2" />
                <circle cx="610" cy="240" r="3" fill="#E8640C" opacity="0.2" />
                <circle cx="660" cy="175" r="2.5" fill="#E8640C" opacity="0.18" />

                {/* Crevice / recess on metal surface */}
                <rect x="550" y="290" width="40" height="30" fill="#6B7A91" />
                <rect x="555" y="290" width="30" height="25" fill="#8A96AA" />
                <circle cx="570" cy="285" r="2.5" fill="#E8640C" opacity="0.35" />
                <text x="570" y="338" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="600">RECESS</text>

                {/* Labels */}
                <line x1="240" y1="120" x2="400" y2="120" stroke="#1E5EA8" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="320" y="112" textAnchor="middle" fill="#1E5EA8" fontSize="11" fontWeight="600">VpCI molecules travel through air</text>

                <line x1="400" y1="285" x2="400" y2="270" stroke="#1E5EA8" strokeWidth="1.5" />
                <text x="400" y="265" textAnchor="middle" fill="#1E5EA8" fontSize="11" fontWeight="600">Thin protective molecular layer</text>

                {/* Arrow showing vapour direction */}
                <path d="M230 175 L660 100" stroke="#E8640C" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
                <path d="M230 260 L660 270" stroke="#E8640C" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
              </svg>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-grey-700 leading-relaxed">
              <p>
                VpCI (Vapour Phase Corrosion Inhibitor) molecules are released from
                Cortec products — whether that is a film, an emitter device, or a
                liquid formulation — and travel through the air to reach all metal
                surfaces within an enclosed space. This includes recesses, crevices,
                internal cavities, and hard-to-reach areas that sprays and coatings
                simply cannot protect.
              </p>
              <p>
                The molecules form a thin, self-replenishing molecular layer on the
                metal surface — just a few molecules thick. This invisible layer
                interrupts the electrochemical process that causes corrosion,
                effectively stopping it before it can begin.
              </p>
            </div>
            <div className="space-y-6 text-grey-700 leading-relaxed">
              <p>
                Unlike oils and greases that must be physically applied to every
                surface, VpCI molecules do the work themselves — migrating through
                the air to find and protect all exposed metal. This is why VpCI is
                particularly effective for complex assemblies, electronics,
                machinery with internal components, and any situation where complete
                surface coverage is difficult to achieve manually.
              </p>
              <p>
                When the protected item is unwrapped or the emitter is removed, the
                VpCI molecules dissipate harmlessly, leaving the metal clean and
                ready to use — no cleaning or degreasing required. This eliminates
                an entire process step and the associated costs, chemicals, and waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VpCI vs Traditional Methods */}
      <section className="py-20 bg-grey-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="VpCI\u00AE vs Traditional Methods"
            subtitle="See how Vapour Phase Corrosion Inhibitor technology compares to conventional corrosion protection approaches."
          />
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left px-6 py-4 text-sm font-semibold">Feature</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold bg-steel-500">VpCI Technology</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold">Oils &amp; Greases</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold">Desiccants</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold">Paint / Coatings</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? "bg-white" : "bg-grey-100"}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-navy-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center bg-steel-50">
                      <ComparisonCell value={row.vpci} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ComparisonCell value={row.oils} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ComparisonCell value={row.desiccants} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ComparisonCell value={row.coatings} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MCI Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="mb-2">
                <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                  For Construction &amp; Infrastructure
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">
                MCI Technology
              </h2>
              <div className="space-y-6 text-grey-700 leading-relaxed">
                <p>
                  Migrating Corrosion Inhibitors (MCI) apply the same core principle
                  as VpCI but are specifically engineered for the construction
                  industry. MCI molecules are designed to migrate through concrete —
                  penetrating pores and capillaries to reach the embedded steel
                  reinforcement (rebar) within.
                </p>
                <p>
                  Once they reach the rebar surface, MCI molecules form the same
                  type of protective molecular layer, preventing the electrochemical
                  corrosion process that causes rebar to expand and crack the
                  surrounding concrete. This technology can be applied to new
                  construction or used to treat existing structures, extending the
                  service life of bridges, car parks, marine structures, and
                  buildings by decades.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/products/construction-concrete"
                  className="inline-flex items-center px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-navy-900 font-semibold rounded-lg transition-colors text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                >
                  Explore Construction Products
                </Link>
              </div>
            </div>
            <div className="bg-grey-100 rounded-2xl p-8 sm:p-10">
              <h3 className="text-lg font-bold text-navy-900 mb-6">
                How MCI Differs from VpCI
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-steel-100 rounded-lg flex items-center justify-center">
                    <span className="text-steel-500 font-bold text-sm">V</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">VpCI</p>
                    <p className="text-sm text-grey-600">
                      Travels through air to protect metals in enclosed spaces.
                      Used in packaging, storage, and equipment protection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-sm">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">MCI</p>
                    <p className="text-sm text-grey-600">
                      Migrates through concrete to protect embedded rebar and
                      steel. Used in construction, infrastructure, and repair.
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg border border-grey-200">
                  <p className="text-sm text-grey-600">
                    <span className="font-semibold text-navy-900">Same principle: </span>
                    Both technologies use corrosion-inhibiting molecules that travel
                    to the metal surface and form a protective molecular layer. The
                    difference is the medium they travel through — air (VpCI) or
                    concrete (MCI).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-grey-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How the Technology is Delivered"
            subtitle="VpCI and MCI technology is incorporated into a wide range of product formats, each designed for specific applications and environments."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-grey-200 hover:border-steel-300"
              >
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-steel-500 transition-colors mb-3">
                  {category.label}
                </h3>
                <p className="text-sm text-grey-600 leading-relaxed">
                  {category.description}
                </p>
                <span className="inline-flex items-center mt-4 text-sm font-semibold text-steel-500 group-hover:text-steel-600 transition-colors">
                  View Products
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Want to See VpCI\u00AE Technology in Action?"
        subtitle="Our team can demonstrate how VpCI technology will solve your specific corrosion challenges."
        primaryCTA={{ text: "Request a Demonstration", href: "/contact" }}
        phone="+44 (0)7752 498985"
      />
    </>
  );
}
