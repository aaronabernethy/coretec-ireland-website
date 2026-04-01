function ShieldIcon() {
  return (
    <svg
      className="w-5 h-5 text-steel-500 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-steel-500 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

const trustItems = [
  { icon: <ShieldIcon />, label: "ISO 9001" },
  { icon: <ShieldIcon />, label: "ISO 14001" },
  { icon: <ShieldIcon />, label: "ISO/IEC 17025" },
  { icon: <CheckIcon />, label: "Exclusive Irish Distributor" },
  { icon: <CheckIcon />, label: "Cortec Authorised" },
];

export default function TrustBar() {
  return (
    <section className="bg-grey-100 border-y border-grey-200" aria-label="Certifications and credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-3" role="list">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 text-sm font-medium text-navy-900"
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
