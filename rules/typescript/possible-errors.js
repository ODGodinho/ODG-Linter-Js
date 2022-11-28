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
    },
};
