# eslint-config-anfema

anfema's ESLint configuration, following our styleguide. Extending on AirBnB's famous one.

The most prominent additions/changes are:

- Indentation with tabs
- Trailing comma
- Relaxed line length



## Installation

```sh
#Packages to install
eslint eslint-config-airbnb-base eslint-config-anfemaeslint-plugin-babel eslint-plugin-import babel-eslint
```

Install with either `yarn add --dev` or `npm install --save-dev`



## Available versions

### Default

In your `.eslintrc.js`:

```js
module.exports = {
	extends: 'eslint-config-anfema',
}
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
}
```

Extends the default configuration so it can be used in Ember.js projects,
which require a few excemptions from our generally stricter rules.


### Ember Tests

```sh
#Additional dependencies to install
eslint-plugin-ember
```

In your `.eslintrc.js`:

```js
module.exports = {
	extends: 'eslint-config-anfema/ember-tests',
}
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
}
```

Extends the Ember.js configuration to include the testing environment for ember-mocha as well as additional rules 
for usage with Chai.



## Credits

- [@pichfl](https://github.com/pichfl)
