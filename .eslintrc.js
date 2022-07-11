module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-console': ['off'],
    'no-nested-ternary': ['off'],
    'no-underscore-dangle': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
  },
  root: true,
};
