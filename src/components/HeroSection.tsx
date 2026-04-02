import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  backgroundClass?: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundClass = "bg-navy-900",
}: HeroSectionProps) {
  return (
    <section className={`${backgroundClass} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-grey-300 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-navy-900 font-semibold rounded-lg transition-colors text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-navy-900"
            >
              {primaryCTA.text}
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold rounded-lg transition-colors text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
