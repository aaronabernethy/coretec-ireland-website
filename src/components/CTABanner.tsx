import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryCTA: { text: string; href: string };
  phone?: string;
}

export default function CTABanner({ title, subtitle, primaryCTA, phone }: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-steel-600 to-steel-500" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-steel-100 max-w-2xl">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-navy-900 font-semibold rounded-lg transition-colors text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-steel-500 whitespace-nowrap"
            >
              {primaryCTA.text}
            </Link>
            {phone && (
              <a
                href={`tel:${phone.replace(/[\s()]/g, "")}`}
                className="inline-flex items-center gap-2 text-white hover:text-steel-100 font-medium transition-colors whitespace-nowrap"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
