module.exports = {
  env: {
    node: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2018,
  },

  plugins: ['json'],

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
      2,
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
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
        varsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': [2, 'nofunc'],
    'object-curly-spacing': [2, 'never'],
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'always'],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-unary-ops': 2,
  },

  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      flowVersion: '0.53', // Flow version
    },

    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      {property: 'freeze', object: 'Object'},
      {property: 'myFavoriteWrapper'},
    ],
  },

  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
};
