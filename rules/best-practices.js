/* eslint-disable max-len */
module.exports = {
    rules: {
        "semi": [ "error", "always" ], // força usar ponto-virgula ;
        "quotes": [ "error", "double" ], // aspas duplas
        "indent": [ "error", 4 ], // 4 spaces
        "@typescript-eslint/indent": [ "error", 4 ], // força indent com 4 espaços
        "@typescript-eslint/quotes": [ "error", "double" ], // força aspas dupla
        "linebreak-style": [ "error", "unix" ], // força usar \n apenas em vez de \r\n
        "eol-last": [ "error", "always" ], // força finalizar com \n no final
        "max-len": [ "error", {
            "code": 120
        } ], // Caracteres máximo por linhas
        "camelcase": [ "error" ], // força camelCase
        "padded-blocks": [ "error", {
            "classes": "always",
            "blocks": "never",
            "switches": "never"
        } ], // força não usar blocos com espaços
        "@typescript-eslint/lines-between-class-members": [ "error", "always" ], // força linha em branco entre props classe e funções
        "no-multi-assign": [ "error" ], // força não usar atribuição múltipla
        "@typescript-eslint/explicit-member-accessibility": [ "error" ], // force visibility of props
        "default-param-last": [ "error" ], // parâmetros default devem ficar no final,
        "space-before-function-paren": [ "off" ], // não permite espaço antes dos parenteses
        "@typescript-eslint/space-before-function-paren": [ "error", "never" ], // não permite espaço antes dos parenteses
        "array-bracket-spacing": [ "error", "always" ], // força usar espaço entre chaves
        "keyword-spacing": [ "error", {
            "before": true,
            "after": true
        } ], // requer espaço apos try {}
        "space-before-blocks": "error", // requer espaço antes das chaves
        "space-unary-ops": [
            2, {
                "words": false,
                "nonwords": false, // força nao ter espaço antes de operadores unários
                "overrides": {
                    "new": false,
                    "++": false // nao permite espaço no ++
                }
            }
        ],
        "unicode-bom": [ "error", "never" ], // disabled "unicode-bom"
        "space-in-parens": [ "error", "never" ], // não permite espaço entre parenteses
        "spaced-comment": [ "error", "always", {
            "exceptions": [ "-", "+" ]
        } ], // força espaço apos do // comentário
        "no-multi-spaces": [ "error" ] // nao permite vários espaços if(  i  )
    }
};
