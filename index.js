/* eslint-env node */
module.exports = {
	root: true,
	env: {
		'vue/setup-compiler-macros': true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/prettier'
	]
};
