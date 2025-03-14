import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

export const customJestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-fixed-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(ky|ky-universal)/)'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
}

module.exports = createJestConfig(customJestConfig)
