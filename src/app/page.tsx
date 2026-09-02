import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import IndustryCard from "@/components/IndustryCard";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import PhotoGallery from "@/components/PhotoGallery";

const workInAction = [
  {
    src: "/images/applications/shrink-film-skid-crane.webp",
    caption: "Process skid preserved with MilCorr® VpCI® shrink film",
  },
  {
    src: "/images/applications/fogging-vessel-offshore.webp",
    caption: "VpCI® fogging a vessel during offshore layup",
  },
  {
    src: "/images/applications/valve-lift-onto-vpci-film.webp",
    caption: "Subsea valve lifted onto VpCI® film for preservation",
  },
  {
    src: "/images/applications/film-wrap-crew-2.webp",
    caption: "On-site equipment wrapping in VpCI®-126 film",
  },
  {
    src: "/images/applications/camshafts-vpci-biopad.webp",
    caption: "Machined camshafts packed with VpCI® film and BioPad®",
  },
  {
    src: "/images/applications/storage-tank-manway-scaffold.webp",
    caption: "Storage tank preparation for internal preservation",
  },
];

export const metadata: Metadata = {
  title:
    "Cortec Ireland | Ireland's Exclusive Cortec VpCI® Corrosion Protection Specialists",
  description:
    "Corrosion Engineering Cortec Ireland Ltd — Ireland's only authorised distributor of Cortec Corporation VpCI® corrosion inhibitor products. Specialist corrosion solutions from packaging films to pipeline protection, backed by ISO 9001, ISO 14001 & ISO/IEC 17025 certified technical support.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Corrosion Engineering Cortec Ireland Ltd",
  url: "https://cortecireland.com",
  telephone: "+447752498985",
  description:
    "Ireland's exclusive authorised distributor of Cortec Corporation VpCI® corrosion inhibitor products. Specialist corrosion protection solutions backed by ISO 9001 quality management, ISO 14001 environmental management, and ISO/IEC 17025 laboratory testing accreditation.",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Belfast",
      addressRegion: "Northern Ireland",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
  ],
  hasCredential: [
    "ISO 9001 Quality Management",
    "ISO 14001 Environmental Management",
    "ISO/IEC 17025 Laboratory Testing Accreditation",
  ],
  brand: {
    "@type": "Brand",
    name: "Cortec Corporation",
  },
  areaServed: {
    "@type": "Country",
    name: "Ireland",
  },
};

const industries = [
  {
    name: "Automotive",
    href: "/industries/automotive",
    description:
      "VCI packaging for metal parts, tools, and components in transit and storage",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    name: "Marine",
    href: "/industries/marine",
    description:
      "Corrosion protection for vessels, offshore equipment, and marine hardware",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="22" x2="12" y2="8" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      </svg>
    ),
  },
  {
    name: "Oil & Gas",
    href: "/industries/oil-gas",
    description:
      "Pipeline preservation, vessel mothballing, and equipment storage",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    name: "Aerospace",
    href: "/industries/aerospace",
    description:
      "Precision packaging and storage for aerospace components",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  },
  {
    name: "Electronics & Electrics",
    href: "/products/electronics",
    description:
      "VCI emitters for control cabinets, switchgear, and sensitive electronics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    name: "Transportation & Municipalities",
    href: "/industries/transportation",
    description: "MCI® rebar protection for bridges and public structures, fleet and infrastructure preservation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="8" y1="6" x2="8" y2="6.01" />
        <line x1="16" y1="6" x2="16" y2="6.01" />
        <line x1="8" y1="10" x2="8" y2="10.01" />
        <line x1="16" y1="10" x2="16" y2="10.01" />
        <line x1="8" y1="14" x2="8" y2="14.01" />
        <line x1="16" y1="14" x2="16" y2="14.01" />
      </svg>
    ),
  },
  {
    name: "Food, Beverage & Pharmaceutical",
    href: "/industries/food-beverage-pharmaceutical",
    description:
      "Food-safe, clean-room compatible protection for processing equipment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
        <line x1="8.5" y1="2" x2="15.5" y2="2" />
        <line x1="7" y1="16" x2="17" y2="16" />
      </svg>
    ),
  },
  {
    name: "Off-Road Equipment & Mining",
    href: "/industries/mining",
    description:
      "Preservation of heavy machinery, spares and idle fleets in harsh conditions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const featuredProducts = [
  {
    title: "VpCI® Packaging Products",
    href: "/products/packaging",
    description:
      "Multi-metal protection films, bags, papers and emitter devices for wrapping and packaging. Biodegradable options available.",
  },
  {
    title: "VpCI® Products for Electronics",
    href: "/products/electronics",
    description:
      "Drop-in corrosion protection for enclosed spaces — electrical cabinets, control panels, and sensitive electronics.",
  },
  {
    title: "VpCI® High Performance Coatings",
    href: "/products/coatings",
    description:
      "Long-term surface protection sprays and Nano VpCI® coatings for metal storage and transport.",
  },
  {
    title: "MCI® Concrete Protection Products",
    href: "/products/mci-concrete",
    description:
      "Migrating Corrosion Inhibitors for concrete rebar protection, admixtures, and surface treatments.",
  },
];

