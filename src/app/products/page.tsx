import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { productCategories as categoryData } from "@/data/productCategories";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the full range of Cortec® VpCI® and MCI® corrosion inhibitor products. Packaging, electronics, metalworking, powders, surface preparation, water treatment, lubricants, coatings, additives, BioCortec and MCI concrete protection — all available from Ireland's exclusive Cortec distributor.",
};

const productCategories = categoryData.map((category) => ({
  title: category.name,
  description: category.heroSubtitle,
  href: `/products/${category.slug}`,
}));

export default function ProductsPage() {
  return (
    <main>
      <HeroSection
        title="Cortec® VpCI® Product Range"
        subtitle="As Ireland's exclusive authorised Cortec® distributor, we supply the complete range of VpCI® and MCI® corrosion inhibitor products. Every product is manufactured by Cortec® Corporation — the world leader in vapour phase corrosion inhibitor technology."
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Full Product Catalog ↗", href: "https://www.cortecvci.com/products/" }}
        backgroundImage="/images/applications/vpci-126-flat-bags-warehouse.webp"
      />

      {/* Product Categories Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Product Categories"
            subtitle="Browse our full range of Cortec® corrosion protection solutions. Each category addresses a specific packaging, coating, treatment or structural need."
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

      {/* Total Corrosion Control Brochure */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-2">
                Complete Product Guide
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Total Corrosion Control
              </h2>
              <p className="text-grey-300 text-base leading-relaxed max-w-xl">
                Download the Cortec® Total Corrosion Control brochure for a
                comprehensive overview of the entire product range — from VpCI®
                packaging films and emitters to MCI® construction solutions and
                specialty oil &amp; gas products.
              </p>
            </div>
            <a
              href="https://www.cortecvci.com/Publications/Brochures/General/Cortec_GenBroch.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-navy-900 text-lg font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Not Sure Which Product */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Not Sure Which Product You Need?"
              subtitle="With hundreds of Cortec® products across multiple categories, choosing the right solution can be daunting. That is where our technical team comes in."
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
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-navy-900 text-lg font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
            >
              Get Free Technical Advice
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Product Datasheet or Quote?"
        subtitle="Our team can provide datasheets, technical specifications, and competitive quotes for any Cortec® product."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
