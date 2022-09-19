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
    },
};
