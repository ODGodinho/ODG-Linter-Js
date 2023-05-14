module.exports = {
    env: {
        node: true,
        browser: true,
    },
    parser: "any-eslint-parser",
    plugins: [
        "file-progress",
        "regexp",
        "import",
        "sonar",
        "sonarjs",
        "security",
    ],
    extends: [
        "./rules/global/base.js",
        "./rules/global/errors.js",
        "./rules/global/possible-errors.js",
        "./rules/global/security.js",
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
        "import/docstyle": [ "jsdoc", "tomdoc" ],
        "import/resolver": {
            "node": {
                "extensions": [ ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts" ],
            },
        },
        "import/external-module-folders": [ "@types" ],
        "import/extensions": [
            ".js",
            ".mjs",
            ".jsx",
        ],
        "import/core-modules": [],
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
            files: [ "*.js", "*.jsx", "*.mjs", "*.cjs", "*.ts", "*.tsx", "*.mts", "*.cts" ],
            parser: "espree",
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
                "sonar",
                "regex",
                "sonarjs",
                "sort-class-members",
                "antfu",
            ],
            extends: [
                "./rules/javascript/best-practices.js",
                "./rules/javascript/errors.js",
                "./rules/javascript/js-documentation.js",
                "./rules/javascript/performance.js",
            ],
        },
        {
            files: [ "*.ts", "*.tsx", "*.mts", "*.cts" ],
            plugins: [
                "@typescript-eslint",
                "import",
                "jsdoc",
                "promise",
                "regexp",
                "filenames",
                "sort-class-members",
            ],
            extends: [
                "./rules/typescript/best-practices.js",
                "./rules/typescript/errors.js",
                "./rules/typescript/security.js",
                "./rules/typescript/possible-errors.js",
            ],
            parser: "@typescript-eslint/parser",
            settings: {
                "import/extensions": [ ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts" ],
                "import/external-module-folders": [ "node_modules", "node_modules/@types" ],
                "import/parsers": {
                    "@typescript-eslint/parser": [ ".ts", ".tsx" ],
                },
                "import/resolver": {
                    "typescript": {
                        "project": [ "tsconfig.json" ],
                    },
                    "node": {
                        "extensions": [ ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts" ],
                    },
                },
            },
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
            files: [ "*.json", "*.json5", "*.jsonc", ".eslintrc", "*.code-*" ],
            plugins: [ "jsonc" ],
            extends: [ "./rules/json/base.js" ],
        },
        {
            files: [ "package.json" ],
            extends: [ "./rules/json/base.js" ],
            rules: {
                "jsonc/sort-keys": [ "off" ],
            },
        },
        {
            files: [ "**.php" ],
            plugins: [ "php-markup" ],
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
                "php/remove-php-lint": false,
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
            extends: [ "./rules/typescript/tests.js" ],
        },
        {
            files: [
                ".env.example",
                ".env.*",
                "*.env",
                ".env.sample",
                "*.properties",
                "*.ini",
                "*.toml",
            ],
            plugins: [
                "toml",
            ],
            extends: [ "./rules/ini/base.js" ],
            parser: "toml-eslint-parser",
        },
        {
            files: [
                "*.yml",
                "*.yaml",
            ],
            plugins: [ "yml" ],
            extends: [ "./rules/yaml/base.js" ],
            parser: "yaml-eslint-parser",
            parserOptions: {
                defaultYAMLVersion: "1.2",
            },
        },
        {
            files: [
                ".github/**/*.yml",
                ".github/**/*.yaml",
            ],
            extends: [ "./rules/yaml/github.js" ],
        },
        {
            files: [
                ".gitignore",
                ".npmignore",
                "*ignore",
                "*.md",
                "*.bash",
                "*.sh",
                "*.ps1",
                "*.powershell",
                "*.java",
                "*.tf",
                "Jenkinsfile",
                "Dockerfile",
            ],
            parser: "any-eslint-parser",
            extends: [ "./rules/any/base.js" ],
        },
        {
            files: [ "./.*", "./*.*", ".github/**", ".vscode/**" ],
            extends: "plugin:json-schema-validator/recommended",
        },
    ],
    rules: {
        "file-progress/activate": 1,
    },
};
