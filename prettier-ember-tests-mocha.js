module.exports = {
	extends: './prettier-ember.js',
	env: {
		embertest: true,
		mocha: true,
	},
	globals: {
		server: true,
	},
	plugins: ['chai-friendly', 'chai-expect'],
	rules: {
		'chai-expect/missing-assertion': 'error',
		'chai-expect/no-inner-compare': 'error',
		'chai-expect/terminating-properties': 'warn',
		'chai-friendly/no-unused-expressions': 'error',
		'no-unused-expressions': 'off',
	},
};
