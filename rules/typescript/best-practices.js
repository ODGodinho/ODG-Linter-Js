const indentSize = 4;

module.exports = {
    rules: {
        "strict": [ "off" ], // Strict javascript disable
        "indent": [ "off" ], // 4 spaces
        "@typescript-eslint/indent": [ "error", indentSize ], // Força indent com 4 espaços
        "quotes": [ "off" ], // Aspas duplas
        "@typescript-eslint/quotes": [ "error", "double" ], // Força aspas dupla
        "lines-between-class-members": [ "off" ], // Força linha em branco entre props classe e funções
        "@typescript-eslint/lines-between-class-members": [
            "error",
            "always",
            { "exceptAfterOverload": false },
        ], // Força linha em branco entre props classe e funções
        "@typescript-eslint/explicit-member-accessibility": [ "error" ], // Força visibility para props
        "space-before-function-paren": [ "off" ], // Não permite espaço antes dos parenteses
        "@typescript-eslint/space-before-function-paren": [ "error", {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
        } ], // Não permite espaço antes dos parenteses
        "@typescript-eslint/explicit-function-return-type": [ "error" ], // Força tipo de retorno
        "no-unused-vars": [ "off" ], // Não permite variáveis não utilizadas
        "@typescript-eslint/no-unused-vars": [ "error", {
            argsIgnorePattern: "^_",
            args: "after-used",
        } ], // Não permite variáveis não usado
        "default-param-last": [ "off" ], // Parâmetros default devem ficar no final
        "@typescript-eslint/default-param-last": [ "error" ], // Parâmetros default devem ficar no final
        "comma-spacing": [ "off" ],
        "@typescript-eslint/comma-spacing": [ "error" ], // Espaço apos a virgula
        "comma-dangle": [ "off" ],
        "@typescript-eslint/comma-dangle": [ "error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "always-multiline",
            enums: "always-multiline",
            generics: "always-multiline",
            tuples: "always-multiline",
        } ], // Virgula no final de tudo
        "no-array-constructor": [ "off" ], // Não permite usar new Array()
        "@typescript-eslint/no-array-constructor": [ "error" ], // Não permite usar new Array()
        "no-useless-constructor": [ "off" ], // Desliga Javascript rule
        "@typescript-eslint/no-useless-constructor": [ "error" ], // Não permite construtores desnecessários
        "no-throw-literal": [ "off" ], // Não permite throw "string" ou diferente de classe
        "@typescript-eslint/no-throw-literal": [ "error" ], // Não permite throw "string" ou diferente de classe
        "@typescript-eslint/no-unsafe-assignment": [ "error" ], // Não permite atribuição de tipos inválidos
        "dot-notation": [ "off" ], // Força usar ponto em objeto JS
        "@typescript-eslint/dot-notation": [ "error" ], // Força usar ponto em objeto
        "@typescript-eslint/type-annotation-spacing": [ "error" ], // Não colocar junto : tipagem
        "no-extra-parens": [ "off" ], // Não permite parênteses extra
        "@typescript-eslint/no-extra-parens": [ "error" ], // Não permite parênteses extra
        "no-extra-semi": [ "off" ],
        "@typescript-eslint/no-extra-semi": [ "error" ], // Não permite ;, duplicadas ou desnecessárias
        "@typescript-eslint/no-unnecessary-condition": [ "error" ], // Evita condições sempre true ou false
        "@typescript-eslint/no-misused-promises": [ "error", {
            checksConditionals: false, // Bloqueia condições if de promises sem await
        } ],
        "@typescript-eslint/no-misused-new": [ "error" ], // Não utilize new de forma incorreta em classes/interface
        "@typescript-eslint/ban-types": [ "error" ], // Troques String -> string, Number -> number e etc
        "@typescript-eslint/no-explicit-any": [ "error" ], // Não permite usar any
        "no-empty-function": [ "off" ], // Não permite funções vazias
        "@typescript-eslint/no-empty-function": [ "error" ], // Não permite funções vazias
        "no-duplicate-imports": [ "off" ], // Bloqueia import duplicado
        "@typescript-eslint/no-duplicate-imports": [ "error" ], // Bloqueia import Duplicado
        "@typescript-eslint/no-unnecessary-type-constraint": [
            "error",
        ], // Não permite restrições de tipo desnecessárias <T extends any>
        "@typescript-eslint/prefer-as-const": [ "error" ], // Preferir constantes
        "@typescript-eslint/array-type": [ "error", {
            default: "array-simple",
            readonly: "array-simple",
        } ], // Não permite tipos de array incorretos
        "jsdoc/require-returns-check": [ "off" ],
        "@typescript-eslint/await-thenable": [ "error" ], // Não permite await em não promises
        "@typescript-eslint/method-signature-style": [
            "error",
            "method",
        ], // Use arrow function em method signature interface
        "@typescript-eslint/no-unnecessary-type-assertion": [
            "error",
        ], // Não permite declaração que não altera expressão
        "@typescript-eslint/no-unsafe-call": [ "error" ], // Não permite chamadas de funções em tipo any
        "space-infix-ops": [ "off" ], // Espaço na separação operadores
        "@typescript-eslint/space-infix-ops": [ "error" ], // Espaço na separação operadores
        "keyword-spacing": [ "off" ],
        "@typescript-eslint/keyword-spacing": [ "error", {
            before: true,
            after: true,
        } ],
        "no-underscore-dangle": [ "error" ], // Não permite _ no nome
        "@typescript-eslint/prefer-return-this-type": [ "error" ], // Não permite _ no nome
        "for-direction": [ "error" ], // Não faça for contador infinito.
        "no-shadow": [ "off" ], // Erro caso ja esteja declarado escopo a cima
        "@typescript-eslint/no-shadow": [ "error" ], // Erro caso ja esteja declarado escopo a cima
        "import/no-commonjs": [ "error" ], // Não use module.exports
        "unicorn/prefer-module": [ "error" ], // Prefira module js
        "sonar/array-callback-without-return": [ "off" ], // Não use new Array
        "no-constructor-bind/no-constructor-bind": [ "error" ], // Não use bind no construtor para própria classe
        "no-constructor-bind/no-constructor-state": [ "error" ],
        "func-call-spacing": [ "off" ], // Não use espaço antes dos parens função
        "@typescript-eslint/func-call-spacing": [ "error", "never" ], // Não use espaço antes dos parens função
        "object-curly-spacing": [ "off" ], // Espaço declarar objeto
        "@typescript-eslint/object-curly-spacing": [ "error", "always", { "arraysInObjects": true } ],
        "yield-star-spacing": [ "error", "before" ], // Espaço a esquerda yield
        "switch-colon-spacing": [ "error", { "after": true, "before": false } ], // Não coloque espaço antes do : case
        "semi": [ "off" ], // Use ponto e virgula ts
        "@typescript-eslint/semi": [ "error", "always" ], // Use ponto e virgula ts
        "padding-line-between-statements": [ "off" ],
        "@typescript-eslint/padding-line-between-statements": [
            "error",
            { "blankLine": "always", "prev": "*", "next": "export" }, // Uma linha em branco antes do export
            { "blankLine": "always", "prev": "export", "next": "*" }, // Uma linha em branco apos o export
            { "blankLine": "always", "prev": "*", "next": "class" }, // Uma linha em branco antes da classe
            { "blankLine": "always", "prev": "class", "next": "*" }, // Uma linha em branco apos a classe
            { "blankLine": "always", "prev": "*", "next": "interface" }, // Uma linha em branco antes da interface
            { "blankLine": "always", "prev": "interface", "next": "*" }, // Uma linha em branco apos a interface
            { "blankLine": "always", "prev": "*", "next": "type" }, // Uma linha em branco antes do type
            { "blankLine": "always", "prev": "type", "next": "*" }, // Uma linha em branco apos o type
            { "blankLine": "always", "prev": "multiline-block-like", "next": "*" },
        ],
    },
};
