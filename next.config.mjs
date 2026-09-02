/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old product category URLs → new Cortec-aligned categories
      { source: "/products/vci-films-bags", destination: "/products/packaging", permanent: true },
      { source: "/products/vci-papers", destination: "/products/packaging", permanent: true },
      { source: "/products/vci-emitters", destination: "/products/electronics", permanent: true },
      { source: "/products/coatings-rust-preventatives", destination: "/products/coatings", permanent: true },
      { source: "/products/liquids-additives", destination: "/products/water-treatment", permanent: true },
      { source: "/products/construction-concrete", destination: "/products/mci-concrete", permanent: true },
      { source: "/products/specialty-oil-gas", destination: "/industries/oil-gas", permanent: true },
      // Old industry URLs → nearest new category
      { source: "/industries/electronics", destination: "/products/electronics", permanent: true },
      { source: "/industries/construction", destination: "/products/mci-concrete", permanent: true },
      { source: "/industries/agri-food", destination: "/industries/food-beverage-pharmaceutical", permanent: true },
      { source: "/industries/pharmaceutical-medical", destination: "/industries/food-beverage-pharmaceutical", permanent: true },
    ];
  },
};

export default nextConfig;
