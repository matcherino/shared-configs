module.exports = {
  env: {
    node: true
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2017
  },

  rules: {
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs'],
    camelcase: 1,
    'computed-property-spacing': [2, 'never'],
    curly: ['error', 'multi-line'],
    'eol-last': 2,
    eqeqeq: [2, 'smart'],
    'keyword-spacing': [2, {before: true, after: true}],
    'max-depth': [1, 3],
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'max-statements': [1, 80],
    'new-cap': 1,
    'no-extend-native': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'no-use-before-define': [2, 'nofunc'],
    'object-curly-spacing': [2, 'never'],
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-unary-ops': 2
  },

  extends: ['eslint:recommended']
};
