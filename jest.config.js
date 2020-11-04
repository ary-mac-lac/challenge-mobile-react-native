module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/App'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/Tests/SetupMocks.tsx', '@testing-library/jest-native/extend-expect'],
}
