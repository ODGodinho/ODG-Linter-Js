module.exports = {
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
                    "regex": "import(.*{\\s*}.*)from.*\\n",
                    "replacement": {
                        "function":
                            "return $[1].replace(/\\s/g, '') !== '{}' ? $[0].replace(/,?\\s{\\s*}\\s/, ' ') : ''",
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
        "sonarjs/no-collection-size-mischeck": [ "error" ], // Não atribua void em uma variável
        "sonarjs/no-duplicate-string": [ "error" ], // Não permite string duplicadas
        "sonarjs/no-duplicated-branches": [ "error" ], // Em vez de if else igual faça um ||
        "sonarjs/no-gratuitous-expressions": [ "error" ], // Não faça a mesma condição dentro de outra
        "sonarjs/no-unused-collection": [ "error" ], // Não faça array que não é usado
        "regexp/no-extra-lookaround-assertions": [ "error" ], // Look around invalido em regex
    },
};
