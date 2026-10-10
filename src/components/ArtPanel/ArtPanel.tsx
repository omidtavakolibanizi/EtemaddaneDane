import type { TArtPanelProps } from "./ArtPanel.type";

/**
 * پنل تصویرسازی هندسی کارخانه و سیلوهای اعتماد دانه
 */
export function ArtPanel({ className }: TArtPanelProps): JSX.Element {
  return (
    <div className={`art-panel ${className || ""}`}>
      <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
        <g
          className="art-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        >
          <path d="M35 140V72a19 19 0 0 1 38 0v68" />
          <path d="M35 102h38" />
          <path d="M95 140V55a24 24 0 0 1 48 0v85" />
          <path d="M95 96h48" />
          <path d="M155 140V82a14 14 0 0 1 28 0v58" />
        </g>
        <path className="art-line" d="M20 140h165" strokeWidth="3" />
        <g
          className="art-accent"
          fill="none"
          strokeLinecap="round"
          strokeWidth="2.4"
        >
          <path d="M114 32c-4-8-2-16 4-20 2 6 2 14-4 20z" />
          <path d="M122 32c4-8 2-16-4-20-2 6-2 14 4 20z" />
          <path d="M118 32V17" />
        </g>
      </svg>
    </div>
  );
}

export default ArtPanel;
