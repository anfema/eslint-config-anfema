# eslint-config-anfema

anfema's ESLint configuration, following our styleguide. Extending on AirBnB's famous one.

The most prominent additions/changes are:

- Indentation with tabs
- Trailing comma
- Relaxed line length



## Installation

```sh
#Packages to install
eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-ember babel-eslint eslint-config-airbnb-base eslint-config-anfema
```

Install with either `yarn add --dev` or `npm install --save-dev`



## Available versions

### Default

In your `.eslintrc.js`:

```javascript
module.exports = {
	extends: 'eslint-config-anfema',
}
```

### Ember

In your `.eslintrc.js`:

```javascript
module.exports = {
	extends: 'eslint-config-anfema/ember',
}
```

Extends the default configuration so it can be used in Ember.js projects,
which require a few excemptions from our generally stricter rules.

### Ember Tests

In your `.eslintrc.js`:

```javascript
module.exports = {
	extends: 'eslint-config-anfema/ember-tests',
}
```

Extends the Ember.js configuration to include the testing environment.
