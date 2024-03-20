module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxt/eslint-config'],
  rules: {
    // Global
    semi: ['error', 'never'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    // Vue
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 5
        }
      }
    ],
    'vue/no-v-html': 0
  }
}
