module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "@react-native",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-native",
    "jsx-a11y",
    "import",
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "react-native/no-inline-styles": "off",
  },
};
