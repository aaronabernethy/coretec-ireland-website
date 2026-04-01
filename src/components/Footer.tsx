import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "VCI Films & Bags", href: "/products/vci-films-bags" },
  { label: "VCI Papers", href: "/products/vci-papers" },
  { label: "VCI Emitters", href: "/products/vci-emitters" },
  { label: "Coatings & Rust Preventatives", href: "/products/coatings-rust-preventatives" },
  { label: "Liquids & Additives", href: "/products/liquids-additives" },
  { label: "Construction & Concrete", href: "/products/construction-concrete" },
  { label: "Specialty Oil & Gas", href: "/products/specialty-oil-gas" },
];

const industryLinks = [
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Marine", href: "/industries/marine" },
  { label: "Oil & Gas", href: "/industries/oil-gas" },
  { label: "Aerospace", href: "/industries/aerospace" },
  { label: "Electronics", href: "/industries/electronics" },
  { label: "Construction", href: "/industries/construction" },
  { label: "Pharmaceutical & Medical", href: "/industries/pharmaceutical-medical" },
  { label: "Agri-Food", href: "/industries/agri-food" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Resources", href: "/resources" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Cortec Ireland home">
              <Image
                src="/images/logo.png"
                alt="Cortec Ireland"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold tracking-tight">CORTEC IRELAND</span>
            </Link>
            <p className="mt-2 text-sm text-grey-300 leading-relaxed">
              Corrosion Protection Specialists
            </p>
            <p className="mt-4 text-sm text-grey-400 leading-relaxed">
              Exclusive authorised distributor of Cortec Corporation VpCI&reg; products in Ireland.
            </p>

            {/* Contact details */}
            <div className="mt-6 space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-grey-400">
                  Belfast
                </p>
                <a
                  href="tel:+447752498985"
                  className="text-sm text-grey-300 hover:text-white transition-colors"
                >
                  +44 (0)7752 498985
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-grey-400">
                  Dublin
                </p>
                <a
                  href="tel:+353872637278"
                  className="text-sm text-grey-300 hover:text-white transition-colors"
                >
                  +353 (0)87 2637 278
                </a>
              </div>
            </div>
          </div>

          {/* Products column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-300">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-grey-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-300">
              Industries
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-grey-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-grey-300">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-grey-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications row */}
        <div className="border-t border-navy-800 py-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-grey-400">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-steel-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              ISO 9001:2015
            </span>
            <span aria-hidden="true" className="text-navy-700">|</span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-steel-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              ISO 14001:2015
            </span>
            <span aria-hidden="true" className="text-navy-700">|</span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-steel-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              ISO/IEC 17025:2017
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-800 py-6">
          <p className="text-center text-xs text-grey-500">
            &copy; 2024 Corrosion Engineering Cortec Ireland Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
