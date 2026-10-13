import Image from "next/image";
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
  imageSrc,
  imageAlt,
  visual,
  features,
  linkText = "مشاهده جزئیات و قیمت",
  className,
  style,
}: TProductCardProps): JSX.Element {
  const showLink = imageSrc ? false : Boolean(linkText);

  return (
    <Link
      className={`product-card ${imageSrc ? "product-card-image" : ""} ${className || ""}`}
      href={href}
      style={style}
    >
      {imageSrc ? (
        <span className="product-card-media">
          <Image
            fill
            alt={imageAlt || title}
            className="product-card-img"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={imageSrc}
          />
        </span>
      ) : visual ? (
        visual
      ) : icon ? (
        <span className="product-icon">{icon}</span>
      ) : null}

      <span className="product-card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        {features && features.length > 0 ? (
          <ul>
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null}

        {showLink ? (
          <span className="product-card-link">
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
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export default ProductCard;
