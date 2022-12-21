module.exports = {
    rules: {
        "yml/block-mapping-colon-indicator-newline": [ "error" ], // Não quebre linha apos os :
        "yml/block-mapping-question-indicator-newline": [ "error" ], // Nã o quebre linha apos ?
        "yml/block-mapping": [ "error", "always" ], // Use - em lista ao invés {}
        "yml/block-sequence-hyphen-indicator-newline": [ "error" ], // Não quebre linha a pos traço -
        "yml/block-sequence": [ "error" ], // Use traço para array ao invés [] quando múltipla linhas
        "yml/indent": [ "error" ], // Indent com 2 espaços
        "yml/no-empty-document": [ "error" ], // Não crie yaml vazio
        "yml/plain-scalar": [ "error" ], // Não use aspas na key
        "yml/require-string-key": [ "error" ], // Key yaml deve ser string
        "yml/sort-keys": [ "error" ], // Key yaml em ordem alfabética
        "yml/vue-custom-block/no-parsing-error": [ "error" ], // Valida parser erro vue
        "yml/flow-mapping-curly-newline": [ "error" ], // Chaves quebram linha em multi-line
        "yml/flow-mapping-curly-spacing": [ "error", "always" ], // Espaço declarar objeto
        "yml/flow-sequence-bracket-spacing": [ "error", "always" ], // Espaço declarar array
        "yml/flow-sequence-bracket-newline": [ "error" ], // Quebre a linha multi-line array
        "yml/key-spacing": [ "error" ], // Disable key spacing
        "yml/no-irregular-whitespace": [ "error" ], // Sem Espaços em brancos irregular caracteres especiais
        "spaced-comment": [ "off" ], // Desliga regra JS
        "yml/spaced-comment": [ "error" ], // Comentarios com espaço
        "filenames/match-regex": [ "off" ], // Desliga validação de nomes
        "max-len": [ "warn", {
            code: 120,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        } ], // Caracteres máximo por linhas
    },
};
