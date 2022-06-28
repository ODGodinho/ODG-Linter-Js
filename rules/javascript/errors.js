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
    },
};
