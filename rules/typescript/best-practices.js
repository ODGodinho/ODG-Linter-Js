const indentSize = 4;
const alwaysMultiline = "always-multiline";
const allTypes = [
    "static",
    "decorated",
    "instance",
    "abstract",
];
const allAccessibility = [
    "",
    "public",
    "protected",
    "private",
];

/**
 * Order member of class
 *
 * @param {Array<string>} types Tags name position
 * @param {string} tag Type of order
 * @param {Array<string>} accessibilityList Accessibility list
 * @returns {Array<string>}
 */
function orderMember(types, tag, accessibilityList) {
    return [ ...accessibilityList.flatMap((accessibility) => types.map(
        (type) => {
            const accessibilityName = accessibility ? `${accessibility}-` : "";

            if (accessibility === "private" && type === "abstract") return "";

            return `${accessibilityName}${type}-${tag}`;
        },
    )).filter(Boolean), `${tag}` ];
}

module.exports = {
    rules: {
        "strict": [ "off" ], // Strict javascript disable
        "indent": [ "off" ], // 4 spaces
        "@stylistic/ts/indent": [
            "error",
            indentSize,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: { parameters: 1, body: 1 },
                FunctionExpression: { parameters: 1, body: 1 },
                CallExpression: { arguments: 1 },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoreComments: false,
                ignoredNodes: [ "TSTypeParameterInstantiation" ],
            },
        ], // Força indent com 4 espaços
        "quotes": [ "off" ], // Aspas duplas
        "@stylistic/ts/quotes": [ "error", "double" ], // Força aspas dupla
        "lines-between-class-members": [ "off" ], // Força linha em branco entre props classe e funções
        "@stylistic/ts/lines-between-class-members": [
            "error",
            "always",
            { "exceptAfterOverload": true },
        ], // Força linha em branco entre props classe e funções
        "@typescript-eslint/explicit-member-accessibility": [ "error" ], // Força visibility para props
        "space-before-function-paren": [ "off" ], // Não permite espaço antes dos parenteses
        "@stylistic/ts/space-before-function-paren": [ "error", {
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
        "@stylistic/ts/comma-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ], // Espaço apos a virgula
        "comma-dangle": [ "off" ],
        "@stylistic/ts/comma-dangle": [ "error", {
            arrays: alwaysMultiline,
            objects: alwaysMultiline,
            imports: alwaysMultiline,
            exports: alwaysMultiline,
            functions: alwaysMultiline,
            enums: alwaysMultiline,
            generics: alwaysMultiline,
            tuples: alwaysMultiline,
        } ], // Virgula no final de tudo
        "no-array-constructor": [ "off" ], // Não permite usar new Array()
        "@typescript-eslint/no-array-constructor": [ "error" ], // Não permite usar new Array()
        "no-useless-constructor": [ "off" ], // Desliga Javascript rule
        "@typescript-eslint/no-useless-constructor": [ "error" ], // Não permite construtores desnecessários
        "no-throw-literal": [ "error" ], // Não permite throw "string" ou diferente de classe
        "@typescript-eslint/no-unsafe-assignment": [ "error" ], // Não permite atribuição de tipos inválidos
        "dot-notation": [ "off" ], // Força usar ponto em objeto JS
        "@typescript-eslint/dot-notation": [ "error" ], // Força usar ponto em objeto
        "@stylistic/ts/type-annotation-spacing": [ "error" ], // Não colocar junto : tipagem
        "no-extra-parens": [ "off" ], // Não permite parênteses extra
        "@stylistic/ts/no-extra-parens": [ "error" ], // Não permite parênteses extra
        "no-extra-semi": [ "off" ],
        "@stylistic/ts/no-extra-semi": [ "error" ], // Não permite ;, duplicadas ou desnecessárias
        "@typescript-eslint/no-unnecessary-condition": [ "error" ], // Evita condições sempre true ou false
        "@typescript-eslint/no-misused-promises": [ "error", {
            checksConditionals: false, // Bloqueia condições if de promises sem await
        } ],
        "@typescript-eslint/no-misused-new": [ "error" ], // Não utilize new de forma incorreta em classes/interface
        "@typescript-eslint/no-explicit-any": [ "error" ], // Não permite usar any
        "no-empty-function": [ "off" ], // Não permite funções vazias
        "@typescript-eslint/no-empty-function": [ "error" ], // Não permite funções vazias
        "no-duplicate-imports": [ "off" ], // Bloqueia import duplicado
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
        "@stylistic/ts/space-infix-ops": [ "error" ], // Espaço na separação operadores
        "keyword-spacing": [ "off" ],
        "@stylistic/ts/keyword-spacing": [ "error", {
            before: true,
            after: true,
        } ],
        "no-underscore-dangle": [ "error" ], // Não permite _ no nome
        "@typescript-eslint/prefer-return-this-type": [ "error" ], // Return this ao invés do nome classe
        "no-shadow": [ "off" ], // Erro caso ja esteja declarado escopo a cima
        "@typescript-eslint/no-shadow": [ "error" ], // Erro caso ja esteja declarado escopo a cima
        "import/no-commonjs": [ "error" ], // Não use module.exports
        "unicorn/prefer-module": [ "error" ], // Prefira module js
        "no-constructor-bind/no-constructor-bind": [ "error" ], // Não use bind no construtor para própria classe
        "no-constructor-bind/no-constructor-state": [ "error" ],
        "func-call-spacing": [ "off" ], // Não use espaço antes dos parens função
        "@stylistic/ts/function-call-spacing": [ "error", "never" ], // Não use espaço antes dos parens função
        "object-curly-spacing": [ "off" ], // Espaço declarar objeto
        "@stylistic/ts/object-curly-spacing": [
            "error",
            "always",
            {
                "arraysInObjects": true,
                "objectsInObjects": false,
            },
        ],
        "yield-star-spacing": [ "error", "before" ], // Espaço a esquerda yield
        "switch-colon-spacing": [ "error", { "after": true, "before": false } ], // Não coloque espaço antes do : case
        "semi": [ "off" ], // Use ponto e virgula ts
        "@stylistic/ts/semi": [ "error", "always" ], // Use ponto e virgula ts
        "padding-line-between-statements": [ "off" ],
        "@stylistic/ts/padding-line-between-statements": [
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
            { "blankLine": "always", "prev": "*", "next": [ "enum", "interface", "type" ] },
        ],
        "@typescript-eslint/adjacent-overload-signatures": [ "error" ], // Força overload interface ficarem juntos
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-expect-error": "allow-with-description",
                "minimumDescriptionLength": 4,
            },
        ], // Bloqueia o uso de // ts-ignore
        "@typescript-eslint/ban-tslint-comment": [ "error" ], // Não use Tslint comentários
        "@typescript-eslint/class-literal-property-style": [
            "error",
            "fields",
        ], // De preferencia a field readonly nas classes
        "@typescript-eslint/consistent-generic-constructors": [
            "error",
            "constructor",
        ],
        "@typescript-eslint/consistent-indexed-object-style": [
            "error",
            "record",
        ], // Use Record ao invés de [key: string]: any
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {
                assertionStyle: "as",
                objectLiteralTypeAssertions: "allow-as-parameter",
            },
        ], // Use as somente necessário
        "@typescript-eslint/consistent-type-definitions": [ "error", "interface" ], // Use interface ao invés de type
        "@typescript-eslint/consistent-type-exports": [
            "error",
            {
                fixMixedExportsWithInlineTypeSpecifier: true,
            },
        ],
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                prefer: "type-imports",
                fixStyle: "separate-type-imports",
            },
        ],
        "@stylistic/ts/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            },
        ], // Type e interface usa ;
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "default": [
                    "signature",
                    "call-signature",

                    ...orderMember([ "static", "decorated", "instance" ], "field", allAccessibility),

                    // Static initialization
                    "static-initialization",

                    // Constructors
                    "constructor",
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",

                    // Getters
                    ...orderMember(allTypes, "get", allAccessibility),

                    // Setters
                    ...orderMember(allTypes, "set", [ "public", "protected", "" ]),

                    // Methods
                    ...orderMember([ "static", "decorated", "instance" ], "method", allAccessibility),
                    ...orderMember([ "abstract" ], "field", allAccessibility),
                    ...orderMember([ "abstract" ], "method", allAccessibility),
                ],
            },
        ],
        "sort-class-members/sort-class-members": [
            "error",
            {
                "order": [
                    "[static-properties]",
                    "[properties]",
                    "[conventional-private-properties]",
                    "[computed-key-methods]",
                    "constructor",
                    "[getters]",
                    "[accessors]",
                    "[setters]",
                    "[non-accessors]",
                    "[methods]",
                    "[conventional-private-methods]",
                    "[readonly]",
                    "[override]",
                    "[abstract]",
                ],
                "accessorPairPositioning": "getThenSet",
                "sortInterfaces": true,
            },
        ],
        "camelcase": [ "off" ], // Desliga camelcase usa convention
        "@typescript-eslint/naming-convention": [
            "error",
            {

                selector: [
                    "variable",
                    "function",
                    "parameterProperty",
                    "classMethod",
                    "objectLiteralMethod",
                    "typeMethod",
                    "accessor",
                ],
                format: [
                    "strictCamelCase",
                    "camelCase",
                ],

                // We allow double underscore because of GraphQL type names and some React names.
                leadingUnderscore: "allowSingleOrDouble",
                trailingUnderscore: "allow",

                // Ignore `{'Retry-After': retryAfter}` type properties.
                filter: {
                    regex: "[- ]",
                    match: false,
                },
            },
            {
                selector: "classProperty",
                format: [
                    "strictCamelCase",
                    "camelCase",
                    "UPPER_CASE",
                ],
            },
            {
                selector: "typeLike",
                format: [
                    "PascalCase",
                    "camelCase",
                ],
            },
            {
                selector: "variable",
                types: [
                    "boolean",
                ],
                format: [
                    "StrictPascalCase",
                ],
                prefix: [
                    "is",
                    "has",
                    "can",
                    "should",
                    "will",
                    "did",
                    "does",
                    "are",
                    "do",
                ],
            },
            {

                selector: "interface",
                format: [
                    "PascalCase",
                ],
            },
            {

                // Type parameter name should either be `T` or a descriptive name.
                selector: "typeParameter",
                filter: /^T$|^[A-Z][A-Za-z]+$/.source,
                format: [
                    "StrictPascalCase",
                ],
            },

            // Allow these in non-camel-case when quoted.
            {
                selector: [
                    "classProperty",
                    "objectLiteralProperty",
                ],
                format: null,
                modifiers: [
                    "requiresQuotes",
                ],
            },
        ],
        "@typescript-eslint/no-confusing-non-null-assertion": [ "error" ], // Não faça afirmações de não nulo confusas
        "@typescript-eslint/no-extra-non-null-assertion": [ "error" ], // Não faça afirmações extras "var!!!!.var2"
        "@typescript-eslint/no-for-in-array": [ "error" ], // Não faça for in array
        "@typescript-eslint/no-inferrable-types": [
            "error",
            { "ignoreParameters": true, "ignoreProperties": true },
        ], // Não coloca type em props desnecessárias
        "no-redeclare": [ "off" ], // Desliga JS
        "@typescript-eslint/no-redeclare": [ "error" ], // Não faça redeclaração de variáveis
        "@typescript-eslint/no-this-alias": [
            "error",
            {
                allowDestructuring: true,
            },
        ], // Não faça alias de this

        "@typescript-eslint/no-unnecessary-qualifier": [ "error" ],
        "@typescript-eslint/no-unnecessary-type-arguments": [ "error" ],
        "@typescript-eslint/no-unsafe-return": [ "error" ], // Sem return any
        "@typescript-eslint/non-nullable-type-assertion-style": [ "error" ], // Prefira ! em vez de Cast
        "@typescript-eslint/parameter-properties": [
            "error",
            {
                prefer: "parameter-property",
            },
        ], // Prefira declaração param props
        "@typescript-eslint/prefer-enum-initializers": [ "error" ], // Inicie as enums com valores
        "@typescript-eslint/prefer-function-type": [ "error" ], // Prefira Type function ao invés de object
        "@typescript-eslint/prefer-includes": [ "error" ], // Prefira Includes no typescript
        "@typescript-eslint/prefer-namespace-keyword": [ "error" ], // Prefira namespace ao invés de module
        "@typescript-eslint/prefer-nullish-coalescing": [
            "error",
            {
                ignoreTernaryTests: false,
                ignoreConditionalTests: false,
                ignoreMixedLogicalExpressions: false,
            },
        ], // Use ?? em vez de ternário com &&
        "@typescript-eslint/prefer-optional-chain": [ "error" ], // Prefira Optional chain ao invés de &&.
        "@typescript-eslint/prefer-readonly": [ "error" ], // Prefira readonly
        "@typescript-eslint/prefer-reduce-type-parameter": [ "error" ], // Use <> em reduce em vez de as default type
        // "@typescript-eslint/prefer-regexp-exec": [ "error" ], // Prefira regex exec // ? Desabilitado falso positivo
        "@typescript-eslint/prefer-string-starts-ends-with": [ "error" ], // Prefira startsWith e endsWith
        "@typescript-eslint/promise-function-async": [ "error" ], // Prefira async function quando retorna Promise
        "@typescript-eslint/require-array-sort-compare": [ "error" ], // Passe parâmetro array sort
        "@typescript-eslint/sort-type-constituents": [ "error" ], // Ordene agrupação de tipos
        "@stylistic/ts/space-before-blocks": [ "error" ], // Espaço apos antes {} interface e enum
        "no-magic-numbers": [ "off" ], // Desliga Magic number JS
        "@typescript-eslint/no-magic-numbers": [
            "warn",
            {
                "ignore": [ 0, 1, -1 ],
                "enforceConst": true,
                "ignoreDefaultValues": true,
                "ignoreEnums": true,
                "ignoreReadonlyClassProperties": true,
            },
        ], // Não permite numero mágicos
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/restrict-plus-operands": [ "error" ],
        "@stylistic/ts/block-spacing": [ "error" ], // Espaço em { return true } e apos as chaves {
        "@stylistic/ts/key-spacing": [ "error" ], // De {a:1} para { a: 1 }
        "@stylistic/ts/object-curly-newline": [
            "error",
            {
                "ExportDeclaration": {
                    "consistent": true,
                    "minProperties": 4,
                    "multiline": true,
                },
                "ImportDeclaration": {
                    "consistent": true,
                    "minProperties": 4,
                    "multiline": true,
                },
                "ObjectExpression": {
                    "consistent": true,
                    "minProperties": 4,
                    "multiline": true,
                },
                "ObjectPattern": {
                    "consistent": true,
                    "minProperties": 4,
                    "multiline": true,
                },
            },
        ], // De {a:1} para { a: 1 }
        "@stylistic/ts/object-property-newline": [ "error", {
            allowAllPropertiesOnSameLine: true,
        } ],
        "@stylistic/ts/quote-props": [ "error", "consistent" ],
    },
};
