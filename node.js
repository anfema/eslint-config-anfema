module.exports = {
	root: true,
	extends: './index.js',

	env: {
		node: true,
	},

	rules: {
		'global-require': 'warn',
		'handle-callback-err': 'warn',
		'no-buffer-constructor': 'warn',
		'no-mixed-requires': ['warn', { allowCall: true }],
		'no-new-require': 'warn',
		'no-path-concat': 'error',
		'no-process-env': 'warn',
	},
};
