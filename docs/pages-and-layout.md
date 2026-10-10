# صفحات و layout

## الگوی صفحه / کامپوننت تعاملی

1. `"use client"` در ابتدای فایل وقتی لازم است
2. JSDoc بالای کامپوننت / function عمومی
3. بخش‌بندی با comment block:
   - `/* Next */`
   - `/* MUI */`
   - `/* React Hook Form */`
   - `/* React Query */`
   - `/* Store */`
   - `/* State */`
   - `/* Const */`
   - `/* Function */`
4. `export default` در انتها
5. return type: `JSX.Element` (یا type صریح برای functionها)

## فرم

- schema با Yup در `.const.ts` یا ماژول validation مشترک
- از `@/utils/validationRules` برای قوانین مشترک
- type فرم با `yup.InferType` وقتی schema محلی است
- از کامپوننت‌های `@/components/RHF` استفاده کن — TextField خام با RHF ننویس

## کامپوننت‌های پنل (`src/app/panel/_components/`)

فقط برای UI مخصوص پنل. ساختار پیشنهادی:

```
AppBar/
├── PanelAppBar.tsx
├── PanelAppBar.type.ts
├── index.ts
├── Logo/
│   ├── PanelAppBarLogo.tsx
│   ├── PanelAppBarLogo.type.ts
│   ├── index.ts
│   └── tests/unit/...
├── LogOut/
│   └── ...
└── tests/unit/...
```
