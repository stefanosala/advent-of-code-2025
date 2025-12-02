import eslint from "@eslint/js";
import nodePlugin from "eslint-plugin-n";
// eslint-disable-next-line n/no-unpublished-import
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  nodePlugin.configs["flat/recommended-module"],
  {
    ignores: ["build/**", "dist/**", "**/node_modules/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "n/no-missing-import": "off",
      "n/no-process-exit": "off",
      "n/no-unsupported-features/node-builtins": "off",
    },
  }
);
