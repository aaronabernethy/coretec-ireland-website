import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Corrosion Engineering \u2013 Cortec Ireland Ltd is Ireland\u2019s exclusive authorised distributor of Cortec® Corporation VpCI® products. Established in 1982, we provide specialist corrosion protection consultancy backed by Cortec®\u2019s ISO 9001, ISO 14001, and ISO/IEC 17025 certifications.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Ireland\u2019s Corrosion Protection Authority"
        subtitle="As the exclusive authorised distributor of Cortec® Corporation products in Ireland, we bring decades of specialist corrosion engineering expertise to every project we undertake."
        primaryCTA={{ text: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ text: "Explore Our Products", href: "/products" }}
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Story"
            subtitle="A specialist consultancy built on deep expertise and a singular focus on Cortec® corrosion protection technology."
          />
          <div className="max-w-3xl space-y-6 text-grey-700 leading-relaxed">
            <p>
              Corrosion Engineering &ndash; Cortec Ireland Ltd was established in 1982
              to serve as Ireland&apos;s dedicated specialist in Cortec® Corporation&apos;s
              corrosion protection products. Unlike general industrial distributors
              who carry thousands of products across dozens of categories, we operate
              with a singular focus: we sell exclusively Cortec® products, and nothing else.
            </p>
            <p>
              This is not a limitation &mdash; it is our greatest strength. By dedicating
              our entire operation to a single manufacturer&apos;s product range, we
              have developed an unmatched depth of knowledge across the full
              portfolio of over 400 Cortec® anti-corrosion products. We understand every
              formulation, every application method, and every industry use case.
            </p>
            <p>
              We operate as a specialist corrosion protection consultancy. When
              clients come to us, we do not simply take an order. We work closely
              with them to understand their specific corrosion challenges, assess
              their environment and materials, and recommend the precise Cortec®
              solution that will deliver the best results. In many cases, we visit
              sites in person to evaluate conditions before making a recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-grey-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Makes Us Different"
            subtitle="Three qualities set Cortec® Ireland apart from any other corrosion protection supplier in the market."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {/* Specialist Focus */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-steel-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-steel-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Specialist Focus
              </h3>
              <p className="text-grey-600 leading-relaxed">
                We sell exclusively Cortec® products &mdash; nothing else. This singular
                focus gives us unmatched depth of knowledge across the entire Cortec®
                portfolio of over 400 anti-corrosion products. When you work
                with us, you are working with specialists, not generalists.
              </p>
            </div>

            {/* Consultancy Approach */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-steel-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-steel-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Consultancy Approach
              </h3>
              <p className="text-grey-600 leading-relaxed">
                We do not just take orders. We visit your site, assess your
                corrosion challenges first-hand, and recommend the right Cortec®
                solution for your specific environment and materials. Every
                recommendation is backed by technical expertise and real-world
                experience.
              </p>
            </div>

            {/* Technical Testing */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-steel-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-steel-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Technical Testing
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Cortec®&apos;s ISO/IEC 17025 accredited laboratory testing capability means
                we can verify product performance under conditions that match your
                real-world environment. Very few corrosion protection distributors
                have access to this accreditation &mdash; it gives our clients confidence
                that every recommendation is backed by rigorous, independent testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Cortec Partnership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Cortec® Partnership"
            subtitle="Exclusively authorised by the world leader in VpCI® technology."
          />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-grey-700 leading-relaxed">
              <p>
                Corrosion Engineering &ndash; Cortec Ireland Ltd holds exclusive
                authorisation from Cortec® Corporation, headquartered in St.&nbsp;Paul,
                Minnesota, USA, to distribute their full range of corrosion protection
                products throughout Ireland. We also supply and support clients across
                Great Britain. This is not a reseller arrangement &mdash; it is a direct
                partnership with the manufacturer, giving us unmediated access to
                Cortec®&apos;s technical resources, product development teams, and
                application engineers.
              </p>
              <p>
                Our European supply chain operates through EcoCortec, Cortec®
                Corporation&apos;s manufacturing and distribution facility in Croatia.
                This ensures efficient delivery across Ireland and Great Britain while
                maintaining the same exacting quality standards as products manufactured
                at Cortec®&apos;s US facilities.
              </p>
              <p>
                With over 45 years of research and development, Cortec® Corporation
                has built a portfolio of more than 400 products spanning every
                corrosion protection need. They are the world&apos;s leading manufacturer
                of VpCI® (Vapour Phase Corrosion Inhibitor) technology &mdash; a
                fundamentally different and superior approach to preventing corrosion.
              </p>
            </div>
            <div className="bg-navy-900 rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-8">Cortec® Corporation at a Glance</h3>
              <div className="space-y-6">
                <div className="border-b border-navy-700 pb-4">
                  <p className="text-3xl font-bold text-orange-400">45+</p>
                  <p className="text-grey-300 mt-1">Years of R&amp;D in corrosion science</p>
                </div>
                <div className="border-b border-navy-700 pb-4">
                  <p className="text-3xl font-bold text-orange-400">400+</p>
                  <p className="text-grey-300 mt-1">Anti-corrosion products in the Cortec® portfolio</p>
                </div>
                <div className="border-b border-navy-700 pb-4">
                  <p className="text-3xl font-bold text-orange-400">#1</p>
                  <p className="text-grey-300 mt-1">World leader in VpCI® technology</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-400">90+</p>
                  <p className="text-grey-300 mt-1">Countries served worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cortec ISO Certifications */}
      <section className="py-20 bg-grey-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Cortec® Corporation Certifications"
            subtitle="Cortec® Corporation holds triple ISO certification &mdash; quality, environmental, and laboratory standards that underpin every product we supply."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {/* ISO 9001 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-steel-500">
              <div className="text-sm font-semibold text-steel-500 uppercase tracking-wider mb-2">
                ISO 9001:2015
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Quality Management
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Cortec® Corporation holds ISO 9001:2015 certification, ensuring
                that every product in their range is manufactured and quality-controlled
                to internationally recognised standards. As their authorised distributor,
                this certification extends to every product we supply.
              </p>
            </div>

            {/* ISO 14001 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-steel-500">
              <div className="text-sm font-semibold text-steel-500 uppercase tracking-wider mb-2">
                ISO 14001:2015
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Environmental Management
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Cortec® Corporation&apos;s ISO 14001:2015 certification demonstrates a
                systematic commitment to minimising environmental impact across all
                manufacturing operations. This reflects their broader investment in
                biobased and sustainable corrosion protection chemistry.
              </p>
            </div>

            {/* ISO/IEC 17025 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-orange-500">
              <div className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
                ISO/IEC 17025:2017
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Laboratory Testing
              </h3>
              <p className="text-grey-600 leading-relaxed">
                Cortec® Corporation&apos;s ISO/IEC 17025 accredited laboratory is the
                gold standard for testing laboratories. It means Cortec®&apos;s testing
                results are technically valid, accurate, and internationally recognised
                &mdash; giving clients confidence that product recommendations are
                backed by rigorous, independent science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              title="Environmental Commitment"
              subtitle="Sustainable corrosion protection is not a compromise &mdash; it is a competitive advantage."
            />
            <div className="space-y-6 text-grey-700 leading-relaxed text-left sm:text-center">
              <p>
                Cortec®&apos;s product range is built on a foundation of environmental
                responsibility. Many of their corrosion inhibitors are formulated from
                biobased, renewable raw materials. VpCI® films and packaging
                products include biodegradable and compostable options that perform
                as well as &mdash; or better than &mdash; traditional petroleum-based alternatives.
              </p>
              <p>
                By helping clients switch from oils, greases, and solvent-based
                coatings to clean, dry VpCI® technology, we eliminate the need for
                hazardous degreasing and cleaning processes. This reduces waste,
                lowers VOC emissions, and helps organisations meet their ESG targets
                without sacrificing corrosion protection performance.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/sustainability"
                className="inline-flex items-center px-7 py-3.5 bg-steel-500 hover:bg-steel-600 text-white font-semibold rounded-lg transition-colors text-base focus:outline-none focus:ring-2 focus:ring-steel-300 focus:ring-offset-2"
              >
                Learn About Our Sustainability Commitment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Work With Ireland\u2019s Corrosion Experts?"
        subtitle="Get in touch to discuss your corrosion protection challenges with our specialist team."
        primaryCTA={{ text: "Contact Us Today", href: "/contact" }}
        phone="+44 (0)7752 498985"
      />
    </>
  );
}
