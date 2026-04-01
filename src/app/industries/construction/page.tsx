import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Construction Corrosion Protection | Cortec Ireland",
  description:
    "MCI® migrating corrosion inhibitor technology for reinforced concrete structures. Extend service life by 3–5 times. Solutions for new construction and repair of existing structures.",
};

const solutions = [
  {
    name: "MCI®-2005",
    description:
      "Concrete admixture added at the batching plant. MCI molecules migrate through the concrete matrix and form a protective molecular layer on embedded reinforcing steel. Provides corrosion protection for the full design life of the structure. Compatible with all standard concrete mix designs.",
    href: "/products/construction-concrete",
  },
  {
    name: "MCI®-2006",
    description:
      "Surface-applied MCI treatment for existing concrete structures. Penetrates through the concrete cover to reach and protect the rebar below. Ideal for repair and rehabilitation of bridges, car parks, marine structures, and buildings showing early signs of reinforcement corrosion.",
    href: "/products/construction-concrete",
  },
  {
    name: "MCI®-2018 & MCI®-2019",
    description:
      "Repair mortar and concrete overlay products enhanced with MCI technology. Used in patch repairs and overlays where damaged concrete is removed and replaced. The MCI migrates from the repair material into the surrounding original concrete, protecting rebar beyond the repair area.",
    href: "/products/construction-concrete",
  },
  {
    name: "MCI®-2020",
    description:
      "Gel formulation for targeted application to cracks, joints, and localised areas of concern. The gel clings to vertical and overhead surfaces, allowing the MCI to penetrate into the concrete at the exact location where protection is most needed. Ideal for spot treatment and preventive maintenance.",
    href: "/products/construction-concrete",
  },
];

const applications = [
  "Bridge decks, piers, and abutments exposed to de-icing salts and marine chlorides",
  "Multi-storey car park decks and ramps subject to salt-laden vehicle runoff",
  "Marine and coastal structures — seawalls, jetties, harbour infrastructure",
  "Precast concrete elements — beams, columns, tunnel segments, and cladding panels",
  "Water and wastewater treatment structures exposed to aggressive chemicals",
  "Historical and heritage concrete structures requiring non-invasive protection",
  "New-build residential and commercial foundations in aggressive soil conditions",
];

export default function ConstructionPage() {
  return (
    <main>
      <HeroSection
        title="Construction"
        subtitle="Extending the service life of reinforced concrete structures by 3–5 times with MCI® migrating corrosion inhibitor technology."
        primaryCTA={{ text: "Discuss Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View MCI Products", href: "/products/construction-concrete" }}
      />

      {/* The Corrosion Challenge */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Corrosion Challenge"
            subtitle="Reinforcement corrosion is the single largest cause of concrete structure deterioration worldwide."
            centered={false}
          />
          <div className="max-w-4xl space-y-5 text-base sm:text-lg text-navy-900 leading-relaxed">
            <p>
              Reinforced concrete is the most widely used construction material on earth, but it has an inherent vulnerability: the steel reinforcement inside is protected only by the alkalinity of the surrounding concrete. When chlorides from de-icing salts, seawater, or marine atmosphere penetrate through the concrete cover, or when carbonation from atmospheric CO2 reduces the concrete&apos;s pH, that protection breaks down and the rebar begins to corrode.
            </p>
            <p>
              Corroding reinforcement expands — generating internal pressures that crack and spall the concrete cover, exposing more steel to the aggressive environment. This accelerating cycle of damage is responsible for billions of euros in infrastructure repair costs globally every year. In Ireland, coastal exposure, de-icing salt use, and high rainfall make reinforcement corrosion a particularly pressing concern.
            </p>
            <p>
              Cortec MCI® (Migrating Corrosion Inhibitor) technology addresses this challenge at the molecular level. MCI molecules migrate through the concrete pore structure — both with moisture movement and through the vapour phase — to reach the reinforcing steel and form a protective molecular film. This film dramatically slows the corrosion rate even when chlorides are present, extending structure service life by a factor of 3 to 5 times.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="MCI® products for new construction, repair, and rehabilitation of reinforced concrete."
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
            subtitle="Where MCI® technology is used to protect reinforced concrete structures."
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
              [CASE STUDY — to be added: project in construction industry]
            </p>
            <p className="mt-2 text-base text-steel-500">
              We are preparing a detailed case study from a construction client. Contact us to discuss your specific requirements in the meantime.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Tell Us About Your Corrosion Challenge"
        subtitle="Our corrosion protection specialists will recommend the right MCI solution for your construction project."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />
    </main>
  );
}
