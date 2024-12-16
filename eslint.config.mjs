import react from "eslint-plugin-react";
import jest from "eslint-plugin-jest";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended"
  ),
  {
    plugins: {
      react,
      "@typescript-eslint": typescriptEslint,
      jest,
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
    ignores:[
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
        "**/coverage/**",
        "**/public/**",
        "**/__tests__/**",
        "**/__snapshots__/**",
        "**/setupTests.js",
        "**/jest.config.js",
        "**/jest.setup.js",
        "**/test-utils.js",
        "**/__mocks__/**",
        "**/__fixtures__/**",
        "**/__e2e__/**",
        "**/__cypress__/**",
        "**/__cypress-tests__/**",
        "**/__cypress-e2e__/**",
        "**/__cypress-snapshots__/**",
        "**/__cypress-fixtures__/**",
        "**/__cypress-tests__/**",
        "**/__cypress-integration__/**",
        "**/__cypress-support__/**",
    ]
  },
];
