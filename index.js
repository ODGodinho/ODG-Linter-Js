import { createRequire } from "node:module";

import globals from "globals";

const require = createRequire(import.meta.url);

// Import plugins (most are CommonJS)
const typescriptParser = require("@typescript-eslint/parser");

const odgPlugin = require("@odg/eslint-plugin");
const stylisticJs = require("@stylistic/eslint-plugin-js");
const stylisticPlus = require("@stylistic/eslint-plugin-plus");
const stylisticTs = require("@stylistic/eslint-plugin-ts");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const anyParser = require("any-eslint-parser");
const antfu = require("eslint-plugin-antfu");
const arrayFunc = require("eslint-plugin-array-func");
const betterMaxParams = require("eslint-plugin-better-max-params");
const fileProgress = require("eslint-plugin-file-progress");
const filenames = require("eslint-plugin-filenames");
const html = require("eslint-plugin-html");
const importPlugin = require("eslint-plugin-import");
const jsdoc = require("eslint-plugin-jsdoc");
const jsonSchemaValidator = require("eslint-plugin-json-schema-validator");
const jsonc = require("eslint-plugin-jsonc");
const pluginN = require("eslint-plugin-n");
const noConstructorBind = require("eslint-plugin-no-constructor-bind");
const phpMarkup = require("eslint-plugin-php-markup");
const promise = require("eslint-plugin-promise");
const regex = require("eslint-plugin-regex");
const regexp = require("eslint-plugin-regexp");
const security = require("eslint-plugin-security");
const sonarjs = require("eslint-plugin-sonarjs");
const sortClassMembers = require("eslint-plugin-sort-class-members");
const toml = require("eslint-plugin-toml");
const unicorn = require("eslint-plugin-unicorn");
const yml = require("eslint-plugin-yml");
const espree = require("espree");
const jsoncParser = require("jsonc-eslint-parser");
const tomlParser = require("toml-eslint-parser");
const yamlParser = require("yaml-eslint-parser");

// Import rule configurations (CommonJS)
const anyBase = require("./rules/any/base.js");
const globalBase = require("./rules/global/base.js");
const globalErrors = require("./rules/global/errors.js");
const globalPossibleErrors = require("./rules/global/possible-errors.js");
const globalSecurity = require("./rules/global/security.js");
const iniBase = require("./rules/ini/base.js");
const javascriptBestPractices = require("./rules/javascript/best-practices.js");
const javascriptErrors = require("./rules/javascript/errors.js");
const javascriptJsDocumentation = require("./rules/javascript/js-documentation.js");
const javascriptPerformance = require("./rules/javascript/performance.js");
const jsonBase = require("./rules/json/base.js");
const typescriptBestPractices = require("./rules/typescript/best-practices.js");
const typescriptErrors = require("./rules/typescript/errors.js");
const typescriptPossibleErrors = require("./rules/typescript/possible-errors.js");
const typescriptSecurity = require("./rules/typescript/security.js");
const typescriptTests = require("./rules/typescript/tests.js");
const yamlBase = require("./rules/yaml/base.js");
const yamlGithub = require("./rules/yaml/github.js");

