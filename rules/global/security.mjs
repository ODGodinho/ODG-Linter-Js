export default {
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
        "security/detect-bidi-characters": [ "error" ], // Anti Trojan code program
        "import/no-dynamic-require": [ "error", { "esmodule": true } ], // Sem import dinâmicos
        "no-prototype-builtins": [ "error" ], // Object.prototype.hasOwnProperty.call no lugar obj.hasOwnProperty
        "sonarjs/aws-apigateway-public-api": [ "error" ], // Bloqueia API Gateway público
        "sonarjs/aws-ec2-rds-dms-public": [ "error" ], // Bloqueia rds public
        "sonarjs/aws-ec2-unencrypted-ebs-volume": [ "error" ], // Segurança aws
        "sonarjs/aws-efs-unencrypted": [ "error" ], // Segurança aws
        "sonarjs/aws-iam-all-privileges": [ "error" ], // Segurança aws
        "sonarjs/aws-iam-privilege-escalation": [ "error" ], // Segurança aws
        "sonarjs/aws-iam-public-access": [ "error" ], // Segurança aws
        "sonarjs/aws-opensearchservice-domain": [ "error" ], // Segurança aws
        "sonarjs/aws-rds-unencrypted-databases": [ "error" ], // Segurança aws
        "sonarjs/aws-restricted-ip-admin-access": [ "error" ], // Segurança aws
        "sonarjs/aws-s3-bucket-granted-access": [ "error" ], // Segurança aws
        "sonarjs/aws-s3-bucket-insecure-http": [ "error" ], // Segurança aws
        "sonarjs/aws-s3-bucket-public-access": [ "error" ], // Segurança aws
        "sonarjs/aws-s3-bucket-versioning": [ "error" ], // Segurança aws
        "sonarjs/aws-sagemaker-unencrypted-notebook": [ "error" ], // Segurança aws
        "sonarjs/aws-sns-unencrypted-topics": [ "error" ], // Segurança aws
        "sonarjs/aws-sqs-unencrypted-queue": [ "error" ], // Segurança aws
        "sonarjs/content-length": [ "error" ], // Request body limit
        "sonarjs/content-security-policy": [ "error" ], // Dado seguro express
        "sonarjs/cookie-no-httponly": [ "error" ], // Use cookies http Only
        "sonarjs/cors": [ "error" ], // Configure cors de maneira segura
        "sonarjs/csrf": [ "error" ], // Configure CSRF seguro
        "sonarjs/disabled-auto-escaping": [ "error" ], // Não desligue scaping de html por segurança
        "sonarjs/disabled-resource-integrity": [ "error" ], // Verifique integridade script
        // "sonarjs/dynamically-constructed-templates": [ "error" ], // Templates dinâmicos são inseguros com pug lib
        "sonarjs/encryption-secure-mode": [ "error" ], // Crypto de forma segura
        "sonarjs/file-permissions": [ "error" ], // Crie arquivos com perm segura
        "sonarjs/file-uploads": [ "error" ], // Upload arquivos seguro
        "sonarjs/frame-ancestors": [ "error" ], // Frame ancestors police
        // "sonarjs/hardcoded-secret-signatures": [ "error" ], // Poe senha no código nao mano
        "sonarjs/hashing": [ "error" ], // Crie hash seguros
        "sonarjs/hidden-files": [ "error" ], // Server arquivos statics n deve deixar listagem publica
        "sonarjs/insecure-cookie": [ "error" ], // Cookies security = true
        "sonarjs/insecure-jwt-token": [ "error" ], // JWT de forma segura
        "sonarjs/link-with-target-blank": [ "error" ], // Abrir uma nova janela use parameters seguros
        "sonarjs/no-clear-text-protocols": [ "error" ], // Diversos protocolos seguros
        "sonarjs/no-hardcoded-ip": [ "error" ], // Não coloque ip dentro do código
        "sonarjs/no-hardcoded-passwords": [ "error" ], // Não coloque senha dentro do código
        "sonarjs/no-hardcoded-secrets": [ "error" ], // Não coloque token dentro do código
        "sonarjs/no-mime-sniff": [ "error" ], // Segurança sniff mime
        "sonarjs/no-mixed-content": [ "error" ], // Mixed-content is security-sensitive
        "sonarjs/no-os-command-from-path": [ "error" ], // Execute arquivo com caminho completo
        "sonarjs/no-reference-error": [ "error" ], // Referer security
        "sonarjs/no-unsafe-unzip": [ "error" ], // Faça unzip de forma segura
        "sonarjs/no-weak-cipher": [ "error" ], // Crypto seguro
        "sonarjs/no-weak-keys": [ "error" ], // Crypto seguro
        "sonarjs/os-command": [ "error" ], // Comandos Exec seguro
        "sonarjs/post-message": [ "error" ], // Mensagens iframe seguras
        "sonarjs/production-debug": [ "error" ], // Error handler apenas no dev
        "sonarjs/pseudo-random": [ "error" ], // Não use Math.random
        "sonarjs/publicly-writable-directories": [ "error" ], // Use temp of node
        // "sonarjs/review-blockchain-mnemonic": [ "error" ], // Não coloca token no código
        "sonarjs/session-regeneration": [ "error" ], // Renovar sessão de login
        "sonarjs/sql-queries": [ "error" ], // Não Concatene SQL
        "sonarjs/strict-transport-security": [ "error" ], // Segurança em H-STS
        "sonarjs/unverified-certificate": [ "error" ], // Validar certificado SSL
        "sonarjs/unverified-hostname": [ "error" ], // Validar host SSL
        "sonarjs/weak-ssl": [ "error" ], // Validar fraco SSL
        "sonarjs/x-powered-by": [ "error" ], // Oculta info do node
        "sonarjs/xml-parser-xxe": [ "error" ], // Xml proteção de venerabilidade
    },
};
