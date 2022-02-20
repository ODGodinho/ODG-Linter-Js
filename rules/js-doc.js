/* eslint-disable max-len */
module.exports = {
    rules: {
        "jsdoc/check-access": [ "error" ],
        "jsdoc/check-alignment": [ "error" ],
        "jsdoc/check-indentation": [ "error" ],
        "jsdoc/check-line-alignment": [ "error" ], // Não permite alinhar docblock
        "jsdoc/check-property-names": [ "error" ], // Valida nome de propriedade
        "jsdoc/check-param-names": [ "error" ], // Verifica se o nome do parâmetro e ordem
        "jsdoc/check-syntax": [ "error" ], // Valida Sintaxe do docblock
        "jsdoc/check-tag-names": [ "error", {
            "definedTags": [
                "task" // create @task [name](LINK)
            ]
        }],
        "jsdoc/check-types": [ "error" ],
        "jsdoc/check-values": [ "error" ], // Devemos Padronizar o modelo
        "jsdoc/valid-types": [ "error" ], // Valida Padrão DocBlock
        "jsdoc/empty-tags": [ "error" ], // Não devem existir tags vazias
        "jsdoc/implements-on-classes": [ "error" ],
        "jsdoc/multiline-blocks": [ "error" ], // valida mútilos blocos
        "jsdoc/newline-after-description": [ "error" ], // Requer linha em branco apos a descrição
        "jsdoc/no-bad-blocks": [ "error" ], // DockBlock deve ter apenas 2 asteriscos
        "jsdoc/no-multi-asterisks": [ "error", { "preventAtMiddleLines": true, "preventAtEnd": true } ], // sem asteriscos duplicado na docblock
        "jsdoc/no-defaults": [ "error" ], // não permite [user_id=1] para informar valor padrão
        "jsdoc/no-undefined-types": [ "error" ], // Valida Tipos não existentes
        "jsdoc/require-asterisk-prefix": [ "error" ], // requer * dockblock multiline

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
        "jsdoc/tag-lines": [ "error" ], // sem espaços no @param @return comment tag
    },
};
