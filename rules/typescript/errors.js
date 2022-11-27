module.exports = {
    rules: {
        "constructor-super": [ "off" ], // Bloqueia Super construtor quando invalido
        "getter-return": [ "off" ], // Getter tem q ter return
        "no-class-assign": [ "off" ], // Não atribua variável com nome classe
        "no-setter-return": [ "off" ], // Não return em um setter
        "no-dupe-class-members": [ "off" ], // Sem métodos duplicados na classe
        "sonar/argument-type": [ "off" ], // Caso a tipagem no arquivo Js não bate
        "no-invalid-this": [ "off" ], // Desliga invalid this Js
        "@typescript-eslint/no-invalid-this": [ "error" ], // Não permite this inválido
        "no-unused-expressions": [ "off" ], // Não permite expressões desnecessárias
        "@typescript-eslint/no-unused-expressions": [ "error", {
            allowTernary: true,
            enforceForJSX: true,
            allowShortCircuit: true,
        } ],
        "no-use-before-define": [ "off" ], // Não use antes de definir
        "@typescript-eslint/no-use-before-define": [ "error" ], // Não use antes de definir
    },
};
