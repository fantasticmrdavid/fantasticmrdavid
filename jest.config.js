module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  verbose: false,
  transform: {
    '.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  modulePaths: [
    '<rootDir>'
  ],
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^contexts(.*)$': '<rootDir>/src/contexts$1',
    '^data(.*)$': '<rootDir>/src/data$1',
    '^reducers(.*)$': '<rootDir>/src/reducers$1',
    '^routers(.*)$': '<rootDir>/src/routers$1',
    '^helpers(.*)$': '<rootDir>/src/helpers$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^views(.*)$': '<rootDir>/src/views$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
