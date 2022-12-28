const MAX_STATEMENTS = 20;

module.exports = {
    rules: {
        "dot-notation": [ "off" ],
        "@typescript-eslint/dot-notation": [ "off" ],
        "no-magic-numbers": [ "off" ], // Desliga magic number em test
        "max-statements": [ "error", MAX_STATEMENTS ],
        "sonar/no-code-after-done": [ "error" ], // Não coloque código depois done test
        "sonar/test-check-exception": [ "error" ], // Test exception
        "unicorn/consistent-function-scoping": [ "error", {
            checkArrowFunctions: false,
        } ], // Remova sub função quando possível
    },
};
