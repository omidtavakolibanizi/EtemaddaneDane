# AGENTS.md — sso-web-citizen

راهنمای agent برای توسعه، review و نگهداری **سامانه SSO شهروند** (Next.js).

جزئیات هر بخش در پوشه [`docs/`](./docs/) قرار دارد:

| بخش | فایل |
|-----|------|
| نمای کلی | [`docs/overview.md`](./docs/overview.md) |
| دستورات | [`docs/commands.md`](./docs/commands.md) |
| ساختار پوشه‌ها و Aliasها | [`docs/folder-structure.md`](./docs/folder-structure.md) |
| قراردادهای نام‌گذاری | [`docs/naming-conventions.md`](./docs/naming-conventions.md) |
| Endpoints | [`docs/endpoints.md`](./docs/endpoints.md) |
| صفحات و layout | [`docs/pages-and-layout.md`](./docs/pages-and-layout.md) |
| کامپوننت‌ها | [`docs/components.md`](./docs/components.md) |
| تست‌نویسی | [`docs/testing.md`](./docs/testing.md) |
| Utils | [`docs/utils.md`](./docs/utils.md) |
| Import Order | [`docs/import-order.md`](./docs/import-order.md) |
| Providers / Store | [`docs/providers-store.md`](./docs/providers-store.md) |
| قوانین review / MR | [`docs/review-mr.md`](./docs/review-mr.md) |
| مثال مرجع | [`docs/reference-examples.md`](./docs/reference-examples.md) |

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
