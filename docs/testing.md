# تست‌نویسی

## ابزار

- **Unit / component:** Jest + Testing Library (`@testing-library/react`, `user-event`, `jest-dom`)
- **E2E:** Playwright (`npm run playwright`)

## ساختار پوشه و نام فایل

تست‌ها **کنار همان feature/کامپوننت** قرار می‌گیرند — نه در یک پوشه مرکزی جدا.

```
ComponentName/
└── tests/
    ├── unit/
    │   └── ComponentName.unit.test.tsx
    └── integration/
        └── ComponentName.integration.test.tsx
```

| نوع              | مسیر                             | نام فایل                           |
| ---------------- | -------------------------------- | ---------------------------------- |
| Unit             | `{Component}/tests/unit/`        | `{Component}.unit.test.tsx`        |
| Integration      | `{Component}/tests/integration/` | `{Component}.integration.test.tsx` |
| E2E (Playwright) | طبق `playwright.config.ts`       | الگوی پروژه Playwright             |

**انجام نده:**

- `test/` به‌جای `tests/`
- `{Component}.test.tsx` بدون پسوند `.unit` / `.integration` برای تست‌های کامپوننت
- تست تکراری در چند مسیر (`test/` و `tests/unit/` همزمان)
- مخلوط کردن unit و integration در یک فایل یا یک پوشه

## قوانین اجباری تست

1. **کامل بودن:** تست‌ها باید کامل باشند؛ هیچ رفتار مهم، branch، handler، حالت loading/error/empty، یا prop/slotProps قابل‌توجهی از قلم نیفتد. قبل از تمام‌کردن feature یا approve کردن MR، پوشش تست را با کد واقعی تطبیق بده.
2. **جداسازی unit و integration:** تست‌های `unit` و `integration` **حتماً** جدا نوشته شوند — فایل، پوشه و نام‌گذاری جدا (`*.unit.test.tsx` در `tests/unit/` و `*.integration.test.tsx` در `tests/integration/`). منطق unit را داخل integration تکرار یا قاطی نکن.
3. **نیاز به integration:** اگر کامپوننت با چند بخش واقعی تعامل دارد (مثلاً ترکیب چند child، React Query واقعی/نیمه‌واقعی، router + mutation + toast، فرم + endpoint، یا جریان چندمرحله‌ای)، باید بررسی شود که **integration test نوشته شده** و در `tests/integration/` موجود است. نبودن integration در این موارد blocker برای approve است.
4. **پاس شدن و تمیزی کنسول:** همه تست‌های مربوط به تغییر **حتماً باید پاس شوند**. در خروجی تست نباید `console.error` / warningهای React (مثل prop نامعتبر روی DOM، act warningهای جدی، و مشابه) دیده شود. mockها را طوری بنویس که propهای مخصوص Next/MUI (مثل `unoptimized`) به DOM خام نروند.

## محتوای تست unit

حداقل پوشش برای کامپوننت UI (در صورت وجود در کد، از قلم نینداز):

1. **Render** — المان اصلی و متن‌های فارسی مهم
2. **Interaction** — کلیک / submit و فراخوانی handler یا mutate
3. **slotProps** (اگر دارد) — اعمال props/styles سفارشی
4. **Edge / loading / error / empty** — در صورت وجود `isPending`، خطا، یا حالت خالی

## محتوای تست integration

وقتی کامپوننت نیاز به integration دارد، حداقل این‌ها را پوشش بده:

1. همکاری چند بخش با هم (parent + children یا form + query/mutation)
2. جریان واقعی‌تر کاربر (مثلاً کلیک → API/mutate → toast/redirect)
3. وابستگی‌هایی که در unit به‌طور کامل mock شده‌اند ولی در integration باید با هم کار کنند

## قراردادهای mock

- وابستگی‌های خارجی را mock کن: `next/navigation`, `next/image`, React Query، toast، localStorage helpers، endpointها
- مسیر mock را با همان aliasی که در فایل تحت تست import شده هماهنگ کن
- از `any` در تست پرهیز کن؛ برای callbackها type صریح بنویس
- در `afterEach` با `jest.clearAllMocks()` (و در صورت نیاز `cleanup`) تمیز کن
- خروجی تست را از نظر پاس بودن **و** نبودن خطای کنسول بررسی کن

## مثال مسیر

```
src/app/panel/_components/AppBar/
├── tests/unit/PanelAppBar.unit.test.tsx
├── tests/integration/PanelAppBar.integration.test.tsx   # در صورت نیاز
├── Logo/tests/unit/PanelAppBarLogo.unit.test.tsx
└── LogOut/tests/unit/PanelAppBarLogOut.unit.test.tsx
```
