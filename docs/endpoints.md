# Endpoints (`src/endpoints/`)

هر resource یک پوشه دارد. عملیات HTTP معمولاً در زیرپوشه متد:

```
Auth/
└── Logout/
    └── GetAuthLogout.ts

User/
└── Address/
    ├── PostUserAddress.ts
    ├── Types.ts
    └── ...
```

## الگوی endpoint

```typescript
import { AXIOS } from "@/utils/axiosInstance";

export async function GetAuthLogout(): Promise<null> {
  const { data } = await AXIOS.get("/auth/logout/");
  return data;
}
```

- **هرگز** axios مستقیم یا `fetch` خام برای API پروژه — از `@/utils/axiosInstance` (`AXIOS`)
- خطاهای API معمولاً در interceptor با toast نمایش داده می‌شوند
