import { tm } from "@/lib/trademark";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? "text-center" : "text-left"}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
        {tm(title)}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-base sm:text-lg text-grey-600 leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {tm(subtitle)}
        </p>
      )}
    </div>
  );
}
