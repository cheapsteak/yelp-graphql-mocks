module.exports = {
  parserOptions: { sourceType: "module", jsx: true },
  plugins: ["prettier", "@typescript-eslint/eslint-plugin", "react-hooks"],
  parser: "@typescript-eslint/parser",
  rules: {
    "prettier/prettier": [1, { trailingComma: "es5", singleQuote: true }],
    "react-hooks/rules-of-hooks": "error",
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 1
  },
  extends: ["prettier", "react-app"]
};