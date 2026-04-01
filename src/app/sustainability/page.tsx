import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Cortec Ireland is committed to sustainable corrosion protection. USDA Certified Biobased, biodegradable, and compostable VpCI products that protect metals and the environment.",
};

const greenBenefits = [
  {
    title: "Reduce Plastic Waste",
    description:
      "Biodegradable VCI films replace traditional polyethylene plastic packaging. They deliver the same multi-metal corrosion protection but break down naturally at end of life, keeping plastic out of landfill and the environment.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    title: "Eliminate Toxic Chemicals",
    description:
      "Replace petroleum-based oils, greases, and solvent-based coatings with water-based, non-toxic VpCI alternatives. No hazardous degreasing required. No VOC emissions. Safe for handlers and the environment.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Meet ESG Targets",
    description:
      "Document your switch from petroleum-based corrosion protection to USDA Certified Biobased products. Provide verifiable sustainability data for ESG reports, procurement audits, and corporate sustainability programmes.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Lower Carbon Footprint",
    description:
      "Biobased manufacturing uses renewable biological feedstocks with lower carbon intensity than petroleum-based alternatives. Switching to Cortec biobased products directly reduces the carbon footprint of your corrosion protection programme.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Sustainable Corrosion Protection"
        subtitle="Cortec's biobased, biodegradable, and compostable products help you protect metal assets while protecting the planet."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ text: "Browse Products", href: "/products" }}
      />

      {/* The Environmental Challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Environmental Challenge"
            subtitle="Traditional corrosion protection comes at an environmental cost. Cortec has spent decades building a better alternative."
          />
          <div className="space-y-6 text-grey-700 leading-relaxed">
            <p>
              For generations, the standard approach to corrosion protection has relied on
              petroleum-based oils, greases, and solvent-based coatings. These products work,
              but they come with significant environmental drawbacks: hazardous chemicals that
              require special handling and disposal, non-recyclable plastic packaging, volatile
              organic compound (VOC) emissions, and contaminated waste streams from degreasing
              and cleaning processes.
            </p>
            <p>
              Cortec Corporation recognised this problem decades ago and made a strategic
              commitment to developing corrosion protection products that are genuinely
              sustainable — not as a marketing exercise, but as a core engineering principle.
              The result is a comprehensive range of biobased, biodegradable, and compostable
              products that match or exceed the performance of their petroleum-based equivalents.
            </p>
          </div>
        </div>
      </section>

      {/* USDA Certified Biobased */}
      <section className="py-20 bg-grey-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-steel-500 uppercase tracking-wider mb-3">
                USDA BioPreferred Programme
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">
                USDA Certified Biobased Products
              </h2>
              <div className="space-y-5 text-grey-700 leading-relaxed">
                <p>
                  The USDA BioPreferred certification is an independent, government-backed
                  verification that a product is made from renewable biological resources rather
                  than petroleum. It is not a self-declared claim — it requires third-party
                  testing and verification of biobased content.
                </p>
                <p>
                  Many Cortec products carry this certification, meaning they are formulated
                  from plant-based and other renewable biological feedstocks. This reduces
                  dependence on fossil fuels and lowers the environmental impact of manufacturing.
                </p>
                <p className="font-semibold text-navy-900">
                  Certified biobased products include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                    <span><strong>EcoShield VpCI-144 Films</strong> — biobased VCI stretch and shrink films for wrapping and packaging metal parts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                    <span><strong>CorShield VpCI-146 Papers</strong> — VCI papers made from renewable resources for interleaving and wrapping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                    <span><strong>EcoLine Rust Preventatives</strong> — biobased liquid rust preventatives that replace petroleum-based oils</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-grey-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">What Biobased Means</h3>
                <div className="space-y-4 text-grey-600 text-sm leading-relaxed text-left">
                  <p>
                    <strong className="text-navy-900">Renewable feedstocks:</strong> Made from
                    plant-based and biological raw materials, not petroleum.
                  </p>
                  <p>
                    <strong className="text-navy-900">Third-party verified:</strong> Biobased
                    content independently tested and certified by the USDA.
                  </p>
                  <p>
                    <strong className="text-navy-900">No performance compromise:</strong> Biobased
                    formulations deliver the same corrosion protection as conventional products.
                  </p>
                  <p>
                    <strong className="text-navy-900">Federal procurement preferred:</strong> USDA
                    BioPreferred products are given preference in US federal purchasing — a mark of
                    credibility recognised globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biodegradable & Compostable */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Biodegradable & Compostable"
            subtitle="VCI packaging that protects your metals and then breaks down naturally at end of life."
          />
          <div className="space-y-6 text-grey-700 leading-relaxed">
            <p>
              EcoCortec, Cortec Corporation&apos;s European manufacturing facility in Croatia,
              specialises in producing biodegradable VCI films and packaging. These products
              are engineered to break down naturally through biological processes, unlike
              conventional polyethylene films that persist in the environment for centuries.
            </p>
            <p>
              Cortec also produces certified compostable VCI papers that can be disposed of
              through commercial composting facilities. These papers provide the same
              multi-metal corrosion protection as conventional VCI papers but leave no
              lasting environmental footprint.
            </p>
            <p>
              The critical point is that these sustainable alternatives perform identically
              to conventional VCI products. Switching to biodegradable or compostable
              packaging does not mean accepting lower corrosion protection performance —
              it means getting the same results with a dramatically lower environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* The Future is Circular */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            The Future is Circular
          </h2>
          <p className="text-grey-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Cortec products are designed to support circular economy principles —
            reducing waste, extending asset life, and closing the loop on materials
            that would otherwise end up in landfill.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-navy-800 rounded-xl p-6 border border-navy-700">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Reusable Packaging</h3>
              <p className="text-grey-300 text-sm leading-relaxed">
                Many VCI films and bags can be reused multiple times before end of life,
                reducing the total volume of packaging consumed across your supply chain.
              </p>
            </div>
            <div className="bg-navy-800 rounded-xl p-6 border border-navy-700">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Compostable Materials</h3>
              <p className="text-grey-300 text-sm leading-relaxed">
                When VCI packaging does reach end of life, compostable options ensure
                it returns to the earth rather than accumulating in landfill.
              </p>
            </div>
            <div className="bg-navy-800 rounded-xl p-6 border border-navy-700">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Water-Based Formulations</h3>
              <p className="text-grey-300 text-sm leading-relaxed">
                Water-based VpCI coatings and cleaners eliminate the need for
                petroleum solvents, reducing hazardous waste and simplifying disposal.
              </p>
            </div>
            <div className="bg-navy-800 rounded-xl p-6 border border-navy-700">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">ESG Reporting Support</h3>
              <p className="text-grey-300 text-sm leading-relaxed">
                Switching to Cortec biobased products gives you documented, verifiable
                data for sustainability reports, helping you meet ESG targets and
                procurement requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 14001:2015 */}
      <section className="py-20 bg-grey-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 sm:p-10 shadow-sm border-t-4 border-steel-500">
            <div className="text-sm font-semibold text-steel-500 uppercase tracking-wider mb-2">
              ISO 14001:2015
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">
              Environmental Management Certified
            </h2>
            <div className="space-y-5 text-grey-700 leading-relaxed">
              <p>
                Cortec Ireland holds ISO 14001:2015 certification for environmental management.
                This internationally recognised standard requires a systematic approach to
                identifying, managing, and reducing our environmental impact across all
                operations.
              </p>
              <p>
                Our environmental management system covers everything from product sourcing
                and storage to packaging, delivery, and waste management. It ensures that
                sustainability is not an afterthought but a structured, audited part of how
                we operate every day.
              </p>
              <p>
                Combined with Cortec Corporation&apos;s own environmental credentials and
                biobased product range, our ISO 14001 certification gives clients confidence
                that their corrosion protection supply chain is managed responsibly from
                manufacturer to end user.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help You */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Help You Go Green"
            subtitle="Practical ways Cortec products reduce your environmental impact without compromising corrosion protection performance."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {greenBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-grey-100 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-grey-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Make Your Corrosion Protection Sustainable?"
        subtitle="Talk to our team about switching to biobased, biodegradable corrosion protection products."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
