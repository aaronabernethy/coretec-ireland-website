import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VpCI\u00AE Papers & Wraps",
  description:
    "Cortec\u00AE VpCI\u00AE corrosion-inhibiting papers and wraps for interleaving, wrapping and lining applications. Multi-metal protection in kraft paper form. Available from Cortec Ireland.",
};

const featuredProducts = [
  {
    name: "VpCI\u00AE-146 Paper",
    description:
      "The flagship multi-metal VpCI® kraft paper. Protects ferrous and non-ferrous metals with a single paper. Available in rolls and sheets. Ideal for wrapping individual parts, interleaving between stacked metal sheets and lining crates for shipment.",
  },
  {
    name: "CorShield\u00AE VpCI\u00AE-146",
    description:
      "USDA Certified Biobased version of the VpCI-146. Manufactured from renewable resources and certified compostable. Delivers the same multi-metal corrosion protection while meeting environmental procurement standards.",
  },
  {
    name: "VpCI\u00AE-148 Creped Paper",
    description:
      "Creped kraft paper that stretches and conforms to irregular shapes. Excellent for wrapping complex parts, threaded components and assemblies with protruding features. The crepe texture provides cushioning as well as corrosion protection.",
  },
  {
    name: "Cor-Pak\u00AE Cohesive Paper",
    description:
      "Self-adhering VpCI® paper that sticks to itself without tape or adhesive. Wraps stay in place during handling and transit. Ideal for wrapping cylindrical parts such as shafts, tubes and rolls.",
  },
];

const keyApplications = [
  "Interleaving between stacked steel sheets, plates and coils",
  "Wrapping individual machined parts and precision components",
  "Lining wooden crates, cardboard boxes and metal containers",
  "Wrapping threaded fasteners, valve components and fittings",
  "Protecting polished and ground surfaces during storage",
  "Cushioning and corrosion protection in a single layer",
];

const industriesServed = [
  { name: "Metalworking & Manufacturing", href: "/industries/manufacturing" },
  { name: "Automotive & Transport", href: "/industries/automotive" },
  { name: "Aerospace & Defence", href: "/industries/aerospace" },
  { name: "Marine & Offshore", href: "/industries/marine" },
  { name: "General Engineering", href: "/industries/manufacturing" },
];

export default function VciPapersPage() {
  return (
    <main>
      <HeroSection
        title="VpCI\u00AE Papers & Wraps"
        subtitle="Kraft-based corrosion-inhibiting papers for wrapping, interleaving and lining. The simplest way to protect metal parts during storage and transit \u2014 just wrap and go."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Download Datasheet", href: "/contact?subject=datasheet" }}
      />

      {/* What These Products Do */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What These Products Do" centered={false} />
          <div className="max-w-3xl">
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              VpCI® papers are standard kraft papers that have been treated with
              Cortec®&apos;s Vapour Phase Corrosion Inhibitor chemistry. When wrapped
              around a metal part or placed inside a package, the paper releases
              VpCI® molecules that form a thin, invisible protective layer on all
              nearby metal surfaces.
            </p>
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              Unlike traditional oiled papers or wax wraps, VpCI® papers leave no
              residue on the protected parts. When the paper is removed, the
              metal surface is clean, dry and ready for use, assembly or coating
              with no intermediate cleaning step.
            </p>
            <p className="text-grey-600 text-base leading-relaxed">
              VpCI® papers protect both ferrous metals (carbon steel, stainless
              steel, cast iron) and non-ferrous metals (aluminium, copper, brass,
              zinc). Certified compostable options are available for organisations
              with sustainability commitments.
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
            subtitle="VpCI® papers are used wherever metal parts need clean, residue-free corrosion protection during storage, transit and interplant handling."
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
            Why Cortec® VpCI\u00AE Papers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "No Residue, No Cleanup",
                text: "Unlike oiled papers, VpCI® papers leave parts clean and dry. No degreasing required before use, assembly, painting or coating.",
              },
              {
                title: "Multi-Metal in One Paper",
                text: "A single paper type protects steel, aluminium, copper and brass simultaneously. No need to segregate packaging by metal type.",
              },
              {
                title: "Compostable & Biobased Options",
                text: "CorShield VpCI-146 is USDA Certified Biobased and certified compostable. Meets sustainability requirements without compromising protection.",
              },
              {
                title: "Easy to Use",
                text: "No special training or equipment needed. Wrap, interleave or line with VpCI® paper just as you would with standard kraft paper.",
              },
              {
                title: "Non-Toxic & Non-Hazardous",
                text: "Free from nitrites, phosphates and heavy metals. Safe for workers to handle, with no special disposal requirements.",
              },
              {
                title: "Proven Track Record",
                text: "Used globally by automotive, aerospace and manufacturing companies for decades. Trusted by the world's most demanding quality programmes.",
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
            subtitle="The most widely used Cortec® VpCI® papers, available from stock in Ireland."
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
              subtitle="For a full quote or technical datasheet on any Cortec® VpCI® paper or wrap product, contact our team."
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
        title="Need Help Choosing the Right VpCI\u00AE Paper?"
        subtitle="Our team will recommend the right VpCI® paper or wrap for your application."
        primaryCTA={{ text: "Talk to Our Team", href: "/contact" }}
      />
    </main>
  );
}
