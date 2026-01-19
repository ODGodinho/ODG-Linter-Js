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
 * @param {Array<string>} accessibilityList Accessibility list of class
 * @returns {Array<string>}
 */
function orderMember(types, tag, accessibilityList) {
    return [
        ...accessibilityList.flatMap((accessibility) => types.map(
            (type) => {
                const accessibilityName = accessibility ? `${accessibility}-` : "";

                if (accessibility === "private" && type === "abstract") return "";

                return `${accessibilityName}${type}-${tag}`;
            },
        )).filter(Boolean),
        `${tag}`,
    ];
}

export default {
    rules: {
        "strict": [ "off" ], // Strict javascript disable
        "no-throw-literal": "off", // Não permite throw "string" ou diferente de classe
        "@typescript-eslint/unified-signatures": [ "error" ], // Unir tipos de overload method se possível
        "@typescript-eslint/unbound-method": [ "error" ], // Preserve bind class
        "@typescript-eslint/only-throw-error": [ "error" ], // Não permite throw "string" ou diferente de classe
        "@typescript-eslint/triple-slash-reference": [ "error" ], // Disable import por reference
        "@typescript-eslint/no-wrapper-object-types": [ "error" ], // Use primitivo minusculo
        "@typescript-eslint/no-unsafe-function-type": [ "error" ], // Não use tipo Function
        "prefer-promise-reject-errors": [ "off" ], // Promise reject classe Error
        "@typescript-eslint/prefer-promise-reject-errors": [ "error" ], // Promise reject classe Error
        "@typescript-eslint/explicit-member-accessibility": [ "error" ], // Força visibility para props
        "@typescript-eslint/no-unnecessary-type-parameters": [ "error" ], // N Faça generic se ele n ajudar
        "@typescript-eslint/no-unnecessary-type-conversion": [ "error" ], // Block ToString se n precisar
        "@typescript-eslint/no-unnecessary-template-expression": [ "error" ], // Use template literal so se precisar
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": [ "error" ], // Não precisa === boolean no if
        "@typescript-eslint/no-require-imports": [ "error" ], // Não use require e sim import
        "@typescript-eslint/no-array-delete": [ "error" ], // N faça delete no array
        "@typescript-eslint/no-meaningless-void-operator": [ "error" ], // N use void se n precisar
        "sonarjs/no-array-delete": [ "off" ], // Não use delete no array
        "@typescript-eslint/no-empty-object-type": [
            "error",
            { allowInterfaces: "with-single-extends", allowWithName: "Props$" },
        ], // Não Crie tipos vazios
        "@typescript-eslint/no-import-type-side-effects": [ "error" ], // Coloque type fora para n importar no build
        "@typescript-eslint/explicit-function-return-type": [ "error" ], // Força tipo de retorno
        "no-unused-vars": [ "off" ], // Não permite variáveis não utilizadas
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                args: "after-used",
            },
        ], // Não permite variáveis não usado
        "default-param-last": [ "off" ], // Parâmetros default devem ficar no final
        "@typescript-eslint/default-param-last": [ "error" ], // Parâmetros default devem ficar no final
        "no-array-constructor": [ "off" ], // Não permite usar new Array()
        "@typescript-eslint/no-array-constructor": [ "error" ], // Não permite usar new Array()
        "no-useless-constructor": [ "off" ], // Desliga Javascript rule
        "@typescript-eslint/no-useless-constructor": [ "error" ], // Não permite construtores desnecessários
        "@typescript-eslint/no-unsafe-assignment": [ "error" ], // Não permite atribuição de tipos inválidos
        "dot-notation": [ "off" ], // Força usar ponto em objeto JS
        "@typescript-eslint/dot-notation": [ "error" ], // Força usar ponto em objeto
        "@typescript-eslint/no-unnecessary-condition": [ "error" ], // Evita condições sempre true ou false
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksConditionals: false, // Bloqueia condições if de promises sem await
            },
        ],
        "@typescript-eslint/no-misused-new": [ "error" ], // Não utilize new de forma incorreta em classes/interface
        "@typescript-eslint/no-explicit-any": [ "error" ], // Não permite usar any
        "no-empty-function": [ "off" ], // Não permite funções vazias
        "@typescript-eslint/no-empty-function": [ "error" ], // Não permite funções vazias
        "@typescript-eslint/no-unnecessary-type-constraint": [ "error" ], // Não permite restrições de tipo desnecessárias <T extends any>
        "@typescript-eslint/prefer-as-const": [ "error" ], // Preferir constantes
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "array-simple",
                readonly: "array-simple",
            },
        ], // Não permite tipos de array incorretos
        "jsdoc/require-returns-check": [ "off" ],
        "@typescript-eslint/await-thenable": [ "error" ], // Não permite await em não promises
        "@typescript-eslint/method-signature-style": [
            "error",
            "method",
        ], // Use arrow function em method signature interface
        "@typescript-eslint/no-unnecessary-type-assertion": [ "error" ], // Não permite declaração que não altera expressão
        "@typescript-eslint/no-unsafe-call": [ "error" ], // Não permite chamadas de funções em tipo any
        "space-infix-ops": [ "off" ], // Espaço na separação operadores
        "no-underscore-dangle": [ "error" ], // Não permite _ no nome
        "@typescript-eslint/prefer-return-this-type": [ "error" ], // Return this ao invés do nome classe
        "no-shadow": [ "off" ], // Erro caso ja esteja declarado escopo a cima
        "@typescript-eslint/no-shadow": [ "error" ], // Erro caso ja esteja declarado escopo a cima
        "import/no-commonjs": [ "error" ], // Não use module.exports
        "unicorn/prefer-module": [ "error" ], // Prefira module js
        "no-constructor-bind/no-constructor-bind": [ "error" ], // Não use bind no construtor para própria classe
        "no-constructor-bind/no-constructor-state": [ "error" ],
        "func-call-spacing": [ "off" ], // Não use espaço antes dos parens função
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
                types: [ "boolean" ],
                format: [ "StrictPascalCase" ],
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
                format: [ "PascalCase" ],
            },
            {

                // Type parameter name should either be `T` or a descriptive name.
                selector: "typeParameter",
                filter: /^T$|^[A-Z][A-Za-z]+$/.source,
                format: [ "StrictPascalCase" ],
            },

            // Allow these in non-camel-case when quoted.
            {
                selector: [
                    "classProperty",
                    "objectLiteralProperty",
                ],
                format: null,
                modifiers: [ "requiresQuotes" ],
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
    },
};
