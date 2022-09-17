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
        "n",
        "array-func",
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
        "./rules/javascript/performance.js",
        "./rules/javascript/possible-errors.js",
    ],
    settings: {
        "html/report-bad-indent": "error",
        "html/indent": "+4",
        "import/resolver": {
            "node": {
                "extensions": [ ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts" ],
            },
        },
        "import/extensions": [
            ".js",
            ".mjs",
            ".jsx",
        ],
        "import/core-modules": [
        ],
        "import/ignore": [
            "node_modules",
            "\\.(coffee|scss|css|less|hbs|svg|json)$",
        ],
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
        {
            files: [ "**/tests/**" ],
            extends: [
                "./rules/typescript/tests.js",
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
