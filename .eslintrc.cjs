module.exports = {
  extends: ["./node_modules/@abi-labs-frontend/standards/eslintrc.js"],
  root: true,
  env: { browser: true, es2020: true },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
