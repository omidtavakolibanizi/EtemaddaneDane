# Endpoints (`src/endpoints/`)

الگوی ساختاری مشابه پروژه AVL: هر resource یک پوشه دارد و عملیات HTTP در زیرپوشه متد قرار می‌گیرد.

```
Site/
├── Site.type.ts
├── index.ts
└── Get/
    ├── GetSiteContent.ts
    └── GetSiteContent.type.ts

Catalog/
├── Catalog.type.ts
├── index.ts
├── Categories/
│   ├── index.ts
│   └── Get/GetCatalogCategories.ts
└── Products/
    ├── index.ts
    ├── Get/GetCatalogProducts.ts
    └── {slug}/Get/GetCatalogProduct.ts

Inquiries/
├── Inquiries.type.ts
├── index.ts
└── Post/
    ├── PostInquiry.ts
    └── PostInquiry.type.ts
```

## الگوی endpoint

```typescript
import { AXIOS } from "@/utils/axiosInstance";

import type { TGetSiteContentResponse } from "./GetSiteContent.type";

async function GetSiteContent(): Promise<TGetSiteContentResponse> {
  const { data } = await AXIOS.get("/site/");
  return data;
}

export default GetSiteContent;
```

- **هرگز** axios مستقیم یا `fetch` خام برای API پروژه — از `@/utils/axiosInstance` (`AXIOS`)
- تابع را `default export` کن و از `index.ts` با named export باز-export کن
- typeهای request/response کنار همان فایل (`*.type.ts`)
- Base URL از `NEXT_PUBLIC_API_URL` (`getAPIUrl`)

## APIهای فعلی

| تابع | متد | مسیر |
|------|-----|------|
| `GetSiteContent` | GET | `/site/` |
| `GetCatalogCategories` | GET | `/catalog/categories/` |
| `GetCatalogProducts` | GET | `/catalog/products/` |
| `GetCatalogProduct` | GET | `/catalog/products/{slug}/` |
| `PostInquiry` | POST | `/inquiries/` |
