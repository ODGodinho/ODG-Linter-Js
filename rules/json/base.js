module.exports = {
    extends: [
        "plugin:jsonc/all",
    ],
    overrides: [
        {
            files: [ "*.json", "*.json5", "*.jsonc", ".eslintrc" ],
            parser: require.resolve("jsonc-eslint-parser"),
            rules: {
                "jsonc/array-bracket-spacing": [ "error", "always" ],
                "jsonc/key-name-casing": [ "off" ],
                "strict": [ "off" ],
                "no-unused-expressions": [ "off" ],
                "import/unambiguous": [ "off" ],
                "filenames/match-regex": [ "off" ],
            },
        },
        {
            files: [ "package.json" ],
            rules: {
                "jsonc/sort-keys": [ "off" ],
            },
        },
    ],
};
