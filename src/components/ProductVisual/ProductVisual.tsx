import type { TProductVisualProps } from "./ProductVisual.type";

/**
 * تصویرسازی بصری با پلاک نمادین خوراک دام و طیور
 */
export function ProductVisual({
  type,
  className,
}: TProductVisualProps): JSX.Element {
  return (
    <div className={`product-visual ${className || ""}`}>
      <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <g
          className="art-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        >
          <path d="M62 140V78c0-17 13-31 30-31s30 14 30 31v62" />
          <path d="M62 96h60" />
          <path d="M80 47c0-8 5.5-15 12-15s12 7 12 15" />
        </g>
        <path className="art-line" d="M28 140h144" strokeWidth="3" />
        <g className="art-accent" fill="currentColor" stroke="none">
          <circle cx="146" cy="118" r="3" />
          <circle cx="156" cy="127" r="2.2" />
          <circle cx="136" cy="129" r="2" />
          <circle cx="150" cy="136" r="1.6" />
        </g>
      </svg>
      <span className="visual-badge">
        {type === "cow" ? (
          <svg
            fill="none"
            height="20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="20"
          >
            <path d="M8.5 7c-1.2-1.6-1-3.4.5-4.3" />
            <path d="M15.5 7c1.2-1.6 1-3.4-.5-4.3" />
            <path d="M5 10c-1.6.2-2.6 1.4-2.2 3" />
            <path d="M19 10c1.6.2 2.6 1.4 2.2 3" />
            <rect height="10.5" rx="5.5" width="12" x="6" y="8" />
            <circle cx="9.5" cy="13" fill="currentColor" r="0.6" stroke="none" />
            <circle cx="14.5" cy="13" fill="currentColor" r="0.6" stroke="none" />
            <rect height="3.4" rx="1.7" width="6.6" x="8.7" y="15.6" />
            <circle cx="10.6" cy="17.2" fill="currentColor" r="0.45" stroke="none" />
            <circle cx="13.4" cy="17.2" fill="currentColor" r="0.45" stroke="none" />
          </svg>
        ) : (
          <svg
            fill="none"
            height="20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="20"
          >
            <path d="M4 15c0-4 3-8 8-8 3 0 5 1.5 6 3l2-1-1 2.5c.6.7 1 1.6 1 2.5 0 3-3 5-7 5-1 0-2-.1-2.8-.4" />
            <path d="M9 15c-1.8 1.6-3.5 2-5 2 1-.8 1.7-1.7 2-2.7" />
            <circle cx="15" cy="10" fill="currentColor" r="0.6" stroke="none" />
          </svg>
        )}
      </span>
    </div>
  );
}

export default ProductVisual;
