module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatues: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "eslint-plugin-import",
    "eslint-plugin-react-hooks"
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"]
      }
    }
  },
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    semi: [2, "never"],
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-max-props-per-line": "off",
    "comma-dangle": [2, "never"],
    "react/jsx-closing-bracket-location": "off",
    "max-len": [2, { code: 150, ignoreUrls: true }],
    "import/no-unresolved": "error",
    "linebreak-style": 0,
    "import/extensions": "off"
  }
}
