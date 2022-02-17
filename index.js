module.exports = {
    plugins: [
        "@typescript-eslint",
        "import"
    ],
    extends: [
        "./rules/best-practices",
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {},
};
