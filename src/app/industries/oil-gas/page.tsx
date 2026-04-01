import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Oil & Gas Corrosion Protection | Cortec Ireland",
  description:
    "Cortec VpCI® pipeline preservation, vessel mothballing, and equipment storage solutions for the oil and gas industry. Reduce re-commissioning time and eliminate hazardous chemicals.",
};

const solutions = [
  {
    name: "VpCI®-705",
    description:
      "Water-based liquid VpCI formulation for hydrotesting and wet layup of pipelines, tanks, and vessels. Provides multi-metal corrosion protection in closed systems. Compatible with existing water treatment programs and safe for later discharge with appropriate dilution.",
    href: "/products/specialty-oil-gas",
  },
  {
    name: "VpCI®-707",
    description:
      "Concentrated VpCI additive for long-term wet preservation of boilers, heat exchangers, and process vessels. Protects against oxygen pitting and under-deposit corrosion during extended shutdown periods. Significantly reduces re-commissioning time compared to nitrogen blanketing.",
    href: "/products/specialty-oil-gas",
  },
  {
    name: "VpCI®-708",
    description:
      "Dry powder VpCI product for fogging and dry layup applications. Ideal for dehumidified preservation of large-diameter pipelines, storage tanks, and pressure vessels. Applied via compressed air — coats all internal surfaces with a thin, protective VpCI film.",
    href: "/products/specialty-oil-gas",
  },
  {
    name: "VpCI®-649",
    description:
      "Multi-functional VpCI corrosion inhibitor for closed-loop cooling water systems, glycol systems, and process water. Replaces traditional chromate and nitrite-based treatments with a non-toxic, biodegradable alternative that protects ferrous and non-ferrous metals simultaneously.",
    href: "/products/liquids-additives",
  },
];

const applications = [
  "Pipeline preservation during construction hold periods and seasonal shutdowns",
  "Hydrotest water treatment to prevent flash rust and pitting during pressure testing",
  "Vessel and tank mothballing for planned and unplanned downtime",
  "Boiler layup — both wet and dry preservation methods",
  "Compressor and turbine storage during overhaul and maintenance",
  "Rig equipment preservation during stacking",
  "Process equipment storage between project deployments",
];

export default function OilGasPage() {
  return (
    <main>
      <HeroSection
        title="Oil & Gas"
        subtitle="Preserving critical infrastructure during shutdowns, hydrotesting, and storage — without hazardous chemicals or complex procedures."
        primaryCTA={{ text: "Discuss Your Application", href: "/contact" }}
        secondaryCTA={{ text: "View Oil & Gas Products", href: "/products/specialty-oil-gas" }}
      />

      {/* The Corrosion Challenge */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Corrosion Challenge"
            subtitle="Shutdowns, hydrotesting, and idle equipment create serious corrosion risks."
            centered={false}
          />
          <div className="max-w-4xl space-y-5 text-base sm:text-lg text-navy-900 leading-relaxed">
            <p>
              In oil and gas operations, corrosion costs are measured not just in replacement parts but in production downtime, re-commissioning delays, and environmental compliance. When a pipeline is hydrotested and left wet, flash rust can appear within hours. When a platform is stacked, every exposed internal surface is vulnerable.
            </p>
            <p>
              Traditional preservation methods — nitrogen blanketing, chemical pickling, oil-based rust preventatives — are expensive, logistically complex, and often involve hazardous materials that create their own disposal and compliance problems. Many operators accept corrosion damage as inevitable and budget for re-commissioning rework.
            </p>
            <p>
              Cortec VpCI® technology changes that equation. Water-soluble and powder VpCI formulations treat pipelines, vessels, and tanks from the inside — protecting all internal surfaces including welds, crevices, and dead legs that conventional methods miss. The products are non-toxic, biodegradable, and dramatically reduce the time and cost of bringing equipment back into service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Cortec VpCI® products engineered for oil and gas preservation challenges."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  View product details
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
            subtitle="Where Cortec VpCI® technology is deployed in oil and gas operations."
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

      {/* Case Study Placeholder */}
      <section className="bg-grey-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-dashed border-steel-500 rounded-lg p-8 text-center">
            <p className="text-lg font-semibold text-navy-900">
              [CASE STUDY — to be added: project in oil &amp; gas industry]
            </p>
            <p className="mt-2 text-base text-steel-500">
              We are preparing a detailed case study from an oil and gas client. Contact us to discuss your specific requirements in the meantime.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Tell Us About Your Corrosion Challenge"
        subtitle="Our corrosion protection specialists will recommend the right Cortec solution for your oil and gas application."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </main>
  );
}
