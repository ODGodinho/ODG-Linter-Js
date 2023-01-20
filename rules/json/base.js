module.exports = {
    extends: [
        "plugin:jsonc/all",
    ],
    parser: require.resolve("jsonc-eslint-parser"),
    rules: {
        "jsonc/array-bracket-spacing": [ "error", "always" ],
        "jsonc/key-name-casing": [ "off" ],
        "strict": [ "off" ],
        "no-unused-vars": [ "off" ],
        "no-unused-expressions": [ "off" ],
        "import/unambiguous": [ "off" ],
        "filenames/match-regex": [ "off" ],
        "jsonc/object-curly-spacing": [ "error", "always" ], // Espaço declarar objeto
        "jsonc/object-curly-newline": [
            "error",
            { "consistent": true },
        ], // Força quebrar linha em todos #4 os itens objeto
        "max-len": [ "warn", {
            code: 120,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        } ], // Caracteres máximo por linhas
        "jsonc/no-irregular-whitespace": [ "error" ], // Não faça espaço irregular
    },
};
