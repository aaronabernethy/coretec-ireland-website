import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { client } from "../.././../sanity/lib/client";
import { caseStudiesQuery } from "../.././../sanity/lib/queries";

export const metadata: Metadata = {
  title: "Case Histories",
  description:
    "Real-world corrosion protection case histories from Corrosion Engineering – Cortec Ireland Ltd. Local projects with Short Brothers, Northern Ireland Electricity, and Harland & Wolff, plus access to the global Cortec® case history library.",
};

// Revalidate every hour so new Sanity content appears without a full redeploy
export const revalidate = 3600;

interface CaseStudy {
  _id: string;
  title: string;
  customer: string;
  location?: string;
  date?: string;
  industry?: string;
  products?: string[];
  problem: string;
  solution: string;
  result: string;
  highlight?: boolean;
  pdfUrl?: string;
}

// Fallback data shown until Mandy adds content in Sanity
const fallbackCases: CaseStudy[] = [
  {
    _id: "ch486",
    title: "Preservation of Electrical Control Cabinets",
    customer: "Northern Ireland Electricity (NIE)",
    location: "Northern Ireland",
    date: "2000 – Present",
    products: ["VpCI®-111 Emitters", "VpCI®-126 Blue® Film"],
    industry: "Utilities / Electrical",
    problem:
      "NIE found that corrosion in their outdoor electrical control cabinets during shipment, storage, and use was leading to costly failures. The problem was greatest at coastal locations but also affected inner city sites.",
    solution:
      "VpCI®-126 Blue Film protects the cabinets during shipment and storage. Once in service, VpCI®-111 Emitters are installed during routine maintenance visits. The emitter molecules are ionically attracted to all metal surfaces within the enclosure, providing continuous vapour-phase protection.",
    result:
      "NIE has found that continued use of VpCI®-126 Blue Film and VpCI®-111 Emitters is an economical and long-lasting method of protection. The easy-to-install emitters minimise remedial work, maintenance, and failure costs.",
    pdfUrl: "/case-histories/ch486-nie-electrical-cabinets.pdf",
    highlight: true,
  },
  {
    _id: "ch483",
    title: "Protection of Floating Dock Gate",
    customer: "Harland & Wolff Heavy Industries Ltd",
    location: "Belfast, Northern Ireland",
    date: "January 2009",
    products: ["VpCI®-309 Powder"],
    industry: "Marine / Heavy Industry",
    problem:
      "Harland & Wolff in Belfast operate one of the largest dry docks in Europe. The internal voids, cavities, and recesses of their floating dock gate were corroding due to extreme weather and prolonged sea immersion.",
    solution:
      "VpCI®-309 Powder was sprinkled throughout the accessible areas of the dock gate in January 2009. The gate was inspected in September 2013 — having been in active use or anchored at sea for the entire period — and protection was confirmed.",
    result:
      "Harland & Wolff chose to reapply VpCI®-309 Powder as it proved the best corrosion protection for this application — cost effective, environmentally safe, and easy to apply.",
    pdfUrl: "/case-histories/ch483-harland-wolff-dock-gate.pdf",
  },
  {
    _id: "ch180",
    title: "Corrosion Protection in Harsh Conditions",
    customer: "Short Brothers Ltd Technical Group",
    location: "Queen's Island, Belfast",
    date: "September 1983",
    products: ["VpCI®-337"],
    industry: "Aerospace / Precision Manufacturing",
    problem:
      "Short Brothers wanted to test VpCI®-337 as a universal corrosion preventative for aluminium and other metals across components stored in multiple environments, including near pretreatment acid anodising solutions.",
    solution:
      "Aluminium alloy plates were fogged with VpCI®-337 spray and placed in four test environments: hot and humid, acid, ambient, and cold and dry, alongside untreated control stacks.",
    result:
      "VpCI®-337 provided effective protection in all environments. In acid conditions, untreated stacks suffered severe attack — the treated stack showed only minor initial pitting. Pretreatment fully removed VpCI®-337 with no contamination.",
    pdfUrl: "/case-histories/ch180-short-brothers-aerospace.pdf",
  },
];

