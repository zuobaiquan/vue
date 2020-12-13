module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "semi": [2, "never"],
    "no-console": 0,
    "comma-dangle": [2, "always-multiline"],
    "max-len": 0,
    "space-before-function-paren": [2, "always"],
    "no-unused-expressions": [0, {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "arrow-body-style": [0, "never"],
    "func-names": 0,
    "prefer-const": 0,
    "no-extend-native": 0,
    "no-param-reassign": 0,
    "no-restricted-syntax": 0,
    "no-eval": 0,
    "no-continue": 0,
    "no-unused-vars": [2, { "ignoreRestSiblings": true }],
    "no-underscore-dangle": 0,
    "global-require": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ]
};
