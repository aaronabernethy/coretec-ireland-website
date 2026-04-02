import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-navy-900 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-6xl sm:text-8xl font-bold text-steel-500 mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-grey-300 text-lg leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-navy-900 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-navy-900"
          >
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
