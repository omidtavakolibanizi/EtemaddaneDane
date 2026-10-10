import type { TDividerProps } from "./Divider.type";

/**
 * خط جداکننده تزئینی با نشان جوانه و دانه
 */
export function Divider({ className }: TDividerProps): JSX.Element {
  return (
    <div aria-hidden="true" className={`divider ${className || ""}`}>
      <svg fill="none" viewBox="0 0 120 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10h34M84 10h34" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M60 18c-3-3-6-7-6-11a6 6 0 0 1 12 0c0 4-3 8-6 11z"
          fill="currentColor"
          opacity="0.85"
        />
        <circle cx="46" cy="10" fill="currentColor" r="1.6" />
        <circle cx="74" cy="10" fill="currentColor" r="1.6" />
      </svg>
    </div>
  );
}

export default Divider;
