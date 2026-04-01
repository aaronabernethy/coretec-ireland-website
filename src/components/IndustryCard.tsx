import Link from "next/link";
import { ReactNode } from "react";

interface IndustryCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
}

export default function IndustryCard({ title, description, href, icon }: IndustryCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-navy-900 rounded-lg shadow-sm hover:bg-navy-800 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:ring-offset-2"
    >
      <div className="p-6">
        {icon && (
          <div className="mb-4 text-steel-300" aria-hidden="true">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-white group-hover:text-steel-200 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-grey-300 leading-relaxed">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-steel-300 group-hover:text-steel-200 transition-colors">
          Explore solutions
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
