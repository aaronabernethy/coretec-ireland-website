import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the full range of Cortec VpCI and MCI corrosion inhibitor products. Films, papers, emitters, coatings, liquids, construction solutions and specialty oil and gas products — all available from Ireland's exclusive Cortec distributor.",
};

const productCategories = [
  {
    title: "VpCI\u00AE Films, Bags & Shrink Films",
    description:
      "High-performance polyethylene films infused with Vapour Phase Corrosion Inhibitors. Available as bags, sheeting, tubing and shrink film for wrapping, packaging and long-term storage of metal parts and assemblies.",
    href: "/products/vci-films-bags",
  },
  {
    title: "VpCI\u00AE Papers & Wraps",
    description:
      "Kraft-based papers treated with multi-metal VpCI technology for interleaving, wrapping and lining applications. Ideal for protecting individual parts, stacked metal sheets and crated components during storage and transit.",
    href: "/products/vci-papers",
  },
  {
    title: "VpCI\u00AE Emitters & Diffusers",
    description:
      "Self-contained corrosion inhibitor devices that release VpCI molecules into enclosed spaces. No surface contact required — simply place inside electrical cabinets, shipping containers, storage vaults or equipment housings.",
    href: "/products/vci-emitters",
  },
  {
    title: "Coatings & Rust Preventatives",
    description:
      "Spray-on, dip and brush-on coatings that provide a protective barrier against corrosion. Removable and permanent options available in both water-based and solvent-based formulations for storage, transit and outdoor exposure.",
    href: "/products/coatings-rust-preventatives",
  },
  {
    title: "VpCI\u00AE Liquids & Additives",
    description:
      "Corrosion-inhibiting additives for water treatment, metalworking fluids, lubricants and cleaning solutions. Drop-in protection for closed-loop systems, boilers, hydrostatic testing and industrial cleaning operations.",
    href: "/products/liquids-additives",
  },
  {
    title: "MCI\u00AE Construction & Concrete",
    description:
      "Migrating Corrosion Inhibitors designed to protect reinforcing steel embedded in concrete. Admixtures, surface treatments and repair mortars that extend the service life of bridges, parking structures and marine infrastructure.",
    href: "/products/construction-concrete",
  },
  {
    title: "Specialty Oil & Gas",
    description:
      "Purpose-built corrosion protection for pipeline preservation, vessel mothballing, equipment layup and hydrostatic testing. Environmentally compliant solutions that reduce re-commissioning time and cost across the oil and gas sector.",
    href: "/products/specialty-oil-gas",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <HeroSection
        title="Cortec VpCI\u00AE Product Range"
        subtitle="As Ireland's exclusive authorised Cortec distributor, we supply the complete range of VpCI\u00AE and MCI\u00AE corrosion inhibitor products. Every product is manufactured by Cortec Corporation \u2014 the world leader in vapour phase corrosion inhibitor technology."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Talk to Our Team", href: "/contact" }}
      />

      {/* Product Categories Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Product Categories"
            subtitle="Browse our full range of Cortec corrosion protection solutions. Each category addresses a specific packaging, coating, treatment or structural need."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <ProductCard
                key={category.href}
                title={category.title}
                description={category.description}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Which Product */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Not Sure Which Product You Need?"
              subtitle="With hundreds of Cortec products across multiple categories, choosing the right solution can be daunting. That is where our technical team comes in."
            />
            <p className="text-grey-600 text-base leading-relaxed mb-4">
              Our technical team will assess your corrosion challenge and
              recommend the right product for your application. We consider the
              metals involved, the environment, storage duration, regulatory
              requirements and your existing workflow to identify the most
              effective and cost-efficient solution.
            </p>
            <p className="text-grey-600 text-base leading-relaxed mb-8">
              No obligation. No pressure. Just practical, expert advice from
              people who understand corrosion engineering inside out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
            >
              Get Free Technical Advice
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Product Datasheet or Quote?"
        subtitle="Our team can provide datasheets, technical specifications, and competitive quotes for any Cortec product."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
