module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "cypress/globals": true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["cypress", "@typescript-eslint"],
  extends: [
    "airbnb-base",
    "plugin:cypress/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-namespace": "off",
  },
};
