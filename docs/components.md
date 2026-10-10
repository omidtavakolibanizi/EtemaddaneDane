# کامپوننت‌ها (`src/components/`)

## ساختار هر کامپوننت

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.type.ts
├── index.ts                 # export default + export type *
└── tests/
    ├── unit/
    └── integration/         # در صورت نیاز
```

## RHF

از `@/components/RHF` استفاده کن:

- `RHFTextField`, `RHFNumberTextField`, `RHFPasswordTextField`, `RHFAutocomplete`

## الگوی `slotProps`

برای کامپوننت‌های ترکیبی، customization را با `slotProps` بده. هنگام merge کردن `sx` پیش‌فرض با `slotProps`:

```tsx
// درست: اول spread پراپ‌ها، بعد sx تا پیش‌فرض‌ها حفظ شوند
<Toolbar
  {...slotProps?.toolbar}
  sx={{
    height: 85,
    ...slotProps?.toolbar?.sx,
  }}
/>
```
