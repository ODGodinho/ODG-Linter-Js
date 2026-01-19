import rules from "./index.mjs";

export default [
    ...rules,
    {
        files: [ "**" ],
        rules: {
            "import/no-anonymous-default-export": [ "off" ],
        },
    },
];
