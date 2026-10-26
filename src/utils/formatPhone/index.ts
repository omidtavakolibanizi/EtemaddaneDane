/**
 * شماره موبایل ایران را برای نمایش فاصله‌گذاری می‌کند
 */
export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 11 && digits.startsWith("0")) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }

  return phone;
}

/**
 * لینک tel: از شماره موبایل ایران می‌سازد
 */
export function formatPhoneTel(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("0") && digits.length === 11) {
    return `tel:+98${digits.slice(1)}`;
  }

  if (digits.startsWith("98")) {
    return `tel:+${digits}`;
  }

  return `tel:${phone}`;
}

/**
 * نام کاربری اینستاگرام را از URL استخراج می‌کند
 */
export function instagramHandle(url?: string): string {
  if (!url) return "";

  try {
    const pathname = new URL(url).pathname.replace(/^\/+|\/+$/g, "");
    return pathname || url;
  } catch {
    return url.replace(/^@/, "");
  }
}
