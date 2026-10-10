import type { TCtaBandProps } from "./CtaBand.type";

/**
 * بنر فراخوان اقدام (CTA) در انتهای صفحات
 */
export function CtaBand({
  title,
  description,
  actions,
  className,
}: TCtaBandProps): JSX.Element {
  return (
    <div className={`cta-band ${className || ""}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      {actions ? <div className="hero-cta">{actions}</div> : null}
    </div>
  );
}

export default CtaBand;
