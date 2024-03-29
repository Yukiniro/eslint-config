module.exports = {
  extends: ["standard", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
};
