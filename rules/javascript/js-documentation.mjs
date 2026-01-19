export default {
    rules: {
        "jsdoc/require-description": [ "error" ], // Require Description
        "jsdoc/require-next-type": [ "error" ], // Doc @next precisa Type
        "jsdoc/require-next-description": [ "error" ], // Doc @next precisa descrição
        "jsdoc/check-template-names": [ "error" ], // Validate @template names
        "jsdoc/escape-inline-tags": [ "error" ], // Adicione scape para tags inline {@link}
        "jsdoc/informative-docs": [ "error" ], // A Doc tem q ter mais nomes q o nome da variável
        "jsdoc/check-access": [ "error" ],
        "jsdoc/check-alignment": [ "error" ], // Não desalinhe o * da docblock
        "jsdoc/check-indentation": [ "error" ], // Força formatação na docblock
        "jsdoc/check-line-alignment": [ "error" ], // Não permite alinhar docblock com espaços
        "jsdoc/check-property-names": [ "error" ], // Valida nome de propriedade
        "jsdoc/check-param-names": [ "error" ], // Verifica se o nome do parâmetro e ordem
        "jsdoc/check-syntax": [ "error" ], // Valida Sintaxe do docblock
        "jsdoc/check-tag-names": [
            "error",
            {
                definedTags: [

                    // Create @task [name](LINK)
                    "task",
                ],
            },
        ],
        "jsdoc/check-types": [ "error" ], // Valida se é um Tipo valido
        "jsdoc/check-values": [ "error" ], // Devemos Padronizar o modelo
        "jsdoc/valid-types": [ "error" ], // Valida Padrão DocBlock
        "jsdoc/empty-tags": [ "error" ], // Não devem existir tags vazias
        "jsdoc/implements-on-classes": [ "error" ],
        "jsdoc/multiline-blocks": [ "error" ], // Valida mútilos blocos
        "jsdoc/tag-lines": [
            "error",
            "any",
            {
                startLines: 1,
                endLines: 0,
            },
        ], // Requer linha em branco apos a descrição
        "jsdoc/no-bad-blocks": [ "error" ], // DockBlock deve ter apenas 2 asteriscos
        "jsdoc/no-multi-asterisks": [
            "error",
            { preventAtMiddleLines: true, preventAtEnd: true },
        ], // Sem asteriscos duplicado na docblock
        "jsdoc/no-defaults": [ "error" ], // Não permite [user_id=1] para informar valor padrão
        "jsdoc/no-undefined-types": [ "error" ], // Valida Tipos não existentes
        "jsdoc/require-asterisk-prefix": [ "error" ], // Requer * docblock multiline

        "jsdoc/require-param": [ "error" ],
        "jsdoc/require-param-description": [ "error" ],
        "jsdoc/require-param-name": [ "error" ],
        "jsdoc/require-param-type": [ "error" ],
        "jsdoc/require-property": [ "error" ],
        "jsdoc/require-property-description": [ "error" ],
        "jsdoc/require-property-name": [ "error" ],
        "jsdoc/require-property-type": [ "error" ],
        "jsdoc/require-returns": [ "error" ],
        "jsdoc/require-returns-check": [ "error" ],
        "jsdoc/require-returns-type": [ "error" ],
        "jsdoc/require-throws-description": [ "error" ],
        "jsdoc/require-throws-type": [ "error" ],
        "jsdoc/require-throws": [ "error" ],
        "jsdoc/require-yields": [ "error" ],
        "jsdoc/require-yields-check": [ "error" ],
        "jsdoc/require-yields-type": [ "error" ],
        "jsdoc/no-blank-block-descriptions": [ "error" ], // Não deixe descrição de docblock vazias
        "jsdoc/sort-tags": [
            "error",
            {
                "tagSequence": [
                    {
                        "tags": [
                            "author",
                            "message",
                            "task",
                            "example",
                        ],
                    },

                    {
                        "tags": [
                            "ignore",
                            "version",
                            "variation",
                            "since",
                            "deprecated",
                            "todo",

                            "summary",
                            "typeSummary",

                            // Module/file-level
                            "module",
                            "exports",
                            "file",
                            "fileoverview",
                            "overview",

                            // Identifying (name, type)
                            "typedef",
                            "interface",
                            "record",
                            "template",
                            "name",
                            "kind",
                            "type",
                            "alias",
                            "external",
                            "host",
                            "callback",
                            "func",
                            "function",
                            "method",
                            "class",
                            "constructor",

                            // Relationships
                            "modifies",
                            "mixes",
                            "mixin",
                            "mixinClass",
                            "mixinFunction",
                            "namespace",
                            "borrows",
                            "constructs",
                            "lends",
                            "implements",
                            "requires",

                            // Long descriptions
                            "desc",
                            "description",
                            "classdesc",
                            "tutorial",
                            "copyright",
                            "license",

                            // Simple annotations
                            "const",
                            "constant",
                            "final",
                            "global",
                            "readonly",
                            "abstract",
                            "virtual",
                            "var",
                            "member",
                            "memberof",
                            "memberof!",
                            "inner",
                            "instance",
                            "inheritdoc",
                            "inheritDoc",
                            "override",
                            "hideconstructor",

                            // Important behavior details
                            "async",
                            "generator",
                            "default",
                            "defaultvalue",
                            "enum",
                            "augments",
                            "extends",
                            "exception",
                            "yield",
                            "yields",
                            "event",
                            "fires",
                            "emits",
                            "listens",
                            "this",

                            // Access
                            "static",
                            "public",
                            "protected",
                            "private",
                            "access",
                            "package",

                            "-other",

                            // Supplementary descriptions
                            "see",

                            // METADATA

                            // Other Closure (undocumented) metadata
                            "closurePrimitive",
                            "customElement",
                            "expose",
                            "hidden",
                            "idGenerator",
                            "meaning",
                            "ngInject",
                            "owner",
                            "wizaction",

                            // Other Closure (documented) metadata
                            "define",
                            "dict",
                            "export",
                            "externs",
                            "implicitCast",
                            "noalias",
                            "nocollapse",
                            "nocompile",
                            "noinline",
                            "nosideeffects",
                            "polymer",
                            "polymerBehavior",
                            "preserve",
                            "struct",
                            "suppress",
                            "unrestricted",

                            // @homer0/prettier-plugin-jsdoc metadata
                            "category",

                            // Core function/object info
                            "arg",
                            "argument",
                            "prop",
                            "property",
                            "param",
                            "throws",
                            "return",
                            "returns",
                        ],
                    },
                ],
            },
        ], // Ordem dos params da docblock
        "jsdoc/no-blank-blocks": [ "error", { "enableFixer": true } ], // Não faça comentários vazios
    },
};
