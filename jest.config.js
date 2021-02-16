/* eslint-disable id-length */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts', '!node_modules/**', '!**/*.spec.ts'],
  coverageDirectory: 'dist/frontend/coverage',
  coverageReporters: ['json', 'html'],
  globals: {
    td: true,
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules', 'dist'],
};
