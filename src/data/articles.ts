export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string; // Format: YYYY-MM-DD
  author: string;
  category: "News" | "Technical" | "Case Study" | "Industry Insight";
  published: boolean;
  content: string; // HTML string — supports <p>, <h2>, <h3>, <ul>, <li>, <strong>, <em>, <a>
}

/**
 * ARTICLES
 *
 * To add a new article:
 * 1. Copy one of the existing entries below
 * 2. Update the slug (URL-friendly, lowercase, hyphens only)
 * 3. Set published: true when ready to go live
 * 4. Write content as an HTML string
 *
 * Articles appear on /articles and each gets its own page at /articles/[slug]
 */
export const articles: Article[] = [
  {
    slug: "understanding-vpci-technology-corrosion-protection",
    title: "Understanding VpCI® Technology: A Smarter Approach to Corrosion Protection",
    description:
      "An introduction to Vapour Phase Corrosion Inhibitor technology — how it works, why it outperforms traditional methods, and what it means for your operations.",
    date: "2024-11-15",
    author: "Cortec Ireland Technical Team",
    category: "Technical",
    published: true,
    content: `
      <p>Corrosion costs the global economy an estimated 3.4% of GDP annually — over $2.5 trillion. For Irish industry, the impact runs into billions in equipment replacement, downtime, and maintenance. Yet much of this damage is preventable with the right protection strategy.</p>

      <h2>What is VpCI® Technology?</h2>
      <p>VpCI® stands for Vapour Phase Corrosion Inhibitor. Developed by Cortec Corporation over 45 years ago, this technology works by releasing invisible, non-toxic molecules that travel through the air and form a protective molecular layer on metal surfaces.</p>
      <p>Unlike traditional oils and greases, VpCI® molecules reach every surface within an enclosed space — including recesses, crevices, and areas that sprays simply cannot access. When the protection is no longer needed, the molecules dissipate harmlessly, leaving metal surfaces clean and ready for use with no degreasing or cleanup required.</p>

      <h2>Key Advantages Over Traditional Methods</h2>
      <ul>
        <li><strong>Multi-metal protection:</strong> A single VpCI® product can protect ferrous and non-ferrous metals simultaneously</li>
        <li><strong>No contact required:</strong> VpCI® emitters protect without touching the metal surface</li>
        <li><strong>No cleanup:</strong> Parts are ready to use straight from packaging</li>
        <li><strong>Environmentally friendly:</strong> Many VpCI® products are USDA Certified Biobased and biodegradable</li>
        <li><strong>Long-lasting:</strong> Protection for 12–24 months in sealed packaging</li>
      </ul>

      <h2>Applications Across Industry</h2>
      <p>VpCI® technology is used across virtually every industrial sector — from automotive and aerospace to oil and gas, electronics, and construction. Whether you need to protect parts in transit, equipment in storage, or infrastructure in service, there is a Cortec VpCI® solution designed for the job.</p>

      <p>As Ireland's exclusive authorised Cortec distributor, Cortec Ireland can help you identify the right VpCI® product for your specific application. Contact our team for a no-obligation consultation.</p>
    `,
  },
  {
    slug: "iso-17025-what-it-means-for-corrosion-testing",
    title: "ISO/IEC 17025: What It Means for Corrosion Testing and Why It Matters",
    description:
      "Our ISO/IEC 17025 laboratory accreditation is rare among corrosion protection suppliers. Here is what it means and why it gives our clients a significant advantage.",
    date: "2024-10-28",
    author: "Cortec Ireland Technical Team",
    category: "Industry Insight",
    published: true,
    content: `
      <p>When you are selecting corrosion protection products, how do you know the recommendations you receive are based on sound data? This is where laboratory accreditation matters — and ISO/IEC 17025 is the international gold standard.</p>

      <h2>What is ISO/IEC 17025?</h2>
      <p>ISO/IEC 17025:2017 is the international standard for testing and calibration laboratories. It demonstrates that a laboratory operates competently, generates valid results, and follows rigorous quality management practices. Accreditation is granted by an independent body after thorough assessment.</p>

      <h2>Why is This Rare?</h2>
      <p>Most corrosion protection distributors do not hold ISO/IEC 17025 accreditation. They rely on manufacturer data alone. While Cortec Corporation's own testing is extensive, our independent accredited testing capability means we can verify product performance under conditions specific to your application and environment.</p>

      <h2>What This Means for You</h2>
      <ul>
        <li><strong>Verified results:</strong> Our test data is independently validated, not just manufacturer claims</li>
        <li><strong>Application-specific testing:</strong> We can test products under conditions that match your real-world environment</li>
        <li><strong>Regulatory confidence:</strong> ISO/IEC 17025 test results are recognised by regulatory bodies and auditors</li>
        <li><strong>Risk reduction:</strong> Know that the product will work before you commit to a large order</li>
      </ul>

      <p>This accreditation, combined with our ISO 9001 quality management and ISO 14001 environmental management certifications, gives Cortec Ireland a level of technical credibility that is unmatched among corrosion protection suppliers in Ireland.</p>
    `,
  },
  {
    slug: "biodegradable-vci-packaging-sustainability",
    title: "Biodegradable VCI Packaging: Corrosion Protection That Does Not Cost the Earth",
    description:
      "How Cortec's biobased and biodegradable VCI films and papers help manufacturers meet sustainability targets without compromising on corrosion protection.",
    date: "2024-09-10",
    author: "Cortec Ireland Technical Team",
    category: "Industry Insight",
    published: true,
    content: `
      <p>Sustainability is no longer optional for Irish manufacturers. ESG reporting requirements, customer expectations, and environmental regulations are driving demand for greener alternatives across every aspect of operations — including corrosion protection packaging.</p>

      <h2>The Problem with Traditional Corrosion Protection</h2>
      <p>Conventional corrosion prevention methods typically rely on petroleum-based oils, solvent-based coatings, or non-recyclable plastic wraps. These create waste disposal challenges, worker health concerns, and environmental liabilities that are increasingly difficult to justify.</p>

      <h2>Cortec's Sustainable Alternative</h2>
      <p>Cortec Corporation, through its European manufacturing facility EcoCortec in Croatia, produces a range of VCI packaging products that deliver the same corrosion protection performance as conventional options — but with significantly better environmental credentials:</p>
      <ul>
        <li><strong>EcoShield® VpCI-144:</strong> USDA Certified Biobased VCI film made from renewable resources</li>
        <li><strong>CorShield® VpCI-146:</strong> USDA Certified Biobased VCI paper</li>
        <li><strong>Compostable VCI paper:</strong> Certified compostable and biodegradable</li>
        <li><strong>EcoEmitter®:</strong> Biobased VCI emitter for enclosed spaces</li>
      </ul>

      <h2>Performance Without Compromise</h2>
      <p>These biobased products are not a trade-off. They provide the same multi-metal VpCI® protection as conventional Cortec products — typically 12 to 24 months of corrosion protection in sealed packaging. The difference is what happens when you are done with them: they break down naturally rather than persisting in landfill.</p>

      <p>Contact Cortec Ireland to discuss how switching to biobased VCI packaging can help your organisation meet its sustainability targets.</p>
    `,
  },
];
