module.exports = {
  env: {
    node: true,
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    camelcase: "off",
    "no-tabs": "error"
  }
}