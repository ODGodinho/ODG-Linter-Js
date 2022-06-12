module.exports = {
    plugins: [
        "@typescript-eslint",
        "import",
        "jsdoc",
        "promise",
        "regexp",
    ],
    env: {
        node: true,
        browser: true,
    },
    extends: [
        "./rules/javascript/best-practices.js",
        "./rules/javascript/js-doc.js",
        "./rules/javascript/errors.js",
    ],
    overrides: [
        {
            files: [ "*.ts", "*.tsx", "*.mts", "*.cts" ],
            plugins: [
                "@typescript-eslint",
                "import",
                "jsdoc",
                "promise",
            ],
            extends: [
                "./rules/typescript/best-practices.js",
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: 2018,
                sourceType: "module",
                project: [ "tsconfig.json" ], // Specify it only for TypeScript files
            },
        },
    ],
    rules: {},
};
