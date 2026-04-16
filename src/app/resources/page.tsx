import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Technical Resources",
  description:
    "Access Cortec product datasheets, safety data sheets, technical bulletins, and application guides. Contact our team for any technical documentation you need.",
};

const faqs = [
  {
    question: "What is VpCI® technology?",
    answer:
      "VpCI® stands for Vapour Phase Corrosion Inhibitor. It\u2019s a technology developed by Cortec Corporation that protects metals by releasing invisible, non-toxic molecules that form a protective molecular layer on metal surfaces. Unlike oils and greases, VpCI leaves no residue and requires no cleanup.",
  },
  {
    question: "What metals does VpCI protect?",
    answer:
      "Most Cortec VpCI products provide multi-metal protection, covering ferrous metals (steel, cast iron), non-ferrous metals (aluminium, copper, brass, zinc), and galvanised surfaces. Specific product datasheets list the metals protected.",
  },
  {
    question: "How long does VpCI protection last?",
    answer:
      "Protection duration depends on the product and conditions. VpCI films and papers typically protect for 12\u201324 months in sealed packaging. Emitters can last 1\u20132 years in enclosed spaces. Coatings provide protection for years depending on exposure conditions.",
  },
  {
    question: "Are Cortec products safe to use?",
    answer:
      "Yes. Cortec VpCI products are non-toxic, non-hazardous, and safe for handlers. Many are USDA Certified Biobased and some are FDA compliant for food-contact applications. Full safety data is available for every product.",
  },
  {
    question: "What is MCI® technology?",
    answer:
      "MCI® stands for Migrating Corrosion Inhibitor, designed specifically for concrete and construction. MCI molecules migrate through the concrete matrix to reach and protect embedded reinforcing steel (rebar) from corrosion.",
  },
  {
    question: "Can I get samples before ordering?",
    answer:
      "Yes. We\u2019re happy to provide product samples for evaluation. Contact our team with your application details and we\u2019ll arrange samples of the most suitable products.",
  },
  {
    question: "Do you provide on-site consultation?",
    answer:
      "Absolutely. Our technical team can visit your facility to assess your corrosion challenges and recommend the most effective Cortec solution. This service is provided at no obligation.",
  },
  {
    question: "How do I know which product I need?",
    answer:
      "Contact our team with details of what you\u2019re protecting, the environment, and the duration of protection needed. We\u2019ll recommend the right product \u2014 that\u2019s what our consultancy approach is all about.",
  },
  {
    question: "What is ISO/IEC 17025 and why does it matter?",
    answer:
      "ISO/IEC 17025 is the international standard for testing and calibration laboratories. Our accreditation means our testing results are technically valid and internationally recognised \u2014 giving you confidence that our product recommendations are based on rigorous, verified data.",
  },
  {
    question: "Do you deliver across all of Ireland?",
    answer:
      "Yes. We serve customers in both the Republic of Ireland and Northern Ireland, with offices in Dublin and Belfast. We can arrange delivery anywhere on the island.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Technical Resources"
        subtitle="Access product datasheets, safety data sheets, and technical specifications. Our team is here to help you find the right information."
        primaryCTA={{ text: "Request Documentation", href: "/contact" }}
        secondaryCTA={{ text: "Browse Products", href: "/products" }}
      />

      {/* Available Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Available Documentation"
            subtitle="Comprehensive technical documentation for every Cortec product in our range."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-grey-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-steel-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-steel-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Product Data Sheets</h3>
              <p className="text-grey-600 text-sm leading-relaxed">
                Detailed specifications, application methods, coverage rates, and performance
                data for every Cortec product.
              </p>
            </div>
            <div className="bg-grey-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-steel-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-steel-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Safety Data Sheets</h3>
              <p className="text-grey-600 text-sm leading-relaxed">
                Full SDS documentation covering hazard information, handling procedures,
                first aid measures, and regulatory compliance.
              </p>
            </div>
            <div className="bg-grey-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-steel-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-steel-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Technical Bulletins</h3>
              <p className="text-grey-600 text-sm leading-relaxed">
                In-depth technical papers on specific applications, test results, case
                studies, and comparative performance data.
              </p>
            </div>
            <div className="bg-grey-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-steel-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-steel-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Application Guides</h3>
              <p className="text-grey-600 text-sm leading-relaxed">
                Step-by-step guides for applying Cortec products correctly, including
                surface preparation, dosage, and best practices.
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-grey-600 leading-relaxed max-w-2xl mx-auto">
            All documentation is available on request — contact our team and we&apos;ll send
            you exactly what you need. We can provide documents by email or arrange printed
            copies if required.
          </p>
        </div>
      </section>

      {/* Request Documentation */}
      <section className="py-20 bg-grey-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Request Technical Documentation"
            subtitle="Tell us which products or applications you need information on and we'll get the right documents to you promptly."
          />
          <div className="bg-white rounded-xl p-8 sm:p-10 shadow-sm mt-8">
            <p className="text-grey-700 leading-relaxed mb-6">
              The quickest way to get the documentation you need is to contact our team
              directly. Let us know which products you&apos;re interested in or describe
              your application, and we&apos;ll send you the relevant datasheets, SDS
              documents, and any supporting technical literature.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-navy-900 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
              >
                Contact Us Online
              </Link>
            </div>
            <div className="border-t border-grey-200 pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-grey-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-steel-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span><strong>Belfast:</strong> +44 (0)7752 498985</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-steel-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span><strong>Dublin:</strong> +353 (0)87 2637 278</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about Cortec products, our services, and corrosion protection technology."
          />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-grey-100 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-navy-900 font-semibold hover:bg-grey-200 transition-colors list-none">
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-steel-500 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-grey-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 bg-grey-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            Cortec Corporation Technical Library
          </h2>
          <p className="text-grey-600 leading-relaxed">
            For Cortec Corporation&apos;s full product database and technical library,
            visit corteccorporation.com. If you need help finding a specific document
            or product, our team is always happy to assist.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Need Technical Support?"
        subtitle="Our specialist team is ready to help with product selection, datasheets, and technical guidance."
        primaryCTA={{ text: "Contact Our Team", href: "/contact" }}
      />
    </>
  );
}
