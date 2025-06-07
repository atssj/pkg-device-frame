// @ts-check

import rootConfig from "../../eslint.config.js"; // Adjust path if needed

export default [
  ...rootConfig,
  // Add any 'core' package specific ESLint overrides or additional configs here
  // For example, if 'core' had specific rules or plugins:
  // {
  //   files: ["**/*.ts"],
  //   rules: {
  //     // "some-core-specific-rule": "error"
  //   }
  // }
];
