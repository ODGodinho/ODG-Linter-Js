/* eslint-disable max-len */
module.exports = {
    rules: {
        "semi": [ "error", "always" ], // Força usar ponto-virgula ;
        "quotes": [ "error", "double" ], // Aspas duplas
        "indent": [ "error", 4 ], // 4 spaces
        "@typescript-eslint/indent": [ "error", 4 ], // Força indent com 4 espaços
        "@typescript-eslint/quotes": [ "error", "double" ], // Força aspas dupla
        "linebreak-style": [ "error", "unix" ], // Força usar \n apenas em vez de \r\n
        "eol-last": [ "error", "always" ], // Força finalizar com \n no final
        "max-len": [ "error", {
            "code": 120,
        } ], // Caracteres máximo por linhas
        "camelcase": [ "error" ], // Força camelCase
        "padded-blocks": [ "error", {
            "classes": "always",
            "blocks": "never",
            "switches": "never",
        } ], // Força não usar blocos com espaços
        "@typescript-eslint/lines-between-class-members": [ "error", "always" ], // Força linha em branco entre props classe e funções
        "no-multi-assign": [ "error" ], // Força não usar atribuição múltipla
        "@typescript-eslint/explicit-member-accessibility": [ "error" ], // Força visibility para props
        "default-param-last": [ "error" ], // Parâmetros default devem ficar no final,
        "space-before-function-paren": [ "off" ], // Não permite espaço antes dos parenteses
        "@typescript-eslint/space-before-function-paren": [ "error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        } ], // Não permite espaço antes dos parenteses
        "array-bracket-spacing": [ "error", "always" ], // Força usar espaço entre chaves
        "keyword-spacing": [ "error", {
            "before": true,
            "after": true,
        } ], // Requer espaço apos try {}
        "space-before-blocks": "error", // Requer espaço antes das chaves
        "space-unary-ops": [
            2, {
                "words": true, // Espaço apos Await e palavras chaves
                "nonwords": false, // Força nao ter espaço antes de operadores unários !, -, +
                "overrides": {
                    "new": false,
                    "++": false, // Nao permite espaço no ++
                },
            },
        ],
        "unicode-bom": [ "error", "never" ], // Disabled "unicode-bom"
        "space-in-parens": [ "error", "never" ], // Não permite espaço entre parenteses
        "spaced-comment": [ "error", "always", {
            "exceptions": [ "-", "+" ],
        } ], // Força espaço apos do // comentário
        "no-multi-spaces": [ "error" ], // Nao permite vários espaços if(  i  )
        "computed-property-spacing": [ "error", "never" ], // Desabilita espaço ao recuperar array $a[ 'ITEM' ]; ou $a[ ] = 12;
        "no-useless-concat": [ "error" ], // Desabilita concatenação de strings desnecessárias ex: "a" + "b"
        "no-self-assign": [ "error" ], // Nao se atribua seu próprio valor a variável
        "capitalized-comments": [ "error" ], // Comentários devem ser iniciados em letras maiúsculas
        "@typescript-eslint/explicit-function-return-type": [ "error" ], // Força tipo de retorno
        "array-bracket-newline": [ "error", "consistent" ],
        "@typescript-eslint/no-unused-vars": [ "error",  { "argsIgnorePattern": "^_" } ], // Não permite variáveis não usado
        "@typescript-eslint/default-param-last": [ "error" ], // Parâmetros default devem ficar no final
        "comma-spacing": [ "error", { "before": false, "after": true } ], // Espaço apos a virgula
        "comma-dangle": [ "error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "always-multiline",
        } ], // Virgula no final de tudo
        "prefer-arrow-callback": [ "error" ], // Força arrow function
        "arrow-body-style": [ "error", "as-needed" ], // Força arrow function sem body
        "no-empty": [ "error" ], // Não permite blocos vazios (if, while, for, function, etc)
        "@typescript-eslint/no-array-constructor": [ "error" ], // Não permite usar new Array()
        "no-useless-call": [ "error" ], // Não permite chamadas desnecessárias.call
        "no-useless-catch": [ "error" ], // Não permite catch desnecessários
        "no-unused-expressions": [ "error", { "allowTernary": true, "enforceForJSX": true, "allowShortCircuit": true } ], // Não permite expressões desnecessárias
        "no-useless-return": [ "error" ], // Não permite retornos desnecessários
        "no-useless-constructor": [ "error" ], // Não permite construtores desnecessários
        "newline-before-return": [ "error" ], // Força retorno de função com \n antes
        "multiline-comment-style": [ "error", "starred-block" ], // Força /* comentário */ ao invés de // varias vezes
        "@typescript-eslint/no-throw-literal": [ "error" ], // Não permite throw "string" ou diferente de classe
        "no-unreachable": [ "error" ], // Não permite unreachable code
        "no-multi-str": [ "error" ],
        "@typescript-eslint/no-unsafe-assignment": [ "error" ], // Não permite atribuição de tipos inválidos
        "consistent-this": [ "error", "that" ], // Não permite this em locais inconsistente.
        "no-irregular-whitespace": [ "error" ], // Não permite espaços entre palavras
        "no-invalid-this": [ "off" ], // Desliga invalid this Js
        "@typescript-eslint/no-invalid-this": [ "error" ], // Não permite this inválido
        "dot-notation": [ "error" ], // força usar ponto em objeto
        "dot-location": [ "error", "property" ], // Object.property ponto junto com a property
        "no-whitespace-before-property": [ "error" ], // Não permite espaço antes de property
        "no-trailing-spaces": [ "error" ], // Não permite espaço apos ou antes do ponto
        "@typescript-eslint/type-annotation-spacing": [ "error", { "before": false, "after": true } ], // Não colocar junto : tipagem
    },
};
