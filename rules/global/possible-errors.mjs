export default {
    rules: {
        "no-extra-bind": [ "error" ], // Não use bind desnecessário
        "no-global-assign": [ "error" ], // Não atribua propriedade globais
        "require-yield": [ "error" ], // Coloque yield em generator functions
        "no-dupe-else-if": [ "error" ], // Não permite elseif duplicado
        "no-useless-backreference": [ "error" ], // Bloqueia regex com referencia inútil
        "no-unused-private-class-members": [ "error" ], // Métodos privados não sendo usados
        "no-constant-binary-expression": [ "error" ], // Desabilita expressões comparação q afeta o valor da variável
        "no-unneeded-ternary": [ "error" ], // Ternário Desnecessários
        "no-unsafe-negation": [ "error" ], // Não permite negações invalidas
        // "import/no-cycle": [ "error" ], // Não faça import circular
        "unicorn/no-unused-properties": [ "warn" ], // Informe caso um campo não esteja sendo usado.
        "unicorn/text-encoding-identifier-case": [ "error" ], // Encode de texto no formato correto
        "no-empty-static-block": [ "error" ], // Não faça static{ } vazio
        "no-fallthrough": [ "error" ], // Se misturar 2 cases no switch coloque comentário // falls through
        "no-useless-concat": [ "error" ], // Desabilita concatenação de strings desnecessárias ex: "a" + "b"
        "no-octal-escape": [ "error" ], // Não use 071
        "no-octal": [ "error" ], // Use \ em unicode e hexadecimal
        "no-case-declarations": [ "error" ], // Use chaves em caso de declaração em switch case
        "regex/invalid": [
            "error",
            [
                {
                    "id": "EmptyImport",
                    "message": "Empty import is not allowed",
                    "regex": String.raw`import(.*{\s*}.*)from.*\n`,
                    "replacement": {
                        "function":
                            String.raw`return $[1].replace(/\s/g, '') !== '{}' ? $[0].replace(/,?\s{\s*}\s/, ' ') : ''`,
                    },
                }, // BLoqueia import vazios
            ],
        ],
        "for-direction": [ "error" ], // Não faça for contador infinito.
        "sonarjs/no-all-duplicated-branches": [ "error" ], // Não faça condições duplicadas
        "sonarjs/no-element-overwrite": [ "error" ], // Não sobrescreva variável de forma desnecessária
        "sonarjs/no-empty-collection": [ "error" ], // Não interaja com array vazios
        "sonarjs/no-extra-arguments": [ "error" ], // Não passe argumentos extra
        "sonarjs/no-identical-expressions": [ "error" ], // Não faça condições iguais
        "sonarjs/no-ignored-return": [ "error" ], // Use retorno das funções
        "sonarjs/no-use-of-empty-return-value": [ "error" ], // Não atribua void em uma variável
        "sonarjs/no-duplicate-string": [ "error" ], // Não permite string duplicadas
        "sonarjs/no-duplicated-branches": [ "error" ], // Em vez de if else igual faça um ||
        "sonarjs/no-gratuitous-expressions": [ "error" ], // Não faça a mesma condição dentro de outra
        "sonarjs/no-unused-collection": [ "error" ], // Não faça array que não é usado
        "sonarjs/anchor-precedence": [ "error" ], // Não faça array que não é usado
        "sonarjs/arguments-order": [ "error" ], // Impede paramentos fora de ordem
        "sonarjs/argument-type": [ "error" ], // Passe o tipo correto de cada argumento
        "sonarjs/array-callback-without-return": [ "error" ], // Precisa de return itens de array
        "sonarjs/generator-without-yield": [ "error" ], // Função generator yield teve ter retorno
        "sonarjs/jsx-no-leaked-render": [ "error" ], // Valida Print em JSX de boolean
        "sonarjs/no-alphabetical-sort": [ "error" ], // Não ordene em ordem alfabética
        "sonarjs/no-array-delete": [ "error" ], // Não use delete no array
        "sonarjs/no-commented-code": [ "error" ], // Não use código comentado
        "sonarjs/no-empty-after-reluctant": [ "error" ], // Regex n pode resultar em string vazia
        "sonarjs/no-equals-in-for-termination": [ "error" ], // Previne for infinitos
        "sonarjs/no-identical-conditions": [ "error" ], // Não faça condições iguais em if e elseif
        "sonarjs/no-implicit-global": [ "error" ], // Não acesse variável global inexistente no arquivo
        "sonarjs/no-in-misuse": [ "error" ], // Use includes ao indez de in em array
        "sonarjs/no-misleading-array-reverse": [ "error" ], // Não salve array revert em variáveis
        "sonarjs/no-misleading-character-class": [ "error" ], // Regex replace possíveis bugs
        "sonarjs/no-try-promise": [ "error" ], // TryCatch apenas com promise sem await dentro
        "sonarjs/no-uniq-key": [ "error" ], // Key react consistent
        "sonarjs/no-useless-intersection": [ "error" ], // Não Coloque coisas desnecessárias nos types
        "sonarjs/null-dereference": [ "error" ], // Não acesse null como object
        "sonarjs/operation-returning-nan": [ "error" ], // Valida Matemática dado errado
        "sonarjs/non-number-in-arithmetic-expression": [ "error" ], // Valida Matemática dado errado
        "sonarjs/reduce-initial-value": [ "error" ], // Reduce tem q ter o segundo parâmetro
        "sonarjs/stateful-regex": [ "error" ], // Valida regex podem ser sempre false
        "sonarjs/super-invocation": [ "error" ], // Não chama super mais de 1 vez
        "sonarjs/table-header": [ "error" ], // Table html deve ter header
        "sonarjs/table-header-reference": [ "error" ], // Table html deve ter header
        "unicorn/consistent-existence-index-check": [ "error" ], // Valide o indexOf() de forma correta
        "unicorn/consistent-date-clone": [ "error" ], // Se clonar uma data clone o objeto completo
        "unicorn/consistent-assert": [ "error" ], // Use assert.ok ao invés de assert(value)
        "unicorn/no-unnecessary-array-splice-count": [ "error" ], // N faça splice com .length ele ja pega tudo
        "unicorn/no-useless-error-capture-stack-trace": [ "error" ], // N faça Error.captureStackTrace se n precisa
        "unicorn/no-unnecessary-polyfills": [ "error" ], // Valida recursos suportados
        "regexp/no-extra-lookaround-assertions": [ "error" ], // Look around invalido em regex
        "n/no-unsupported-features/es-builtins": [ "error", { "ignores": [] } ],
        "n/no-unsupported-features/es-syntax": [ "error", { "ignores": [] } ],
        "n/no-unsupported-features/node-builtins": [ "error", { "ignores": [] } ],
    },
};
