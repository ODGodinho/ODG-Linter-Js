module.exports = {
    rules: {
        "no-eval": [ "error" ], // Não permite usar eval
        "no-implied-eval": [ "error" ], // Bloqueia eval implícito
        "security/detect-unsafe-regex": [ "error" ], // Bloqueia Algumas regex que podem gerar Falhas Segurança
        "security/detect-buffer-noassert": [ "error" ], // Buffer sem noAssert não são permitidos
        "security/detect-child-process": [ "error" ], // Não use exec ProcessChild
        "security/detect-disable-mustache-escape": [ "error" ], // Não use object.escapeMarkup = false
        "security/detect-no-csrf-before-method-override": [ "error" ], // Valida CSRF antes override express
        "security/detect-non-literal-fs-filename": [ "error" ],
        "security/detect-pseudoRandomBytes": [ "error" ], // Não use pseudo Random
        "unicorn/no-document-cookie": [ "error" ], // Não setCookie pelo document.cookie
        "security/detect-eval-with-expression": [ "error" ], // Não permite eval com expressões
        "security/detect-new-buffer": [ "error" ], // Bloqueia New Buffer
        "security/detect-non-literal-regexp": [ "error" ], // Regex Protect
        "security/detect-non-literal-require": [ "error" ], // Require Protect
        "security/detect-possible-timing-attacks": [ "error" ], // Previne Tokens no código
        "import/no-dynamic-require": [ "error", { "esmodule": true } ], // Sem import dinâmicos
        "sonar/aws-s3-bucket-insecure-http": [ "error" ], // S3 Aws devem usar ssl
        "sonar/content-security-policy": [ "error" ], // Força usar ContentSecurityPolicy
        "sonar/aws-s3-bucket-public-access": [ "error" ], // S3 segurança
        "sonar/aws-s3-bucket-server-encryption": [ "error" ], // S3 segurança
        "sonar/certificate-transparency": [ "error" ], // Express helmet
        "sonar/code-eval": [ "error" ], // No enval
        "sonar/confidential-information-logging": [ "error" ], // Não faça log de coisas confidenciais
        "sonar/content-length": [ "error" ], // Configure o tamanho de pacotes máximos
        "anti-trojan-source/no-bidi": [ "error" ], // Anti Trojan code program
        "sonar/cookie-no-httponly": [ "error" ], // Use Http Only no cookie
        "sonar/cookies": [ "warn" ], // Use Http Only no cookie
        "sonar/disabled-auto-escaping": [ "error" ], // Renderizar arquivos q podem conter XSS como readme
        "sonar/disabled-resource-integrity": [ "error" ], // Use integridade para scripts
        "sonar/dns-prefetching": [ "error" ], // DNS rules
        "no-prototype-builtins": [ "error" ], // Object.prototype.hasOwnProperty.call no lugar obj.hasOwnProperty
    },
};
