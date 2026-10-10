# قوانین review / MR

## انجام بده

- تغییرات کوچک و متمرکز؛ scope تست‌اینفرا را از feature UI جدا نگه دار اگر ممکن است
- قبل از الگوی جدید، یک feature مشابه در همین ریپو را بخوان
- JSDoc برای کامپوننت/function عمومی جدید
- متن UI فارسی
- type-safe — از `any` پرهیز کن
- `queryKey` برابر نام endpoint
- برای `slotProps`، merge صحیح `sx` را رعایت کن
- تست unit را با ساختار `tests/unit/*.unit.test.tsx` بنویس
- تست‌ها را کامل بنویس؛ unit و integration را جدا نگه دار
- اگر کامپوننت به integration نیاز دارد، وجود و کامل بودن آن را بررسی کن
- قبل از approve، تست‌ها را اجرا کن؛ باید پاس شوند و خطای کنسول نداشته باشند

## انجام نده

- README یا doc اضافه نکن مگر درخواست شود (به‌جز به‌روزرسانی `AGENTS.md` / فایل‌های `docs/` وقتی قرارداد عوض می‌شود)
- commit/push بدون درخواست کاربر
- axios مستقیم یا fetch خام برای API
- اختراع الگوی form/UI جدید وقتی RHF / الگوی موجود کافی است
- به‌هم زدن import order
- commit کردن `.env` یا secret
- حذف `Container` / رفتار layout موجود بدون دلیل صریح در MR
- برای `next/image` با URL خارجی، بدون بررسی `unoptimized` را حذف نکن
- تست ناقص، unit/integration قاطی‌شده، یا تست fail / با `console.error` را approve نکن

## چک‌لیست سریع approve

1. آیا ساختار پوشه و نام‌گذاری با این فایل هم‌خوان است؟
2. آیا تست‌ها کامل‌اند و مورد مهمی از قلم نیفتاده؟
3. آیا unit و integration جدا هستند (`tests/unit` / `tests/integration` با نام درست)؟
4. اگر کامپوننت به integration نیاز دارد، آیا تست integration نوشته شده؟
5. آیا تست‌های مربوطه پاس می‌شوند و خروجی بدون خطای کنسول است؟
6. آیا alias و import order تمیز است؟
7. آیا رفتار قبلی (layout، logout redirect، toast فارسی) حفظ شده؟
8. آیا regression واضحی در `slotProps` / Image / Container نیست؟
