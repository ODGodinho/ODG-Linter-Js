/* eslint-disable max-len */
module.exports = {
    rules: {
        "semi": [ "error", "always" ], // Força usar ponto-virgula ;
        "quotes": [ "error", "double" ], // Aspas duplas
        "indent": [ "off" ], // 4 spaces
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
        "space-before-blocks": [ "error" ], // Requer espaço antes das chaves
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
        "no-multi-spaces": [ "error" ], // Nao permite vários espaços if(  i  )
        "computed-property-spacing": [ "error", "never" ], // Desabilita espaço ao recuperar array $a[ 'ITEM' ]; ou $a[ ] = 12;
        "no-useless-concat": [ "error" ], // Desabilita concatenação de strings desnecessárias ex: "a" + "b"
        "no-self-assign": [ "error" ], // Nao se atribua seu próprio valor a variável
        "@typescript-eslint/explicit-function-return-type": [ "error" ], // Força tipo de retorno
        "array-bracket-newline": [ "error", "consistent" ], // quebra linha Array
        "@typescript-eslint/no-unused-vars": [ "error", { "argsIgnorePattern": "^_" } ], // Não permite variáveis não usado
        "default-param-last": [ "off" ], // Parâmetros default devem ficar no final,
        "@typescript-eslint/default-param-last": [ "error" ], // Parâmetros default devem ficar no final
        "comma-spacing": [ "off" ],
        "@typescript-eslint/comma-spacing": [ "error" ], // Espaço apos a virgula
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": [ "error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "always-multiline",
            "enums": "always-multiline",
            "generics": "always-multiline",
            "tuples": "always-multiline",
        } ], // Virgula no final de tudo
        "prefer-arrow-callback": [ "error" ], // Força arrow function
        "arrow-body-style": [ "error", "as-needed" ], // Força arrow function sem body
        "no-empty": [ "error" ], // Não permite blocos vazios (if, while, for, function, etc)
        "@typescript-eslint/no-array-constructor": [ "error" ], // Não permite usar new Array()
        "no-useless-call": [ "error" ], // Não permite chamadas desnecessárias.call
        "no-useless-catch": [ "error" ], // Não permite catch desnecessários
        "no-unused-expressions": [ "off" ], // Não permite expressões desnecessárias
        "@typescript-eslint/no-unused-expressions": [ "error", {
            "allowTernary": true,
            "enforceForJSX": true,
            "allowShortCircuit": true,
        } ],
        "no-useless-return": [ "error" ], // Não permite retornos desnecessários
        "no-useless-constructor": [ "off" ],
        "@typescript-eslint/no-useless-constructor": ["error"], // Não permite construtores desnecessários
        "newline-before-return": [ "error" ], // Força retorno de função com \n antes
        "multiline-comment-style": [ "error", "starred-block" ], // Força /* comentário */ ao invés de // varias vezes
        "@typescript-eslint/no-throw-literal": [ "error" ], // Não permite throw "string" ou diferente de classe
        "no-unreachable": [ "error" ], // Não permite unreachable code
        "no-unreachable-loop": [ "error" ], // Não permite unreachable loop
        "no-multi-str": [ "error" ], // Não quebre linha dentro de uma string
        "@typescript-eslint/no-unsafe-assignment": [ "error" ], // Não permite atribuição de tipos inválidos
        "consistent-this": [ "error", "that" ], // Não permite this em locais inconsistente.
        "no-irregular-whitespace": [ "error" ], // Não permite espaços entre palavras
        "no-invalid-this": [ "off" ], // Desliga invalid this Js
        "@typescript-eslint/no-invalid-this": [ "error" ], // Não permite this inválido
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": ["error"], // força usar ponto em objeto
        "dot-location": [ "error", "property" ], // Object.property ponto junto com a property
        "no-whitespace-before-property": [ "error" ], // Não permite espaço antes de property
        "no-trailing-spaces": [ "error" ], // Não permite espaço apos ou antes do ponto
        "@typescript-eslint/type-annotation-spacing": [ "error" ], // Não colocar junto : tipagem
        "no-extra-boolean-cast": [ "error" ], // Não permite cast de boolean extra !!!
        "no-constant-condition": [ "error" ], // Não permite condições constantes if (true)
        "no-debugger": [ "error" ], // Não permite usar debugger
        "no-dupe-keys": [ "error" ], // Não permite chaves duplicadas array
        "no-duplicate-case": [ "error" ], // Não permite duplicar case em switch
        "no-empty-character-class": [ "error" ], // Não permite classe de caracteres vazia em regex
        "no-ex-assign": [ "error" ], // Não permite atribuição de exceção
        "no-extra-parens": [ "off" ], // Não permite parênteses extra
        "@typescript-eslint/no-extra-parens": [ "error" ], // Não permite parênteses extra
        "no-extra-semi": [ "off" ],
        "@typescript-eslint/no-extra-semi": ["error"], // Não permite ;, duplicadas ou desnecessárias
        "no-func-assign": [ "error" ], // Não permite atribuição de função
        "no-inner-declarations": [ "error" ], // Não permite declarações dentro de escopos
        "no-invalid-regexp": [ "error" ], // Não permite expressões regulares inválidas RegExp()
        "no-negated-in-lhs": [ "error" ], // Não permite negação em IN
        "no-regex-spaces": [ "error" ], // Não permite múltiplos espaços em regex utilize
        "no-sparse-arrays": [ "error" ], // Não permite arrays com itens vagos no meio
        "valid-typeof": [ "error" ], // Não permite typeof inválido
        "eqeqeq": [ "error", "always" ], // Usa igual e do mesmo tipo
        "no-eval": [ "error" ], // Não permite usar eval
        "no-extra-label": [ "error" ], // Não permite usar labels extra desnecessárias
        "no-labels": [ "error" ], // Disable Label/GOTO
        "no-floating-decimal": [ "error" ], // Não permite decimais flutuantes sem zero a esquerda.
        "no-native-reassign": [ "error" ], // Não permite reatribuição de funções/vars nativas
        "no-new": [ "error" ], // Não permite usar new sem salva-lo
        "no-new-func": [ "error" ], // Não permite usar new Function()
        "no-redeclare": [ "error" ], // Não permite redeclarar variáveis
        "no-self-compare": [ "error" ], // Não permite comparar com seu próprio valor
        "no-unmodified-loop-condition": [ "error" ], // Não permite loop sem modificar o valor do contador ou check único
        "no-useless-escape": [ "error" ], // Não permite usar escape desnecessárias
        "yoda": [ "error" ], // Força if Variável === "COMPARATION"
        "no-undef-init": [ "error" ], // Não permite variáveis definidas como undefined ao inicializar
        "no-new-require": [ "error" ], // Não permite usar new require()
        "prefer-template": [ "error" ], // Prefer template literals over string concatenation
        "@typescript-eslint/no-unnecessary-condition": [ "error" ], // Evita condições sempre true ou false
        "no-multiple-empty-lines": [ "error", { "max": 1 } ], // não permita varias linhas em branco
        "@typescript-eslint/no-misused-promises": [ "error", {
            "checksConditionals": false // bloqueia condições if de promises sem await
        } ],
        "@typescript-eslint/no-misused-new": [ "error" ], // Não utilize new de forma incorreta em classes/interface
        "no-async-promise-executor": [ "error" ], // não permita use função async para executar promise
        "prefer-promise-reject-errors": [ "error" ], // Utilize exception im promise ao invés de string/number ou outra coisa
        "semi-spacing": [ "error", { "before": false, "after": true } ], // não permite espaço antes do ;
        "@typescript-eslint/ban-types": [ "error" ], // Troques String -> string, Number -> number e etc
        "@typescript-eslint/no-explicit-any": [ "error" ], // Não permite usar any
        "no-empty-function": [ "off" ], // Não permite funções vazias Desliga em Js
        "@typescript-eslint/no-empty-function": [ "error" ], // Não permite funções vazias
        "no-duplicate-imports": [ "off" ], // Bloqueia import duplicado
        "@typescript-eslint/no-duplicate-imports": [ "error" ],// Bloqueia import Duplicado
        "@typescript-eslint/no-unnecessary-type-constraint": [ "error" ], // Não permite restrições de tipo desnecessárias <T extends any>
        "prefer-const": [ "error" ], // Preferir constantes
        "@typescript-eslint/prefer-as-const": [ "error" ], // Preferir constantes
        "@typescript-eslint/array-type": [ "error" ], // Não permite tipos de array incorretos
        "@typescript-eslint/await-thenable": [ "error" ], // Não permite await em não promises
        "@typescript-eslint/method-signature-style": [ "error", "method" ], // use arrow function em method signature interface
        "@typescript-eslint/no-unnecessary-type-assertion": [ "error" ], // Não permite declaração que não altera expressão
        "@typescript-eslint/no-unsafe-call": [ "error" ], // Não permite chamadas de funções em tipo any
        "no-var": [ "error" ], // Não user var prefira let ou const
        "promise/no-new-statics": [ "error" ], // Não permite usar new em static promise
        "promise/no-return-wrap": [ "error" ], // Não use promise.resolve ou reject dentro de then e catch
        "promise/param-names": [ "error" ], // Use nome correto para promise
        "promise/always-return": [ "error" ], // Se a promise não tiver retorno reportar erro
        "promise/no-nesting": [ "warn" ], // Warn se colocar uma then ou catch dentro de outra promise
        "promise/no-return-in-finally": [ "error" ], // No Return in finally
        "promise/valid-params": [ "error" ], // Valida Parâmetros da promise
        "import/newline-after-import": [ "error", { "count": 1 } ] // Linhas em branco apos o import
    },
};
