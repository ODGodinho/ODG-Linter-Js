module.exports = {
    rules: {
        "filenames/match-regex": [ "off" ],
        "max-len": [ "warn", {
            code: 120,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        } ], // Caracteres máximo por linhas
    },
};
