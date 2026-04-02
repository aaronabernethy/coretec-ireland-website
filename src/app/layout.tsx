import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Corrosion Engineering – Cortec Ireland Ltd | Ireland's Exclusive Cortec VpCI® Specialists",
    template: "%s | Corrosion Engineering – Cortec Ireland",
  },
  description:
    "Corrosion Engineering – Cortec Ireland Ltd. Ireland's only authorised distributor of Cortec Corporation VpCI® corrosion inhibitor products. ISO 9001, ISO 14001 & ISO/IEC 17025 certified.",
  keywords: [
    "corrosion protection",
    "VpCI",
    "Cortec Ireland",
    "corrosion inhibitor",
    "VCI packaging",
    "rust prevention",
    "ISO 17025",
    "corrosion consultancy Ireland",
  ],
  metadataBase: new URL("https://cortecireland.com"),
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://cortecireland.com",
    siteName: "Cortec Ireland",
    title: "Cortec Ireland | Ireland's Exclusive Cortec VpCI® Corrosion Protection Specialists",
    description:
      "Ireland's only authorised distributor of Cortec Corporation VpCI® corrosion inhibitor products. ISO certified corrosion protection consultancy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans antialiased text-navy bg-white">
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics 4 — replace GA_MEASUREMENT_ID with your actual ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
