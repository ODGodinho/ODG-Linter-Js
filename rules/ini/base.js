module.exports = {
    rules: {
        "filenames/match-regex": [ "off" ],
        "max-len": [ "warn", {
            code: 120,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        } ], // Caracteres máximo por linhas
        "toml/indent": [ "error" ], // Indent
        "toml/keys-order": [ "error" ], // Indent
        "toml/no-non-decimal-integer": [ "error" ], // No decimal int
        "toml/no-space-dots": [ "error" ], // Não espace os pontos
        "toml/no-unreadable-number-separator": [ "error" ], // Não faça números ilegíveis
        "toml/padding-line-between-pairs": [ "error" ], // Não coloque espaço no mesmo bloco
        "toml/padding-line-between-tables": [ "error" ], // Coloque espaço em []
        "toml/precision-of-fractional-seconds": [ "error" ], // Não coloque grande precisão em segundos
        "toml/precision-of-integer": [ "error" ], // Evite int gigantes
        "toml/quoted-keys": [ "error" ], // Não Coloque aspas em key
        "toml/tables-order": [ "error" ], // Ordene dentro de uma tabela
        "toml/vue-custom-block/no-parsing-error": [ "error" ], // Valide toml em vue file
        "toml/array-bracket-newline": [ "error" ], // Faça array em quebra de linhas
        "toml/array-bracket-spacing": [ "error" ], // Espaço declarar array
        "toml/array-element-newline": [ "error", "consistent" ], // Array multipla linhas
        "toml/comma-style": [ "error" ], // Virgula a direita
        "capitalized-comments": [ "off" ], // Virgula a direita
        "toml/spaced-comment": [ "error" ], // Espaço a esquerda comentário
        "toml/inline-table-curly-spacing": [ "error", "always", {
            arraysInObjects: true,
            objectsInObjects: true,
        } ], // Espaço em declarar {}
        "toml/key-spacing": [ "error", {
            beforeEqual: false,
            afterEqual: false,
        } ], // Sem espaço antes de depois do igual
    },
};
