module.exports = {
    roots: ["<rootDir>/tests"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/tests.*)\\.test.(ts|js)x?$",
    testEnvironment: "node",
    notify: true,
    notifyMode: "always",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    reporters: ["default", "jest-junit"],
    collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/**/*.d.ts"]
};
