module.exports = {
    extends: ["react-app", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            legacyDecorators: false,
            jsx: true
        }
    },
    plugins: ["prettier", "@typescript-eslint"],
    rules: {
        "@typescript-eslint/camelcase": "off",
        "import/no-anonymous-default-export": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
        "jsx-a11y/heading-has-content": "off",
        "jsx-a11y/anchor-has-content": "off",
        "prettier/prettier": "error",
        "no-case-declarations": "off",
        "no-console": "off",
        "no-unused-vars": "off",
        "padded-blocks": "off"
    }
};
