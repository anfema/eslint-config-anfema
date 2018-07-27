# eslint-config-anfema

anfema's ESLint configuration. Inspired by AirBnB's styleguide and others. Using Prettier to make
things easier to use.

## Installation

```sh
#Packages to install
eslint eslint-config-airbnb-base eslint-config-anfema eslint-plugin-babel eslint-plugin-import babel-eslint
```

Install with either `yarn add --dev` or `npm install --save-dev`

## Available versions

### Default

In your `.eslintrc.js`:

```js
module.exports = {
	extends: 'eslint-config-anfema',
};
```

### Node.js

In your `.eslintrc.js`:

```js
module.exports = {
	extends: 'eslint-config-anfema/node',
};
```

### Ember

```sh
#Additional dependencies to install
eslint-plugin-ember
```

In your `.eslintrc.js`:

```js
module.exports = {
	extends: 'eslint-config-anfema/ember',
};
```

Extends the default configuration so it can be used in Ember.js projects, which require a few
excemptions from our generally stricter rules.

### Ember Tests

```sh
#Additional dependencies to install
eslint-plugin-ember
```

In your `.eslintrc.js`:

```js
module.exports = {
	extends: 'eslint-config-anfema/ember-tests',
};
```

Extends the Ember.js configuration to include the testing environment.

### Ember Tests Mocha

```sh
#Additional dependencies to install
eslint-plugin-ember eslint-plugin-chai-expect eslint-plugin-chai-friendly
```

In your `.eslintrc.js`:

```js
module.exports = {
	extends: 'eslint-config-anfema/ember-tests',
};
```

Extends the Ember.js configuration to include the testing environment for ember-mocha as well as
additional rules for usage with Chai.

## Credits

* [@pichfl](https://github.com/pichfl)

## Changelog

### 5.3.0

* Updated peer depencies

### 5.2.0

* Disable no-console warnings (via @philippgrieser)

### 5.1.0

* Laxer peer dependency settings for eslint-plugin-prettier
* Remove deprecation notice created by importing the wrong configuration

### 5.0.1

* Disable `import/group-exports` as it doesn't seem to work everywhere

### 5.0.0

* Default to Prettier, deprecate Prettier specific configurations
* Remove dependency on AirBnB styleguide, now basing on `eslint:recommend`
* Moved changelog to README

### 4.0.1

* Confirm to Prettier rules
* Add missing import plugin for prettier configs not based on AirBnB

### 4.0.0

* Added config variation with support for Prettier

### 3.4.0

* Upgrade ESLint peer dependency

### 3.3.0

* Enable ember/no-old-shims (fixable)

### 3.2.0

* Disabled ember/order-in-\* for now

### 3.1.0

* Added ember-tests-mocha
* Updated README

### 3.0.1

* Fixed eslint-plugin-babel peer dependency

### 3.0.0

* Updated peer dependencies: - eslint-plugin-babel - eslint-plugin-ember

### 2.0.0

* Relaxed some ember related rules

### 1.2.0

* Added eslint-plugin-ember as peer dependency for anfema/ember

### 1.1.0

* Updated README with installation instructions
* Added CHANGELOG

### 1.0.0

* Initial release
