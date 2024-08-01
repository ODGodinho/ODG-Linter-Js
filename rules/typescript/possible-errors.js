module.exports = {
    rules: {
        "@typescript-eslint/no-confusing-void-expression": [ "error" ], // Não atribua void a variáveis
        "@typescript-eslint/no-duplicate-enum-values": [ "error" ], // Não permite enum com valores iguais
        "@typescript-eslint/no-floating-promises": [ "error" ], // Não faça promessas flutuantes
        "@typescript-eslint/no-invalid-void-type": [ "error" ], // Não peça um tipo void invalido
        "@typescript-eslint/no-loop-func": [ "error" ], // Não faça funções dentro de loops
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": [ "error" ], // Compare com asserts dos 2 lados
        "@typescript-eslint/no-non-null-asserted-optional-chain": [
            "error",
        ], // Não misture not null assert com optional
        "@typescript-eslint/no-unsafe-declaration-merging": [ "error" ], // Evita unir automaticamente tipos
        "@typescript-eslint/no-useless-empty-export": [ "error" ], // Bloqueia export vazio
        "@typescript-eslint/restrict-template-expressions": [
            "error",
            {
                allowNumber: true,
                allowBoolean: true,
            },
        ], // Não concatene strings com tipos inválidos
        "@typescript-eslint/return-await": [ "error" ], // Ao retornar um promise em try catch, use await evitando erros
        "@typescript-eslint/switch-exhaustiveness-check": [
            "error",
        ], // Switch com typo coloque default ou todos os casos
        "brace-style": [ "off" ], // Força formatação {}
        "@stylistic/ts/brace-style": [ "error" ], // Força formatação {}
        "sonarjs/no-extra-arguments": [ "off" ], // Argumentos extra ja é tratado por typescript
        "sonarjs/no-use-of-empty-return-value": [ "off" ], // Não atribua void em uma variável
        "@odg/no-inconsistent-docblock": [ "error" ], // Valida Docblock @param e @return com tipagem
        "antfu/no-const-enum": [ "error" ], // Não coloque enum em constant
    },
};
