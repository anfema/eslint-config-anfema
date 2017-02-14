module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	parser: 'babel-eslint',
	extends: './index.js',
	env: {
		es6: true,
		browser: true,
	},
	plugins: [
		'babel',
		'ember',
	],
	rules: {
		'ember/alias-model-in-controller': 'off',
		'ember/avoid-leaking-state-in-components': 'error',
		'ember/closure-actions': 'error',
		'ember/jquery-ember-run': 'error',
		'ember/local-modules': 'off',
		'ember/named-functions-in-promises': 'off', // will revisit
		'ember/no-empty-attrs': 'off',
		'ember/no-function-prototype-extensions': 'error',
		'ember/no-observers': 'error',
		'ember/no-on-calls-in-components': 'error',
		'ember/no-side-effects': 'error',
		'ember/order-in-components': 'error',
		'ember/order-in-controllers': 'error',
		'ember/order-in-models': 'error',
		'ember/order-in-routes': 'off', // does not yet match our preferred ordering
		'ember/query-params-on-top': 'off', // clashes with order-in-controller
		'ember/routes-segments-snake-case': 'error',
		'ember/use-brace-expansion': 'error',
		'ember/use-ember-get-and-set': 'off', // may revisit

		// Changes to our regular rules because Ember behaves a little different
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-named-as-default-member': 'off',
		'import/no-unresolved': 'off', // does not work with the ember resolver
		'max-len': ['error', 120, {
			ignorePattern: 'Logger\\.|computed\\(|observer\\(',
			ignoreTemplateLiterals: true,
			ignoreUrls: true,
		}],
		'new-cap': ['error', {
			properties: false,
			capIsNewExceptions: [
				'A', // Ember.A
			],
		}],
		'no-console': 'error',
		'prefer-arrow-callback': 'off',
		'prefer-rest-params': 'off',
	},
};
