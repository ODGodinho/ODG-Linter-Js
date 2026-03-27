const restrictSyntaxBase = [
    {
        "selector": "NewExpression[callee.name='Error']",
        "message": "Do not use 'new Error()'. Use the exception classes from the @odg/exception"
            + " package to maintain logging standardization.",
    },
    {
        "selector": "CallExpression[callee.object.name='console'][callee.property.name='log']",
        "message": "Do not use console.log. Use the @odg/log injected in the container to ensure traceability.",
    },
    {
        "selector": "CallExpression[callee.property.name='forEach'][arguments.0.async=true]",
        "message": "Do not use `.forEach` with async functions. `.forEach` does not wait for Promises."
            + " Use `for...of` or`Promise.all()` instead.",
    },
    {
        "selector": "CallExpression[callee.property.name='waitForTimeout']",
        "message": "The use of 'waitForTimeout' is prohibited because it's intimidating."
            + " Use 'waitForSelector', 'waitForResponse', or 'waitForFunction' instead.",
    },
    {
        "selector": "BinaryExpression[operator='instanceof'][right.name='Error']",
        "message": "Avoid 'error instances'. Use the specific specifications of your @odg/exception"
            + "(Exception.isError) or structural type checking for greater security between packets.",
    },

];

export const restrictSyntaxTest = [ ...restrictSyntaxBase ];

export const restrictSyntax = [
    ...restrictSyntaxBase,
    {
        "selector": "CallExpression[callee.name='sleep']",
        "message": "Do not use 'sleep()' with timestamps. Use async/await patterns, Promise.race"
            + ", timeout function or other async timing mechanisms instead.",
    },
    {
        "selector": String.raw`CallExpression[callee.property.name=/^(click|waitForSelector|\$|\$\$|eval|type)$/][arguments.0.type='Literal'][arguments.0.value=/^[.#].*/]`,
        "message": "Do not use hardcoded selectors."
            + " Move a string to a file in the 'Selectors' folder to ensure decoupling.",
    },
];
