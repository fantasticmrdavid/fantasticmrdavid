module.exports = {
  preset: 'ts-jest',
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
    '^containers(.*)$': '<rootDir>/src/containers$1',
    '^actions(.*)$': '<rootDir>/src/actions$1',
    '^reducers(.*)$': '<rootDir>/src/reducers$1',
    '^helpers(.*)$': '<rootDir>/src/helpers$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
  },
  setupFiles: ['<rootDir>/src/setupTests.js'],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
