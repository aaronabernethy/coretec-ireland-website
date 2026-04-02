import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCI\u00AE Construction & Concrete Products",
  description:
    "Cortec\u00AE MCI\u00AE Migrating Corrosion Inhibitors for concrete and construction. Protect reinforcing steel in bridges, parking structures, marine infrastructure and historical buildings. Available from Cortec Ireland.",
};

const featuredProducts = [
  {
    name: "MCI\u00AE-2005",
    description:
      "Migrating Corrosion Inhibitor admixture for new concrete. Added directly to the concrete mix during batching, MCI-2005 migrates through the concrete matrix to reach embedded reinforcing steel and form a protective molecular layer. Provides long-term corrosion protection for the entire service life of the structure.",
  },
  {
    name: "MCI\u00AE-2006",
    description:
      "Surface-applied Migrating Corrosion Inhibitor for existing concrete structures. Applied as a liquid to the concrete surface, MCI-2006 penetrates through the concrete cover to reach the rebar and form a protective layer. Ideal for extending the service life of structures already in service without the need for demolition or overlay.",
  },
  {
    name: "MCI\u00AE-2018",
    description:
      "Concrete sealer with integrated Migrating Corrosion Inhibitor™ technology. Seals the concrete surface against moisture and chloride ingress while simultaneously migrating inward to protect the rebar. Combines surface protection with internal corrosion inhibition in a single application.",
  },
  {
    name: "MCI\u00AE-2019",
    description:
      "Topical corrosion inhibitor treatment for concrete surfaces exposed to chloride attack. Applied as a spray or brush-on treatment, it penetrates into the concrete to provide corrosion protection for the embedded reinforcement. Particularly effective for bridge decks, marine structures and de-icing salt exposure.",
  },
  {
    name: "MCI\u00AE-2020 Repair Mortar",
    description:
      "Corrosion-inhibiting repair mortar for patching and restoring damaged concrete. Contains MCI® technology that migrates beyond the repair area to protect surrounding rebar that may be at risk. Addresses the common &quot;ring anode&quot; problem where repairs to one area can accelerate corrosion in adjacent zones.",
  },
];

const keyApplications = [
  "New construction: bridges, car parks, marine structures, water treatment plants",
  "Repair and rehabilitation of deteriorating concrete structures",
  "Protection of post-tensioned and pre-stressed concrete elements",
  "Historical building preservation and heritage conservation",
  "Extending the service life of concrete exposed to de-icing salts",
  "Marine and coastal infrastructure subject to chloride attack",
  "Balcony, facade and exposed slab corrosion prevention",
];

const industriesServed = [
  { name: "Construction & Infrastructure", href: "/industries/construction" },
  { name: "Marine & Offshore", href: "/industries/marine" },
  { name: "Water & Utilities", href: "/industries/water-utilities" },
  { name: "Energy & Power Generation", href: "/industries/energy" },
  { name: "Heritage & Conservation", href: "/industries/heritage" },
];

export default function ConstructionConcretePage() {
  return (
    <main>
      <HeroSection
        title="MCI\u00AE Construction & Concrete Products"
        subtitle="Migrating Corrosion Inhibitors that travel through concrete to protect embedded reinforcing steel. For new construction, repair and rehabilitation \u2014 extending the service life of structures by 3 to 5 times."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Download Datasheet", href: "/contact?subject=datasheet" }}
      />

      {/* What These Products Do */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What These Products Do" centered={false} />
          <div className="max-w-3xl">
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              Cortec® MCI® (Migrating Corrosion Inhibitor) products are designed
              specifically for reinforced concrete structures. They work by
              migrating through the concrete pore structure \u2014 both as a
              vapour and through capillary action \u2014 to reach the embedded
              reinforcing steel. Once at the rebar surface, MCI® molecules form a
              thin protective layer that inhibits both anodic and cathodic
              corrosion reactions.
            </p>
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              For new construction, MCI® admixtures are added directly to the
              concrete mix. For existing structures, surface-applied treatments
              penetrate through the concrete cover to reach the rebar without
              requiring demolition, overlays or cathodic protection systems.
            </p>
            <p className="text-grey-600 text-base leading-relaxed">
              Independent studies have demonstrated that MCI® technology can
              extend the service life of reinforced concrete structures by 3 to
              5 times compared to untreated concrete. This represents enormous
              savings in lifecycle cost, particularly for infrastructure assets
              such as bridges, car parks and marine structures where repair and
              replacement costs are substantial.
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
            subtitle="MCI® products are specified by structural engineers, architects, asset owners and contractors across the built environment."
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
            Why Cortec® MCI\u00AE Technology?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "3\u20135x Service Life Extension",
                text: "Independent testing demonstrates that MCI-treated concrete can last 3 to 5 times longer than untreated concrete before corrosion-induced deterioration occurs.",
              },
              {
                title: "No Demolition Required",
                text: "Surface-applied MCI® treatments penetrate existing concrete to protect the rebar. No need to remove sound concrete, install anodes or apply overlays.",
              },
              {
                title: "Addresses Ring Anode Effect",
                text: "MCI-2020 repair mortar migrates beyond the patch area to protect surrounding rebar, preventing accelerated corrosion at repair boundaries.",
              },
              {
                title: "Environmentally Responsible",
                text: "Non-toxic, non-hazardous and free from nitrites and heavy metals. Safe for use in potable water structures and environmentally sensitive areas.",
              },
              {
                title: "Proven Track Record",
                text: "Over 30 years of successful use on bridges, car parks, marine structures and historical buildings worldwide. Backed by extensive independent testing.",
              },
              {
                title: "Cost Effective",
                text: "The cost of MCI® treatment is a fraction of the cost of premature repair or replacement. Lifecycle cost analysis consistently favours MCI®-treated structures.",
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
            subtitle="The core Cortec® MCI® product range for construction and concrete protection, available from stock in Ireland."
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
              subtitle="For a full quote or technical datasheet on any Cortec® MCI® construction product, contact our team."
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
        title="Need Corrosion Protection for a Concrete Structure?"
        subtitle="Our team will recommend the right MCI® product for your construction or repair project."
        primaryCTA={{ text: "Talk to Our Team", href: "/contact" }}
      />
    </main>
  );
}
