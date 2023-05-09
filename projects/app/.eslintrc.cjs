const baseConfig = require('../../.eslintrc');

module.exports = {
	...baseConfig,
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: { sourceType: 'module' },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
	},
};
