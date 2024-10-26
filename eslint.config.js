import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.2" } }, // Correct version of React.
    plugins: ["react", "react-hooks", "react-refresh"],
    rules: {
      "react/prop-types": "off", // Disable prop-types warnings.
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Additional rules for better prop-handling
      "react/jsx-no-duplicate-props": "warn", // Warn for duplicate props in JSX.
      "react/no-unused-prop-types": "off", // Disable unused prop-types warnings.
      "react/require-default-props": "off", // Disable warnings for missing defaultProps.
    },
  },
];
