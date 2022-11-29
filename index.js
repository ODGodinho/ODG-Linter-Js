module.exports = {
    plugins: [
        "import",
        "jsdoc",
        "promise",
        "regexp",
        "filenames",
        "security",
        "unicorn",
        "html",
        "n",
        "array-func",
        "no-constructor-bind",
        "anti-trojan-source",
        "sonar",
        "jsonc",
        "regex",
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
        "./rules/json/base.js",
    ],
    ignorePatterns: [
        "!.*",

        ".git/",
        "node_modules/",
        "bower_components/",
        "jspm_packages/",
        ".npm/",
        "vendor/",

        "lib-cov/",
        "coverage/",
        ".nyc_output/",
        ".cache/",

        "build/",
        "dist/",
        "tmp/",

        "**/*.min.*",
        "package-lock.json",
        "yarn.lock",
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
                "./rules/typescript/security.js",
                "./rules/typescript/possible-errors.js",
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                warnOnUnsupportedTypeScriptVersion: false,
                ecmaVersion: 2022,
                sourceType: "module",
                project: [ "tsconfig.json", "@odg/tsconfig/tsconfig.json" ], // Specify it only for TypeScript files
            },
        },
        {
            files: [ "**.php" ],
            plugins: [
                "php-markup",
            ],
            globals: {
                "lintPHPCode": true,
            },
            settings: {
                "php/php-extensions": [ ".php" ],
                "php/markup-replacement": {
                    "php": "0",
                    "=": "0",
                },
                "php/keep-eol": true,
                "php/remove-whitespace": false,
                "php/remove-empty-line": false,
                "php/remove-php-lint": true,
            },
        },
        {
            files: [
                "**/test/**",
                "**/tests/**",
                "**/spec/**",
                "**/__tests__/**",
                "*.test.*",
                "*.spec.*",
                "*.e2e.*",
                "*.e2e-spec.*",
            ],
            extends: [
                "./rules/typescript/tests.js",
            ],
        },
        {
            files: [
                ".env.*",
                "*.env",
                "*.properties",
                "*.ini",
                "*.toml",
            ],
            extends: [
                "./rules/ini/base.js",
            ],
            parser: "toml-eslint-parser",
        },
        {
            files: [
                "*.yml",
                "*.yaml",
            ],
            extends: [
                "./rules/yaml/base.js",
            ],
            parser: "yaml-eslint-parser",
            parserOptions: {
                defaultYAMLVersion: "1.2",
            },
        },
    ],
    rules: {},
};
