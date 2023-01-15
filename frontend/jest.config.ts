export default {
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  // setupFilesAfterEnv: ["<rootDir>/jest.config.ts"],
};
