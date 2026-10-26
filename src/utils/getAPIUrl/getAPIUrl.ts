/**
 * آدرس پایه API را برمی‌گرداند.
 *
 * اولویت:
 * 1. NEXT_PUBLIC_API_URL
 * 2. NEXT_PUBLIC_API_BASE_URL (سازگاری عقب‌رو)
 * 3. پیش‌فرض تولید اعتماد دانه
 */
function getAPIUrl(): string {
  const envApiUrl =
    process.env.NEXT_PUBLIC_API_URL?.trim() || process.env.NEXT_PUBLIC_API_BASE_URL?.trim();

  if (envApiUrl) {
    return envApiUrl.replace(/\/$/, "");
  }

  return "https://dane.etemadi.group/api/v1";
}

export default getAPIUrl;
