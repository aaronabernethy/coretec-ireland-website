export interface IndustryCategory {
  slug: string;
  /** Full category name as it appears on the Cortec® website and in the dropdown menu */
  name: string;
  /** Shorter label for the footer and compact listings */
  shortLabel: string;
  /** Card text for the industries index grid */
  cardDescription: string;
  /** True when the industry has its own hand-written page (not rendered by the dynamic route) */
  bespoke?: boolean;
  metaDescription?: string;
  heroSubtitle?: string;
  intro?: string[];
  /** "How we help" bullet points */
  highlights?: string[];
  /** Application photos shown on the page */
  images?: { src: string; alt: string }[];
  /** Relevant product categories on this site */
  relatedCategories?: { label: string; href: string }[];
  /** Link to the complete range on cortecvci.com */
  cortecUrl?: string;
  /** Cortec® PDF brochure for this sector */
  brochureUrl?: string;
}

export const industryCategories: IndustryCategory[] = [
  {
    slug: "aerospace",
    name: "VpCI® Technology for Aircraft, Aviation, and Aerospace Industries",
    shortLabel: "Aircraft, Aviation & Aerospace",
    cardDescription:
      "Zero-residue corrosion protection for turbine blades, landing gear, avionics, and structural parts during manufacturing and transit.",
    bespoke: true,
  },
  {
    slug: "mining",
    brochureUrl:
      "https://www.cortecvci.com/whats_new/announcements/Mining_Brochure.pdf",
    name: "VpCI® Technology for Off-Road Equipment and Mining Industries",
    shortLabel: "Off-Road Equipment & Mining",
    cardDescription:
      "Preservation of heavy machinery, spare parts and idle fleets exposed to the harshest operating and storage conditions.",
    metaDescription:
      "Cortec® VpCI® corrosion protection for off-road equipment and mining — preservation of heavy machinery, spares, hydraulics and idle fleets. Available from Cortec Ireland.",
    heroSubtitle:
      "Excavators, dumpers, crushers and quarry plant work in mud, water and grit — and corrode fastest when parked. VpCI® technology preserves machines and spares through storage, shipment and seasonal layup.",
    intro: [
      "Off-road and mining equipment faces a double corrosion threat: aggressive operating environments while working, and condensation attack while parked. Machines idled for the winter, awaiting sale or held as strategic spares can deteriorate faster in storage than in service.",
      "Cortec® VpCI® products preserve complete machines and individual components without disassembly. Shrink film enclosures protect entire machines outdoors, emitters protect cabs and electrical systems, and VpCI® additives protect fuel, hydraulic and cooling systems from the inside.",
    ],
    highlights: [
      "Whole-machine preservation with MilCorr® and VpCI®-126 HP UV shrink films for outdoor storage",
      "Protection of hydraulic systems, gearboxes and engines during layup using VpCI® additives and fogging",
      "VpCI® emitters for cab electronics, control panels and battery compartments",
      "Export packaging of components, wear parts and spares in VpCI® film and paper",
      "EcoLine® wire rope grease and enhanced lubricants for draglines, winches and cranes",
      "Rust removal and surface preparation for refurbishment programmes",
    ],
    relatedCategories: [
      { label: "VpCI® Packaging Products", href: "/products/packaging" },
      { label: "VpCI® Enhanced Lubricant Products", href: "/products/lubricants" },
      { label: "VpCI® High Performance Coatings", href: "/products/coatings" },
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-technology-for-off-road-equipment-and-mining-industries/",
  },
  {
    slug: "marine",
    brochureUrl:
      "https://www.cortecvci.com/Publications/Brochures/Marine-Shipbuilding-Brochure.pdf",
    name: "VpCI® Technology for Marine and Shipbuilding Industries",
    shortLabel: "Marine & Shipbuilding",
    cardDescription:
      "Comprehensive corrosion solutions for vessels, offshore equipment, and marine hardware exposed to saltwater and aggressive marine atmospheres.",
    bespoke: true,
  },
  {
    slug: "military",
    brochureUrl:
      "https://www.cortecvci.com/Publications/Brochures/Military/MilCorr%20Broch.pdf",
    name: "VpCI® for Military Preservation Worldwide",
    shortLabel: "Military Preservation",
    cardDescription:
      "MIL-spec preservation of vehicles, equipment, weapons systems and spares — trusted by defence forces worldwide.",
    metaDescription:
      "Cortec® VpCI® military preservation — MIL-spec corrosion protection for vehicles, equipment, weapons systems and strategic spares. Available from Cortec Ireland.",
    heroSubtitle:
      "Defence equipment must work first time after years in storage. Cortec® VpCI® preservation systems — including MIL-PRF-22019 compliant MilCorr® shrink film — keep vehicles, weapons systems and spares mission-ready.",
    intro: [
      "Military organisations hold enormous inventories of vehicles, equipment and spares that may sit in storage for years between uses — yet must be operational at short notice. Traditional preservation with greases and oils is labour-intensive to apply and even more labour-intensive to remove.",
      "Cortec® VpCI® technology is used by defence forces worldwide because it protects without residue: preserved equipment is ready for immediate use, with no depreservation step. Products in the range conform to international, government and military specifications, including MIL-PRF-22019 for MilCorr® shrink film.",
    ],
    highlights: [
      "Whole-vehicle and equipment enclosures in MilCorr® VpCI® shrink film for outdoor storage",
      "Preservation of engines, transmissions, fuel and hydraulic systems during long-term layup",
      "VpCI® emitters for electronics, avionics, comms equipment and control systems",
      "Corrosion-free storage of weapons, tooling and small parts in VpCI® film, bags and papers",
      "Mothballing and reactivation programmes for reserve fleets and facilities",
      "Products conforming to military and government specifications",
    ],
    relatedCategories: [
      { label: "VpCI® Packaging Products", href: "/products/packaging" },
      { label: "VpCI® Products for Electronics and Electrics", href: "/products/electronics" },
      { label: "VpCI® High Performance Coatings", href: "/products/coatings" },
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-for-military-preservation-worldwide/",
  },
  {
    slug: "eco-mro",
    name: "VpCI® Eco & MRO Products — Repair and Maintenance",
    shortLabel: "Eco & MRO — Repair & Maintenance",
    cardDescription:
      "Practical, environmentally responsible corrosion protection for maintenance, repair and operations teams — from control cabinets to standby plant.",
    metaDescription:
      "Cortec® VpCI® Eco & MRO products for repair and maintenance — cleaners, rust removers, penetrants, emitters and preservation products for maintenance teams. Available from Cortec Ireland.",
    heroSubtitle:
      "Everyday corrosion protection for maintenance, repair and operations — cleaners, rust removers, penetrants and emitters that keep plant, panels and standby equipment in service condition.",
    intro: [
      "Maintenance teams fight corrosion every day: seized fasteners, rusted enclosures, corroded contacts, standby equipment that deteriorates while idle. Cortec®'s Eco & MRO range puts VpCI® technology into the practical formats maintenance crews actually use — sprays, wipes, gels, emitters and drop-in devices.",
      "Many of the products are biobased, biodegradable and non-toxic, so they can be used safely across plant environments — from outdoor electrical cabinets to food-adjacent areas — without special handling requirements.",
    ],
    highlights: [
      "VpCI® emitters for electrical cabinets, junction boxes, minipillars and control panels",
      "VpCI® Super Penetrant for freeing seized fasteners and mechanisms",
      "Rust removers and surface preparation ahead of repair and recoating",
      "Fogging fluids for preserving tanks, vessels and voids during shutdowns",
      "Preservation of standby and seasonal equipment between operating periods",
      "Environmentally responsible EcoLine® and EcoAir® maintenance products",
    ],
    relatedCategories: [
      { label: "VpCI® Surface Preparation Products", href: "/products/surface-preparation" },
      { label: "VpCI® Enhanced Lubricant Products", href: "/products/lubricants" },
      { label: "VpCI® Products for Electronics and Electrics", href: "/products/electronics" },
    ],
    cortecUrl: "https://www.cortecvci.com/products/",
  },
  {
    slug: "automotive",
    brochureUrl:
      "https://www.cortecvci.com/Publications/Brochures/Automotive_Brochure.pdf",
    name: "VpCI® Technology for Automotive Industry",
    shortLabel: "Automotive",
    cardDescription:
      "VCI packaging protects stamped parts, machined components, and assemblies from humidity and condensation during transit and storage.",
    bespoke: true,
  },
  {
    slug: "basic-metals",
    brochureUrl:
      "https://www.cortecvci.com/Publications/Brochures/Steel%20Broch.pdf",
    name: "VpCI® for Basic Metals Industries",
    shortLabel: "Basic Metals",
    cardDescription:
      "In-process and shipment protection for coil, sheet, bar, wire and castings — from the mill to the customer's door.",
    metaDescription:
      "Cortec® VpCI® corrosion protection for basic metals industries — coil, sheet, bar, wire, castings and forgings protected from mill to customer. Available from Cortec Ireland.",
    heroSubtitle:
      "Steel, aluminium and copper products can rust before they ever reach the customer. VpCI® papers, films and treatments protect coil, sheet, bar and castings from the mill through processing, storage and shipment.",
    intro: [
      "For producers and processors of basic metals, corrosion claims are a direct hit to margin and reputation. Coil stored in humid warehouses, sheet interleaved with plain paper, bar stock shipped across climate zones — all arrive with rust unless actively protected.",
      "Cortec® VpCI® products protect metal products at every stage: in-process treatments prevent flash rust after pickling and rolling, VpCI® papers and films protect coils and sheet in storage and transit, and powders and fogging fluids protect voids and internal surfaces of fabricated products.",
    ],
    highlights: [
      "Coil wrapping with VpCI® papers, films and reinforced laminates",
      "Interleaving papers for sheet, plate and finished blanks",
      "CorrTube® paper tubes and wraps for bar stock and tube",
      "Flash-rust prevention after pickling, washing and hydrotesting",
      "Export packaging systems for containerised shipment through marine environments",
      "VpCI® additives for in-process fluids and rinse waters",
    ],
    relatedCategories: [
      { label: "VpCI® Packaging Products", href: "/products/packaging" },
      { label: "VpCI® Metalworking Products", href: "/products/metalworking" },
      { label: "VpCI® Surface Preparation Products", href: "/products/surface-preparation" },
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-for-basic-metals-industries/",
  },
  {
    slug: "oil-gas",
    brochureUrl:
      "https://www.cortecvci.com/Publications/Brochures/Oil&Gas_Brochure.pdf",
    name: "VpCI® for Oil, Gas and Process Industries",
    shortLabel: "Oil, Gas & Process",
    cardDescription:
      "Pipeline preservation, vessel mothballing, and equipment protection during shutdowns — without hazardous chemicals.",
    bespoke: true,
  },
  {
    slug: "desalination",
    brochureUrl:
      "https://www.cortecvci.com/Publications/Brochures/Desalination_Brochure.pdf",
    name: "VpCI® Technology for Desalination Industry",
    shortLabel: "Desalination",
    cardDescription:
      "Hydrotest, layup and preservation solutions for desalination plants operating in the most corrosive environment of all — hot salt water.",
    metaDescription:
      "Cortec® VpCI® corrosion protection for the desalination industry — hydrotesting, layup and preservation of desalination plant, pipework and vessels. Available from Cortec Ireland.",
    heroSubtitle:
      "Desalination plants combine salt water, heat and dissimilar metals — the perfect corrosion storm. VpCI® technology protects plant through construction, commissioning, hydrotesting, operation and layup.",
    intro: [
      "Few industries face a more aggressive corrosion environment than desalination: hot, chloride-rich water in contact with carbon steel, stainless steel, copper alloys and aluminium — often in coastal atmospheres that attack external surfaces too.",
      "Cortec® VpCI® products are used throughout the lifecycle of desalination plants: protecting equipment during construction and storage on site, treating hydrotest water so testing doesn't become the first corrosion event, and preserving membranes housings, evaporators, pumps and pipework during standby and extended layup.",
    ],
    highlights: [
      "Hydrostatic test water additives that protect during and after testing",
      "Wet and dry layup of evaporators, RO trains, pumps and pipework",
      "VpCI® fogging and powders for vessels, tanks and void spaces",
      "Protection of control systems and electrical equipment in saline atmospheres",
      "Preservation of construction materials and spares stored in coastal environments",
      "Salt-water rated inhibitors such as VpCI®-644 for brine systems",
    ],
    relatedCategories: [
      { label: "VpCI® Water Treatment Products", href: "/products/water-treatment" },
      { label: "VpCI® Powder Products", href: "/products/powders" },
      { label: "VpCI® Packaging Products", href: "/products/packaging" },
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-technology-for-desalination-industry/",
  },
  {
    slug: "transportation",
    brochureUrl:
      "https://www.cortecvci.com/Publications/Brochures/Transportation_Municipality_Brochure.pdf",
    name: "VpCI® Technology for Transportation and Municipalities",
    shortLabel: "Transportation & Municipalities",
    cardDescription:
      "Protection for fleets, rail, bridges and municipal infrastructure attacked by road salt, weather and time.",
    metaDescription:
      "Cortec® VpCI® and MCI® corrosion protection for transportation and municipalities — fleets, rail, bridges, water infrastructure and public assets. Available from Cortec Ireland.",
    heroSubtitle:
      "Road salt, weather and constant use attack public infrastructure and transport fleets. VpCI® and MCI® technologies protect vehicles, rail equipment, bridges and municipal water systems.",
    intro: [
      "Transportation assets and municipal infrastructure are long-life investments exposed to some of the most punishing everyday corrosion conditions — de-icing salt on roads and bridges, weather on rolling stock and fleets, and continuous immersion in water and wastewater systems.",
      "Cortec® provides both sides of the answer: VpCI® products for vehicles, equipment and metal assets, and MCI® Migrating Corrosion Inhibitors for the reinforced concrete of bridges, car parks and public structures.",
    ],
    highlights: [
      "MCI® admixtures, surface treatments and repair mortars for bridges and concrete structures",
      "Undercarriage and cavity protection for fleet vehicles exposed to road salt",
      "Preservation of seasonal equipment — gritters, mowers, plant — between operating seasons",
      "VpCI® water treatment for municipal boilers, closed loops and standby systems",
      "Protection of electrical cabinets, pumping stations and roadside enclosures",
      "Corrosion protection for rail rolling stock and infrastructure components",
    ],
    relatedCategories: [
      { label: "MCI® Concrete Protection Products", href: "/products/mci-concrete" },
      { label: "VpCI® High Performance Coatings", href: "/products/coatings" },
      { label: "VpCI® Water Treatment Products", href: "/products/water-treatment" },
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-technology-for-transportation-and-municipalities/",
  },
  {
    slug: "food-beverage-pharmaceutical",
    brochureUrl:
      "https://www.cortecvci.com/Publications/Brochures/Food_and_Beverage_Brochure_03-2016.pdf",
    name: "VpCI® Technology for Food, Beverage, and Pharmaceutical Industries",
    shortLabel: "Food, Beverage & Pharmaceutical",
    cardDescription:
      "Food-safe, clean-room compatible corrosion protection for processing equipment, packaging lines and utilities.",
    metaDescription:
      "Cortec® VpCI® corrosion protection for food, beverage and pharmaceutical industries — food-safe, non-toxic protection for processing equipment, packaging lines and utilities. Available from Cortec Ireland.",
    heroSubtitle:
      "Hygiene rules out oils and hazardous chemistry — but washdowns, steam and salt-laden ingredients drive corrosion hard. Non-toxic VpCI® technology protects processing plant without compromising product safety.",
    intro: [
      "Food, beverage and pharmaceutical plants face a unique corrosion challenge: aggressive washdown regimes, steam, brines and acids attack equipment daily, yet conventional protective oils and inhibitors are unacceptable anywhere near the product. Ireland's dairy, beverage and pharmaceutical sectors know this problem well.",
      "Cortec® VpCI® products are non-toxic, free of nitrites and heavy metals, with several products USDA-approved for use in food-processing environments and EcoLine® lubricants formulated for food machinery. They protect processing equipment, spares and utilities through production, washdown, seasonal shutdown and equipment storage.",
    ],
    highlights: [
      "Seasonal layup of processing lines — protection through the off-season without disassembly",
      "EcoLine® food machinery greases and lubricants for use where incidental contact is possible",
      "VpCI® emitters for control cabinets, instrumentation and switchgear in washdown areas",
      "Corrosion-free storage of spare parts, change parts and tooling in VpCI® packaging",
      "Boiler and closed-loop water treatment for plant utilities",
      "Clean, residue-free protection compatible with hygiene and audit requirements",
    ],
    relatedCategories: [
      { label: "VpCI® Packaging Products", href: "/products/packaging" },
      { label: "VpCI® Enhanced Lubricant Products", href: "/products/lubricants" },
      { label: "VpCI® Water Treatment Products", href: "/products/water-treatment" },
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-technology-for-food-beverage-and-pharmaceutical-industries/",
  },
  {
    slug: "eco-flow",
    brochureUrl:
      "https://www.cortecvci.com/Publications/Brochures/ecoflow_brochure.pdf",
    name: "ECO FLOW® SYSTEM — Reduce Cost & Increase Production",
    shortLabel: "ECO FLOW® System",
    cardDescription:
      "Cortec's ECO FLOW® SYSTEM integrates corrosion protection into your production flow to reduce cost and increase output.",
    metaDescription:
      "Cortec® ECO FLOW® SYSTEM — integrating VpCI® corrosion protection into production processes to reduce cost and increase production. Available from Cortec Ireland.",
    heroSubtitle:
      "Corrosion protection shouldn't be an extra step. The ECO FLOW® SYSTEM builds Cortec® VpCI® protection into your production flow — cutting process steps, waste and cost while increasing output.",
    intro: [
      "Every separate preservation step in a production process costs time, labour and floor space: degreasing, oiling, wrapping, unwrapping, cleaning. The ECO FLOW® SYSTEM is Cortec's approach to designing those steps out — integrating VpCI® protection into the fluids, packaging and handling your process already uses, so parts flow from machine to dispatch without dedicated rust-proofing stages.",
      "Our team will review your current process end-to-end, identify where corrosion protection can be built in rather than bolted on, and specify the Cortec® products to do it. Contact us to arrange a process review, or explore the full details on the Cortec® website.",
    ],
    highlights: [
      "Process review to identify redundant preservation and cleaning steps",
      "VpCI® metalworking fluids that protect parts straight off the machine",
      "One-step VpCI® packaging replacing oil-plus-wrap systems",
      "Reduced solvent, degreasing and waste disposal costs",
      "Faster throughput from dispensing with apply-and-remove protection cycles",
    ],
    relatedCategories: [
      { label: "VpCI® Metalworking Products", href: "/products/metalworking" },
      { label: "VpCI® Packaging Products", href: "/products/packaging" },
    ],
    cortecUrl: "https://www.cortecvci.com/products/",
  },
  {
    slug: "field-services",
    name: "Corrosion Engineering and Field Services",
    shortLabel: "Corrosion Engineering & Field Services",
    cardDescription:
      "Site surveys, preservation projects and hands-on application services delivered by our own corrosion specialists.",
    metaDescription:
      "Corrosion engineering and field services from Cortec Ireland — site surveys, preservation projects, wrapping, fogging and layup services delivered by corrosion specialists.",
    heroSubtitle:
      "We don't just supply the products — we deliver the projects. Our specialists carry out surveys, preservation, wrapping, fogging and layup work on site, anywhere in Ireland and beyond.",
    intro: [
      "Some corrosion problems need more than a product recommendation. Cortec Ireland provides hands-on corrosion engineering and field services: our team surveys your site or equipment, designs the preservation approach and carries out the work — from shrink-wrapping complete machines to fogging vessels and laying up entire systems.",
      "Backed by Cortec® Corporation's global engineering resources and case history library, we bring proven methods to every project, with documentation to support warranty, insurance and audit requirements.",
    ],
    highlights: [
      "Corrosion surveys and preservation planning for plant, equipment and structures",
      "On-site shrink-wrapping of machinery, skids and oversized equipment",
      "VpCI® fogging of tanks, vessels, pipework and void spaces",
      "Mothballing and layup programmes for plant shutdowns and decommissioning",
      "Reactivation support when preserved equipment returns to service",
      "Free initial assessment and product recommendation from our specialist engineers",
    ],
    images: [
      {
        src: "/images/applications/film-wrap-crew-1.webp",
        alt: "Cortec Ireland crew wrapping equipment in VpCI film on site",
      },
      {
        src: "/images/applications/fogging-vessel-offshore.webp",
        alt: "VpCI fogging of an offshore vessel",
      },
      {
        src: "/images/applications/storage-tank-manway-scaffold.webp",
        alt: "Storage tank manway access for preservation works",
      },
    ],
    relatedCategories: [
      { label: "VpCI® Packaging Products", href: "/products/packaging" },
      { label: "VpCI® Powder Products", href: "/products/powders" },
      { label: "VpCI® Water Treatment Products", href: "/products/water-treatment" },
    ],
    cortecUrl: "https://www.cortecvci.com/products/",
  },
];

export function getIndustryCategory(slug: string): IndustryCategory | undefined {
  return industryCategories.find((c) => c.slug === slug);
}
