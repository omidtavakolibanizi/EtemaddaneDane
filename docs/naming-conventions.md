# قراردادهای نام‌گذاری

| مورد          | الگو                                       | مثال                               |
| ------------- | ------------------------------------------ | ---------------------------------- |
| صفحه پنل      | `Panel{Feature}{Action?}Page`              | `PanelProfilePage`                 |
| const صفحه    | `Panel{Feature}Page.const.ts`              | schema، ستون‌ها، ثابت‌ها           |
| type صفحه/فرم | `Panel{Feature}Page.type.ts` یا `T...Form` | `TPanelProfileChangePasswordForm`  |
| endpoint      | `{Method}{Resource}{Id?}`                  | `GetAuthLogout`, `PostUserAddress` |
| type endpoint | `{Method}{Resource}.type.ts` / `Types.ts`  | `PostUserAddress` + Types          |
| کامپوننت      | `PascalCase`                               | `PanelAppBar`, `SLink`             |
| type          | پیشوند `T`                                 | `TPanelAppBarProps`                |
| queryKey      | نام تابع endpoint                          | `["GetUserMe"]`                    |
| store         | `use{Name}Store`                           | `useUserStore`                     |
