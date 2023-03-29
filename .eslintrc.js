module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true // help to ignore _dirname , process etc
  },
  extends: ['eslint:recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
    // "sourceType" : "module"
  },
  rules: {},
  ignorePatterns: ['src/test/*'] // <<< ignore all files in test folder
}
