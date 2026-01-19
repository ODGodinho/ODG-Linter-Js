const MAX_STATEMENTS = 20;

export default {
    rules: {
        "dot-notation": [ "off" ],
        "@typescript-eslint/dot-notation": [ "off" ],
        "no-magic-numbers": [ "off" ], // Desliga magic number em test
        "@typescript-eslint/no-magic-numbers": [ "off" ], // Desliga magic number em test
        "max-statements": [ "error", MAX_STATEMENTS ],
        "unicorn/consistent-function-scoping": [
            "error",
            {
                checkArrowFunctions: false,
            },
        ], // Remova sub função quando possível
        "sonarjs/assertions-in-tests": [ "error" ], // Teste tem q ter assert
        "sonarjs/chai-determinate-assertion": [ "error" ], // Use assert adequado
        "sonarjs/disabled-timeout": [ "error" ], // Impede numero além do limite de tempo timeout
        "sonarjs/inverted-assertion-arguments": [ "error" ], // Assert na ordem correta
        "sonarjs/no-code-after-done": [ "error" ], // N faça nada apos done nos testes
        "sonarjs/no-exclusive-tests": [ "error" ], // N use only nos testes
        "sonarjs/no-incomplete-assertions": [ "error" ], // Asserts incompletos
        "sonarjs/no-same-argument-assert": [ "error" ], // Asserts ordem correta
        "sonarjs/no-skipped-tests": [ "error" ], // No Skip Tests
        "sonarjs/prefer-type-guard": [ "error" ], // Use is no return boolean type
        "sonarjs/stable-tests": [ "error" ], // Testes devem funcionar de primeira tentativa
        "sonarjs/test-check-exception": [ "error" ], // Testes devem testar exceção
    },
};
