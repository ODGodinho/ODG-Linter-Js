const indentSize = 4;

module.exports = {
    rules: {
        "indent": [ "error", indentSize, {
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
        } ], // 4 spaces
        "quotes": [ "error", "double" ], // Aspas duplas
        "capitalized-comments": [ "error" ], // Comentários devem ser iniciados em letras maiúsculas
        "space-before-function-paren": [ "error", {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
        } ], // Não permite espaço antes dos parenteses
        "dot-location": [ "error", "property" ], // Object.property ponto junto com a property
        "no-extra-parens": [ "error" ], // Não permite parênteses extra
        "no-extra-semi": [ "error" ], // Não permite ;, duplicadas ou desnecessárias
        "linebreak-style": [ "error", "unix" ], // Força usar \n apenas em vez de \r\n
        "max-len": [ "warn", {
            code: 120,
            ignoreUrls: true,
        } ], // Caracteres máximo por linhas
        "eol-last": [ "error", "always" ], // Força finalizar com \n no final
        "array-bracket-spacing": [ "error", "always" ], // Força usar espaço entre chaves
        "unicode-bom": [ "error", "never" ], // Disabled "unicode-bom"
        "no-self-assign": [ "error" ], // Nao se atribua seu próprio valor a variável
        "array-bracket-newline": [ "error", "consistent" ], // Quebra linha Array
        "no-irregular-whitespace": [ "error" ], // Não permite espaços entre palavras
        "no-floating-decimal": [ "error" ], // Não permite decimais flutuantes sem zero a esquerda.
        "semi-spacing": [ "error", { before: false, after: true } ], // Não permite espaço antes do ;
        "no-undef": [ "error", { "typeof": true } ], // Não chame variáveis não definidas
        "regexp/negation": [ "error" ], // This rule enforces use of \D, \W, \S and \P on negation.
        "regexp/confusing-quantifier": [ "error" ], // No Especifique quantidade em opcional
        "regexp/control-character-escape": [ "error" ], // Use \r ao invés de \u0009
        "regexp/no-dupe-characters-character-class": [ "error" ], // Rvita condições duplicada em []
        "regexp/no-invisible-character": [ "error" ], // Evita colocar tab espaço em regex
        "regexp/no-legacy-features": [ "error", {
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
        } ],
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
        // "regexp/prefer-regexp-exec": [ "error" ], // Prefira exec em regex // ? Desabilitado falso positivo
        "unicorn/no-empty-file": [ "error" ], // Não crie arquivo vazio
        "no-magic-numbers": [
            "warn",
            { "ignore": [ 0, 1, -1 ], "enforceConst": true, "ignoreDefaultValues": true },
        ], // Não permite numero mágicos
        "semi-style": [ "error", "last" ], // Local do ponto e virgula
        "no-negated-condition": [ "error" ], // Não negue condições
        "sonar/regex-complexity": [ "error" ], // Regex Complexidade
        "sonarjs/no-identical-functions": [ "error" ], // Não faça funções iguais
        "sonarjs/no-inverted-boolean-check": [ "error" ], // Não faça funções iguais
        "sonarjs/no-nested-switch": [ "error" ], // Não faça switch dentro do outro
        "sonarjs/no-nested-template-literals": [ "error" ], // Não faça string Template dentro de outra
        "sonarjs/no-redundant-boolean": [ "error" ], // Não faça !false ou `boolReturnFunc() || false`
        "sonarjs/prefer-immediate-return": [ "error" ], // Prefira retornar imediatamente a variável
        "sonarjs/prefer-object-literal": [ "error" ], // Prefira declarar dentro do objeto inicial ao invés de injetar
        "sonarjs/prefer-single-boolean-return": [ "error" ], // Retorne a boolean em vez de fazer if e else
        "no-multiple-empty-lines": [
            "error",
            { "max": 1, "maxEOF": 0, "maxBOF": 0 },
        ], // Não permita varias linhas em branco
    },
};
