# Import Order (ESLint)

ترتیب با `eslint-plugin-simple-import-sort` اجباری است. الگوی رایج پروژه:

1. `react`, `next`
2. `@mui/*`
3. پکیج‌های خارجی (`react-hook-form`, `yup`, `@tanstack/*`, …)
4. aliasهای `@/` (`@/store`, `@/endpoints`, `@/components`, `@/utils`, …)
5. relative (`../`, `./`)
6. type-only و styles در جای مناسب طبق ESLint
