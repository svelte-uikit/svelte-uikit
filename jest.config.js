module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'jest-transform-svelte',
  },
  transformIgnorePatterns: ['node_modules'],
  testPathIgnorePatterns: ['node_modules'],
  rootDir: 'src',
  collectCoverageFrom: ['**/*.{js,svelte}', '!**/{node_modules,vendor}/**'],
  coverageDirectory: '../coverage',
  coverageReporters: ['html'],
  moduleFileExtensions: ['js', 'svelte'],
  bail: true,
  verbose: true,
  clearMocks: true,
};
