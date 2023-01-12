module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "prettier",
    "eslint-config-prettier",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": "error",
    "import/prefer-default-export": "off",
    "vue/multi-word-component-names": "off",
  },
};
