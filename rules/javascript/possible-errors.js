module.exports = {
    rules: {
        "no-extra-bind": [ "error" ], // Não use bind desnecessário
        "no-global-assign": [ "error" ], // Não atribua propriedade globais
        "require-yield": [ "error" ], // Coloque yield em generator functions
        "no-template-curly-in-string": [ "error" ], // Não faça templete string de forma incorreta
        "no-dupe-else-if": [ "error" ], // Não permite elseif duplicado
        "no-useless-backreference": [ "error" ], // Bloqueia regex com referencia inútil
        "no-unused-private-class-members": [ "error" ], // Métodos privados não sendo usados
        "no-constant-binary-expression": [ "error" ], // Desabilita expressões comparação q afeta o valor da variável
        "no-unneeded-ternary": [ "error" ], // Ternário Desnecessários
        "no-unsafe-negation": [ "error" ], // Não permite negações invalidas
        "sonar/duplicates-in-character-class": [ "error" ], // Regex possible errors
        "sonar/empty-string-repetition": [ "error" ], // Regex possible errors
        // "import/no-cycle": [ "error" ], // Não faça import circular
        "unicorn/no-unused-properties": [ "warn" ], // Informe caso um campo não esteja sendo usado.
        "unicorn/text-encoding-identifier-case": [ "error" ], // Encode de texto no formato correto
        "sonar/arguments-order": [ "error" ], // Evite possíveis erros com ordem argumento
        "sonar/array-callback-without-return": [ "error" ], // Função callback de array devem ter retorno
        "sonar/assertions-in-tests": [ "error" ], // Teste devem ter asserts
        "sonar/chai-determinate-assertion": [ "error" ], // Previne teste chai que pode dar mais de um caso de assert
        "sonar/disabled-timeout": [ "error" ], // Não permite desligar timeout de mocha
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
                    "message": "errorMessageN",
                    "regex": "import(.*{\\s*}.*)from.*\\n",
                    "replacement": {
                        "function":
                            "return $[1].replace(/\\s/g, '') !== '{}' ? $[0].replace(/,?\\s{\\s*}\\s/, ' ') : ''",
                    },
                }, // BLoqueia import vazios
            ],
        ],
        "sonar/generator-without-yield": [ "error" ], // Força ter yield em funções generator
        "sonar/existing-groups": [ "error" ], // Verifica se o grupo da regex existe
        "sonar/destructuring-assignment-syntax": [ "error" ], // Força desestruturação
        "sonar/function-inside-loop": [ "error" ], // Não faça função loop
        "sonar/index-of-compare-to-positive-number": [ "error" ], // Não faça index of > 0 use >= 0
        "sonar/no-commented-code": [ "error" ], // Não Comente código
        "sonar/no-duplicate-in-composite": [ "error" ], // Não Repeat tipos
        "for-direction": [ "error" ], // Não faça for contador infinito.
        "sonar/no-equals-in-for-termination": [ "error" ], // Loop Infinitos
        "sonar/no-in-misuse": [ "error" ], // Não use in em array
        "sonar/no-incomplete-assertions": [ "error" ], // Sem assert incompleto
        "sonar/no-incorrect-string-concat": [ "error" ], // Não concatene numero com string
        "sonar/no-infinite-loop": [ "error" ], // Não faça loop infinito
        "sonar/no-invariant-returns": [ "error" ], // Não faça loop infinito
        "sonar/no-misleading-array-reverse": [ "error" ], // Não salva array.revert variável
        "sonar/strings-comparison": [ "error" ], // Não faça comparação de string com < ou >
        "sonar/useless-string-operation": [ "error" ], // Não use função string sem salvar variável
    },
};
