import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import { productCategories, getProductCategory } from "@/data/productCategories";
import { tm } from "@/lib/trademark";

export const dynamicParams = false;

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = getProductCategory(params.category);
  if (!category) return {};
  return {
    title: category.name.replace(/®/g, ""),
    description: category.metaDescription,
  };
}

export default function ProductCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getProductCategory(params.category);
  if (!category) notFound();

  return (
    <main>
      <HeroSection
        title={category.name}
        subtitle={category.heroSubtitle}
        primaryCTA={{ text: "Request a Quote", href: "/contact" }}
        secondaryCTA={{ text: "Request Datasheet", href: "/contact?subject=datasheet" }}
        backgroundImage={category.heroImage}
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What These Products Do" centered={false} />
          <div className="max-w-3xl">
            {category.intro.map((paragraph) => (
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

      {/* Featured Products */}
      {category.featured.length > 0 && (
        <section className="bg-grey-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Featured Products"
              subtitle="A selection from the range — contact us for datasheets or advice on any product."
            />
            <div className="space-y-12">
              {category.featured.map((product) => (
                <div
                  key={product.name}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
                >
                  {product.image ? (
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-white border border-grey-200 lg:col-span-1">
                      <Image
                        src={product.image}
                        alt={`Cortec ${product.name}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-contain p-3"
                      />
                    </div>
                  ) : (
                    <div className="bg-white border border-grey-200 rounded-lg aspect-video flex items-center justify-center text-grey-600 text-sm font-medium lg:col-span-1">
                      Product image coming soon
                    </div>
                  )}
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-navy-900 mb-3">
                      {tm(product.name)}
                    </h3>
                    <p className="text-grey-600 text-base leading-relaxed">
                      {tm(product.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Also in the range */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Also in This Range"
            subtitle="We supply the complete Cortec® range in this category — including:"
            centered={false}
          />
          <div
            className={
              category.rangeImage
                ? "grid lg:grid-cols-3 gap-10 items-start"
                : undefined
            }
          >
            <ul
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
                category.rangeImage ? "lg:col-span-2" : "max-w-4xl"
              }`}
            >
              {category.alsoInRange.map((product) => (
                <li key={product} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                  <span className="text-grey-600 text-base leading-relaxed">
                    {tm(product)}
                  </span>
                </li>
              ))}
            </ul>
            {category.rangeImage && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-grey-200 bg-white">
                <Image
                  src={category.rangeImage.src}
                  alt={category.rangeImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-3"
                />
              </div>
            )}
          </div>
          <div className="mt-12">
            <a
              href={category.cortecUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-steel-500 hover:text-steel-600 font-semibold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-steel-300 focus:ring-offset-2 rounded"
            >
              {category.cortecUrl.toLowerCase().endsWith(".pdf")
                ? "Download a PDF of the product range"
                : tm("View the complete range on cortecvci.com")}
              <span aria-hidden="true">
                {category.cortecUrl.toLowerCase().endsWith(".pdf") ? "↓" : "↗"}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Request a Quote or Datasheet */}
      <section className="bg-grey-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              title="Request a Quote or Datasheet"
              subtitle="For a full quote or technical datasheet on any product in this range, contact our team."
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
        title="Not Sure Which Product You Need?"
        subtitle="Our technical team will assess your corrosion challenge and recommend the right product for your application."
        primaryCTA={{ text: "Talk to Our Team", href: "/contact" }}
      />
    </main>
  );
}
