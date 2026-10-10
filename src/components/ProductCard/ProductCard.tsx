import Link from "next/link";

import type { TProductCardProps } from "./ProductCard.type";

/**
 * کارت نمایش محصول خوراک دام و طیور
 */
export function ProductCard({
  title,
  description,
  href,
  icon,
  visual,
  features,
  linkText = "مشاهده جزئیات و قیمت",
  className,
  style,
}: TProductCardProps): JSX.Element {
  return (
    <div
      className={`product-card ${className || ""}`}
      style={style}
    >
      {visual ? visual : icon ? <span className="product-icon">{icon}</span> : null}

      <h3>{title}</h3>
      <p>{description}</p>

      {features && features.length > 0 ? (
        <ul>
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}

      <Link className="product-card-link" href={href}>
        {linkText}
        <svg
          fill="none"
          height="14"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="14"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </Link>
    </div>
  );
}

export default ProductCard;
