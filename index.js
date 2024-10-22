module.exports = {
	env: {
		'vue/setup-compiler-macros': true
	},
	extends: [
		'eslint:all',
		'plugin:vue/vue3-essential',
		'@vue/typescript/recommended',
		'@vue/prettier'
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module'
	},
	rules: {
		'no-console': 'warn',
		'no-debugger': 'warn',
		'vue/no-unused-vars': 'warn',
		'vue/no-multiple-template-root': 'off'
	}
};
