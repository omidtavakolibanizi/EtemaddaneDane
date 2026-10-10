import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort";

import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "react-hooks/exhaustive-deps": "warn",
      "@next/next/no-page-custom-font": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/use-memo": "warn",
      "react-hooks/refs": "off",
      "react-hooks/purity": "off",
      "react-hooks/static-components": "off",
      // "react-hooks/incompatible-library": "off",
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
          multiline: "last",
        },
      ],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // `react` first, `next` second
            ["^react$", "^next"],
            // Packages starting with `@mui`
            ["^@mui"],
            // `react-hook-form` first, `@hookform` second
            ["^react-hook-form", "^@hookform"],
            // Packages starting with `yup`
            ["^yup"],
            // Packages starting with a character
            ["^[a-z]"],
            // Packages starting with `@`
            ["^@"],
            // Packages starting with `@/providers`
            ["^@/providers"],
            // Packages starting with `@/endpoints`
            ["^@/endpoints"],
            // Packages starting with `@/components`
            ["^@/components"],
            // Packages starting with `@/utils`
            ["^@/utils"],
            // Packages starting with `@/theme`
            ["^@/theme"],
            // Packages starting with `~`
            ["^~"],
            // Imports starting with `../`
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Imports starting with `./`
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports
            ["^.+\\.s?css$"],
            // Side effect imports
            ["^\\u0000"],
          ],
        },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "public/**"]),
]);

export default eslintConfig;
