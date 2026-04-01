import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles & Insights",
  description:
    "Technical articles, industry insights, and news from Cortec Ireland — Ireland's exclusive authorised distributor of Cortec VpCI® corrosion inhibitor products.",
};

export default function ArticlesPage() {
  const publishedArticles = articles
    .filter((a) => a.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <HeroSection
        title="Articles & Insights"
        subtitle="Technical guidance, industry news, and expert perspectives on corrosion protection from the Cortec Ireland team."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest Articles"
            subtitle="Practical knowledge to help you make better corrosion protection decisions"
          />

          {publishedArticles.length === 0 ? (
            <p className="text-center text-grey-600 mt-8">
              Articles coming soon. Check back for technical insights and industry news.
            </p>
          ) : (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {publishedArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white border border-grey-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-steel-50 text-steel-500">
                        {article.category}
                      </span>
                      <time
                        dateTime={article.date}
                        className="text-sm text-grey-500"
                      >
                        {new Date(article.date).toLocaleDateString("en-IE", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      <Link
                        href={`/articles/${article.slug}`}
                        className="hover:text-steel-500 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-grey-600 text-sm mb-4">
                      {article.description}
                    </p>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-steel-500 hover:text-steel-600 transition-colors"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Have a Corrosion Challenge?"
        subtitle="Our specialists can help you find the right Cortec solution for your application."
        primaryCTA={{ text: "Contact Our Team", href: "/contact" }}
        phone="+44 (0)7752 498985"
      />
    </>
  );
}
