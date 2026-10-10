import type { TBadgeItemProps } from "./BadgeItem.type";

/**
 * آیتم نشان ویژگی‌ها یا اصول کاری
 */
export function BadgeItem({
  icon,
  title,
  description,
  variant = "badge",
  className,
}: TBadgeItemProps): JSX.Element {
  const containerClass = variant === "value" ? "value-card" : "badge-item";

  return (
    <div className={`${containerClass} ${className || ""}`}>
      <span className="badge-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BadgeItem;
