// @ts-check

import rootConfig from "../../eslint.config.js";
import eslintPluginSvelte from "eslint-plugin-svelte";
// svelte-eslint-parser is usually implicitly used by eslint-plugin-svelte's configs.
// Explicit import is only needed if you want to manually configure the parser.
// import svelteParser from "svelte-eslint-parser";

export default [
  ...rootConfig,
  // It's common for Svelte plugin configs to be an array, so spread it.
  // The new eslint-plugin-svelte v3+ uses a flat config structure directly.
  // Check the plugin's documentation for the exact export if `configs.recommended` is not found.
  // Assuming `eslintPluginSvelte.configs.recommended` is the correct way for flat config.
  // If it's an array of configs (like for different aspects):
  // ...eslintPluginSvelte.configs.recommended,
  // If it's a single config object (more common for flat config):
  {
    files: ["**/*.svelte"],
    plugins: {
      svelte: eslintPluginSvelte,
    },
    // The processor might be automatically applied by the plugin's recommended configurations.
    // If not, it needs to be explicitly set for Svelte files.
    // processor: eslintPluginSvelte.processors.svelte, // This line might be needed if not in recommended

    // languageOptions for svelte files, including the parser
    // eslint-plugin-svelte v3 typically sets up svelte-eslint-parser automatically
    // when you use its recommended configuration parts.
    // If you were to set it manually:
    // languageOptions: {
    //   parser: svelteParser, // or 'svelte-eslint-parser' if imported directly as string
    //   parserOptions: {
    //     // Svelte parser options
    //   },
    // },
    rules: {
      // Spread the recommended rules. Ensure this path is correct for flat config.
      // For eslint-plugin-svelte v3+, it might be part of a different export or structure.
      // The structure below assumes `eslintPluginSvelte.configs.recommended.rules` exists.
      ...(eslintPluginSvelte.configs && eslintPluginSvelte.configs.recommended && eslintPluginSvelte.configs.recommended.rules
          ? eslintPluginSvelte.configs.recommended.rules
          : {}),
      // Add any Svelte specific rule overrides here
      // e.g. "svelte/no-unused-svelte-ignore": "warn",
    },
  }
  // If you have TypeScript in <script lang="ts"> tags in Svelte files,
  // ensure the TypeScript config from rootConfig applies correctly.
  // eslint-plugin-svelte v3+ handles TypeScript in script tags automatically
  // when typescript-eslint is correctly set up in the root and svelte-eslint-parser is used.
];
