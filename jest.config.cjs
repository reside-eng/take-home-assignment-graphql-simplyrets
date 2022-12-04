/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/*.test.ts"],
  moduleNameMapper: {
    axios: "axios/dist/node/axios.cjs",
  },
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["node_modules", "src/types", "src/generated"],
  reporters: ["default"],
  globals: { "ts-jest": { diagnostics: false } },
  transform: {},
};
