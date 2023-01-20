module.exports = {
    rules: {
        "regexp/no-contradiction-with-assertion": [ "error" ], // Não coloque opcional em uma das condições
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
        "no-useless-computed-key": [ "error" ], // Chave de objeto computada de forma desnecessária
        "no-useless-constructor": [ "error" ], // Não permite construtores desnecessários
        "no-useless-call": [ "error" ], // Não permite chamadas desnecessárias.call
        "no-useless-catch": [ "error" ], // Não permite catch desnecessários
        "no-useless-return": [ "error" ], // Não permite retornos desnecessários
        "no-useless-escape": [ "error" ], // Não permite usar escape desnecessárias
        "no-useless-rename": [ "error" ], // Disable Rename desnecessários
        "no-unused-expressions": [ "error", {
            allowTernary: true,
            allowShortCircuit: true,
            enforceForJSX: true,
        } ],
        "no-use-before-define": [
            "error",
            {
                "classes": true,
            },
        ], // Não use antes de definir
        "sonar/in-operator-type-error": [ "error" ], // Não use IN em tipos primitivos
        "sonar/inconsistent-function-call": [ "error" ], // Não use IN em tipos primitivos
        "sonar/no-associative-arrays": [ "error" ], // Não atribua a um array
        "sonar/no-same-argument-assert": [ "error" ], // Não faça assert com mesmo param
        "sonar/no-useless-intersection": [ "error" ], // Não faça assert com mesmo param
        "sonar/stateful-regex": [ "error" ], // Não faça regex global mais de 1 vez
        "sonar/super-invocation": [ "error" ], // Não faça mais de 1 super
        "regexp/no-misleading-capturing-group": [ "error" ], // Não use grupos de captura enganosos
    },
};
