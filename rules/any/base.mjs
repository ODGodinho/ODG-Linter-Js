export default {
    rules: {
        "filenames/match-regex": [ "off" ],
        "@stylistic/max-len": [
            "warn",
            {
                code: 120,
                ignoreUrls: true,
                ignoreStrings: false,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreComments: false,
                ignoreTrailingComments: false,
            },
        ], // Caracteres máximo por linhas
    },
};
