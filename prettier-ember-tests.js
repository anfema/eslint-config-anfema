module.exports = {
	extends: './prettier-ember.js',
	env: {
		embertest: true,
		qunit: true,
	},
	globals: {
		server: true,
	},
};