const whyChooseFeatures = [
  {
    title: "Exclusive Irish Distributor",
    description:
      "The only authorised Cortec Corporation distributor in Ireland. Direct supply chain, specialist knowledge, genuine products.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-orange-500"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 12 15 16 10" />
      </svg>
    ),
  },
  {
    title: "Triple ISO Certified",
    description:
      "ISO 9001 quality management, ISO 14001 environmental management, and the rare ISO/IEC 17025 laboratory testing accreditation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-orange-500"
      >
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: "Pure Cortec Specialists",
    description:
      "We sell only Cortec products. No divided loyalties, no generic alternatives — just the world's leading corrosion inhibitor technology.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-orange-500"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Environmental Leaders",
    description:
      "USDA Certified Biobased products, biodegradable films, and compostable packaging. Helping you meet sustainability targets.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-orange-500"
      >
        <path d="M2 22c1-6 6-12 20-12" />
        <path d="M22 10c-6.67 0-12 2-16 6" />
        <path d="M11.5 2C11.5 2 10 8 14 12c4 4 10 2.5 10 2.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <HeroSection
        title="Protect What You've Built"
        subtitle="Ireland's exclusive authorised distributor of Cortec Corporation VpCI® corrosion inhibitor products. From packaging films to pipeline protection — specialist corrosion solutions backed by ISO-accredited technical support."
        primaryCTA={{ text: "Get a Free Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Browse Products", href: "/products" }}
        backgroundImage="/images/applications/shrink-film-skid-crane.webp"
      />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. What is VpCI Technology */}
      <section className="bg-grey-100 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading title="What is VpCI® Technology?" />
          <p className="mt-6 text-lg leading-relaxed text-steel-500">
            Vapour Phase Corrosion Inhibitor (VpCI®) technology protects metals
            by releasing invisible, non-toxic molecules that form a protective
            layer on metal surfaces — even in hard-to-reach areas. Unlike
            traditional oils and coatings, VpCI® products leave no residue,
            require no cleanup, and many are fully biodegradable.
          </p>
          <Link
            href="/technology"
            className="mt-8 inline-flex items-center text-orange-500 font-semibold hover:text-orange transition-colors"
          >
            Learn more about VpCI® technology
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Specialist corrosion protection solutions tailored to your sector"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.name}
                title={industry.name}
                href={industry.href}
                description={industry.description}
                icon={industry.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Product Categories */}
      <section className="bg-grey-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Product Categories"
            subtitle="The full range of Cortec corrosion inhibitor solutions"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                href={product.href}
                description={product.description}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center text-orange-500 font-semibold text-lg hover:text-orange transition-colors"
            >
              View All Products
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Cortec Ireland */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose Cortec Ireland" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {whyChooseFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-5 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-steel-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Work in Action */}
      <section className="bg-grey-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Corrosion Protection in Action"
            subtitle="Real Cortec® VpCI® applications across Irish and UK industry — from offshore vessel layup to on-site equipment preservation."
          />
          <div className="mt-12">
            <PhotoGallery photos={workInAction} />
          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <CTABanner
        title="Not Sure Which Product You Need?"
        subtitle="Our corrosion protection specialists will help you find the right solution. Get expert advice — no obligation."
        primaryCTA={{ text: "Talk to Our Experts", href: "/contact" }}
        phone="+44 (0)7752 498985"
      />
    </>
  );
}
