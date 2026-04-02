import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/CTABanner";
import { articles } from "@/data/articles";

interface ArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles
    .filter((a) => a.published)
    .map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = articles.find(
    (a) => a.slug === params.slug && a.published
  );

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(
    (a) => a.slug === params.slug && a.published
  );

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Article Header */}
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center text-sm text-grey-300 hover:text-white transition-colors mb-6"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Articles
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-steel-500 text-white">
              {article.category}
            </span>
            <time dateTime={article.date} className="text-sm text-grey-300">
              {new Date(article.date).toLocaleDateString("en-IE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-grey-300">By {article.author}</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-navy-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-grey-700 prose-p:leading-relaxed prose-p:mb-4
              prose-li:text-grey-700
              prose-strong:text-navy-900
              prose-a:text-steel-500 prose-a:no-underline hover:prose-a:underline
              prose-ul:my-4 prose-ul:space-y-2
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-grey-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/articles"
                className="inline-flex items-center text-steel-500 hover:text-steel-600 font-semibold transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                All Articles
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-navy-900 font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                Discuss This With Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Expert Corrosion Protection Advice?"
        subtitle="Contact our team for a free, no-obligation consultation on your specific application."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
        phone="+44 (0)7752 498985"
      />
    </>
  );
}
