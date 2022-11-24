module.exports = {
    rules: {
        "regexp/no-contradiction-with-assertion": [ "error" ], // Não coloque opcional em uma das condições
        "regexp/no-control-character": [ "error" ], // Não use caracteres especiais da tabela ASCII 0 - 31
        "regexp/no-dupe-disjunctions": [ "error" ], // Não permite condições duplicadas em regex
        "regexp/no-empty-alternative": [ "error" ], // Não coloque alternativas vazias
        "regexp/no-empty-capturing-group": [ "error" ], // Grupos devem ter assertion
        "regexp/no-empty-character-class": [ "error" ], // Regex que não tem correspondência
        "regexp/no-empty-group": [ "error" ], // Não crie grupos vazios
        "regexp/no-empty-lookarounds-assertion": [ "error" ], // Não crie grupos vazios
        "regexp/no-escape-backspace": [ "error" ], // Não user [] em \b
        "regexp/no-invalid-regexp": [ "error" ], // Não crie regex invalida
        "regexp/no-lazy-ends": [ "error" ], // Não crie regex invalida
        "regexp/no-misleading-unicode-character": [ "error" ], // Não crie regex invalida
        "regexp/no-optional-assertion": [ "error" ], // Sem asserções opcionais
        "regexp/no-potentially-useless-backreference": [ "error" ],
        "regexp/no-super-linear-backtracking": [ "error" ],
        "regexp/no-useless-assertions": [ "error" ],
        "regexp/no-useless-backreference": [ "error" ],
        "regexp/no-useless-dollar-replacements": [ "error" ],
        "regexp/strict": [ "error" ], // Regex strict
        "unicorn/no-instanceof-array": [ "error" ], // Não use instanceof Array
        "constructor-super": [ "error" ], // Bloqueia Super construtor quando invalido
        "getter-return": [ "error" ], // Getter tem q ter return
        "no-class-assign": [ "error" ], // Não atribua variável com nome classe
        "no-compare-neg-zero": [ "error" ], // Não compare com zero negativo
        "no-setter-return": [ "error" ], // Não return em um setter
        "no-const-assign": [ "error" ], // Não re-atribua uma constant
        "no-dupe-class-members": [ "error" ], // Sem métodos duplicados na classe
        "no-dupe-keys": [ "error" ], // Não permite chaves duplicadas array
        "no-dupe-args": [ "error" ], // Não permite argumentos duplicados
        "no-unsafe-finally": [ "error" ], // Finally possivelmente errado
        "no-import-assign": [ "error" ], // Não reatribua variável de import
        "no-loss-of-precision": [ "error" ], // Não permite numero que pode quebrar precisão
        "no-unreachable-loop": [ "error" ], // Não permite unreachable loop,
        "import/no-self-import": [ "error" ], // Não import o próprio arquivo
        "import/export": [ "error" ], // Não permite export de mesmo nome
        "import/no-unresolved": [
            "error",
            {
                "commonjs": true,
                "caseSensitiveStrict": true,
            },
        ], // Import não encontrado
        "import/named": [ "error", { "commonjs": true } ], // Import apenas objetos existente no modulo
        "sonar/argument-type": [ "error" ], // Caso a tipagem no arquivo Js não bate
        "sonar/anchor-precedence": [ "error" ], // Valida melhora de regex
        "sonar/different-types-comparison": [ "error" ], // Não compare tipos diferentes
        "no-invalid-this": [ "error" ], // Desliga invalid this Js
        "no-this-before-super": [ "error" ], // Não faça this antes super
        "no-obj-calls": [ "error" ], // Não execute objetos
        "no-empty-pattern": [ "error" ], // Desestruturar vazio
    },
};
