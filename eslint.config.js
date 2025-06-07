// @ts-check

import eslintJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
  {
    // Applies to all files
    ignores: [
      "**/dist/**",
      "**/.turbo/**",
      "**/node_modules/**",
      "**/.output/**",
      "**/.server/**",
      "**/.vite/**",
      "**/.next/**",
      "**/.DS_Store",
      "bun.lockb",
      ".idea/",
      ".vscode/",
    ],
  },
  {
    // Global recommended rules
    ...eslintJs.configs.recommended,
  },
  {
    // TypeScript specific configurations
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname, // Resolve `project` paths relative to eslint.config.js
        project: [
          "./tsconfig.json", // For root-level files, if any
          "./packages/core/tsconfig.json", // Assuming core has one that includes its files
          "./packages/react/tsconfig.app.json",
          "./packages/react/tsconfig.node.json", // If vite/node scripts are linted
          "./packages/svelte/tsconfig.app.json",
          "./packages/svelte/tsconfig.node.json",
          "./packages/vue/tsconfig.app.json",
          "./packages/vue/tsconfig.node.json",
        ],
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      }
    },
    rules: {
      // Add any project-specific TypeScript rules here
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "warn"
    },
  },
  {
    // JavaScript specific configurations (if needed, e.g. for .js config files)
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
      }
    },
    rules: {
      // Add any project-specific JavaScript rules here
    }
  },
  // Prettier config must be last to override other formatting rules
  eslintConfigPrettier
);
