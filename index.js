module.exports = {
    plugins: [
        "@typescript-eslint",
        "import",
        "jsdoc",
        "promise",
        "regexp",
        "filenames",
        "security",
        "unicorn",
        "html",
        "php-markup",
    ],
    env: {
        node: true,
        browser: true,
    },
    extends: [
        "./rules/javascript/best-practices.js",
        "./rules/javascript/js-documentation.js",
        "./rules/javascript/errors.js",
        "./rules/javascript/security.js",
    ],
    settings: {
        "html/report-bad-indent": "error",
        "html/indent": "+4",
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2022,
    },
    overrides: [
        {
            files: [ "*.ts", "*.tsx", "*.mts", "*.cts" ],
            plugins: [
                "@typescript-eslint",
                "import",
                "jsdoc",
                "promise",
                "regexp",
                "filenames",
            ],
            extends: [
                "./rules/typescript/best-practices.js",
                "./rules/typescript/errors.js",
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2022,
                sourceType: "module",
                project: [ "tsconfig.json" ], // Specify it only for TypeScript files
            },
        },
    ],
    rules: {},
};
