import type { TContactRowProps } from "./ContactRow.type";

/**
 * ردیف آیتم ارتباطی (تلفن، ایمیل، آدرس، شبکه اجتماعی)
 */
export function ContactRow({
  href,
  icon,
  label,
  value,
  isLtr = false,
  external = false,
  className,
}: TContactRowProps): JSX.Element {
  const content = (
    <>
      <span className="row-icon">{icon}</span>
      <span className="row-text">
        <span className="row-label">{label}</span>
        <span className={`row-value ${isLtr ? "ltr" : ""}`}>{value}</span>
      </span>
      {href ? (
        <svg
          className="row-arrow"
          fill="none"
          height="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="16"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      ) : null}
    </>
  );

  if (!href) {
    return <div className={`contact-row ${className || ""}`}>{content}</div>;
  }

  return (
    <a
      className={`contact-row ${className || ""}`}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {content}
    </a>
  );
}

export default ContactRow;
