module.exports = {
    rules: {
        "no-extra-bind": [ "error" ], // Não use bind desnecessário
        "no-global-assign": [ "error" ], // Não atribua propriedade globais
        "require-yield": [ "error" ], // Coloque yield em generator functions
        "no-template-curly-in-string": [ "error" ], // Não faça templete string de forma incorreta
        "no-dupe-else-if": [ "error" ], // Não permite elseif duplicado
        "no-useless-backreference": [ "error" ], // Bloqueia regex com referencia inútil
    },
};