export default async function CaseHistoriesPage() {
  // Fetch from Sanity; fall back to hardcoded data if Sanity is empty
  const sanityCases: CaseStudy[] = await client.fetch(caseStudiesQuery).catch(() => []);
  const cases = sanityCases.length > 0 ? sanityCases : fallbackCases;

  return (
    <>
      <HeroSection
        title="Case Histories"
        subtitle="Real-world corrosion protection projects across Ireland — from Belfast shipyards to utility infrastructure. See how Cortec® VpCI® technology delivers results."
        primaryCTA={{ text: "Discuss Your Project", href: "/contact" }}
        secondaryCTA={{ text: "Global Case Library ↗", href: "https://www.corteccasehistories.com/" }}
      />

      {/* Local Case Histories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-steel-500 uppercase tracking-wider mb-2">Local Projects</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              Cortec® VpCI® in Action — Ireland & Northern Ireland
            </h2>
            <p className="mt-4 text-lg text-grey-600">
              The following case histories were carried out with the direct involvement of Corrosion Engineering – Cortec Ireland Ltd.
            </p>
          </div>

          <div className="space-y-10">
            {cases.map((c) => (
              <div
                key={c._id}
                className={`rounded-xl border overflow-hidden ${
                  c.highlight ? "border-steel-400 shadow-md" : "border-grey-200 shadow-sm"
                }`}
              >
                {c.highlight && (
                  <div className="bg-steel-500 px-6 py-2">
                    <span className="text-sm font-semibold text-white">Long-Running Partnership</span>
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      {c.industry && (
                        <p className="text-xs font-semibold uppercase tracking-wider text-steel-500 mb-1">
                          {c.industry}
                        </p>
                      )}
                      <h3 className="text-xl sm:text-2xl font-bold text-navy-900">{c.title}</h3>
                      <p className="mt-1 text-grey-600">
                        {c.customer}{c.location ? ` — ${c.location}` : ""}
                      </p>
                    </div>
                    <div className="flex-shrink-0 sm:text-right">
                      {c.date && <p className="text-sm text-grey-500">{c.date}</p>}
                      {c.products && c.products.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2 sm:justify-end">
                          {c.products.map((p) => (
                            <span
                              key={p}
                              className="inline-block px-3 py-1 bg-navy-50 text-navy-900 text-xs font-semibold rounded-full border border-navy-200"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-grey-500 mb-2">Problem</h4>
                      <p className="text-sm text-grey-700 leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-grey-500 mb-2">Solution</h4>
                      <p className="text-sm text-grey-700 leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-grey-500 mb-2">Result</h4>
                      <p className="text-sm text-grey-700 leading-relaxed">{c.result}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-grey-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    {c.pdfUrl && (
                      <a
                        href={c.pdfUrl}
                        download
                        className="inline-flex items-center gap-2 text-sm font-semibold text-steel-600 hover:text-steel-700 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Full Case History (PDF)
                      </a>
                    )}
                    <Link href="/contact" className="text-sm font-semibold text-navy-900 hover:text-steel-500 transition-colors">
                      Discuss a similar project →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Case Histories */}
      <section className="py-16 sm:py-20 bg-grey-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-steel-500 uppercase tracking-wider mb-2">Global Library</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">Hundreds More Case Histories</h2>
            <p className="mt-4 text-lg text-grey-600 leading-relaxed">
              Cortec® Corporation maintains an extensive library of case histories covering every major industry and application — from pipeline preservation to aerospace component storage. Browse the full global collection at corteccasehistories.com.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.corteccasehistories.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-lg transition-colors"
              >
                Browse Global Case Histories ↗
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-semibold rounded-lg transition-colors">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Corrosion Problem to Solve?"
        subtitle="Tell us about your application and we'll identify the right Cortec® VpCI® solution."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
        phone="+44 (0)7752 498985"
      />
    </>
  );
}