// eslint-disable-next-line import/no-anonymous-default-export
export default [

    // Base configuration
    {
        ignores: [
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
    },

    // Global configuration
    {
        languageOptions: {
            parser: anyParser,
            globals: {
                ...globals.node,
                ...globals.browser,
            },
            parserOptions: {
                sourceType: "module",
                ecmaVersion: 2022,
            },
        },
        plugins: {
            "file-progress": fileProgress,
            "regexp": regexp,
            "regex": regex,
            "import": importPlugin,
            "sonarjs": sonarjs,
            "security": security,
            "unicorn": unicorn,
            "@odg": odgPlugin,
            "@stylistic/plus": stylisticPlus,
            "@stylistic/js": stylisticJs,
        },
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
        rules: {
            ...globalBase.rules,
            ...globalErrors.rules,
            ...globalPossibleErrors.rules,
            ...globalSecurity.rules,
            "file-progress/activate": 1,
        },
    },

    // JavaScript/TypeScript files
    {
        files: [ "*.js", "*.jsx", "*.mjs", "*.cjs", "*.ts", "*.tsx", "*.mts", "*.cts" ],
        languageOptions: {
            parser: espree,
            parserOptions: {
                sourceType: "module",
                ecmaVersion: 2022,
            },
        },
        plugins: {
            "import": importPlugin,
            "jsdoc": jsdoc,
            "promise": promise,
            "regexp": regexp,
            "filenames": filenames,
            "security": security,
            "unicorn": unicorn,
            "html": html,
            "n": pluginN,
            "array-func": arrayFunc,
            "no-constructor-bind": noConstructorBind,
            "regex": regex,
            "sonarjs": sonarjs,
            "sort-class-members": sortClassMembers,
            "antfu": antfu,
            "better-max-params": betterMaxParams,
        },
        rules: {
            ...javascriptBestPractices.rules,
            ...javascriptErrors.rules,
            ...javascriptJsDocumentation.rules,
            ...javascriptPerformance.rules,
        },
    },

    // TypeScript files
    {
        files: [ "*.ts", "*.tsx", "*.mts", "*.cts" ],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                warnOnUnsupportedTypeScriptVersion: false,
                ecmaVersion: 2022,
                sourceType: "module",
                project: [ "tsconfig.json", "@odg/tsconfig/tsconfig.json" ],
            },
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
        plugins: {
            "@typescript-eslint": typescriptEslint,
            "import": importPlugin,
            "jsdoc": jsdoc,
            "promise": promise,
            "regexp": regexp,
            "filenames": filenames,
            "sort-class-members": sortClassMembers,
            "@stylistic/ts": stylisticTs,
        },
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
        rules: {
            ...typescriptBestPractices.rules,
            ...typescriptErrors.rules,
            ...typescriptSecurity.rules,
            ...typescriptPossibleErrors.rules,
        },
    },

    // TSX files
    {
        files: [ "*.tsx" ],
        rules: {
            "import/no-anonymous-default-export": [ "off" ],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: [ "function" ],
                    format: [ "PascalCase", "camelCase" ],
                    leadingUnderscore: "allowSingleOrDouble",
                    trailingUnderscore: "allow",
                    filter: {
                        regex: "[- ]",
                        match: false,
                    },
                },
                {
                    selector: [
                        "variable",
                        "function",
                        "parameterProperty",
                        "classMethod",
                        "objectLiteralMethod",
                        "typeMethod",
                        "accessor",
                    ],
                    format: [ "strictCamelCase", "camelCase" ],
                    leadingUnderscore: "allowSingleOrDouble",
                    trailingUnderscore: "allow",
                    filter: {
                        regex: "[- ]",
                        match: false,
                    },
                },
                {
                    selector: "classProperty",
                    format: [ "strictCamelCase", "camelCase", "UPPER_CASE" ],
                },
                {
                    selector: "typeLike",
                    format: [ "PascalCase", "camelCase" ],
                },
                {
                    selector: "variable",
                    types: [ "boolean" ],
                    format: [ "StrictPascalCase" ],
                    prefix: [ "is", "has", "can", "should", "will", "did", "does", "are", "do" ],
                },
                {
                    selector: "interface",
                    format: [ "PascalCase" ],
                },
                {
                    selector: "typeParameter",
                    filter: /^T$|^[A-Z][A-Za-z]+$/.source,
                    format: [ "StrictPascalCase" ],
                },
                {
                    selector: [ "classProperty", "objectLiteralProperty" ],
                    format: null,
                    modifiers: [ "requiresQuotes" ],
                },
            ],
        },
    },

    // Config files
    {
        files: [ "./.*", "./*.*", ".github/**", ".vscode/**" ],
        plugins: {
            "json-schema-validator": jsonSchemaValidator,
        },
        rules: jsonSchemaValidator.configs?.recommended?.rules || {},
    },
    {
        files: [ "*.config.ts", "*.config.mts" ],
        rules: {
            "import/no-anonymous-default-export": [ "off" ],
            "filenames/match-exported": [ "off" ],
            "import/no-extraneous-dependencies": [ "off" ],
        },
    },

    // JSON files
    {
        files: [ "*.json", "*.json5", "*.jsonc", ".eslintrc", "*.code-*" ],
        languageOptions: {
            parser: jsoncParser,
        },
        plugins: {
            "jsonc": jsonc,
        },
        rules: {
            ...jsonc.configs?.all?.rules,
            ...jsonBase.rules,
        },
    },
    {
        files: [ "package.json" ],
        languageOptions: {
            parser: jsoncParser,
        },
        plugins: {
            "jsonc": jsonc,
        },
        rules: {
            ...jsonc.configs.all.rules,
            ...jsonBase.rules,
            "jsonc/sort-keys": [ "off" ],
        },
    },

    // PHP files
    {
        files: [ "**.php" ],
        plugins: {
            "php-markup": phpMarkup,
        },
        languageOptions: {
            globals: {
                lintPHPCode: true,
            },
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

    // Test files
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
        rules: {
            ...typescriptTests.rules,
        },
    },

    // INI/TOML files
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
        languageOptions: {
            parser: tomlParser,
        },
        plugins: {
            "toml": toml,
        },
        rules: {
            ...iniBase.rules,
        },
    },

    // YAML files
    {
        files: [ "*.yml", "*.yaml" ],
        languageOptions: {
            parser: yamlParser,
            parserOptions: {
                defaultYAMLVersion: "1.2",
            },
        },
        plugins: {
            "yml": yml,
        },
        rules: {
            ...yamlBase.rules,
        },
    },
    {
        files: [ ".github/**/*.yml", ".github/**/*.yaml" ],
        languageOptions: {
            parser: yamlParser,
            parserOptions: {
                defaultYAMLVersion: "1.2",
            },
        },
        plugins: {
            "yml": yml,
        },
        rules: {
            ...yamlGithub.rules,
        },
    },

    // Any files
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
        languageOptions: {
            parser: anyParser,
        },
        rules: {
            ...anyBase.rules,
        },
    },
];
