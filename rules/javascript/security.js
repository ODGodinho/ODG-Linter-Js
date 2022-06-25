module.exports = {
    rules: {
        "no-eval": [ "error" ], // Não permite usar eval
        "security/detect-unsafe-regex": [ "error" ], // Bloqueia Algumas regex que podem gerar Falhas Segurança
        "security/detect-buffer-noassert": [ "error" ], // Buffer sem noAssert não são permitidos
        "security/detect-child-process": [ "error" ], // Não use exec ProcessChild
        "security/detect-disable-mustache-escape": [ "error" ], // Não use object.escapeMarkup = false
        "security/detect-no-csrf-before-method-override": [ "error" ], // Valida CSRF antes override express
        "security/detect-non-literal-fs-filename": [ "error" ],
        "security/detect-pseudoRandomBytes": [ "error" ], // Não use pseudo Random
        "unicorn/no-document-cookie": [ "error" ], // Não setCookie pelo document.cookie
    },
};
