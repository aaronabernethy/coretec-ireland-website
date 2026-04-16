import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cortec Ireland for corrosion protection advice, product recommendations, quotes, and technical support. Offices in Belfast and Dublin.",
};

const contactReasons = [
  "Product selection for a specific application",
  "Requesting datasheets or SDS documents",
  "Getting a quote for your project",
  "Arranging an on-site corrosion assessment",
  "Technical support for Cortec\u00AE products you\u2019re already using",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Get in Touch"
        subtitle="Whether you need a product recommendation, a quote, or technical support — our corrosion protection specialists are here to help."
        primaryCTA={{ text: "Call Belfast", href: "tel:+447752498985" }}
        secondaryCTA={{ text: "Call Dublin", href: "tel:+353872637278" }}
      />

      {/* Two-column layout: Form + Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-grey-600 mb-8 leading-relaxed">
                Fill in the form below and our team will get back to you within
                1 business day. All fields marked with an asterisk are required.
              </p>
              <ContactForm />
            </div>

            {/* Right Column: Contact Information */}
            <div className="space-y-8">
              {/* Belfast */}
              <div className="bg-grey-100 rounded-xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Belfast Head Office
                </h3>
                <div className="flex items-center gap-3 text-grey-700">
                  <svg className="w-5 h-5 text-steel-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="tel:+447752498985"
                    className="text-navy-900 font-semibold hover:text-orange-500 transition-colors"
                  >
                    +44 (0)7752 498985
                  </a>
                </div>
              </div>

              {/* Dublin */}
              <div className="bg-grey-100 rounded-xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  Dublin Office
                </h3>
                <div className="flex items-center gap-3 text-grey-700">
                  <svg className="w-5 h-5 text-steel-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="tel:+353872637278"
                    className="text-navy-900 font-semibold hover:text-orange-500 transition-colors"
                  >
                    +353 (0)87 2637 278
                  </a>
                </div>
              </div>

              {/* Response Commitment */}
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h4 className="font-bold text-navy-900 mb-1">Response Commitment</h4>
                <p className="text-grey-600 leading-relaxed">
                  We aim to respond to all enquiries within 1 business day.
                </p>
              </div>

              {/* Prefer to Talk */}
              <div className="border-l-4 border-steel-500 pl-6 py-2">
                <h4 className="font-bold text-navy-900 mb-1">Prefer to Talk?</h4>
                <p className="text-grey-600 leading-relaxed">
                  Call us directly — we can often help immediately over the phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Contact Us */}
      <section className="py-16 bg-grey-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="When to Contact Us"
            subtitle="We help with everything from initial product selection to ongoing technical support."
          />
          <ul className="mt-8 space-y-3">
            {contactReasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-grey-700">
                <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
