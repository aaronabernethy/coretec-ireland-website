import { tm } from "@/lib/trademark";

interface BrochureCTAProps {
  title: string;
  description: string;
  href: string;
}

export default function BrochureCTA({
  title,
  description,
  href,
}: BrochureCTAProps) {
  return (
    <section className="bg-navy-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-2">
              Cortec® Brochure
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {tm(title)}
            </h2>
            <p className="text-grey-300 text-base leading-relaxed max-w-xl">
              {tm(description)}
            </p>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-navy-900 text-lg font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
          >
            Learn More
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
