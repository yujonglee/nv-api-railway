/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  snapshotFormat: {
    printBasicPrototype: false,
  },
  coverageDirectory: "./coverage",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.test.{js,jsx,ts,tsx}",
    "!coverage/**",
    "!**/test-helpers/**",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  modulePathIgnorePatterns: [
    "test-helpers",
    "dist",
    "generated",
  ],
  testTimeout: 30000,
};