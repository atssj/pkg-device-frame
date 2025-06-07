// @ts-check

import rootConfig from "../../eslint.config.js";
import eslintPluginVue from "eslint-plugin-vue";
// import vueParser from "vue-eslint-parser"; // vue-eslint-parser is often used by eslint-plugin-vue's configs

export default [
  ...rootConfig,
  // Spread the recommended Vue configs.
  // eslint-plugin-vue offers several (e.g., base, essential, strongly-recommended, recommended)
  // For Vue 3, 'plugin:vue/vue3-recommended' is a good start.
  ...eslintPluginVue.configs['flat/recommended'], // Or other configs like 'flat/vue3-strongly-recommended'
  {
    files: ["**/*.vue"],
    // languageOptions for .vue files are usually handled by eslint-plugin-vue's configs
    // Example of manual parser setup if not using a pre-defined config that sets it:
    // languageOptions: {
    //   parser: vueParser, // vue-eslint-parser
    //   parserOptions: {
    //     parser: "@typescript-eslint/parser", // Parser for <script lang="ts">
    //     sourceType: "module",
    //   },
    // },
    rules: {
      // Add any Vue specific rule overrides here
      // e.g., "vue/multi-word-component-names": "off",
      "vue/no-unused-vars": "warn", // Example, might be covered by TS rules too
    },
  },
  // If you have TypeScript in <script lang="ts"> tags in Vue files,
  // ensure the TypeScript config from rootConfig applies correctly.
  // eslint-plugin-vue's recommended configs usually handle this.
];
