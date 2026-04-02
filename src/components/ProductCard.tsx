import Link from "next/link";
import { ReactNode } from "react";
import { tm } from "@/lib/trademark";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
}

export default function ProductCard({ title, description, href, icon }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-lg border border-grey-200 border-t-4 border-t-steel-500 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:ring-offset-2"
    >
      <div className="p-6">
        {icon && (
          <div className="mb-4 text-steel-500" aria-hidden="true">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-navy-900 group-hover:text-steel-500 transition-colors">
          {tm(title)}
        </h3>
        <p className="mt-2 text-sm text-grey-600 leading-relaxed">
          {tm(description)}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-steel-500 group-hover:text-steel-600 transition-colors">
          Learn more
          <svg
            className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
