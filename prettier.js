module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	parser: 'babel-eslint',
	extends: [
		// 'airbnb-base',
		'prettier',
	],
	env: {
		es6: true,
	},
	plugins: ['babel', 'prettier', 'import'],
	rules: {
		'consistent-this': ['error', 'that'],
		'func-names': 'off',
		'generator-star-spacing': 'off', // fails with async code at the moment, revisit later
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'max-len': ['error', 120, { ignoreTemplateLiterals: true, ignoreUrls: true }],
		'new-cap': ['error', { properties: false }],
		'newline-after-var': 'error',
		'newline-before-return': 'error',
		'no-comma-dangle': 'off',
		'no-console': ['error', { allow: ['error'] }],
		'no-debugger': 'error',
		'no-mixed-operators': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'no-prototype-builtins': 'off',
		'no-tabs': 'off',
		'no-underscore-dangle': 'off',
		'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: true }],
	},
};
