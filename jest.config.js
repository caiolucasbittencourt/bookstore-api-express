export default {
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.[tj]s$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
          },
          target: 'es2022',
        },
        module: {
          type: 'es6',
        },
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testMatch: ['**/tests/**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts', '!src/server.ts'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./tests/setup.ts'],
  testTimeout: 30000,
  verbose: true,
};
