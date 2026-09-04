export interface FeaturedProduct {
  name: string;
  description: string;
  image?: string;
}

export interface ProductCategory {
  slug: string;
  /** Full category name as it appears on the Cortec® website and in the dropdown menu */
  name: string;
  /** Shorter label for the footer and compact listings */
  shortLabel: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string[];
  /** Products we can show with photos and full descriptions */
  featured: FeaturedProduct[];
  /** The rest of the range — listed by name */
  alsoInRange: string[];
  /** Link to the complete range on cortecvci.com */
  cortecUrl: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "electronics",
    name: "VpCI® Products for Electronics and Electrics",
    shortLabel: "Electronics & Electrics",
    metaDescription:
      "Cortec® VpCI® corrosion protection for electronics and electrical equipment — emitters, ESD films and electronic cleaners. Available from Cortec Ireland.",
    heroSubtitle:
      "Contactless corrosion protection for circuit boards, contacts, relays and electrical enclosures. VpCI® molecules protect sensitive electronics without affecting conductivity, permittivity or performance.",
    intro: [
      "Electronic and electrical equipment is especially vulnerable to corrosion — a microscopic layer of oxide on a contact or relay can cause intermittent faults, signal degradation and outright failure. Cortec® VpCI® products for electronics condition the air inside enclosures with an invisible, non-toxic corrosion-inhibiting vapour that forms a protective molecular layer on every exposed metal surface.",
      "Because the protective layer is only molecules thick, it does not alter electrical or thermal properties. Boards, contacts and assemblies remain fully operational while protected — during manufacture, shipment, storage and in service.",
    ],
    featured: [
      {
        name: "VpCI®-101 Device",
        image: "/images/products/vpci-101.webp",
        description:
          "Purpose-built corrosion inhibitor device for electrical and electronic enclosures. Designed to protect sensitive electronics, circuit boards, connectors and relay contacts from corrosion without interfering with electrical performance.",
      },
      {
        name: "VpCI®-105 Emitter Cups",
        image: "/images/products/vpci-105.webp",
        description:
          "Self-adhesive emitter cups that mount inside enclosures and release VpCI molecules continuously. Ideal for electrical panels, junction boxes, control cabinets and instrument housings. Each cup protects up to 5 cubic feet of enclosed space for up to 2 years.",
      },
      {
        name: "VpCI®-111 Emitter Strips",
        image: "/images/products/vpci-111.webp",
        description:
          "Flexible emitter strips that can be cut to length and placed inside narrow or irregularly shaped enclosures. Suitable for conduit boxes, cable trays, tool drawers and small storage containers. Easy to install with a peel-and-stick adhesive backing.",
      },
      {
        name: "EcoSonic® VpCI®-125 ESD Film & Bags",
        image: "/images/products/vpci-125-esd.webp",
        description:
          "Static-dissipative VpCI film for packaging electronics and ESD-sensitive components. Combines electrostatic discharge protection with multi-metal corrosion inhibition in a single film, protecting circuit boards, connectors and assemblies during storage and transit.",
      },
    ],
    alsoInRange: [
      "VpCI®-110 Emitter",
      "EcoEmitter® — biobased VpCI® emitter",
      "ElectriCorr® VpCI®-238 electronic cleaner & corrosion inhibitor",
      "ElectriCorr® VpCI®-239 for outdoor electrical applications",
      "ElectriCorr® VpCI®-286 conformal coating",
      "Corrosorber® corrosive-gas absorbers",
      "VpCI®-130 Series emitting foams",
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-products-for-electronics-and-electrics/",
  },
  {
    slug: "packaging",
    name: "VpCI® Packaging Products",
    shortLabel: "Packaging",
    metaDescription:
      "Cortec® VpCI® packaging — films, bags, shrink films, papers, foams, emitters and devices for corrosion-free packaging, shipping and storage of metal parts. Available from Cortec Ireland.",
    heroSubtitle:
      "Films, bags, shrink films, papers, foams and emitter devices infused with Cortec®'s Vapour Phase Corrosion Inhibitor technology. No oils, no residue, no cleanup required.",
    intro: [
      "VpCI packaging works by releasing invisible, non-toxic Vapour Phase Corrosion Inhibitor molecules from within the packaging material. Once sealed around a metal part, these molecules saturate the enclosed air space and form a protective molecular layer on all exposed metal surfaces — including hard-to-reach recesses, cavities and internal passages that traditional oil-based methods cannot protect.",
      "The protection begins immediately and remains effective for as long as the packaging stays sealed. When the part is unwrapped, the VpCI layer dissipates naturally, leaving a clean, dry surface that is ready for use, painting or further processing with no cleaning step required. A single material protects ferrous and non-ferrous metals simultaneously.",
    ],
    featured: [
      {
        name: "VpCI®-126 Blue Film & Bags",
        image: "/images/products/vpci-126-bags.webp",
        description:
          "The industry standard multi-metal VpCI film. Protects ferrous and non-ferrous metals simultaneously. Available as bags, sheeting, tubing and custom fabrications. Up to 5 years of corrosion protection in sealed packaging.",
      },
      {
        name: "VpCI®-126 HP UV Shrink Film",
        image: "/images/products/vpci-126-hp-uv-roll.webp",
        description:
          "Heavy-duty version of the VpCI-126 for demanding applications. Thicker gauge polyethylene with enhanced puncture resistance and UV stabilisation, ideal for heavy castings, machined parts and assemblies with sharp edges.",
      },
      {
        name: "MilCorr® VpCI® Shrink Film",
        image: "/images/products/milcorr-shrink-film.webp",
        description:
          "Military-grade shrink film that meets MIL-PRF-22019 requirements. Heat-shrinkable for tight, conforming enclosures around large equipment, vehicles and outdoor storage. UV-stabilised for extended outdoor exposure.",
      },
      {
        name: "VpCI®-146 Paper",
        image: "/images/products/vpci-146-roll.webp",
        description:
          "The flagship multi-metal VpCI® kraft paper. Protects ferrous and non-ferrous metals with a single paper. Available in rolls and sheets. Ideal for wrapping individual parts, interleaving between stacked metal sheets and lining crates for shipment.",
      },
      {
        name: "VpCI®-130 Series Foam",
        image: "/images/products/vpci-130-foam.webp",
        description:
          "VpCI-emitting polyurethane foam that cushions delicate parts while releasing corrosion inhibitors into the surrounding space. Ideal for lining cases, trays and containers where both physical protection and corrosion protection are required.",
      },
      {
        name: "Cor-Pak® VpCI® Tablets",
        image: "/images/products/cor-pak-tablets.webp",
        description:
          "Compact VpCI tablets that release corrosion inhibitors into small enclosed spaces such as tool boxes, instrument cases, junction boxes and packaged assemblies. A simple drop-in way to protect metals where a larger emitter will not fit.",
      },
      {
        name: "DesiCorr® VpCI® Pouches",
        image: "/images/products/desicorr-pouches.webp",
        description:
          "Dual-action pouch combining a desiccant with VpCI protection. Absorbs excess moisture while releasing corrosion inhibitors, providing complete protection inside sealed packaging without the drawbacks of desiccant alone.",
      },
      {
        name: "CorrTainer® VpCI® Boxes",
        image: "/images/products/corrtainer.webp",
        description:
          "Coated corrugated boxes with built-in VpCI protection — shipping carton and corrosion protection in one. Ideal for bearings, fasteners and machined parts that ship and store without a separate VpCI bag or wrap.",
      },
    ],
    alsoInRange: [
      "EcoShield® VpCI®-144 barrier paper — recyclable replacement for polyethylene- and wax-coated papers",
      "CorShield® VpCI®-146 — USDA Certified Biobased paper",
      "EcoBio® VpCI®-146 — biobased, industrially compostable paper",
      "VpCI®-148 creped paper for irregular shapes",
      "Cor-Pak® cohesive paper",
      "Cor-Pak® VpCI® stretch film",
      "Cor-Pak® VpCI®-137 foam pouches",
      "CorrTube® VpCI® tubes for bar stock and shafts",
      "CorrLam® VpCI® barrier laminate",
      "EcoWeave® reinforced VpCI® fabric",
      "CorrNetting® VpCI® netting",
      "Corrosorber® corrosive-gas absorbers",
    ],
    cortecUrl: "https://www.cortecvci.com/products/vpci-packaging-products/",
  },
  {
    slug: "metalworking",
    name: "VpCI® Metalworking Products",
    shortLabel: "Metalworking",
    metaDescription:
      "Cortec® VpCI® metalworking fluids and rust preventatives — cutting fluids, in-process corrosion protection and interoperational rust prevention. Available from Cortec Ireland.",
    heroSubtitle:
      "Cutting fluids, rust preventatives and in-process treatments that protect parts between machining operations — so work-in-progress never rusts on the shop floor.",
    intro: [
      "Freshly machined metal is at its most vulnerable — bare, warm and often damp with coolant. Cortec® VpCI® metalworking products build corrosion protection directly into machining, grinding, forming and washing operations, protecting the workpiece and the machine tool without extra process steps.",
      "Because VpCI® protection is built into the fluid, parts come off the machine already protected for interoperational storage and transfer — eliminating flash rust, rework and rejected parts.",
    ],
    featured: [
      {
        name: "M-645 Metalworking Fluid",
        description:
          "High-performance metalworking fluid with built-in VpCI® corrosion inhibition. Provides lubrication and cooling during machining, grinding and forming operations while simultaneously protecting the workpiece and machine tool from corrosion between operations.",
      },
      {
        name: "EcoLine® Cutting Fluids",
        description:
          "Biobased metalworking fluids formulated from renewable vegetable oils. USDA Certified Biobased products that deliver excellent cutting and grinding performance with built-in corrosion protection and a significantly lower environmental footprint.",
      },
      {
        name: "BioCorr® Rust Preventative",
        description:
          "Ready-to-use, water-based rust preventative that is a biobased alternative to oil-based products. Leaves a thin, dry, non-greasy film that protects parts in storage and transit — with no oily residue to clean off before the next operation.",
      },
      {
        name: "VpCI®-337 Fogging Fluid",
        image: "/images/products/vpci-337.webp",
        description:
          "Water-based corrosion inhibitor that is fogged or sprayed into packaging, containers, tanks and void spaces before sealing. The VpCI® vapour reaches every internal surface, making it ideal for preserving large or complex volumes that cannot be wrapped.",
      },
    ],
    alsoInRange: [
      "VpCI®-377 water-based rust preventative concentrate",
      "VpCI®-322 oil-based concentrate for lubricants and metalworking oils",
      "VpCI®-329 oil-based additive concentrate",
      "M-370 additive for water-based systems",
      "M-238 additive concentrate",
      "EcoLine® 3220 rust preventative",
      "Corwipe® 300 & 500 cleaning and protection wipes",
    ],
    cortecUrl: "https://www.cortecvci.com/products/vpci-metalworking-products/",
  },
  {
    slug: "powders",
    name: "VpCI® Powder Products",
    shortLabel: "Powders",
    metaDescription:
      "Cortec® VpCI® corrosion inhibiting powders for protecting tanks, pipework, voids and enclosed spaces — including VpCI-309 and VpCI-308 pouches. Available from Cortec Ireland.",
    heroSubtitle:
      "Free-flowing corrosion inhibiting powders for the internal protection of tanks, vessels, pipework, voids and equipment in layup — reaching surfaces that liquids and coatings cannot.",
    intro: [
      "VpCI® powders are one of the most economical ways to protect large internal volumes. Applied by sprinkling, dusting or fogging into the space, the powder releases vapour phase corrosion inhibitors that condition the entire enclosed atmosphere and form a protective molecular layer on every metal surface — including welds, crevices and dead spaces.",
      "Powders are ideal for hydrostatic test layup, void protection, mothballing and seasonal equipment storage. On recommissioning there is typically no need for removal — a simple rinse or air blow-down is enough, and water-soluble grades can simply be left to dissolve in service.",
    ],
    featured: [
      {
        name: "VpCI®-309 Powder",
        image: "/images/products/vpci-309.webp",
        description:
          "Free-flowing VpCI powder for protecting the interiors of tanks, voids, pipework and large enclosures. Sprinkled or fogged into the space, it releases vapour phase corrosion inhibitors that reach surfaces liquid treatments cannot coat.",
      },
      {
        name: "VpCI®-308 Pouch",
        image: "/images/products/vpci-308-pouch.webp",
        description:
          "VpCI powder pre-packed in breathable pouches for protecting enclosed volumes such as large control cabinets, crates and shipping containers. A single pouch releases VpCI molecules to protect the entire enclosed space for up to two years.",
      },
      {
        name: "VpCI®-609 Powder for Ferrous Metals",
        description:
          "Water-soluble Vapour Phase Corrosion Inhibiting powder for wet or dry protection of ferrous metals and aluminium. Used in tubular structures, pipes and vessels, the internal surfaces of compressors, turbines, engines, tanks, boilers and heat exchangers, steam condensate lines and closed-circuit heating and cooling systems, and equipment during and after hydrostatic testing. Provides up to 24 months of continuous protection. Supplied in 5 lb (2.3 kg), 50 lb (23 kg) and 100 lb (45 kg) moisture-barrier bags packed in fibre-lined drums. Patented.",
      },
    ],
    alsoInRange: [
      "VpCI®-608 powder for ferrous metals and aluminium",
      "VpCI®-609 S with silica for extra moisture control",
      "VpCI®-611 powder for wet corrosion protection",
      "VpCI®-644 powder for salt water and brine systems",
      "Boiler Lizard® — powder in a water-soluble bag for boiler layup (see Water Treatment)",
    ],
    cortecUrl: "https://www.cortecvci.com/products/vpci-powder-products/",
  },
  {
    slug: "surface-preparation",
    name: "VpCI® Surface Preparation Products",
    shortLabel: "Surface Preparation",
    metaDescription:
      "Cortec® VpCI® surface preparation — rust removers, cleaners, degreasers and paint strippers that clean metal and leave flash-rust protection behind. Available from Cortec Ireland.",
    heroSubtitle:
      "Rust removers, cleaners and degreasers that prepare metal surfaces safely — and leave a corrosion-inhibiting layer behind so freshly cleaned parts don't flash rust.",
    intro: [
      "Before metal can be protected, coated or repaired it usually needs cleaning — and conventional cleaning chemistry often causes the very flash rust it is meant to prevent. Cortec® surface preparation products are based on organic chemistry that replaces harsh acids: they remove rust, oxide, oil, grease and old paint while depositing a thin VpCI® layer that keeps the cleaned surface protected.",
      "Most products in the range are water-based, biodegradable, non-toxic and non-flammable — safe for workers and suitable for multi-metal use.",
    ],
    featured: [
      {
        name: "EcoClean® VpCI®-423 Rust Remover",
        image: "/images/products/ecoclean-423.webp",
        description:
          "Biodegradable, USDA Certified Biobased rust remover that strips surface rust and tarnish from steel and other metals, then leaves a temporary corrosion-inhibiting layer to prevent flash rusting. Its gel-like consistency clings to vertical surfaces for treatment without immersion.",
      },
      {
        name: "EcoSpray® VpCI®-416 Cleaner & Degreaser",
        image: "/images/products/ecospray-416.webp",
        description:
          "Heavy-duty, non-toxic cleaner and degreaser that lifts grease, oil and industrial soils from metal surfaces while providing multi-metal corrosion protection during cleaning. USDA-approved for use in food-processing environments.",
      },
      {
        name: "Corwipe® 500",
        description:
          "A multi-purpose wipe that removes light rust, grease, oil and dust while leaving behind a thin protective antistatic VpCI® film. The static-dissipative film drains charges when properly grounded, reducing triboelectric voltage to less than 300 volts. Patented.",
      },
      {
        name: "VpCI®-426 Gel Rust/Scale Remover",
        description:
          "Multimetal rust and scale remover in a gel formulation, designed for use on vertical and other hard-to-reach surfaces where a liquid would run off. Supplied in 5 gallon (19 litre) pails, 55 gallon (208 litre) drums, totes and bulk.",
      },
    ],
    alsoInRange: [
      "VpCI®-414 cleaner & corrosion inhibitor for interoperational cleaning",
      "VpCI®-415 heavy-duty alkaline cleaner",
      "VpCI®-417 powdered cleaner concentrate",
      "VpCI®-422 organic rust remover",
      "VpCI®-432 / 433 paint strippers",
      "EcoClean® Silver tarnish remover",
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-surface-preparation-products/",
  },
  {
    slug: "water-treatment",
    name: "VpCI® Water Treatment Products",
    shortLabel: "Water Treatment",
    metaDescription:
      "Cortec® VpCI® water treatment — boiler layup, closed-loop and cooling water corrosion inhibitors including Boiler Lizard and VpCI-649. Available from Cortec Ireland.",
    heroSubtitle:
      "Corrosion protection for boilers, closed loops, cooling systems and hydrostatic testing — in both the liquid phase and the vapour space that conventional treatments cannot reach.",
    intro: [
      "Conventional water treatment protects metal only where the water touches it. Cortec® VpCI® water treatment products protect in the liquid phase, at the waterline interface and in the vapour space above — the area where the worst corrosion usually occurs in boilers, tanks and part-filled systems.",
      "The range covers operational treatment, wet and dry layup, seasonal shutdown and hydrostatic test water — with famously simple delivery systems like the Boiler Lizard® that drop straight into the equipment in a water-soluble bag.",
    ],
    featured: [
      {
        name: "Boiler Lizard®",
        image: "/images/products/boiler-lizard.webp",
        description:
          "VpCI® powder pre-packed in EcoSol® water-soluble bags for the dry layup of boilers and closed water systems. Dropped straight into the boiler, it releases vapour phase corrosion inhibitors that protect tubes, internal surfaces and the vapour space during idle periods — with no messy clean-out on start-up.",
      },
      {
        name: "VpCI®-649",
        image: "/images/products/vpci-649.webp",
        description:
          "Multi-metal corrosion inhibitor for boiler systems, closed-loop cooling water and hydrotest water. Provides vapour phase and liquid phase protection simultaneously. A single product replaces multiple individual inhibitors, simplifying treatment programmes and reducing inventory.",
      },
      {
        name: "Cooling Loop Gator®",
        description:
          "VpCI®-based powder supplied in polyvinyl-alcohol (PVA) water-soluble bags for the seasonal, short or long-term layup of cooling towers. Supplied as four 2.2 lb (1 kg) bags per box. Patented.",
      },
      {
        name: "Cooling Tower Frog®",
        description:
          "Vapour phase corrosion inhibitor powder in polyvinyl-alcohol (PVA) water-soluble bags, developed specifically for the dry layup of cooling towers and effective for up to 12 months. Once the bag is opened the inhibitors vaporise and adsorb onto all metal surfaces, reaching recessed areas and interior cavities to form a strong, self-replenishing protective layer. Provides three-phase multimetal protection across the vapour phase, liquid phase and the vapour-liquid interface, and requires no special preparation before start-up. Supplied as two 4 lb (1.8 kg) bags per box. Patented.",
      },
      {
        name: "CorrBlock™",
        description:
          "A solid block formulated from renewable soybean-based wax and proven VpCI® technology. Immersed in water it dissolves slowly, releasing a calculated dose of inhibitors and providing multimetal protection for ferrous metals, galvanised steel, aluminium and yellow metals in place of chromates, nitrites and other restricted inhibitors. Suitable for open-loop recirculating cooling systems, waste water systems and water-cooled metalworking machines. Each block weighs approximately 400 g and treats around 4,000 litres of running water, typically replaced every one to two months. Conforms to NACE RP0487-2000, NACE TM0208-2008 and MIL-I-22110C.",
      },
    ],
    alsoInRange: [
      "Closed Loop Toad® for closed-loop layup",
      "VpCI®-641 corrosion inhibitor for fresh water systems",
      "VpCI®-644 for salt water and brine systems",
      "VpCI®-645 for salt and fresh water",
      "VpCI®-648 concentrated closed-loop inhibitor",
      "VpCI®-649 BD Winterized for cold-weather hydrotesting and layup",
      "VpCI®-611 wet-space powder treatment",
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-water-treatment-products/",
  },
  {
    slug: "lubricants",
    name: "VpCI® Enhanced Lubricant Products",
    shortLabel: "Enhanced Lubricants",
    metaDescription:
      "Cortec® VpCI® enhanced lubricants — penetrants, greases, hydraulic oils and gear oils with built-in corrosion protection. Available from Cortec Ireland.",
    heroSubtitle:
      "Penetrants, greases, hydraulic oils and gear lubricants with VpCI® corrosion protection built in — lubrication and preservation in a single product.",
    intro: [
      "Standard lubricants lubricate; Cortec® enhanced lubricants also protect. Each product in this range combines high-performance lubrication with Vapour phase Corrosion Inhibitors, so bearings, chains, gears, wire ropes and hydraulic systems stay protected during operation, idle periods and storage.",
      "Many products in the range are biobased EcoLine® formulations made from renewable raw materials — including food-machinery grades for use where incidental food contact is possible.",
    ],
    featured: [
      {
        name: "VpCI® Super Penetrant",
        image: "/images/products/super-penetrant.webp",
        description:
          "Fast-acting penetrating lubricant that frees seized and corroded fasteners, threads and mechanisms. Creeps into tight tolerances to break the bond of rust, then leaves a VpCI® film that protects the freed components against future corrosion.",
      },
      {
        name: "EcoLine® Wire Rope Grease",
        description:
          "Biobased, VpCI®-enhanced grease for wire ropes, chains and open gears on rigs and offshore equipment. Penetrates strands to protect the core while resisting wash-off in wet and marine environments.",
      },
    ],
    alsoInRange: [
      "CorrLube™ VpCI® Hydraulic Oil",
      "CorrLube™ VpCI® Lithium EP Grease",
      "CorrLube™ industrial gear lubricants",
      "EcoLine® Bearing, Chain & Roller Lubricant",
      "EcoLine® Food Machinery Lubricating Grease",
      "EcoLine® All-Purpose Lubricant",
      "EcoLine® Cutting Fluids (see Metalworking)",
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-enhanced-lubricant-products/",
  },
  {
    slug: "coatings",
    name: "VpCI® High Performance Coatings",
    shortLabel: "High Performance Coatings",
    metaDescription:
      "Cortec® VpCI® high performance coatings — removable and permanent corrosion-protective coatings, primers, topcoats and rust converters. Available from Cortec Ireland.",
    heroSubtitle:
      "Water-based and solvent-based protective coatings for storage, transit and outdoor exposure — from temporary removable films to permanent topcoat systems.",
    intro: [
      "Cortec® high performance coatings provide a protective barrier against moisture, salt spray, industrial pollutants and UV — reinforced by VpCI® corrosion inhibitors within the coating itself. The range spans temporary, removable films for machined surfaces through to permanent primer-and-topcoat systems for structural steel.",
      "Many of the coatings are water-based with low VOC content, meeting strict regulatory requirements without sacrificing salt-spray and humidity performance.",
    ],
    featured: [
      {
        name: "EcoShield® 386 Water-Based Coating",
        image: "/images/products/ecoshield-386.webp",
        description:
          "Water-based acrylic VpCI® topcoat that provides a tough, UV-resistant protective film for indoor and outdoor exposure. Low VOC and available in clear or coloured finishes for long-term protection of structural steel and equipment.",
      },
      {
        name: "VpCI®-368",
        description:
          "Removable VpCI coating that forms a tough, transparent protective film. Easily peeled or washed off when protection is no longer needed. Ideal for machined surfaces, tooling and precision components that must remain clean and ready for use after depreservation.",
      },
      {
        name: "VpCI®-369",
        description:
          "Non-removable, permanent VpCI coating for long-term outdoor exposure and aggressive environments. Provides a durable barrier against moisture, salt spray, industrial pollutants and UV radiation. Suitable for structural steel, equipment frames and outdoor installations.",
      },
      {
        name: "VpCI®-391 Water-Based Coating",
        description:
          "Water-based VpCI coating with low VOC content. Provides excellent corrosion protection without the environmental and safety concerns of solvent-based products. Meets strict regulatory requirements for enclosed space application and environmentally sensitive areas.",
      },
    ],
    alsoInRange: [
      "VpCI®-373 water-based primer",
      "VpCI®-386 water-based acrylic coating",
      "VpCI®-395 & 396 moisture-cure urethanes",
      "CorrVerter® rust converter primer",
      "EcoCorr® water-based rust preventative",
      "EcoAir® tool & die rust preventative aerosols",
      "Nano VpCI® ultra-thin coatings",
    ],
    cortecUrl:
      "https://www.cortecvci.com/products/vpci-high-performance-coatings/",
  },
  {
    slug: "additives",
    name: "Corrosion Inhibiting Additives for Coatings, Fluids, Adhesives and Plastic",
    shortLabel: "Corrosion Inhibiting Additives",
    metaDescription:
      "Cortec® corrosion inhibiting additives for paints, coatings, fluids, adhesives, elastomers and plastics — build VpCI® protection directly into your own formulations. Available from Cortec Ireland.",
    heroSubtitle:
      "Build corrosion protection directly into your own products. Cortec® additives bring VpCI® technology to paints, coatings, process fluids, adhesives, elastomers and plastics.",
    intro: [
      "Cortec® VpCI® additives let formulators and manufacturers build corrosion inhibition into their own coatings, water treatment formulations, plastics, elastomers and adhesives. Rather than adding a separate protection step, the protection ships inside the product itself.",
      "The M-series range covers water-based and solvent-based coating systems, process fluids, inks, rubbers and liquid polymeric systems. Our technical team will help you select and dose the right additive for your formulation — talk to us about your base chemistry and performance targets.",
    ],
    featured: [
      {
        name: "M-370 Additive for Water-Based Coatings",
        description:
          "Corrosion inhibiting additive for water-based coating systems. Adds flash-rust and in-can corrosion protection as well as long-term VpCI® performance to the dried film, without affecting the coating's physical or aesthetic properties.",
      },
      {
        name: "M-138 Additive for Rubber and Elastomers",
        description:
          "Corrosion inhibiting additive for rubber and elastomeric compounds. Metal parts in contact with the finished elastomer — seals, bushings, bonded assemblies — gain built-in corrosion protection at the interface.",
      },
      {
        name: "M-150 Additive for Inks",
        description:
          "Corrosion inhibiting additive for printing inks, used to produce corrosion-protective printed packaging and converted paper products.",
      },
    ],
    alsoInRange: [
      "M-110 additive for liquid systems",
      "M-118 & M-119 LV additives for plastics and liquid polymeric systems",
      "M-121 & M-124 additives for plastic compounds",
      "M-126 additive",
      "M-168 additive for solvent-based coatings",
      "M-235, M-236, M-238, M-240 & M-241 additive concentrates",
      "M-381 additive for water-based systems",
      "M-408 additive",
    ],
    cortecUrl: "https://www.cortecvci.com/products/",
  },
  {
    slug: "biocortec",
    name: "BioCortec® — Sustainable Environmentally Friendly Resources",
    shortLabel: "BioCortec® Sustainable Products",
    metaDescription:
      "BioCortec® — Cortec's biobased, biodegradable and compostable corrosion protection products made from renewable resources. Available from Cortec Ireland.",
    heroSubtitle:
      "Corrosion protection from renewable resources — biobased, biodegradable and compostable products that meet sustainability targets without sacrificing performance.",
    intro: [
      "BioCortec® is Cortec's family of biobased and environmentally preferred products — corrosion protection made from renewable raw materials such as vegetable oils, corn and other plant sources. Many carry USDA Certified Biobased status, and several are industrially compostable or fully water-soluble.",
      "For organisations with green procurement requirements or sustainability targets, BioCortec® products deliver the same VpCI® protection as conventional chemistry while significantly reducing environmental footprint. See also our Sustainability page for how these products fit a circular packaging strategy.",
    ],
    featured: [
      {
        name: "BioPad®",
        image: "/images/applications/camshafts-vpci-biopad.webp",
        description:
          "VpCI® emitting pad made from 100% biobased non-woven material. Placed inside packaging alongside parts — as shown here protecting camshafts — it releases vapour phase corrosion inhibitors throughout the enclosed space. USDA Certified Biobased.",
      },
      {
        name: "BioCorr® Rust Preventative",
        description:
          "Ready-to-use, water-based rust preventative that is a biobased alternative to oil-based products. Leaves a thin, dry, non-greasy film that protects parts in storage and transit — with no oily residue to clean off.",
      },
      {
        name: "EcoLine® Biobased Range",
        description:
          "Cutting fluids, rust preventatives, greases and lubricants formulated from renewable vegetable oils. USDA Certified Biobased products covering metalworking, maintenance and food-machinery applications.",
      },
    ],
    alsoInRange: [
      "BioClean® 610 & 612 biological cleaners",
      "BioCushion® biobased protective cushioning",
      "CorShield® & EcoBio® VpCI®-146 biobased papers",
      "EcoShield® coated papers and linerboard",
      "Eco Works® certified compostable VpCI® film",
      "EcoSol® water-soluble packaging",
      "EcoShrink® shrink film",
      "EcoEmitter® biobased emitter",
      "EcoAir® non-flammable air-powered aerosols",
    ],
    cortecUrl: "https://www.cortecvci.com/products/",
  },
  {
    slug: "mci-concrete",
    name: "MCI® Concrete Protection Products",
    shortLabel: "MCI® Concrete Protection",
    metaDescription:
      "Cortec® MCI® Migrating Corrosion Inhibitors for reinforced concrete — admixtures, surface treatments, sealers and repair mortars that protect embedded rebar. Available from Cortec Ireland.",
    heroSubtitle:
      "Migrating Corrosion Inhibitors that protect reinforcing steel embedded in concrete — extending the service life of bridges, car parks, buildings and marine structures.",
    intro: [
      "Migrating Corrosion Inhibitor (MCI®) technology protects the reinforcing steel inside concrete. Added to the mix for new construction or applied to the surface of existing structures, MCI® migrates through the concrete matrix, seeks out the embedded steel and forms a protective molecular layer that mitigates the chemical reaction between chlorides and metal.",
      "MCI® products are effective against de-icing salts, airborne marine salts, carbonation and acid rain — the main drivers of rebar corrosion in Irish infrastructure. The range covers admixtures, surface treatments, sealers, repair mortars and powders for voids and post-tensioning systems.",
    ],
    featured: [
      {
        name: "MCI®-2005",
        description:
          "Migrating Corrosion Inhibitor admixture for new concrete. Added directly to the concrete mix during batching, MCI-2005 migrates through the concrete matrix to reach embedded reinforcing steel and form a protective molecular layer. Provides long-term corrosion protection for the entire service life of the structure.",
      },
      {
        name: "MCI®-2006",
        description:
          "Surface-applied Migrating Corrosion Inhibitor for existing concrete structures. Applied as a liquid to the concrete surface, MCI-2006 penetrates through the concrete cover to reach the rebar and form a protective layer. Ideal for extending the service life of structures already in service without the need for demolition or overlay.",
      },
      {
        name: "MCI®-2020 Repair Mortar",
        description:
          "Corrosion-inhibiting repair mortar for patching and restoring damaged concrete. Contains MCI® technology that migrates beyond the repair area to protect surrounding rebar that may be at risk. Addresses the common “ring anode” problem where repairs to one area can accelerate corrosion in adjacent zones.",
      },
    ],
    alsoInRange: [
      "MCI®-2018 concrete sealer with MCI®",
      "MCI®-2019 topical treatment for chloride exposure",
      "MCI®-2021 silane/siloxane water repellent sealer",
      "MCI®-2039 high-performance repair mortar",
      "MCI®-309 powder for voids, ducts and post-tensioning systems",
      "MCI® Grenades — water-soluble MCI® powder dosing for the concrete mixer",
    ],
    cortecUrl: "https://www.cortecvci.com/products/concrete/",
  },
];

export function getProductCategory(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}
