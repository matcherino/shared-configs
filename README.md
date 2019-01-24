# @matcherino/shared-configs

Matcherino, Inc. standardized developer configurations.

## Node Project Installation

To install with dependencies

```sh
    yarn add eslint@latest babel-eslint@latest @matcherino/shared-configs
```

Create `.eslintrc.js` for node project

```js
const {eslintrc} = require('@matcherino/shared-configs');

module.exports = {
    ...eslintrc
    // overrides here
};
```

Create `.prettierrc.js`

```js
const {prettierrc} = require('@matcherino/shared-configs');

module.exports = {
    ...prettierrc
    // overrides here
};
```

## React Project Installation

To install with dependencies for React

```sh
    yarn add eslint@latest babel-eslint@latest eslint-plugin-react@latest @matcherino/shared-configs
```

Create `.eslintrc.js` for react project

```js
const {eslintrc} = require('@matcherino/shared-configs/react');

module.exports = {
    ...eslintrc
    // overrides here
};
```

Create `.prettierrc.js`

```js
const {prettierrc} = require('@matcherino/shared-configs/react');

module.exports = {
    ...prettierrc
    // overrides here
};
```
