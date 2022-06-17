module.exports = {
    rules: {
        "spaced-comment": [ "error", "always", {
            exceptions: [ "-", "+" ],
        } ], // Força espaço apos do // comentário
        "capitalized-comments": [ "error" ], // Comentários devem ser iniciados em letras maiúsculas
        "jsdoc/check-access": [ "error" ],
        "jsdoc/check-alignment": [ "error" ], // Não desalinhe o * da docblock
        "jsdoc/check-indentation": [ "error" ], // Força formatação na docblock
        "jsdoc/check-line-alignment": [ "error" ], // Não permite alinhar docblock com espaços
        "jsdoc/check-property-names": [ "error" ], // Valida nome de propriedade
        "jsdoc/check-param-names": [ "error" ], // Verifica se o nome do parâmetro e ordem
        "jsdoc/check-syntax": [ "error" ], // Valida Sintaxe do docblock
        "jsdoc/check-tag-names": [ "error", {
            definedTags: [
                "task", // Create @task [name](LINK)
            ],
        } ],
        "jsdoc/check-types": [ "error" ], // Valida se é um Tipo valido
        "jsdoc/check-values": [ "error" ], // Devemos Padronizar o modelo
        "jsdoc/valid-types": [ "error" ], // Valida Padrão DocBlock
        "jsdoc/empty-tags": [ "error" ], // Não devem existir tags vazias
        "jsdoc/implements-on-classes": [ "error" ],
        "jsdoc/multiline-blocks": [ "error" ], // Valida mútilos blocos
        "jsdoc/newline-after-description": [ "error" ], // Requer linha em branco apos a descrição
        "jsdoc/no-bad-blocks": [ "error" ], // DockBlock deve ter apenas 2 asteriscos
        "jsdoc/no-multi-asterisks": [
            "error",
            { preventAtMiddleLines: true, preventAtEnd: true },
        ], // Sem asteriscos duplicado na docblock
        "jsdoc/no-defaults": [ "error" ], // Não permite [user_id=1] para informar valor padrão
        "jsdoc/no-undefined-types": [ "error" ], // Valida Tipos não existentes
        "jsdoc/require-asterisk-prefix": [ "error" ], // Requer * docblock multiline

        "jsdoc/require-param": [ "error" ],
        "jsdoc/require-param-description": [ "error" ],
        "jsdoc/require-param-name": [ "error" ],
        "jsdoc/require-param-type": [ "error" ],
        "jsdoc/require-property": [ "error" ],
        "jsdoc/require-property-description": [ "error" ],
        "jsdoc/require-property-name": [ "error" ],
        "jsdoc/require-property-type": [ "error" ],
        "jsdoc/require-returns": [ "error" ],
        "jsdoc/require-returns-check": [ "error" ],
        "jsdoc/require-returns-type": [ "error" ],
        "jsdoc/require-throws": [ "error" ],
        "jsdoc/require-yields": [ "error" ],
        "jsdoc/require-yields-check": [ "error" ],
    },
};
