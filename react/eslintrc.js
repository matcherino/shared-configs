const fp = require('path');
const nodeEslintrcPath = fp.join(
  fp.resolve(__dirname, '..'),
  'node/eslintrc.js'
);
module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', nodeEslintrcPath],

  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      legacyDecorators: true
    }
  },

  plugins: [
    //"objects",
    'react'
  ],

  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __DEV__: true
  },

  rules: {
    // Objects plugin
    //"objects/no-object-properties-first-line": 0, // Disallow first property of a multiple property object from being declared on first line.
    //"objects/no-object-properties-last-line": 0,  // Disallow last property of a multiple property object to be declared on last line.
    //"objects/no-object-properties-one-line": 0,   // Disallow multiple object properties to be declared on one line.
    //"objects/no-object-property-split": 2,        // Disallow object property values from appearing on a different line from their key.
    // React plugin
    'react/display-name': 0, // Prevent missing displayName in a React component definition
    'react/forbid-prop-types': 0, // Forbid certain propTypes
    //"react/jsx-boolean-value": [2, "always"], // Enforce boolean attributes notation in JSX
    'react/jsx-closing-bracket-location': [
      2,
      {
        location: 'tag-aligned'
      }
    ], // Validate closing bracket location in JSX
    'react/jsx-curly-spacing': [2, 'never'], // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-indent-props': [0, 2], // TODO broken with ternaries                      // Validate props indentation in JSX
    // "react/jsx-max-props-per-line": [
    //   1,
    //   {
    //     "maximum": 4
    //   }
    // ], // Limit maximum of props on a single line in JSX
    'react/jsx-no-duplicate-props': 2, // Prevent duplicate props in JSX
    'react/jsx-no-literals': 0, // Prevent usage of unwrapped JSX strings
    'react/jsx-no-undef': 2, // Disallow undeclared variables in JSX
    'react/sort-prop-types': [
      2,
      {
        ignoreCase: true,
        callbacksLast: true
      }
    ], // Enforce propTypes declarations alphabetical sorting
    'react/jsx-sort-props': [
      0,
      {
        ignoreCase: true,
        callbacksLast: true
      }
    ], // Enforce props alphabetical sorting
    'react/jsx-uses-react': 2, // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars': 2, // Prevent variables used in JSX to be incorrectly marked as unused

    'react/jsx-no-bind': 2,

    //"react/jsx-wrap-multilines": 2, // Prevent missing parentheses around multilines JSX
    'react/no-danger': 1, // Prevent usage of dangerous JSX properties
    'react/no-did-mount-set-state': 2, // Prevent usage of setState in componentDidMount
    'react/no-did-update-set-state': 2, // Prevent usage of setState in componentDidUpdate
    'react/no-direct-mutation-state': 2, // Prevent direct mutation of this.state
    'react/no-multi-comp': 0, // Prevent multiple component definition per file
    'react/no-set-state': 0, // Prevent usage of setState
    'react/no-unknown-property': 2, // Prevent usage of unknown DOM property
    'react/prefer-es6-class': 2, // Prefer es6 class instead of createClass for React Components
    'react/prop-types': 2, // Prevent missing props validation in a React component definition
    'react/react-in-jsx-scope': 2, // Prevent missing React when using JSX
    'react/self-closing-comp': 2, // Prevent extra closing tags for components without children
    'react/sort-comp': [
      2,
      {
        // Enforce component methods order
        order: [
          'selectState',
          'state',
          'lifecycle',
          '/^render.+$/',
          'render',
          '/^do.+$/',
          'everything-else'
        ]
      }
    ],
    // Possible Errors
    // "comma-dangle": [
    //   2,
    //   "never"
    // ], // disallow or enforce trailing commas
    'no-cond-assign': [2, 'always'], // disallow assignment in conditional expressions
    'no-console': 2, // disallow use of console (off by default in the node environment)
    'no-constant-condition': 2, // disallow use of constant expressions in conditions
    'no-control-regex': 2, // disallow control characters in regular expressions
    'no-debugger': 2, // disallow use of debugger
    'no-dupe-args': 2, // disallow duplicate arguments in functions
    'no-dupe-keys': 2, // disallow duplicate keys when creating object literals
    'no-duplicate-case': 2, // disallow a duplicate case label
    'no-empty-character-class': 2, // disallow the use of empty character classes in regular expressions
    'no-empty': 2, // disallow empty statements
    'no-ex-assign': 2, // disallow assigning to the exception in a catch block
    'no-extra-boolean-cast': 2, // disallow double-negation boolean casts in a boolean context
    'no-extra-parens': 0, // disallow unnecessary parentheses (off by default)
    'no-extra-semi': 2, // disallow unnecessary semicolons
    'no-func-assign': 2, // disallow overwriting functions written as function declarations
    'no-inner-declarations': 2, // disallow function or variable declarations in nested blocks
    'no-invalid-regexp': 2, // disallow invalid regular expression strings in the RegExp constructor
    'no-irregular-whitespace': 2, // disallow irregular whitespace outside of strings and comments
    'no-negated-in-lhs': 2, // disallow negation of the left operand of an in expression
    'no-obj-calls': 2, // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-regex-spaces': 2, // disallow multiple spaces in a regular expression literal
    'no-sparse-arrays': 2, // disallow sparse arrays
    'no-unreachable': 2, // disallow unreachable statements after a return, throw, continue, or break statement
    'use-isnan': 2, // disallow comparisons with the value NaN
    'valid-jsdoc': 0, // Ensure JSDoc comments are valid (off by default)
    'valid-typeof': 2, // Ensure that the results of typeof are compared against a valid string
    'no-unexpected-multiline': 2, // Avoid code that looks like two expressions but is actually one (off by default)
    // Best Practices
    'accessor-pairs': [
      2,
      {
        setWithoutGet: true,
        getWithoutSet: false
      }
    ], // Enforces getter/setter pairs in objects (off by default)
    'block-scoped-var': 0, // treat var statements as if they were block scoped (off by default)
    complexity: 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    'consistent-return': 1, // require return statements to either always or never specify values
    curly: ['error', 'multi-line'], // specify curly brace conventions for all control statements
    'default-case': 2, // require default case in switch statements (off by default)
    'dot-notation': 2, // encourages use of dot notation whenever possible
    'dot-location': [2, 'property'], // enforces consistent newlines before or after dots (off by default)
    eqeqeq: [2, 'allow-null'], // require the use of === and !==
    'guard-for-in': 0, // make sure for-in loops have an if statement (off by default)
    'no-alert': 2, // disallow the use of alert, confirm, and prompt
    'no-caller': 2, // disallow use of arguments.caller or arguments.callee
    'no-div-regex': 2, // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-else-return': 0, // disallow else after a return in an if (off by default)
    'no-empty-pattern': 2, // disallow use of empty destructuring patterns
    'no-eq-null': 0, // disallow comparisons to null without a type-checking operator (off by default)
    'no-eval': 2, // disallow use of eval()
    'no-extend-native': 2, // disallow adding to native types
    'no-extra-bind': 2, // disallow unnecessary function binding
    'no-fallthrough': 2, // disallow fallthrough of case statements
    'no-floating-decimal': 2, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    'no-implicit-coercion': 2, // disallow the type conversions with shorter notations
    'no-implied-eval': 2, // disallow use of eval()-like methods
    'no-invalid-this': 0, // disallow this keywords outside of classes or class-like objects
    'no-iterator': 2, // disallow usage of __iterator__ property
    'no-labels': 0, // disallow use of labeled statements
    'no-lone-blocks': 2, // disallow unnecessary nested blocks
    'no-loop-func': 2, // disallow creation of functions within loops
    'no-magic-numbers': 0, // disallow the use of magic numbers
    'no-multi-spaces': 2, // disallow use of multiple spaces
    'no-multi-str': 2, // disallow use of multiline strings
    'no-native-reassign': 2, // disallow reassignments of native objects
    'no-new-func': 2, // disallow use of new operator for Function object
    'no-new-wrappers': 2, // disallows creating new instances of String,Number, and Boolean
    'no-new': 2, // disallow use of new operator when not part of the assignment or comparison
    'no-octal-escape': 2, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-octal': 2, // disallow use of octal literals
    'no-param-reassign': 2, // disallow reassignment of function parameters (off by default)
    'no-process-env': 0, // disallow use of process.env (off by default)
    'no-proto': 2, // disallow usage of __proto__ property
    'no-redeclare': 2, // disallow declaring the same variable more than once
    'no-return-assign': 2, // disallow use of assignment in return statement
    'no-script-url': 2, // disallow use of javascript: urls.
    'no-self-compare': 2, // disallow comparisons where both sides are exactly the same (off by default)
    'no-sequences': 2, // disallow use of comma operator
    'no-throw-literal': 2, // restrict what can be thrown as an exception (off by default)
    'no-unused-expressions': 2, // disallow usage of expressions in statement position
    'no-useless-call': 2, // disallow unnecessary .call() and .apply()
    'no-void': 2, // disallow use of void operator (off by default)
    'no-warning-comments': 0, // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    'no-with': 2, // disallow use of the with statement
    radix: 2, // require use of the second argument for parseInt() (off by default)
    'vars-on-top': 0, // requires to declare all vars on top of their containing scope (off by default)
    'wrap-iife': 2, // require immediate function invocation to be wrapped in parentheses (off by default)
    yoda: [2, 'never'], // require or disallow Yoda conditions
    // Strict Mode
    strict: [2, 'never'], // controls location of Use Strict Directives
    // Variables
    'init-declarations': 0, // enforce or disallow variable initializations at definition
    'no-catch-shadow': 2, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    'no-delete-var': 2, // disallow deletion of variables
    'no-label-var': 2, // disallow labels that share a name with a variable
    'no-shadow-restricted-names': 2, // disallow shadowing of names such as arguments
    'no-shadow': 2, // disallow declaration of variables already declared in the outer scope
    'no-undef-init': 2, // disallow use of undefined when initializing variables
    'no-undef': 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undefined': 0, // disallow use of undefined variable (off by default)
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [
      'error',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}
    ],

    'no-use-before-define': [2, 'nofunc'], // disallow use of variables before they are defined
    // Stylistic Issues
    'array-bracket-spacing': [2, 'never'], // enforce spacing inside array brackets (off by default)
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: false
      }
    ], // enforce one true brace style (off by default)
    camelcase: [
      2,
      {
        properties: 'always'
      }
    ], // require camel case names
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ], // enforce spacing before and after comma
    'comma-style': [2, 'last'], // enforce one true comma style (off by default)
    'computed-property-spacing': [2, 'never'], // require or disallow padding inside computed properties (off by default)
    'consistent-this': [0, 'useFatArrow'], // enforces consistent naming when capturing the current execution context (off by default)
    'eol-last': 2, // enforce newline at the end of file, with no multiple empty lines
    'func-names': 2, // require function expressions to have a name (off by default)
    'func-style': 0, // enforces use of function declarations or expressions (off by default)
    'id-length': 0, // this option enforces minimum and maximum identifier lengths (variable names, property names etc.) (off by default)
    'id-match': 0, // require identifiers to match the provided regular expression
    indent: [
      0,
      2,
      {
        SwitchCase: 0,
        VariableDeclarator: 1
      }
    ], // TODO currently broken for ternaries // this option sets a specific tab width for your code (off by default)
    'jsx-quotes': [2, 'prefer-double'], // specify whether double or single quotes should be used in JSX attributes
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ], // enforces spacing between keys and values in object literal properties
    'lines-around-comment': 0, // enforces empty lines around comments (off by default)
    'linebreak-style': 2, // disallow mixed 'LF' and 'CRLF' as linebreaks (off by default)
    'max-nested-callbacks': [2, 3], // specify the maximum depth callbacks can be nested (off by default)
    'new-cap': 2, // require a capital letter for constructors
    'new-parens': 2, // disallow the omission of parentheses when invoking a constructor with no arguments
    'newline-after-var': 0, // allow/disallow an empty newline after var statement (off by default)
    'no-array-constructor': 2, // disallow use of the Array constructor
    'no-continue': 0, // disallow use of the continue statement (off by default)
    'no-inline-comments': 0, // disallow comments inline after code (off by default)
    'no-lonely-if': 2, // disallow if as the only statement in an else block (off by default)
    'no-mixed-spaces-and-tabs': 2, // disallow mixed spaces and tabs for indentation
    'no-multiple-empty-lines': [
      2,
      {
        max: 2
      }
    ], // disallow multiple empty lines (off by default)
    'no-negated-condition': 2, // disallow negated conditions
    'no-nested-ternary': 0, // disallow nested ternary expressions (off by default)
    'no-new-object': 2, // disallow use of the Object constructor
    'no-restricted-syntax': [2, 'WithStatement'], // disallow use of certain syntax in code
    'no-spaced-func': 2, // disallow space between function identifier and application
    'no-ternary': 0, // disallow the use of ternary operators (off by default)
    'no-trailing-spaces': 2, // disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 0, // disallow dangling underscores in identifiers
    'no-unneeded-ternary': 2, // disallow the use of Boolean literals in conditional expressions (off by default)
    'object-curly-spacing': [2, 'never'], // require or disallow padding inside curly braces (off by default)
    'one-var': [
      2,
      {
        // allow or disallow one variable declaration per function (off by default)
        uninitialized: 'always', // Exactly one declaration for uninitialized variables per function (var) or block (let or const)
        initialized: 'never' // Exactly one declarator per initialized variable declaration per function (var) or block (let or const)
      }
    ],
    'operator-assignment': [2, 'always'], // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    // "operator-linebreak": [
    //   2,
    //   "after"
    // ], // enforce operators to be placed before or after line breaks (off by default)
    'padded-blocks': [2, 'never'], // enforce padding within blocks (off by default)
    'quote-props': [2, 'as-needed'], // require quotes around object literal property names (off by default)
    quotes: [2, 'single'], // specify whether backticks, double or single quotes should be used
    'require-jsdoc': 0, // Require JSDoc comment
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ], // enforce spacing before and after semicolons
    semi: [2, 'always'], // require or disallow use of semicolons instead of ASI
    'sort-vars': [
      0,
      {
        ignoreCase: true
      }
    ], // sort variables within the same declaration block (off by default)
    'keyword-spacing': [2], // require a space before certain keywords
    'space-before-blocks': [2, 'always'], // require or disallow space before blocks (off by default)
    'space-in-parens': [2, 'never'], // require or disallow spaces inside parentheses (off by default)
    'space-infix-ops': 0, // TODO currently broken for default params                                   // require spaces around operators
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ], // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    'spaced-comment': 0, // require or disallow a space immediately following the // or /* in a comment (off by default)
    'wrap-regex': 0, // require regex literals to be wrapped in parentheses (off by default)
    // ECMAScript 6
    'arrow-parens': 0, // TODO fails with async keyword          // require parens in arrow function arguments
    'arrow-spacing': 2, // require space before/after arrow function's arrow
    'constructor-super': 2, // verify super() callings in constructors (off by default)
    'generator-star-spacing': 0, // TODO fails with async keyword // enforce the spacing around the * in generator functions (off by default)
    'no-class-assign': 2, // disallow modifying variables of class declarations
    'no-const-assign': 2, // disallow modifying variables that are declared using const
    'no-this-before-super': 2, // disallow to use this/super before super() calling in constructors. (off by default)
    'no-var': 2, // require let or const instead of var (off by default)
    'object-shorthand': 2, // require method and property shorthand syntax for object literals (off by default)
    'prefer-const': 2, // suggest using of const declaration for variables that are never modified after declared (off by default)
    'prefer-spread': 2, // suggest using the spread operator instead of .apply().
    'prefer-reflect': 0, // suggest using Reflect methods where applicable
    'require-yield': 2, // disallow generator functions that do not have yield
    // Legacy
    'max-depth': 0, // specify the maximum depth that blocks can be nested (off by default)
    'max-len': ['error', {code: 120, tabWidth: 2, ignoreComments: false}], // TODO ignore comments? // specify the maximum length of a line in your program (off by default)
    'max-params': [2, 5], // limits the number of parameters that can be used in the function declaration. (off by default)
    'max-statements': 0, // specify the maximum number of statement allowed in a function (off by default)
    'no-bitwise': 2, // disallow use of bitwise operators (off by default)
    'no-plusplus': 0 // disallow use of unary operators, ++ and -- (off by default)
  },

  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: '16', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      flowVersion: '0.53' // Flow version
    },

    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      {property: 'freeze', object: 'Object'},
      {property: 'myFavoriteWrapper'}
    ]
  }
};
