module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  parser: "babel-eslint",
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    indent: 0,
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "react-hooks/rules-of-hooks": "error", // 檢查 Hook 的規則
    "react/prop-types": 0,
    "react/display-name": 0,
    "react-hooks/exhaustive-deps": "warn", // 檢查 effect 的相依性
    "prettier/prettier": "error"
  }
}
