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
        "sonar/encryption-secure-mode": [ "error" ], // Criptografia dados
        "sonar/file-permissions": [ "error" ], // Proíbe 777
        "sonar/file-uploads": [ "error" ], // Force file path
        "sonar/frame-ancestors": [ "error" ], // Frame Security
        "sonar/hidden-files": [ "error" ], // Server-static security rule
        "sonar/cors": [ "error" ], // Cors Sonar
        "sonar/hashing": [ "error" ], // Palavras reservadas futuras bloqueadas
        "sonar/aws-apigateway-public-api": [ "error" ], // API Segura
        "sonar/aws-ec2-rds-dms-public": [ "error" ], // Alerta segurança AWS Publico
        "sonar/aws-ec2-unencrypted-ebs-volume": [ "error" ], // Força encryption AWS
        "sonar/aws-efs-unencrypted": [ "error" ], // Força encryption AWS
        "sonar/aws-iam-all-privileges": [ "error" ], // Não gere token com privilegio total
        "sonar/aws-iam-all-resources-accessible": [ "error" ], // AWS regras
        "sonar/aws-iam-privilege-escalation": [ "error" ], // AWS regras
        "sonar/aws-iam-public-access": [ "error" ], // AWS regras
        "sonar/aws-opensearchservice-domain": [ "error" ], // AWS regras
        "sonar/aws-rds-unencrypted-databases": [ "error" ], // AWS regras
        "sonar/aws-restricted-ip-admin-access": [ "error" ], // AWS regras
        "sonar/aws-s3-bucket-granted-access": [ "error" ], // AWS regras
        "sonar/aws-s3-bucket-versioning": [ "error" ], // AWS regras
        "sonar/aws-sagemaker-unencrypted-notebook": [ "error" ], // AWS regras
        "sonar/aws-sns-unencrypted-topics": [ "error" ], // Criptografia SNS
        "sonar/aws-sqs-unencrypted-queue": [ "error" ], // Criptografia SQS
        "sonar/csrf": [ "error" ], // Padrão ao usar csrf express
        "sonar/insecure-cookie": [ "error" ], // Cookie com secure = true
        "sonar/no-clear-text-protocols": [ "error" ], // Use ftp telnet, http encrypt;
        "sonar/no-hardcoded-credentials": [ "error" ], // Não escreva senha código
        "sonar/no-hardcoded-ip": [ "error" ], // Não escreva IP no código
        "sonar/no-os-command-from-path": [ "error" ], // Ao executar um comando passe caminho completo
        "sonar/no-referrer-policy": [ "error" ], // Helmet policy
        "sonar/no-unsafe-unzip": [ "error" ], // Unsafe zip
        "sonar/no-weak-keys": [ "error" ], // Compilar 2048 bits
        "sonar/os-command": [ "error" ], // Compilar 2048 bits
        "sonar/pseudo-random": [ "error" ], // Pseudo random
        "sonar/publicly-writable-directories": [ "error" ], // Pseudo random
        "sonar/sockets": [ "error" ], // Socket rules sensitive
        "sonar/sql-queries": [ "error" ], // Evite SQL injection
        "sonar/strict-transport-security": [ "error" ], // Helmet Rules
        "sonar/unverified-certificate": [ "error" ], // Verifica certificados
        "sonar/weak-ssl": [ "error" ],
        "sonar/xml-parser-xxe": [ "error" ],
        "sonar/xpath": [ "error" ],
    },
};
