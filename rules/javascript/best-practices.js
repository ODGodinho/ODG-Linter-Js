const indentSize = 4;

module.exports = {
    rules: {
        "indent": [ "error", indentSize ], // 4 spaces
        "semi": [ "error", "always" ], // Força usar ponto-virgula ;
        "quotes": [ "error", "double" ], // Aspas duplas
        "lines-between-class-members": [ "error", "always" ], // Força linha em branco entre props classe e funções
        "space-before-function-paren": [ "error", {
            anonymous: "never",
            named: "never",
        } ], // Não permite espaço antes dos parenteses
        "no-unused-vars": [ "error", {
            "vars": "all",
            "args": "after-used",
            "caughtErrors": "all",
            "varsIgnorePattern": "^_",
            "argsIgnorePattern": "^_",
        } ],
        "default-param-last": [ "error" ],
        "comma-spacing": [ "error" ],
        "comma-dangle": [ "error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "always-multiline",
        } ], // Virgula no final de tudo
        "no-array-constructor": [ "error" ], // Não permite usar new Array()
        "no-unused-expressions": [ "error", {
            allowTernary: true,
            allowShortCircuit: true,
            enforceForJSX: true,
        } ],
        "no-useless-constructor": [ "error" ], // Não permite construtores desnecessários
        "no-throw-literal": [ "error" ], // Não permite throw "string" ou diferente de classe
        "no-invalid-this": [ "error" ], // Desliga invalid this Js
        "dot-location": [ "error" ], // Object.property ponto junto com a property
        "no-extra-parens": [ "error" ], // Não permite parênteses extra
        "no-extra-semi": [ "error" ], // Não permite ;, duplicadas ou desnecessárias
        "no-empty-function": [ "error" ], // Não permite funções vazias
        "no-duplicate-imports": [ "error" ], // Bloqueia import duplicado
        "import/no-duplicates": [ "error" ], // Bloqueia import duplicado
        "prefer-const": [ "error" ], // Preferir constantes
        "generator-star-spacing": [ "error", { before: true, after: false } ], // Espaço Funções Yield;
        "no-unsafe-optional-chaining": [
            "error",
            { disallowArithmeticOperators: true },
        ], // Protege de optional que pode gerar errors
        "linebreak-style": [ "error", "unix" ], // Força usar \n apenas em vez de \r\n
        "eol-last": [ "error", "always" ], // Força finalizar com \n no final
        "max-len": [ "warn", {
            code: 120,
            ignoreUrls: true,
        } ], // Caracteres máximo por linhas
        "camelcase": [ "error" ], // Força camelCase
        "padded-blocks": [ "error", {
            classes: "always",
            blocks: "never",
            switches: "never",
        } ], // Força não usar blocos com espaços
        "no-multi-assign": [ "error" ], // Força não usar atribuição múltipla
        "array-bracket-spacing": [ "error", "always" ], // Força usar espaço entre chaves
        "keyword-spacing": [ "error", {
            before: true,
            after: true,
        } ], // Requer espaço apos try {}
        "space-before-blocks": [ "error" ], // Requer espaço antes das chaves
        "space-unary-ops": [
            2, {
                words: true, // Espaço apos Await e palavras chaves
                nonwords: false, // Força nao ter espaço antes de operadores unários !, -, +
                overrides: {
                    "new": false,
                    "++": false, // Nao permite espaço no ++
                },
            },
        ],
        "unicode-bom": [ "error", "never" ], // Disabled "unicode-bom"
        "space-in-parens": [ "error", "never" ], // Não permite espaço entre parenteses
        "no-multi-spaces": [ "error" ], // Nao permite vários espaços if(  i  )
        "computed-property-spacing": [ "error", "never" ], // Desliga espaço ao recuperar item $a[ 'I' ] ou $a[ ] = 12;
        "no-useless-concat": [ "error" ], // Desabilita concatenação de strings desnecessárias ex: "a" + "b"
        "no-self-assign": [ "error" ], // Nao se atribua seu próprio valor a variável
        "array-bracket-newline": [ "error", "consistent" ], // Quebra linha Array
        "prefer-arrow-callback": [ "error" ], // Força arrow function
        "arrow-body-style": [ "error", "as-needed" ], // Força arrow function sem body
        "no-empty": [ "error" ], // Não permite blocos vazios (if, while, for, function, etc)
        "no-useless-call": [ "error" ], // Não permite chamadas desnecessárias.call
        "no-useless-catch": [ "error" ], // Não permite catch desnecessários
        "no-useless-return": [ "error" ], // Não permite retornos desnecessários
        "newline-before-return": [ "error" ], // Força retorno de função com \n antes
        "multiline-comment-style": [ "error", "starred-block" ], // Força /* comentário */ ao invés de // varias vezes
        "no-unreachable": [ "error" ], // Não permite unreachable code
        "no-multi-str": [ "error" ], // Não quebre linha dentro de uma string
        "consistent-this": [ "error", "that" ], // Não permite this em locais inconsistente.
        "no-irregular-whitespace": [ "error" ], // Não permite espaços entre palavras
        "dot-notation": "off",
        "no-whitespace-before-property": [ "error" ], // Não permite espaço antes de property
        "no-trailing-spaces": [ "error" ], // Não permite espaço apos ou antes do ponto
        "no-extra-boolean-cast": [
            "error",
            { "enforceForLogicalOperands": true },
        ], // Não permite cast de boolean extra !!!
        "no-constant-condition": [ "error" ], // Não permite condições constantes if (true)
        "no-debugger": [ "error" ], // Não permite usar debugger
        "no-duplicate-case": [ "error" ], // Não permite duplicar case em switch
        "no-empty-character-class": [ "error" ], // Não permite classe de caracteres vazia em regex
        "no-ex-assign": [ "error" ], // Não permite atribuição de exceção
        "no-func-assign": [ "error" ], // Não permite atribuição de função
        "no-inner-declarations": [ "error" ], // Não permite declarações dentro de escopos
        "no-invalid-regexp": [ "error" ], // Não permite expressões regulares inválidas RegExp()
        "no-negated-in-lhs": [ "error" ], // Não permite negação em IN
        "no-regex-spaces": [ "error" ], // Não permite múltiplos espaços em regex utilize
        "no-sparse-arrays": [ "error" ], // Não permite arrays com itens vagos no meio
        "valid-typeof": [ "error" ], // Não permite typeof inválido
        "eqeqeq": [ "error", "always" ], // Usa igual e do mesmo tipo
        "no-extra-label": [ "error" ], // Não permite usar labels extra desnecessárias
        "no-labels": [ "error" ], // Disable Label/GOTO
        "no-floating-decimal": [ "error" ], // Não permite decimais flutuantes sem zero a esquerda.
        "no-native-reassign": [ "error" ], // Não permite reatribuição de funções/vars nativas
        "no-new": [ "error" ], // Não permite usar new sem salva-lo
        "no-new-func": [ "error" ], // Não permite usar new Function()
        "no-redeclare": [ "error" ], // Não permite redeclarar variáveis
        "no-self-compare": [ "error" ], // Não permite comparar com seu próprio valor
        "no-unmodified-loop-condition": [ "error" ], // Loop sem modificar o valor do contador ou check único
        "no-useless-escape": [ "error" ], // Não permite usar escape desnecessárias
        "yoda": [ "error" ], // Força if Variável === "COMPARATION"
        "no-undef-init": [ "error" ], // Não permite variáveis definidas como undefined ao inicializar
        "no-new-require": [ "error" ], // Não permite usar new require()
        "no-new-object": [ "error" ], // Não permite usar new Object
        "prefer-template": [ "error" ], // Prefer template literals over string concatenation
        "no-multiple-empty-lines": [ "error", { "max": 1 } ], // Não permita varias linhas em branco
        "no-async-promise-executor": [ "error" ], // Não permita use função async para executar promise
        "prefer-promise-reject-errors": [ "error" ], // Passe uma Exception em promise ao invés de string/number
        "semi-spacing": [ "error", { before: false, after: true } ], // Não permite espaço antes do ;
        "no-var": [ "error" ], // Não user var prefira let ou const
        "promise/no-new-statics": [ "error" ], // Não permite usar new em static promise
        "promise/no-return-wrap": [ "error" ], // Não use promise.resolve ou reject dentro de then e catch
        "promise/param-names": [ "error" ], // Use nome correto para promise
        "promise/always-return": [ "error" ], // Se a promise não tiver retorno reportar erro
        "promise/no-nesting": [ "warn" ], // Warn se colocar uma then ou catch dentro de outra promise
        "promise/no-return-in-finally": [ "error" ], // No Return in finally
        "promise/valid-params": [ "error" ], // Valida Parâmetros da promise
        "import/newline-after-import": [ "error", { count: 1 } ], // Linhas em branco apos o import
        "operator-linebreak": [
            "error",
            "before",
            { overrides: { "+=": "none", "=": "none" } },
        ], // Sem quebra de linha em operadores
        "array-callback-return": [ "error" ], // Força returno em array callback
        "space-infix-ops": [ "error" ], // Espaço em operadores
        "curly": [ "off" ], // Utilize chaves em multi linhas
        "no-useless-rename": [ "error" ], // Disable Rename desnecessários
        "handle-callback-err": [ "error" ], // Funções que recebem error deve ser tratado
        "n/handle-callback-err": [
            "error",
            "^(err|error|\\w+Error|\\w+Exception|exception)$",
        ], // Funções que recebem error deve ser tratado
        "new-cap": [ "error", { newIsCap: true } ], // New require first Letter uppercase
        "no-caller": [ "error" ], // Não permite usar callee
        "no-script-url": [ "error" ], // Não permite usar script url
        "no-undef": [ "error", { "typeof": true } ], // Não chame variáveis não definidas
        "func-names": [ "error", "as-needed" ], // Nome de funções somente quando necessário
        "no-param-reassign": [ "error" ], // Não permite reatribuição de parâmetros
        "quote-props": [ "error", "consistent" ], // Aspas no objeto somente se algum for necessário
        "block-scoped-var": [ "error" ], // INFO: Bloqueia Vars for escopo, mas ainda sim prefira Lets
        "brace-style": [ "error" ], // Força formatação {}
        "comma-style": [ "error", "last" ], // Separa variável por virgula alinhando a direita
        "key-spacing": [ "error" ], // Espaçamento propriedade objects
        "object-property-newline": [ "error", {
            allowAllPropertiesOnSameLine: true,
        } ], // Quebre todos objetos ou nenhum
        "regexp/confusing-quantifier": [ "error" ], // No Especifique quantidade em opcional
        "regexp/control-character-escape": [ "error" ], // Use \r ao invés de \u0009
        "regexp/negation": [ "error" ], // This rule enforces use of \D, \W, \S and \P on negation.
        "regexp/no-dupe-characters-character-class": [ "error" ], // Rvita condições duplicada em []
        "regexp/no-invisible-character": [ "error" ], // Evita colocar tab espaço em regex
        "regexp/no-legacy-features": [ "error", {
            staticProperties: [
                "input", "$_",
                "lastMatch", "$&",
                "lastParen", "$+",
                "leftContext", "$`",
                "rightContext", "$'",
                "$1", "$2", "$3", "$4", "$5", "$6", "$7", "$8", "$9",
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
        "max-statements-per-line": [ "error", { "max": 1 } ], // Máximo operação em 1 linha
        "arrow-parens": [ "error", "always" ], // Arrow Function sempre com parentese
        "padding-line-between-statements": [
            "error",
            { "blankLine": "always", "prev": "*", "next": "export" }, // Uma linha em branco antes do export
            { "blankLine": "always", "prev": "export", "next": "*" }, // Uma linha em branco apos do export
            { "blankLine": "always", "prev": "*", "next": "class" }, // Uma linha em branco antes da classe
            { "blankLine": "always", "prev": "class", "next": "*" }, // Uma linha em branco Apos da classe
        ],
        "filenames/match-regex": [
            "error",
            "^[a-zA-Z][a-zA-Z0-9_-]+((\\.[a-z]+)?)+$",
        ], // Nome de arquivo deve ser alfanumérico
        "filenames/match-exported": [ "error", "^[a-zA-Z0-9_-]+$" ], // Nome do arquivo igual export default
        "unicorn/catch-error-name": [
            "error",
            {
                "name": "exception",
                "ignore": [
                    "^error\\w*$",
                    "^error$",
                    "^exception\\w*$",
                ],
            },
        ], // Chame todos os catch erros de exception
        "unicorn/consistent-destructuring": [ "error" ], // Usa destructuring ou usa acesso direto sem alternar
        "unicorn/consistent-function-scoping": [ "error" ], // Remova sub função quando possível
        "unicorn/error-message": [ "error" ], // Exception tem q ter mensagem
        "unicorn/escape-case": [ "error" ], // Ao escapar use letra maiúscula hexadecimal
        "unicorn/new-for-builtins": [ "error" ], // Use new sempre em Promise, Array, Error, RegExp
        "unicorn/no-abusive-eslint-disable": [ "error" ], // Não desabilite todas as regras ESLInt
        "unicorn/no-array-for-each": [ "error" ], // Prefira forOf ao invés Foreach
        "unicorn/no-array-method-this-argument": [ "error" ], // Evita this array que pode falhar
        "unicorn/no-array-push-push": [ "error" ], // Faça apenas 1 push ao invés de vários
        "unicorn/no-await-expression-member": [ "error" ], // Não use (await getObject()).property;
        "unicorn/no-empty-file": [ "error" ], // Não crie arquivo vazio
        "unicorn/no-for-loop": [ "error" ], // Use ForOf em vez de for
        "unicorn/no-invalid-remove-event-listener": [ "error" ], // Não use removeEventListener Invalid
        "no-lonely-if": [ "error" ], // Não faz if cadeia desnecessário
        "unicorn/no-lonely-if": [ "error" ], // Não faz if cadeia desnecessário
        "unicorn/no-new-buffer": [ "error" ], // Não faz if cadeia desnecessário
        "unicorn/no-this-assignment": [ "error" ], // Desabilita invalido this
        "unicorn/no-useless-fallback-in-spread": [ "error" ], // Desabilita não usado opcional literals ...
        "unicorn/no-useless-length-check": [ "error" ], // Desabilita não usado opcional literals ...
        "unicorn/no-useless-spread": [ "error" ], // Desabilita ... em array desnecessário
        "unicorn/no-useless-switch-case": [ "error" ], // Desabilita Case não usado
        "unicorn/no-useless-undefined": [ "error" ], // Desabilita undefined desnecessário
        "unicorn/number-literal-case": [ "error" ],
        "unicorn/prefer-add-event-listener": [ "error" ], // Prefira AddEventListener em vez de onclick props
        "unicorn/prefer-array-find": [ "error" ], // Prefira array Find quando possível
        "unicorn/prefer-array-index-of": [ "error" ], // Prefira usar IndexOf
        "unicorn/prefer-array-some": [ "error" ], // Prefira usar Array some invés de length
        "unicorn/prefer-dom-node-append": [ "error" ], // Prefira append no DOM
        "unicorn/prefer-dom-node-remove": [ "error" ], // Prefira remove invés removeChild
        "unicorn/prefer-includes": [ "error" ], // Prefira usar include ao invés IndexOf
        "unicorn/prefer-keyboard-event-key": [ "error" ], // Prefira use Key invés de KeyCode
        "unicorn/prefer-optional-catch-binding": [ "error" ], // Omita o parâmetro .catch se não usado
        "unicorn/prefer-prototype-methods": [ "error" ], // Omita o parâmetro .catch se não usado
        "unicorn/prefer-query-selector": [ "error" ], // Prefira QuerySelector
        "unicorn/prefer-regexp-test": [ "error" ], // Prefira Regex test invés match
        "unicorn/prefer-spread": [ "error" ], // Prefira destructuring
        "unicorn/prefer-string-replace-all": [ "error" ], // Prefira replace ao invés de regex
        "unicorn/prefer-string-starts-ends-with": [ "error" ], // Prefira startWith ao invés de regex
        "unicorn/prefer-string-trim-start-end": [ "error" ], // Prefira trim Start/End invés de Left/Right
        "unicorn/prefer-switch": [ "error" ], // Prefira switch
        "unicorn/prefer-ternary": [ "error" ], // Prefira ternário em vez de if else
        "unicorn/prevent-abbreviations": [ "error" ], // Prefira ternário em vez de if else
        "unicorn/relative-url-style": [ "error" ], // Não coloque ./ em new URL
        "unicorn/require-array-join-separator": [ "error" ], // Sempre passe parâmetro Array#join
        "unicorn/require-number-to-fixed-digits-argument": [ "error" ], // Passe quantidade em ToFixed
        "unicorn/template-indent": [ "error" ], // Indenter em template string
        "no-shadow": [ "error" ], // Erro caso ja esteja declarado escopo a cima
        "no-delete-var": [ "error" ], // Não delete variáveis
        "no-lone-blocks": [ "error" ], // Não crie bloco desnecessários
        "no-proto": [ "error" ], // Não use __proto__ depreciada desde ECMA 3.1
        "id-length": [ "error", { "min": 3 } ], // Tamanho mínimo das variáveis
        "max-depth": [ "error", { "max": 3 } ], // Tamanho máximo do Hadouken
        "max-params": [ "error", { "max": 3 } ], // Máximo de parâmetros
        "max-statements": [ "error" ], // Máximo atribuição em função
        "operator-assignment": [ "error", "always" ], // Prefira atribuição curtas +=
        "prefer-rest-params": [ "error" ], // Prefira ..args em vez de arguments
        "no-useless-computed-key": [ "error" ], // Chave de objeto computada de forma desnecessária
        "symbol-description": [ "error" ], // Symbol deve ter descrição
        "no-return-await": [ "error" ], // Não coloque await no return
        "max-classes-per-file": [ "error", 1 ], // Apenas 1 classe por arquivo
        "no-constructor-return": [ "error" ], // Construtor não deve ter um retorno
        "prefer-exponentiation-operator": [ "error" ], // Prefira ** em vez de Math.pow
        "prefer-object-spread": [ "error" ], // Prefira Desestruturar para concatenar objetos
        "default-case-last": [ "error" ], // Default switch case por ultimo
        "no-new-symbol": [ "error" ], // Use apenas Symbol()
        "accessor-pairs": [ "error" ], // Crie o get e set
        "no-promise-executor-return": [ "error" ], // Não coloque um retorno em new Promise()
        "no-nonoctal-decimal-escape": [ "error" ], // Não coloque scape em numero decimais
        "prefer-destructuring": [ "error" ], // Prefira desestruturar array ao invés
        "no-magic-numbers": [
            "warn",
            { "ignore": [ 0, 1, -1 ], "enforceConst": true, "ignoreDefaultValues": true },
        ], // Não permite numero mágicos
        "complexity": [ "error", { "max": 10 } ], // Complexidade código
        "func-style": [ "error", "declaration" ], // Declare function name() em vez de var = function()
        "no-else-return": [ "error" ], // Não use else se tem retorno
        "use-isnan": [
            "error",
            { "enforceForSwitchCase": true, "enforceForIndexOf": true },
        ], // Use a função isNan
        "prefer-regex-literals": [ "error", { "disallowRedundantWrapping": true } ], // Use a função isNan
        "import/no-absolute-path": [ "error" ], // Não informa caminho absoluto
        "import/no-webpack-loader-syntax": [ "error" ], // Bloqueia syntax webpack import
        "import/no-named-as-default": [ "error" ],
        "import/no-named-as-default-member": [ "error" ],
        "import/no-mutable-exports": [ "error" ], // Não export var nem let
        "import/no-amd": [ "error" ], // Não require, define array
        "import/max-dependencies": [ "error", {
            "max": 25,
            "ignoreTypeImports": false,
        } ], // Máximo de 25 dependências
        "import/no-import-module-exports": [ "error" ], // Import e export CommanJs bloqueado
        "import/no-useless-path-segments": [ "error", { "commonjs": true } ], // Não volte pasta desnecessária import
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "**/*.e2e-spec.*",
                    "**/*.e2e.*",
                    "**/*.spec.*",
                    "**/*.test.*",
                    "**/.eslintrc.{js,cjs,ts}",
                    "**/Gruntfile{,.js,.ts}",
                    "**/__mocks__/**",
                    "**/__tests__/**",
                    "**/cypress.config.{js,ts}",
                    "**/gulpfile.*.{js,ts}",
                    "**/gulpfile.{js,ts}",
                    "**/jest.config.{js,ts}",
                    "**/jest.setup.{js,ts}",
                    "**/karma.conf.{js,ts}",
                    "**/nuxt.config.{js,ts}",
                    "**/protractor.conf.*.{js,ts}",
                    "**/protractor.conf.{js,ts}",
                    "**/rollup.config.*.{js,ts}",
                    "**/rollup.config.{js,ts}",
                    "**/setupTests.{js,ts}",
                    "**/spec/**",
                    "**/test/**",
                    "**/tests/**",
                    "**/vite.config.{js,ts}",
                    "**/vue.config.{js,ts}",
                    "**/webpack.config.*.{js,ts}",
                    "**/webpack.config.{js,ts}",
                ],
                "optionalDependencies": true,
                "peerDependencies": false,
                "bundledDependencies": false,
            },
        ], // Não dependa de pacotes em devDependencies
        "import/order": [
            "error",
            {
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "unknown",
                    "parent",
                    "sibling",
                    "index",
                ],
                "newlines-between": "always",
            },
        ], // Força essa ordem no import
        "import/no-anonymous-default-export": [
            "error",
            { "allowCallExpression": false },
        ],
        "unicorn/no-console-spaces": [ "error" ], // Separe por virgula em vez de colocar espaço no console
        "unicorn/no-hex-escape": [ "error" ], // Use \u001B em vez de \x1B
        "unicorn/prefer-array-flat-map": [ "error" ], // Prefira FlatMap in vez de map().flat().
        "unicorn/prefer-array-flat": [ "error" ], // Prefira usar array Flat
        "array-func/prefer-flat": [ "error" ], // Não passe parâmetro desnecessário
        "unicorn/prefer-string-slice": [ "error" ], // Use slice em vez de substr ou substring
        "unicorn/prefer-negative-index": [ "error" ], // Use slice em vez de substr ou substring
        "unicorn/prefer-modern-dom-apis": [ "error" ], // Prefira usar o DOM moderno
        "unicorn/prefer-number-properties": [ "error" ], // Prefira Number.numberVar() in vez de numberVar()
        "unicorn/numeric-separators-style": [ "error" ], // Separe Numero com Underline
        "unicorn/prefer-default-parameters": [ "error" ], // Prefira parâmetros padrões
        "unicorn/prefer-node-protocol": [ "error" ], // Prefira node: antes do import
        "unicorn/prefer-code-point": [ "error" ], // Prefira codePointAt no lugar de charCodeAt
        "unicorn/no-thenable": [ "error" ], // Não crie os nome com o nome Then
        "unicorn/no-unreadable-iife": [ "error" ], // Ternários não legíveis com funções
        "unicorn/prefer-native-coercion-functions": [ "error" ], // Prefira função cast nativa
        "unicorn/prefer-logical-operator-over-ternary": [ "error" ], // Mude "a ? a : b" para "a || b"
        "unicorn/prefer-event-target": [ "error" ], // Use EventTarget no Lugar de EventEmitter
        "unicorn/prefer-export-from": [ "error", { "ignoreUsedVariables": true } ], // Prefira Export From
        "array-func/from-map": [ "error" ], // Use .map invés do segundo parâmetro do From
        "array-func/no-unnecessary-this-arg": [ "error" ], // Não passe parâmetro desnecessário
        "array-func/avoid-reverse": [ "error" ], // Não passe parâmetro desnecessário
        "sonar/array-callback-without-return": [ "error" ], // Não use new Array
        "sonar/bool-param-default": [ "error" ], // Param do tipo boolean deve ter um valor padrão e não optional
        "sonar/call-argument-line": [ "error" ], // Chamada função anonima auto executável deve ter ;
        "sonar/class-name": [ "error", { format: "^[A-Z][a-zA-Z0-9]*$" } ], // Convenção nome Classe
        "sonar/class-prototype": [ "error" ], // No Prototype in class
        "sonar/comma-or-logical-or-case": [ "error" ], // Switch Case logica invalida
        "sonar/conditional-indentation": [ "error" ], // Formatação IF
        "sonar/deprecation": [ "warn" ], // Alerta em funções depreciadas
        "object-curly-spacing": [ "error", "always", { "arraysInObjects": true } ],
    },
};
