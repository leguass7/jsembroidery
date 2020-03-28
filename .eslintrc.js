module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  plugins: ['import', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'max-len': [2, 120, 4, { ignoreUrls: true, ignoreComments: false }],
    'import/prefer-default-export':'off',
    'no-param-reassign': 'off',
    'no-throw-literal': 'off',
  },
};
