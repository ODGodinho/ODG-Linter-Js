module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "import",
        "jsdoc",
        "promise",
    ],
    extends: [
        "./rules/best-practices",
        "./rules/js-doc",
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {},
};
