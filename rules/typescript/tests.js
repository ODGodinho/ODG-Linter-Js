const MAX_STATEMENTS = 20;

module.exports = {
    rules: {
        "dot-notation": [ "off" ],
        "@typescript-eslint/dot-notation": [ "off" ],
        "no-magic-numbers": [ "off" ], // Desliga magic number em test
        "max-statements": [ "error", MAX_STATEMENTS ],
    },
};
