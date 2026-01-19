export default {
    rules: {
        "@typescript-eslint/related-getter-setter-pairs": [ "error" ], // Get e set do mesmo tipo
        "@typescript-eslint/no-useless-default-assignment": [ "error" ], // Não coloque default q n é usado
        "@typescript-eslint/no-unused-private-class-members": [ "error" ], // Não crie nada privado sem usar
        "@typescript-eslint/no-unsafe-unary-minus": [ "error" ], // Faça - apenas numbers
        "@typescript-eslint/no-unsafe-member-access": [ "error" ], // Não acesse any sem tipa
        "@typescript-eslint/no-unsafe-enum-comparison": [ "error" ], // Compare enum com enum
        "@typescript-eslint/no-unnecessary-parameter-property-assignment": [ "error" ], // Construtor atribui apenas 1x
        "@typescript-eslint/no-misused-spread": [ "error" ], // Não faça ... errado
        "@typescript-eslint/no-mixed-enums": [ "error" ], // Coloque índice e value na enum
        "@typescript-eslint/no-confusing-void-expression": [ "error" ], // Não atribua void a variáveis
        "@typescript-eslint/no-duplicate-enum-values": [ "error" ], // Não permite enum com valores iguais
        "@typescript-eslint/no-floating-promises": [ "error" ], // Não faça promessas flutuantes
        "@typescript-eslint/no-invalid-void-type": [ "error" ], // Não peça um tipo void invalido
        "@typescript-eslint/no-loop-func": [ "error" ], // Não faça funções dentro de loops
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": [ "error" ], // Compare com asserts dos 2 lados
        "@typescript-eslint/no-non-null-asserted-optional-chain": [ "error" ], // Não misture not null assert com optional
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
        "@typescript-eslint/switch-exhaustiveness-check": [ "error" ], // Switch com typo coloque default ou todos os casos
        "sonarjs/no-extra-arguments": [ "off" ], // Argumentos extra ja é tratado por typescript
        "sonarjs/no-use-of-empty-return-value": [ "off" ], // Não atribua void em uma variável
        "sonarjs/argument-type": [ "off" ], // Não passa typo errado
        "sonarjs/no-implicit-global": [ "off" ], // Não acesse variável global inexistente no arquivo
        "sonarjs/no-redundant-assignments": [ "off" ], // Variáveis com mesmo valores
        "@odg/no-inconsistent-docblock": [ "error" ], // Valida Docblock @param e @return com tipagem
    },
};
