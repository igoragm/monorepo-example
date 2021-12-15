const base = require("../../jest.config.base");

module.exports = {
    ...base,
    displayName: "@monorepo/utils",
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
    testEnvironment: "jsdom",
    setupFiles: [
        "<rootDir>/config/jest/globals.js",
        "react-app-polyfill/jsdom",
        "core-js/stable",
        "regenerator-runtime/runtime",
        "react-app-polyfill/jsdom"
    ]
};
