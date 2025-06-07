// @ts-check

import rootConfig from "../../eslint.config.js";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
// eslint-plugin-react-refresh is often used with Vite for HMR, ensure it's configured if needed.
// For now, let's include its basic setup.
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";

export default [
  ...rootConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react": eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
    },
    languageOptions: {
      ...eslintPluginReact.configs.recommended.languageOptions,
      globals: {
        // Add any React-specific globals if necessary
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      "react/prop-types": "off", // Often off in TypeScript projects
      "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Add any other React specific rules
    },
  },
];
