"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "VCI Films & Bags", href: "/products/vci-films-bags" },
  { label: "VCI Papers", href: "/products/vci-papers" },
  { label: "VCI Emitters", href: "/products/vci-emitters" },
  { label: "Coatings & Rust Preventatives", href: "/products/coatings-rust-preventatives" },
  { label: "Liquids & Additives", href: "/products/liquids-additives" },
  { label: "Construction & Concrete", href: "/products/construction-concrete" },
  { label: "Specialty Oil & Gas", href: "/products/specialty-oil-gas" },
];

const industryLinks = [
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Marine", href: "/industries/marine" },
  { label: "Oil & Gas", href: "/industries/oil-gas" },
  { label: "Aerospace", href: "/industries/aerospace" },
  { label: "Electronics", href: "/industries/electronics" },
  { label: "Construction", href: "/industries/construction" },
  { label: "Pharmaceutical & Medical", href: "/industries/pharmaceutical-medical" },
  { label: "Agri-Food", href: "/industries/agri-food" },
];

const navLinks = [
  { label: "Technology", href: "/technology" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Resources", href: "/resources" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function DesktopDropdown({ label, items, isOpen, onToggle, onClose }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-navy-900 hover:text-steel-500 transition-colors py-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-grey-200 py-2 z-50"
          role="menu"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-navy-900 hover:bg-grey-100 hover:text-steel-500 transition-colors"
              role="menuitem"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-grey-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Cortec Ireland home">
            <Image
              src="/images/logo.png"
              alt="Cortec Ireland"
              width={52}
              height={52}
              className="h-11 w-auto lg:h-13"
              priority
            />
            <span className="flex flex-col">
              <span className="text-base lg:text-lg font-bold text-navy-900 tracking-tight leading-tight">
                CORTEC IRELAND
              </span>
              <span className="text-[10px] lg:text-xs text-grey-500 font-medium tracking-wide uppercase">
                Corrosion Protection Specialists
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            <DesktopDropdown
              label="Products"
              items={productLinks}
              isOpen={openDropdown === "products"}
              onToggle={() => toggleDropdown("products")}
              onClose={() => setOpenDropdown(null)}
            />
            <DesktopDropdown
              label="Industries"
              items={industryLinks}
              isOpen={openDropdown === "industries"}
              onToggle={() => toggleDropdown("industries")}
              onClose={() => setOpenDropdown(null)}
            />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-900 hover:text-steel-500 transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact?quote=true"
              className="ml-2 inline-flex items-center px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-navy-900 hover:text-steel-500 hover:bg-grey-100 transition-colors focus:outline-none focus:ring-2 focus:ring-steel-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close main menu" : "Open main menu"}
          >
            {mobileOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden border-t border-grey-200 bg-white"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {/* Products dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("products")}
                className="flex items-center justify-between w-full py-3 text-base font-medium text-navy-900"
                aria-expanded={mobileDropdown === "products"}
              >
                Products
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    mobileDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "products" && (
                <div className="pl-4 pb-2 space-y-1">
                  {productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-grey-600 hover:text-steel-500"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("industries")}
                className="flex items-center justify-between w-full py-3 text-base font-medium text-navy-900"
                aria-expanded={mobileDropdown === "industries"}
              >
                Industries
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    mobileDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "industries" && (
                <div className="pl-4 pb-2 space-y-1">
                  {industryLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm text-grey-600 hover:text-steel-500"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Standard links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-base font-medium text-navy-900 hover:text-steel-500"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/contact?quote=true"
                className="block w-full text-center px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                onClick={closeMobile}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
