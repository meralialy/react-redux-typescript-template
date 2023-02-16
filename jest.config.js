module.exports = {
	collectCoverageFrom: ["src/**"],
	coverageDirectory: "coverage",
	coveragePathIgnorePatterns: ["index.tsx"],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	preset: "ts-jest",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
};
