const indentSize = 4;
const complexity = 15;
const alwaysMultiline = "always-multiline";

export default {
    rules: {
        "capitalized-comments": [
            "error",
            "always",
            {
                ignorePattern: "\\s*region.*|\\s*endregion.*|\\s*var.*|\\s*let.*|\\s*const.*",
            },
        ], // Comentários devem ser iniciados em letras maiúsculas
        "unicode-bom": [ "error", "never" ], // Disabled "unicode-bom"
        "no-self-assign": [ "error" ], // Nao se atribua seu próprio valor a variável
        "no-irregular-whitespace": [ "error" ], // Não permite espaços entre palavras
        "no-undef": [ "error", { typeof: true } ], // Não chame variáveis não definidas
        "regexp/negation": [ "error" ], // This rule enforces use of \D, \W, \S and \P on negation.
        "regexp/prefer-set-operation": [ "error" ],
        "regexp/no-useless-set-operand": [ "error" ],
        "regexp/simplify-set-operations": [ "error" ], // Força simplifica a regex
        "regexp/no-empty-string-literal": [ "error" ], // Não faça blocos vazios de literal
        "regexp/no-useless-string-literal": [ "error" ], // Literal não usada
        "regexp/confusing-quantifier": [ "error" ], // No Especifique quantidade em opcional
        "regexp/control-character-escape": [ "error" ], // Use \r ao invés de \u0009
        "no-control-regex": [ "error" ], // Os caracteres de controle
        "regexp/no-dupe-characters-character-class": [ "error" ], // Rvita condições duplicada em []
        "regexp/no-invisible-character": [ "error" ], // Evita colocar tab espaço em regex
        "regexp/no-legacy-features": [
            "error",
            {
                staticProperties: [
                    "input",
                    "$_",
                    "lastMatch",
                    "$&",
                    "lastParen",
                    "$+",
                    "leftContext",
                    "$`",
                    "rightContext",
                    "$'",
                    "$1",
                    "$2",
                    "$3",
                    "$4",
                    "$5",
                    "$6",
                    "$7",
                    "$8",
                    "$9",
                ],
                prototypeMethods: [ "compile" ],
            },
        ],
        "regexp/no-non-standard-flag": [ "error" ], // Bloqueia flags não padronizada
        "regexp/no-obscure-range": [ "error" ], // Range regex /[A-\x43]/;
        "regexp/no-trivially-nested-quantifier": [ "error" ], // Bloqueia flags não padronizada
        "regexp/no-unused-capturing-group": [ "error" ], // Não crie grupos que não está sendo usado.
        "regexp/no-useless-character-class": [ "error" ], // Não crie blocos desnecessários
        "regexp/no-useless-flag": [ "error" ], // Não Use Flag desnecessários
        "regexp/no-useless-lazy": [ "error" ],
        "regexp/no-useless-quantifier": [ "error" ], // Não permite Quantifiers sem efeitos
        "regexp/no-useless-range": [ "error" ], // Não permite Range desnecessários
        "regexp/no-useless-two-nums-quantifier": [ "error" ], // Não permite Range Iguais
        "regexp/no-zero-quantifier": [ "error" ], // Não permite Quantidade {0}
        "regexp/optimal-lookaround-quantifier": [ "error" ],
        "regexp/optimal-quantifier-concatenation": [ "error" ],
        "regexp/prefer-quantifier": [ "error" ], // Use {4} ao invés de replicar
        "regexp/prefer-range": [ "error" ], // Prefira [0-9] ao invés [1234567890]
        "regexp/sort-alternatives": [ "error" ], // Coloque [a|b|c] ordem alfabética
        "regexp/hexadecimal-escape": [ "error" ], // \x0a ao invés \u000a
        "regexp/match-any": [ "error" ], // Não da match com qualquer coisa
        "regexp/no-useless-escape": [ "error" ], // Não coloca \ contra em local sem efeito
        "regexp/no-useless-non-capturing-group": [ "error" ], // Grupo não necessário
        "regexp/prefer-character-class": [ "error" ], // Prefira [] ao invés de |
        "regexp/prefer-d": [ "error" ], // Prefira \d
        "regexp/prefer-plus-quantifier": [ "error" ], // Prefira + ao invés de {1, }
        "regexp/prefer-question-quantifier": [ "error" ], // Prefira ? ao invés de {0,1}
        "regexp/prefer-star-quantifier": [ "error" ], // Prefira * ao invés de {0,}
        "regexp/prefer-unicode-codepoint-escapes": [ "error" ], // Use Unicode
        "regexp/prefer-w": [ "error" ], // Use \w
        "regexp/sort-character-class-elements": [ "error" ], // Coloque [] em ordem Alfabética
        "regexp/sort-flags": [ "error" ], // Flag em ordem alfabética
        "regexp/prefer-named-capture-group": [ "error" ], // Prefira group com nomes
        "regexp/prefer-regexp-exec": [ "error" ], // Prefira exec em regex

        "unicorn/no-empty-file": [ "error" ], // Não crie arquivo vazio
        "no-magic-numbers": [
            "warn",
            {
                ignore: [ 0, 1, -1 ],
                enforceConst: true,
                ignoreDefaultValues: true,
            },
        ], // Não permite numero mágicos
        "no-negated-condition": [ "error" ], // Não negue condições
        "sonarjs/no-identical-functions": [ "error" ], // Não faça funções iguais
        "sonarjs/no-inverted-boolean-check": [ "error" ], // Não faça funções iguais
        "sonarjs/no-nested-switch": [ "error" ], // Não faça switch dentro do outro
        "sonarjs/no-nested-template-literals": [ "error" ], // Não faça string Template dentro de outra
        "sonarjs/no-redundant-boolean": [ "error" ], // Não faça !false ou `boolReturnFunc() || false`
        "sonarjs/prefer-immediate-return": [ "error" ], // Prefira retornar imediatamente a variável
        "sonarjs/prefer-object-literal": [ "error" ], // Prefira declarar dentro do objeto inicial ao invés de injetar
        "sonarjs/prefer-single-boolean-return": [ "error" ], // Retorne a boolean em vez de fazer if e else
        "sonarjs/cognitive-complexity": [ "error", complexity ], // Complexidade do código
        "sonarjs/no-selector-parameter": [ "error" ], // Não faça if com parâmetro boolean (resp única)
        "sonarjs/no-small-switch": [ "error" ], // Switch Pequeno pode ser if-else ou 2 if
        "sonarjs/no-table-as-layout": [ "error" ], // Não Coloque presentation em table html
        "sonarjs/object-alt-content": [ "error" ], // Tag Object tem q ter conteúdo
        "sonarjs/prefer-read-only-props": [ "error" ], // Props react Readonly
        "@stylistic/array-bracket-newline": [ "error", { "multiline": true } ],
        "@stylistic/array-bracket-spacing": [ "error", "always" ],
        "@stylistic/array-element-newline": [
            "error",
            { "consistent": true, "multiline": true },
        ], // Formatação linhas itens array
        "@stylistic/arrow-parens": [ "error", "always" ], // Arrow Function sempre com parentese
        "@stylistic/arrow-spacing": [ "error", { before: true, after: true } ], // Espaço seta arrow function
        "@stylistic/block-spacing": [ "error" ], // Espaço em { return true } e apos as chaves {
        "@stylistic/brace-style": [ "error" ], // Força formatação {}
        "@stylistic/comma-dangle": [
            "error",
            {
                arrays: alwaysMultiline,
                objects: alwaysMultiline,
                imports: alwaysMultiline,
                exports: alwaysMultiline,
                functions: alwaysMultiline,
                importAttributes: alwaysMultiline,
                dynamicImports: alwaysMultiline,
                enums: alwaysMultiline,
                generics: alwaysMultiline,
                tuples: alwaysMultiline,
            },
        ], // Virgula no final de tudo
        "@stylistic/comma-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ], // Espaço apos a virgula
        "@stylistic/comma-style": [ "error", "last" ], // Separa variável por virgula alinhando a direita
        "@stylistic/computed-property-spacing": [ "error", "never" ], // Desliga espaço $a[ 'I' ] ou $a[ ] = 12;
        "@stylistic/curly-newline": [ "error", "always" ], // Quebre conteúdo depois das chaves { do if/else/etc
        "@stylistic/dot-location": [ "error", "property" ], // Coloque o . a esquerda da propriedade
        "@stylistic/eol-last": [ "error", "always" ], // Quebre uma linha no final
        "@stylistic/function-call-argument-newline": [ "error", "consistent" ], // Força formatação parâmetro func
        "@stylistic/function-call-spacing": [ "error", "never" ], // Não use espaço antes dos parens função
        "@stylistic/function-paren-newline": [ "error", "multiline-arguments" ], // Força formatação itens parens
        "@stylistic/generator-star-spacing": [ "error", { before: true, after: false } ], // Espaço Funções Yield
        "@stylistic/implicit-arrow-linebreak": [ "error", "beside" ], // Não quebre arrow function
        "@stylistic/indent": [
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
                flatTernaryExpressions: true,
                ignoreComments: false,
                offsetTernaryExpressions: false,
            },
        ], // Ajuda indent
        "@stylistic/indent-binary-ops": [ "error", indentSize ],
        "@stylistic/key-spacing": [
            "error",
            {
                beforeColon: false,
                afterColon: true,
            },
        ], // De {a:1} para { a: 1 }
        "@stylistic/keyword-spacing": [
            "error",
            {
                before: true,
                after: true,
            },
        ], // Requer espaço apos try {}
        "@stylistic/linebreak-style": [ "error", "unix" ], // Força usar \n apenas em vez de \r\n
        "@stylistic/lines-around-comment": [
            "error",
            {
                beforeLineComment: true,
                allowBlockStart: true,
                allowInterfaceStart: true,
                allowTypeStart: true,
            },
        ], // Linha em branco antes do comentário
        "@stylistic/lines-between-class-members": [
            "error",
            "always",
            { "exceptAfterOverload": true },
        ], // Força linha em branco entre props classe e funções
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
        "@stylistic/max-statements-per-line": [ "error", { max: 1 } ], // Máximo operação em 1 linha
        "@stylistic/member-delimiter-style": [
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
        "@stylistic/multiline-comment-style": [
            "error",
            "starred-block",
        ], // Força /* comentário */ ao invés de // varias vezes
        "@stylistic/multiline-ternary": [
            "error",
            "always-multiline",
        ], // Força múltiplas linhas em ternários múltiplos
        "@stylistic/new-parens": [ "error" ], // New Sempre precisa ter parenteses
        "@stylistic/no-extra-parens": [ "error" ], // Não permite parênteses extra
        "@stylistic/no-extra-semi": [ "error" ], // Não permite ;, duplicadas ou desnecessárias
        "@stylistic/no-floating-decimal": [ "error" ], // Não permite decimais flutuantes sem zero a esquerda.
        "@stylistic/no-mixed-operators": [
            "error",
            {
                "groups": [ [ "&&", "||" ] ],
                "allowSamePrecedence": true,
            },
        ], // Não misture operator && e ||
        "@stylistic/no-mixed-spaces-and-tabs": [ "error" ], // Não misture espaço e tabs
        "@stylistic/no-multi-spaces": [ "error" ], // Nao permite vários espaços if(  i  )
        "@stylistic/no-multiple-empty-lines": [
            "error",
            { max: 1, maxEOF: 0, maxBOF: 0 },
        ], // Não permita varias linhas em branco
        "@stylistic/no-tabs": [ "error" ], // Não use tabs
        "@stylistic/no-trailing-spaces": [ "error" ], // Não permite espaço apos ou antes do ponto
        "@stylistic/no-whitespace-before-property": [ "error" ], // Não permite espaço antes de property
        "@stylistic/nonblock-statement-body-position": [ "error", "beside" ], // If sem chaves deve ser inline
        "@stylistic/object-curly-newline": [
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
                "TSTypeLiteral": {
                    "consistent": true,
                    "minProperties": 4,
                    "multiline": true,
                },
                "TSInterfaceBody": {
                    "consistent": true,
                    "minProperties": 4,
                    "multiline": true,
                },
                "TSEnumBody": {
                    "consistent": true,
                    "minProperties": 4,
                    "multiline": true,
                },
            },
        ], // De {a:1} para { a: 1 }
        "@stylistic/object-curly-spacing": [ "error", "always", { arraysInObjects: true } ], // Espaço declarar objeto
        "@stylistic/object-property-newline": [
            "error",
            {
                allowAllPropertiesOnSameLine: true,
            },
        ], // Quebre todos objetos ou nenhum
        "@stylistic/one-var-declaration-per-line": [ "error", "initializations" ], // 1 var por linha
        "@stylistic/operator-linebreak": [
            "error",
            "before",
            {
                overrides: {
                    "+=": "none",
                    "=": "none",
                    "==": "none",
                    "===": "none",
                },
            },
        ], // Sem quebra de linha em operadores
        "@stylistic/padded-blocks": [
            "error",
            {
                classes: "always",
                blocks: "never",
                switches: "never",
            },
        ], // Força não usar blocos com espaços
        "@stylistic/padding-line-between-statements": [
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
        "@stylistic/quote-props": [ "error", "consistent" ], // Objeto com aspas ou sem consistent
        "@stylistic/quotes": [ "error", "double" ], // Força aspas dupla
        "@stylistic/rest-spread-spacing": [ "error", "never" ], // Não faça fun(... space)
        "@stylistic/semi": [ "error", "always" ], // Força usar ponto-virgula ;
        "@stylistic/semi-spacing": [ "error", { before: false, after: true } ], // Não permite espaço antes do ;
        "@stylistic/semi-style": [ "error", "last" ], // Local do ponto e virgula
        "@stylistic/space-before-blocks": [ "error" ], // Espaço apos antes
        "@stylistic/space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                named: "never",
                asyncArrow: "always",
                catch: "always",
            },
        ], // Não permite espaço antes dos parenteses
        "@stylistic/space-in-parens": [ "error", "never" ], // Não permite espaço entre parenteses
        "@stylistic/space-infix-ops": [ "error" ], // Não permite espaço entre parenteses
        "@stylistic/space-unary-ops": [
            "error",
            {
                words: true, // Espaço apos Await e palavras chaves
                nonwords: false, // Força nao ter espaço antes de operadores unários !, -, +
                overrides: {
                    "new": false,
                    "++": false, // Nao permite espaço no ++
                },
            },
        ],
        "@stylistic/spaced-comment": [
            "error",
            "always",
            {
                exceptions: [ "-", "+" ],
            },
        ], // Força espaço apos do // comentário
        "@stylistic/switch-colon-spacing": [
            "error",
            { "after": true, "before": false },
        ], // Não coloque espaço antes do : case
        "@stylistic/template-curly-spacing": [ "error" ], // Não coloque espaço em template string
        "@stylistic/template-tag-spacing": [ "error", "never" ], // Sem espaço em template " sql`` "
        "@stylistic/type-annotation-spacing": [ "error" ], // Não colocar junto : tipagem
        "@stylistic/type-generic-spacing": [ "error" ], // Formatação tipos genéricos
        "@stylistic/type-named-tuple-spacing": [ "error" ], // Sem espaço tipagem
        "@stylistic/wrap-iife": [ "error", "inside" ], // Coloque parentese em função auto excetuável
        "@stylistic/yield-star-spacing": [ "error", "before" ], // Espaço a esquerda yield

        "@stylistic/jsx-closing-bracket-location": [ "error", "line-aligned" ], // Formata fechamento html
        "@stylistic/jsx-closing-tag-location": [ "error", "line-aligned" ], // Formata fechamento html
        "@stylistic/jsx-curly-brace-presence": [ "error" ], // Parâmetro JSX
        "@stylistic/jsx-curly-newline": [ "error" ], // Parâmetro JSX
        "@stylistic/jsx-curly-spacing": [ "error" ], // Parâmetro JSX
        "@stylistic/jsx-equals-spacing": [ "error", "never" ], // Parâmetro JSX
        "@stylistic/jsx-first-prop-new-line": [ "error", "multiline" ], // Formata props html
        "@stylistic/jsx-function-call-newline": [ "error", "multiline" ], // Formata props html
        "@stylistic/jsx-indent-props": [ "error", indentSize ], // Formata props indent
        "@stylistic/jsx-max-props-per-line": [ "error", { "when": "multiline" } ], // Máximo 1 por linha se multilinha
        "@stylistic/jsx-newline": [ "error", { "prevent": true, "allowMultilines": true } ],
        "@stylistic/jsx-one-expression-per-line": [ "error", { "allow": "single-child" } ],
        "@stylistic/jsx-pascal-case": [ "error", { "allowNamespace": true } ],
        "@stylistic/jsx-quotes": [ "error", "prefer-double" ],
        "@stylistic/jsx-self-closing-comp": [
            "error",
            {
                "component": true,
                "html": true,
            },
        ],
        "@stylistic/jsx-tag-spacing": [ "error", { "afterOpening": "never", "beforeSelfClosing": "always" } ],
        "@stylistic/jsx-wrap-multilines": [ "error" ],
    },
};
