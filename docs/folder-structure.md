# ساختار پوشه‌ها

```
src/
├── app/                 # Next.js App Router (صفحات و layout)
│   ├── auth/            # جریان‌های ورود / OTP / فراموشی رمز
│   ├── error/           # صفحات خطا
│   └── panel/           # پنل کاربر پس از ورود
│       └── _components/ # کامپوننت‌های اختصاصی پنل (مثل AppBar)
├── components/          # کامپوننت‌های قابل‌استفاده مجدد
├── endpoints/           # توابع API و typeهای مربوط
├── forms/               # schema / فرم‌های مشترک (در صورت وجود)
├── hooks/               # custom hooks
├── providers/           # React context providers
├── store/               # Zustand stores
├── theme/               # تنظیمات MUI theme
└── utils/               # توابع کمکی
```

## Aliasها (`tsconfig.json`)

| Alias            | مسیر               |
| ---------------- | ------------------ |
| `@/components/*` | `src/components/*` |
| `@/endpoints/*`  | `src/endpoints/*`  |
| `@/providers/*`  | `src/providers/*`  |
| `@/utils/*`      | `src/utils/*`      |
| `@/store/*`      | `src/store/*`      |
| `@/theme/*`      | `src/theme/*`      |
| `@/hooks/*`      | `src/hooks/*`      |
| `@/forms/*`      | `src/forms/*`      |
| `@/public/*`     | `public/*`         |
| `@/src/*`        | `src/*`            |
| `@/*`            | ریشه پروژه         |

ترجیح در کد جدید: aliasهای اختصاصی (`@/endpoints`, `@/components`, `@/utils`, …). از مخلوط بی‌دلیل `@/src/...` و `@/endpoints/...` در یک feature پرهیز کن؛ با الگوی فایل‌های هم‌سطح همان feature هماهنگ باش.
