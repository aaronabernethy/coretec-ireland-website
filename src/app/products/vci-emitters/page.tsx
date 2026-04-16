import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VpCI\u00AE Emitters & Diffusers",
  description:
    "Cortec VpCI emitters and diffusers for corrosion protection inside enclosed spaces. No contact required \u2014 simply place inside electrical cabinets, containers, vaults and equipment housings. Available from Cortec Ireland.",
};

const featuredProducts = [
  {
    name: "VpCI\u00AE-105 Emitter Cups",
    description:
      "Self-adhesive emitter cups that mount inside enclosures and release VpCI molecules continuously. Ideal for electrical panels, junction boxes, control cabinets and instrument housings. Each cup protects up to 5 cubic feet of enclosed space for up to 2 years.",
  },
  {
    name: "VpCI\u00AE-111 Emitter Strips",
    description:
      "Flexible emitter strips that can be cut to length and placed inside narrow or irregularly shaped enclosures. Suitable for conduit boxes, cable trays, tool drawers and small storage containers. Easy to install with a peel-and-stick adhesive backing.",
  },
  {
    name: "Cor-Pak\u00AE VpCI\u00AE-137 Pouches",
    description:
      "Permeable pouches filled with VpCI powder or foam. Available in multiple sizes to protect enclosed volumes from a few cubic feet to entire shipping containers. Simply drop a pouch into the package or enclosure \u2014 no opening or activation required.",
  },
  {
    name: "VpCI\u00AE-101 Device",
    description:
      "Purpose-built corrosion inhibitor device for electrical and electronic enclosures. Designed to protect sensitive electronics, circuit boards, connectors and relay contacts from corrosion without interfering with electrical performance.",
  },
  {
    name: "EcoEmitter\u00AE",
    description:
      "Biobased emitter made from renewable materials. USDA Certified Biobased product that provides the same VpCI protection as conventional emitters while meeting green procurement and sustainability requirements.",
  },
];

const keyApplications = [
  "Electrical cabinets, switchgear and motor control centres",
  "Instrument enclosures and control panels in process plants",
  "Shipping containers and wooden crates for overseas transport",
  "Storage vaults, safes and archive rooms for valuable metal items",
  "Museum display cases and heritage conservation enclosures",
  "Military vehicles and equipment in long-term storage",
  "Turbine housings and generator enclosures during shutdown periods",
];

const industriesServed = [
  { name: "Energy & Power Generation", href: "/industries/energy" },
  { name: "Marine & Offshore", href: "/industries/marine" },
  { name: "Aerospace & Defence", href: "/industries/aerospace" },
  { name: "Electronics & Telecoms", href: "/industries/electronics" },
  { name: "Metalworking & Manufacturing", href: "/industries/manufacturing" },
];

export default function VciEmittersPage() {
  return (
    <main>
      <HeroSection
        title="VpCI\u00AE Emitters & Diffusers"
        subtitle="Corrosion protection for enclosed spaces without surface contact. Simply place a VpCI emitter inside any enclosure and let the vapour phase inhibitors do the work \u2014 protecting every metal surface within reach."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Request Datasheet", href: "/contact?subject=datasheet" }}
      />

      {/* What These Products Do */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What These Products Do" centered={false} />
          <div className="max-w-3xl">
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              VpCI emitters and diffusers are self-contained devices that
              continuously release Vapour Phase Corrosion Inhibitor molecules
              into the surrounding air space. The molecules travel by natural
              diffusion, reaching every exposed metal surface within the enclosed
              volume \u2014 including recesses, crevices and surfaces that are
              impossible to reach with conventional coatings or sprays.
            </p>
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              No direct contact between the emitter and the metal surface is
              needed. This makes VpCI emitters uniquely suited for protecting
              electronics, electrical equipment and sensitive instruments where
              applied coatings or oils could cause damage or interfere with
              performance.
            </p>
            <p className="text-grey-600 text-base leading-relaxed">
              Emitters are available as adhesive-backed cups, flexible strips,
              loose pouches and purpose-built devices. They protect both ferrous
              and non-ferrous metals and are effective in enclosed volumes from a
              few cubic inches to entire shipping containers.
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
            subtitle="VpCI emitters are used wherever electrical, electronic or metal equipment needs corrosion protection inside closed enclosures."
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
            Why Cortec VpCI\u00AE Emitters?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "No Surface Contact Needed",
                text: "VpCI molecules travel through the air to protect all exposed metal surfaces. No spraying, coating or dipping required.",
              },
              {
                title: "Safe for Electronics",
                text: "Non-conductive and non-interfering. Will not affect electrical properties, signal integrity or optical components.",
              },
              {
                title: "Install and Forget",
                text: "Once placed, emitters work continuously for up to 2 years with no maintenance, reapplication or monitoring required.",
              },
              {
                title: "Biobased Options",
                text: "EcoEmitter is USDA Certified Biobased, meeting sustainability and environmental procurement requirements.",
              },
              {
                title: "Non-Toxic & Safe",
                text: "Free from nitrites, phosphates and heavy metals. Safe for workers and environmentally responsible.",
              },
              {
                title: "Proven Technology",
                text: "Used globally by utilities, military, aerospace and process industries to protect critical equipment in enclosures.",
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
            subtitle="The most popular Cortec VpCI emitters and diffusers, available from stock in Ireland."
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
              subtitle="For a full quote or technical datasheet on any Cortec VpCI emitter or diffuser product, contact our team."
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
        title="Need Help Protecting Equipment in Enclosed Spaces?"
        subtitle="Our team will recommend the right VpCI emitter for your enclosure and application."
        primaryCTA={{ text: "Talk to Our Team", href: "/contact" }}
      />
    </main>
  );
}
