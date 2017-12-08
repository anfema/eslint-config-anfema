module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	parser: 'babel-eslint',
	extends: './prettier.js',
	env: {
		es6: true,
		browser: true,
	},
	plugins: ['ember'],
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
		'ember/no-old-shims': 'error',
		'ember/no-on-calls-in-components': 'error',
		'ember/no-side-effects': 'error',
		'ember/order-in-components': 'off', // diabled until we agree on fixed order
		'ember/order-in-controllers': 'off',
		'ember/order-in-models': 'off',
		'ember/order-in-routes': 'off',
		'ember/query-params-on-top': 'off', // clashes with order-in-controller
		'ember/routes-segments-snake-case': 'error',
		'ember/use-brace-expansion': 'error',
		'ember/use-ember-get-and-set': 'off', // may revisit

		// Changes to our regular rules because Ember behaves a little different
		'no-invalid-this': 'off',

		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-named-as-default-member': 'off',
		'import/no-unresolved': 'off', // does not work with the ember resolver
		'func-names': 'off', // Does not work correctly with Ember computed properties
		'max-len': [
			'error',
			{
				code: 100,
				comments: 120,
				ignoreComments: true,
				ignorePattern: 'Logger\\.|computed\\(|observer\\(',
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
				ignoreStrings: true,
			},
		],
		'new-cap': [
			'error',
			{
				properties: false,
				capIsNewExceptions: [
					'A', // Ember.A
				],
			},
		],
		'no-console': 'warn',
		'prefer-arrow-callback': 'off',
		'prefer-rest-params': 'off',
	},
};
