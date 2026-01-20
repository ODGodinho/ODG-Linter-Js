import { createRequire } from "node:module";

import * as toml from "eslint-plugin-toml";

import stylistic from "@stylistic/eslint-plugin";
import antfu from "eslint-plugin-antfu";
import arrayFunc from "eslint-plugin-array-func";
import fileProgress from "eslint-plugin-file-progress";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import * as tomlParser from "toml-eslint-parser";
import * as yamlParser from "yaml-eslint-parser";

import anyBase from "./rules/any/base.mjs";
import globalBase from "./rules/global/base.mjs";
import globalErrors from "./rules/global/errors.mjs";
import globalPossibleErrors from "./rules/global/possible-errors.mjs";
import globalSecurity from "./rules/global/security.mjs";
import iniBase from "./rules/ini/base.mjs";
import javascriptBestPractices from "./rules/javascript/best-practices.mjs";
import javascriptErrors from "./rules/javascript/errors.mjs";
import javascriptJsDocumentation from "./rules/javascript/js-documentation.mjs";
import javascriptPerformance from "./rules/javascript/performance.mjs";
import jsonBase from "./rules/json/base.mjs";
import typescriptBestPractices from "./rules/typescript/best-practices.mjs";
import typescriptErrors from "./rules/typescript/errors.mjs";
import typescriptPossibleErrors from "./rules/typescript/possible-errors.mjs";
import typescriptSecurity from "./rules/typescript/security.mjs";
import typescriptTests from "./rules/typescript/tests.mjs";
import yamlBase from "./rules/yaml/base.mjs";
import yamlGithub from "./rules/yaml/github.mjs";

const require = createRequire(import.meta.url);

// Import plugins (most are CommonJS)

const typescriptParser = require("@typescript-eslint/parser");

const odgPlugin = require("@odg/eslint-plugin");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const anyParser = require("any-eslint-parser");
const betterMaxParams = require("eslint-plugin-better-max-params");
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
const yml = require("eslint-plugin-yml");
const espree = require("espree");
const jsoncParser = require("jsonc-eslint-parser");

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
            "**/*.png",
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
            "progress": fileProgress,
            "import": importPlugin,
            "@odg": odgPlugin,
            "@stylistic": stylistic,
            "n": pluginN,
            regexp,
            regex,
            sonarjs,
            security,
            unicorn,
        },
        settings: {
            "html/report-bad-indent": "error",
            "html/indent": "+4",
            "import/docstyle": [ "jsdoc", "tomdoc" ],
            "import/resolver": {
                node: {
                    extensions: [ ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts" ],
                },
            },
            "import/external-module-folders": [ "@types" ],
            "import/extensions": [ ".js", ".mjs", ".jsx" ],
            "import/core-modules": [],
            "import/ignore": [ "node_modules", String.raw`\.(coffee|scss|css|less|hbs|svg|json)$` ],
            "progress": {
                hide: false, // Use this to hide the progress message, can be useful in CI
                hideFileName: false, // Use this to hide the file name, would simply show "Linting..."
                successMessage: "Lint done...",
            },
            "node": {
                "version": ">=24.0.0",
            },
        },
        rules: {
            ...globalBase.rules,
            ...globalErrors.rules,
            ...globalPossibleErrors.rules,
            ...globalSecurity.rules,
            "progress/activate": 1,
        },
    },

    // JavaScript/TypeScript files
    {
        files: [ "**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs", "**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts" ],
        languageOptions: {
            parser: espree,
            parserOptions: {
                sourceType: "module",
                ecmaVersion: 2022,
            },
        },
        plugins: {
            "import": importPlugin,
            "n": pluginN,
            "array-func": arrayFunc,
            "no-constructor-bind": noConstructorBind,
            "sort-class-members": sortClassMembers,
            "better-max-params": betterMaxParams,
            jsdoc,
            promise,
            regexp,
            filenames,
            security,
            unicorn,
            html,
            regex,
            sonarjs,
            antfu,
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
        files: [ "**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts" ],
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
            "sort-class-members": sortClassMembers,
            jsdoc,
            promise,
            regexp,
            filenames,
        },
        settings: {
            "import/extensions": [ ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts" ],
            "import/external-module-folders": [ "node_modules", "node_modules/@types" ],
            "import/parsers": {
                "@typescript-eslint/parser": [ ".ts", ".tsx" ],
            },
            "import/resolver": {
                typescript: {
                    project: [ "tsconfig.json" ],
                },
                node: {
                    extensions: [ ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts" ],
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
        files: [ "**/*.tsx" ],
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
        files: [
            "**/*.config.ts",
            "**/*.config.mts",
            "**/*.config.js",
            "**/*.config.mjs",
            "**/index.mjs",
            "**/index.mts",
        ],
        rules: {
            "import/no-anonymous-default-export": [ "off" ],
            "filenames/match-exported": [ "off" ],
            "import/no-extraneous-dependencies": [ "off" ],
        },
    },

    // JSON files
    {
        files: [ "**/*.json", "**/*.json5", "**/*.jsonc", ".eslintrc", "**/*.code-*" ],
        languageOptions: {
            parser: jsoncParser,
        },
        plugins: {
            jsonc,
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
            jsonc,
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
            "**/*.test.*",
            "**/*.spec.*",
            "**/*.e2e.*",
            "**/*.e2e-spec.*",
        ],
        languageOptions: {
            globals: {
                ...globals.vitest,
            },
        },
        rules: {
            ...typescriptTests.rules,
        },
    },

    // INI/TOML files
    {
        files: [ ".env.example", ".env.*", "*.env", ".env.sample", "**/*.properties", "**/*.ini", "**/*.toml" ],
        languageOptions: {
            parser: tomlParser,
        },
        plugins: {
            toml,
        },
        rules: {
            ...iniBase.rules,
        },
    },

    // YAML files
    {
        files: [ "**/*.yml", "**/*.yaml" ],
        languageOptions: {
            parser: yamlParser,
            parserOptions: {
                defaultYAMLVersion: "1.2",
            },
        },
        plugins: {
            yml,
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
            yml,
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
            "**/*ignore",
            "**/*.md",
            "**/*.bash",
            "**/*.sh",
            "**/*.ps1",
            "**/*.powershell",
            "**/*.java",
            "**/*.tf",
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
