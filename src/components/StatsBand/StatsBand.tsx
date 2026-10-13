import type { TStatsBandProps } from "./StatsBand.type";

const DEFAULT_STATS = [
  {
    value: "۴۰,۰۰۰+",
    label: "ظرفیت تولید سالانه (تن)",
    icon: (
      <svg
        fill="none"
        height="28"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
        width="28"
      >
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-6h6v6" />
        <path d="M10 11h4" />
      </svg>
    ),
  },
  {
    value: "۱,۵۰۰+",
    label: "نیروی متخصص",
    icon: (
      <svg
        fill="none"
        height="28"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
        width="28"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "۱۵+",
    label: "سال تجربه",
    icon: (
      <svg
        fill="none"
        height="28"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
        width="28"
      >
        <rect height="18" rx="2" width="18" x="3" y="4" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    value: "۵۰۰+",
    label: "نمایندگی فعال در سراسر کشور",
    icon: (
      <svg
        fill="none"
        height="28"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
        width="28"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

/**
 * نوار آمار و دستاوردهای شرکت
 */
export function StatsBand({ items = DEFAULT_STATS, className }: TStatsBandProps): JSX.Element {
  return (
    <section className={`stats-band ${className || ""}`}>
      <div className="wrap stats-band-inner">
        {items.map((item) => (
          <div key={item.label} className="stats-item">
            <span className="stats-icon">{item.icon}</span>
            <strong className="stats-value">{item.value}</strong>
            <span className="stats-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBand;
