const indentSize = 4;

export default {
    rules: {
        "jsonc/array-bracket-spacing": [ "error", "always" ],
        "jsonc/key-name-casing": [ "off" ],
        "strict": [ "off" ],
        "no-unused-vars": [ "off" ],
        "no-unused-expressions": [ "off" ],
        "import/unambiguous": [ "off" ],
        "filenames/match-regex": [ "off" ],
        "jsonc/object-curly-spacing": [ "error", "always" ], // Espaço declarar objeto
        "jsonc/object-curly-newline": [
            "error",
            { "consistent": true },
        ], // Força quebrar linha em todos #4 os itens objeto
        "@stylistic/max-len": [
            "warn",
            {
                code: 120,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ], // Caracteres máximo por linhas
        "jsonc/no-irregular-whitespace": [ "error" ], // Não faça espaço irregular
        "jsonc/space-unary-ops": [ "error" ], // Bloqueia Espaço em operadores unários
        "jsonc/quotes": [ "error", "double" ], // Força aspas duplas
        "jsonc/quote-props": [ "error", "always" ], // Força aspas em propriedades
        "jsonc/object-property-newline": [ "error" ], // Força quebra de linha em propriedades do objeto
        "jsonc/no-useless-escape": [ "error" ], // Evite scape desnecessário na string
        "jsonc/no-sparse-arrays": [ "error" ], // N crie array com itens vazio no maio
        "jsonc/no-octal": [ "error" ], // N use number unicode ex: 0XX
        "jsonc/no-multi-str": [ "error" ], // N faça string em varias linhas
        "jsonc/no-floating-decimal": [ "error" ], // N faça casa decimal flutuante EX: 10.
        "jsonc/no-dupe-keys": [ "error" ], // N faça keys duplicadas
        "jsonc/key-spacing": [ "error" ], // Formate o Json corretamente
        "jsonc/indent": [ "error", indentSize ], // Formate o Json corretamente
        "jsonc/comma-style": [ "error" ], // Formate o Json corretamente
        "jsonc/comma-dangle": [ "error" ], // Não coloca , final do json
        "jsonc/array-bracket-newline": [ "error" ], // Força o array estar em múltiplas linhas se quebrado
        "jsonc/valid-json-number": [ "error" ], // Validar number no json
        "jsonc/no-unicode-codepoint-escapes": [ "error" ], // Desabilitar unicode
        "jsonc/no-undefined-value": [ "error" ], // No Undefined
        "jsonc/no-template-literals": [ "error" ], // Não use `` template literals
        "jsonc/no-regexp-literals": [ "error" ], // Não faça regex em json
        "jsonc/no-plus-sign": [ "error" ], // Bloqueia Numero com + no json
        "jsonc/no-parenthesized": [ "error" ], // Não coloca () desnecessário
        "jsonc/no-octal-numeric-literals": [ "error" ], // Não adicione octal no json
        "jsonc/no-number-props": [ "error" ], // Não crie props numéricas
        "jsonc/no-nan": [ "error" ], // Não crie valor NaN
        "jsonc/no-infinity": [ "error" ], // Não crie numero infinito
        "jsonc/no-hexadecimal-numeric-literals": [ "error" ], // Não crie numero hex
        "jsonc/no-escape-sequence-in-identifier": [ "error" ], // Não escape key
        "jsonc/no-binary-numeric-literals": [ "error" ], // Não use numero binário
        "jsonc/no-bigint-literals": [ "error" ], // Não use big int

    },
};
