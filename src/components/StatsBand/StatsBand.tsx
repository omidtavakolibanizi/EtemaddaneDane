import type { TStatsBandProps } from "./StatsBand.type";

/**
 * نوار آمار و دستاوردهای شرکت — فقط از داده API
 */
export function StatsBand({ items, className }: TStatsBandProps): JSX.Element | null {
  if (!items?.length) {
    return null;
  }

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
