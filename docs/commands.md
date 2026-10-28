# دستورات

```bash
npm run dev              # سرور توسعه
npm run build            # بیلد production
npm run start            # اجرای production (بعد از build)
npm run lint             # ESLint
npm run test             # Jest
npm run test-watch       # Jest watch mode
npm run playwright       # Playwright E2E
npm run playwright-debug # Playwright debug
```

## Docker

```bash
docker compose build              # ساخت image
docker compose up -d              # اجرای کانتینر روی پورت 3000
docker compose down               # توقف و حذف کانتینر
docker compose logs -f web        # مشاهده لاگ
```

اختیاری — آدرس API در زمان build/run:

```bash
NEXT_PUBLIC_API_URL=https://dane.etemadi.group/api/v1 docker compose up -d --build
```
