module.exports = {
	env: {
		browser: true,
		es2022: true,
		jest: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:jest/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "jest", "@typescript-eslint"],
	rules: {
		"no-console": ["error"],
		semi: ["error", "always"],
		quotes: ["error", "double"],
		"@typescript-eslint/no-explicit-any": ["error"],
		"@typescript-eslint/no-unused-vars": ["error"],
		"@typescript-eslint/no-var-requires": ["error"],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
