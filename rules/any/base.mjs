export default {
    rules: {
        "filenames/match-regex": [ "off" ],
        "@stylistic/max-len": [
            "warn",
            {
                code: 120,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ], // Caracteres máximo por linhas
    },
};
