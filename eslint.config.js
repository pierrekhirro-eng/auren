import eslintReact from "@eslint-react/eslint-plugin";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "dist/**",
      "coverage/**",
      "playwright-report/**",
      "test-results/**",
      "node_modules/**",
    ],
  },

  /* =========================================================
     APPLICATION SOURCE
     Type-aware linting is enabled here.
     ========================================================= */

  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      eslintReact.configs["recommended-typescript"],
    ],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
      "@eslint-react/no-missing-key": "warn",
    },
  },

  /* =========================================================
     CONFIGURATION / TEST FILES
     These files are intentionally outside the application
     TypeScript project, so type-aware linting is disabled.
     ========================================================= */

  {
    files: [
      "*.js",
      "*.mjs",
      "*.cjs",
      "vite.config.ts",
      "vitest.config.ts",
      "playwright.config.ts",
      "tests/**/*.ts",
      "tests/**/*.tsx",
    ],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.disableTypeChecked,
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        projectService: false,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
]);