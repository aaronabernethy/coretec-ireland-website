import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import BrochureCTA from "@/components/BrochureCTA";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { industryCategories, getIndustryCategory } from "@/data/industryCategories";
import { tm } from "@/lib/trademark";

export const dynamicParams = false;

export function generateStaticParams() {
  return industryCategories
    .filter((industry) => !industry.bespoke)
    .map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const industry = getIndustryCategory(params.slug);
  if (!industry || industry.bespoke) return {};
  return {
    title: industry.name.replace(/®/g, ""),
    description: industry.metaDescription,
  };
}

export default function IndustryCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = getIndustryCategory(params.slug);
  if (!industry || industry.bespoke) notFound();

  return (
    <main>
      <HeroSection
        title={industry.name}
        subtitle={industry.heroSubtitle ?? ""}
        primaryCTA={{ text: "Talk to an Engineer", href: "/contact" }}
        secondaryCTA={{ text: "View Products", href: "/products" }}
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The Challenge" centered={false} />
          <div className="max-w-3xl">
            {(industry.intro ?? []).map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-grey-600 text-base leading-relaxed mb-4"
              >
                {tm(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How We Help" centered={false} />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {(industry.highlights ?? []).map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                <span className="text-grey-600 text-base leading-relaxed">
                  {tm(highlight)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application photos */}
      {industry.images && industry.images.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="In the Field" centered={false} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.images.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden border border-grey-200"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related product categories */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Relevant Product Ranges"
            subtitle="Explore the Cortec® product categories most used in this sector."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(industry.relatedCategories ?? []).map((related) => (
              <ProductCard
                key={related.href}
                title={related.label}
                description="Browse the range, featured products and datasheet requests."
                href={related.href}
              />
            ))}
          </div>
          {industry.cortecUrl && (
            <div className="mt-12">
              <a
                href={industry.cortecUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-steel-500 hover:text-steel-600 font-semibold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-steel-300 focus:ring-offset-2 rounded"
              >
                {tm("Learn more about this sector on cortecvci.com")}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {industry.brochureUrl && (
        <BrochureCTA
          title={industry.name}
          description="Read Cortec®'s full technical brochure for this sector, covering products, applications and performance data."
          href={industry.brochureUrl}
        />
      )}

      <CTABanner
        title="Discuss Your Corrosion Challenge"
        subtitle="Our specialist engineers provide free initial assessments and practical product recommendations for your sector."
        primaryCTA={{ text: "Talk to Our Team", href: "/contact" }}
      />
    </main>
  );
}
