<h1 align="center">
  <a href="https://github.com/ODGodinho">
    <img src="public/images/quality.png" alt="Stanley Imagem" width="200"/>
  </a>
  <br>
  ODG Linter Js By Dragons Gamers
</h1>

<h4 align="center">✴️ Code Quality for typescript ✴️!</h4>

<p align="center">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ODGodinho/ODG-Linter-Js">

  <a href="https://www.linkedin.com/in/victor-alves-odgodinho/">
    <img alt="Made by ODGodinho" src="https://img.shields.io/badge/made%20by-ODGodinho-%2304D361">
  </a>

  <a href="https://github.com/ODGodinho/ODG-Linter-Js/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ODGodinho/ODG-Linter-Js">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <a href="https://github.com/ODGodinho/ODG-Linter-Js/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ODGodinho/ODG-Linter-Js?style=social">
  </a>

</p>

# Standard Code

- [Introduction](#introduction)
  - [Installation](#installation)
- [Semi Rule](#semi-rule)
- [Quotes Rule](#quotes-rule)
- [Indent Rule](#indent-rule)
- [Line Break Rule](#line-break-rule)
- [EOL last Rule](#eol-last-rule)
- [Max Line Len Rule](#max-line-len-rule)
- [CamelCase Rule](#camel-case-rule)
- [Padded Block Rule](#padded-block-rule)
- [Lines Between Class Members](#lines-between-class-members)
- [No Multi Assign Rule](#no-multi-assign-rule)
- [Explicit Member Accessibility Rule](#explicit-member-accessibility-rule)
- [Default Param Last Rule](#default-param-last-rule)
- [Space Before Function Paren](#space-before-function-paren)
- [Array Space](#array-space)
- [Key Word Space](#key-word-space)
- [Space Format](#space-format)
- [UTF-8 Only](#utf-8-only)
- [No Space in Parentheses](#no-space-in-parentheses)
- [No Multiple Space](#no-multiple-space)
- [Useless String Concat](#useless-string-concat)
- [No Self Assign](#no-self-assign)
- [Force Return Type](#force-return-type)
- [Array Bracket Line](#array-bracket-line)
- [Unused Vars](#unused-vars)
- [Comma Spacing](#comma-spacing)
- [Comma Dangle](#comma-dangle)
- [Prefer Arrow Function](#prefer-arrow-function)
- [Arrow Function Body](#arrow-function-body)
- [No Empty Block](#no-empty-block)
- [No Long Syntax](#no-long-syntax)
- [Useless Call Code](#useless-call-code)
- [Useless Catch Code](#useless-catch-code)
- [Useless Expression Code](#useless-expression-code)
- [Useless Return Code](#useless-return-code)
- [Useless Construct Code](#useless-construct-code)
- [Useless Parens](#useless-parens)
- [Useless Boolean](#useless-boolean)
- [Return New line](#return-new-line)
- [Comment Multi Line Prefer](#comment-multi-line-prefer)
- [No throw Literal](#no-throw-literal)
- [No Unreachable](#no-unreachable)
- [Useless Loop](#useless-loop)
- [No Multiline String](#no-multiline-string)
- [No Unsafe Assign](#no-unsafe-assign)
- [This Pattern](#this-pattern)
- [Use Dot](#use-dot)
- [Dot Object Format](#dot-object-format)
- [No Trailing Space](#no-trailing-space)
- [Type Format](#type-format)
- [No Constant Condition](#no-constant-condition)
- [No Debugger](#no-debugger)
- [Useless Object](#useless-object)
- [Not Duplicate Case](#not-duplicate-case)
- [Regex Block](#regex-block)
- [No Overwrite Exception](#no-overwrite-exception)
- [No Extra Semi](#no-extra-semi)
- [No Function Overwrite](#no-function-overwrite)
- [No Declare in Block](#no-declare-in-block)
- [Security Negation](#security-negation)
- [Regex Space](#regex-space)
- [Array No Space](#array-no-space)
- [Valid TypeOf](#valid-type-of)
- [Strict equality](#strict-equality)
- [Eval Disabled](#eval-disabled)
- [No Label](#no-label)
- [Full Decimal Number](#full-decimal-number)
- [No Global Overwrite](#no-global-overwrite)
- [Not Used New](#not-used-new)
- [No New Function](#no-new-function)
- [No Redeclare](#no-redeclare)
- [No Self Compare](#no-self-compare)
- [Loop Valid](#loop-valid)
- [Useless Scape](#useless-scape)
- [No Yoda](#no-yoda)
- [No Undefined declare](#no-undefined-declare)
- [No New require](#no-new-require)
- [Prefer Literals](#prefer-literals)
- [Useless Condition](#useless-condition)
- [No Multiple Empty Line](#no-multiple-empty-line)
- [No Misused New](#no-misused-new)
- [No Semicolon Before spacing](#no-semicolon-before-spacing)
- [Disallow Type](#disallow-type)
- [Disallow Empty Function](#disallow-empty-function)
- [Disallow Duplicate Imports](#disallow-duplicate-imports)
- [Disallow Unnecessary Type](#disallow-unnecessary-type)
- [prefer Const](#prefer-const)
- [Array Type](#array-type)
- [Disallow Await sync function](#disallow-await-sync-function)
- [Method Signature Style](#method-signature-style)
- [No Unnecessary Type Assertion](#no-unnecessary-type-assertion)
- [No Unsafe Call](#no-unsafe-call)
- [No Var](#no-var)
- [Promise Rules](#promise-rules)
  - [No New Statics](#no-new-statics)
  - [No Return Wrap](#no-return-wrap)
  - [Param Name](#param-name)
  - [Always Return](#always-return)
  - [No Nesting](#no-nesting)
  - [No Return Finally](#no-return-finally)
  - [Valid Params](#valid-params)
  - [No Async Promise Executor](#no-async-promise-executor)
  - [No Misused Promises](#no-misused-promises)
- [Documentation](#documentation)
  - [Space Comment](#spaced-comment)
  - [Capitalized Comments](#capitalized-comments)
  - [Comment Align](#comment-align)
  - [Disallow Space Align](#disallow-space-align)
  - [Validate Param](#validate-param)
  - [Validate Syntax](#validate-syntax)
  - [Validate Tag Name](#validate-tag-name)
  - [Validate Types](#validate-Types)
  - [Validate Values](#validate-values)
  - [Empty Tags](#empty-tags)
  - [Validate Block](#validate-block)
  - [Disallow Extra Asterisk](#disallow-extra-asterisk)
  - [Disallow Default Value](#disallow-default-value)

## Introduction

### Installation

Add dependence to package.json

```bash
npm install eslint @odg/eslint-config-odg-linter-js eslint-plugin-jsdoc@* --save-dev
# or
yarn add -D eslint @odg/eslint-config-odg-linter-js eslint-plugin-jsdoc@*
```

Add extends in your `.eslintrc` file

```json
{
    "parser": "@typescript-eslint/parser",
    "extends": [
        "@odg/odg-linter-js",
    ],
    "parserOptions": {
        "ecmaVersion": 2018, // Specify your version
        "sourceType": "module",
        "project": [ "tsconfig.json" ] // Specify it only for TypeScript files
    },
}
```

Test: `npm run eslint` or `yarn eslint`

## Semi Rule

----------

Requires semicolons at the end of statements

<https://eslint.org/docs/rules/semi#semi>

👍 Examples of correct code

```typescript
var name = "ODG";

object.method = function() {
    // ...
};

class Foo {
    bar = 1;
}
```

👎 Examples of incorrect code

```typescript
var name = "ODG"

object.method = function() {
    // ...
}

class Foo {
    bar = 1
}
```

## Quotes Rule

----------

Requires the use of double quotes wherever possible

<https://eslint.org/docs/rules/quotes#quotes>

👍 Examples of correct code

```typescript
var double = "double";
var backtick = `back
tick`;  // backticks are allowed due to newline
var backtick = tag`backtick`;
```

👎 Examples of incorrect code

```typescript
var single = 'single';
var unescaped = 'a string containing "double" quotes';
var backtick = `back\ntick`; // you can use \n in single or double quoted strings
```

## Indent Rule

----------

Requires indent with 4 spaces

<https://eslint.org/docs/rules/indent#indent>

👍 Examples of correct code

```typescript
if (a) {
    b=c;
    function foo(d) {
        e=f;
    }
}
```

👎 Examples of incorrect code

```typescript
if (a) {
  b=c;
  function foo(d) {
    e=f;
  }
}
```

## Line Break Rule

----------

Enforces the usage of Unix line endings: `\n` for LF.

<https://eslint.org/docs/rules/linebreak-style#linebreak-style>

👍 Examples of correct code

```typescript
var a = 'a'; // \n
```

👎 Examples of incorrect code

```typescript
var a = 'a'; // \r\n
```

## EOL last Rule

----------

Force empty end line

<https://eslint.org/docs/rules/eol-last#eol-last>

👍 Examples of correct code

```typescript
function doSmth() {
  var foo = 2;
} // \n

```

👎 Examples of incorrect code

```typescript
function doSmth() {
  var foo = 2;
}
```

## Max Line Len Rule

----------

Max line len is 120

<https://eslint.org/docs/rules/max-len#max-len>

👍 Examples of correct code

```typescript
var foo = {
    "bar": "This is a bar.",
    "baz": { "qux": "This is a qux" },
    "difficult": "to read",
};
```

👎 Examples of incorrect code

```typescript
var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };
```

## CamelCase Rule

----------

Force use camelcase variable

<https://eslint.org/docs/rules/camelcase#camelcase>

👍 Examples of correct code

```typescript
import { no_camelcased as camelCased } from "external-module";

var myFavoriteColor   = "#112C85";
var _myFavoriteColor  = "#112C85";
var myFavoriteColor_  = "#112C85";
var MY_FAVORITE_COLOR = "#112C85";
```

👎 Examples of incorrect code

```typescript
import { no_camelcased } from "external-module"

var my_favorite_color = "#112C85";

function do_something() {
    // ...
}
```

## Padded Block Rule

----------

force empty line in blocks

<https://eslint.org/docs/rules/padded-blocks#padded-blocks>

```json
{
  "classes": "always",
  "blocks": "never",
  "switches": "never",
}
```

👍 Examples of correct code

```typescript
class ClassName {

  variable = 1;

}

switch (a) {
    case 0: foo();
}

if (a) {
    a = b;
}
```

👎 Examples of incorrect code

```typescript
class ClassName {
  variable = 1;

}

class ClassName {

  variable = 1;
}

switch (a) {

    case 0: foo();

}

if (a) {

    a = b;

}

```

## Lines Between Class Members

----------

Enforces consistent spacing before function parenthesis.

<https://eslint.org/docs/rules/lines-between-class-members#lines-between-class-members>

👍 Examples of correct code

```typescript
class MyClass {
  x;

  foo() {
    //...
  }

  bar() {
    //...
  }
}
```

👎 Examples of incorrect code

```typescript
class MyClass {
  x;
  foo() {
    //...
  }
  bar() {
    //...
  }
}
```

## No Multi Assign Rule

----------

Chaining the assignment of variables can lead to unexpected results and be difficult to read.
Disabled.

<https://eslint.org/docs/rules/no-multi-assign#no-multi-assign>

👍 Examples of correct code

```typescript
var a = 5;
var b = 5;
var c = 5;

const foo = "baz";
const bar = "baz";

let a = c;
let b = c;

class Foo {
    a = 10;
    b = 10;
}

a = "quux";
b = "quux";
```

👎 Examples of incorrect code

```typescript
var a = b = c = 5;

const foo = bar = "baz";

let a =
    b =
    c;

class Foo {
    a = b = 10;
}

a = b = "quux";
```

## Explicit Member Accessibility Rule

----------

Force specific public/private or protected visibility

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md>

```json
{
    "anonymous": "never",
    "named": "never",
    "asyncArrow": "always"
}
```

👍 Examples of correct code

```typescript
class ClassName {
    public a = 1;
    protected c = 2;
    private b = 3;
}
```

👎 Examples of incorrect code

```typescript
class ClassName {
    a = 1;
    c = 2;
    b = 3;
}
```

## Default Param Last Rule

----------

Enforces default parameters to be last.

<https://eslint.org/docs/rules/default-param-last#default-param-last>

👍 Examples of correct code

```typescript
function f(a = 0) {}
function f(a: number, b = 0) {}
function f(a: number, b?: number) {}
function f(a: number, b?: number, c = 0) {}
function f(a: number, b = 0, c?: number) {}
class Foo {
  constructor(public a, private b = 0) {}
}
class Foo {
  constructor(public a, private b?: number) {}
}
```

👎 Examples of incorrect code

```typescript
function f(a = 0, b: number) {}
function f(a: number, b = 0, c: number) {}
function f(a: number, b?: number, c: number) {}
class Foo {
  constructor(public a = 10, private b: number) {}
}
class Foo {
  constructor(public a?: number, private b: number) {}
}
```

## Space Before Function Paren

----------

Enforces default parameters to be last.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/space-before-function-paren.md>

👍 Examples of correct code

```typescript
foo(function() {

})

function foo() {

}

(async () => {})()
```

👎 Examples of incorrect code

```typescript
foo(function () {

})

function foo () {

}

(async() => {})()
```

## Array Space

----------

requires one or more spaces or newlines inside array brackets, and disallow space inside of computed properties.

<https://eslint.org/docs/rules/array-bracket-spacing#array-bracket-spacing>

<https://eslint.org/docs/rules/computed-property-spacing#computed-property-spacing>

👍 Examples of correct code

```typescript
var arr = [ 'foo', 'bar' ];
var [ x, y ] = z;

var c = arr[0];
```

👎 Examples of incorrect code

```typescript
var arr = ['foo', 'bar'];
var [x,y] = z;

var c = arr[ 0 ];

var c = object[ "foo" ];
var c = object["foo" ];
var c = object[ "foo"];

```

## Key Word Space

----------

Enforces consistent spacing before and after keywords.

<https://eslint.org/docs/rules/keyword-spacing#keyword-spacing>

👍 Examples of correct code

```typescript
if (foo) {
    //...
} else if (bar) {
    //...
} else {
    //...
}

try {

} catch(e) {
    // code ...
}
```

👎 Examples of incorrect code

```typescript
if(foo){
    //...
}else if(bar){
    //...
}else{
    //...
}

try{

}catch(e){
    // code ...
}
```

## Space Format

----------

This rule enforces consistency regarding the spaces after

<https://eslint.org/docs/rules/space-unary-ops#space-unary-ops>

👍 Examples of correct code

```typescript
a++;
++a;

--a;
a--;

async function foo() {
    await bar;
}

if (!foo) {

}

const value = +"3";
```

👎 Examples of incorrect code

```typescript
a ++;
++ a;

-- a;
a --;

async function foo() {
    await(bar);
}

if (! foo) {

}

const value = + "3";
```

## UTF-8 Only

----------

Disallow the Unicode Byte Order Mark (BOM).

<https://eslint.org/docs/rules/unicode-bom#unicode-bom>

## No Space in Parentheses

----------

Disallows or enforce spaces inside of parentheses.

<https://eslint.org/docs/rules/space-in-parens#space-in-parens>

👍 Examples of correct code

```typescript
foo();

foo('bar');

foo(/* bar */);

var foo = (1 + 2) * 3;
(function () { return 'bar'; }());
```

👎 Examples of incorrect code

```typescript
foo( );

foo( 'bar');
foo('bar' );
foo( 'bar' );

foo( /* bar */ );

var foo = ( 1 + 2 ) * 3;
( function () { return 'bar'; }() );
```

## No Multiple Space

----------

Disallows multiple consecutive spaces.

<https://eslint.org/docs/rules/no-multi-spaces#no-multi-spaces>

👍 Examples of correct code

```typescript
var a = 1;

if(foo === "bar") {}

a << b

var arr = [ 1, 2 ];
var a = [];
var baz = [];

a ? b : c
```

👎 Examples of incorrect code

```typescript
var a =  1;

if(foo   === "bar") {}

a <<  b

var arr  = [1,  2];
var c    = [];
var baz =  [];

a ?  b  : c
```

## Useless String Concat

----------

Disallows useless string concat.

<https://eslint.org/docs/rules/no-useless-concat#no-useless-concat>

👍 Examples of correct code

```typescript
var c = a + b;
var c = '1' + a;
var a = 1 + '1';
var c = 1 - 2;
// when the string concatenation is multiline
var c = "foo" +
    "bar";
```

👎 Examples of incorrect code

```typescript
var a = `some` + `string`;

// these are the same as "10"
var a = '1' + '0';
var a = '1' + `0`;
var a = `1` + '0';
var a = `1` + `0`;
```

## No Self Assign

----------

Disallows assignments where both sides are exactly the same.

<https://eslint.org/docs/rules/no-self-assign#no-self-assign>

👍 Examples of correct code

```typescript
foo = bar;
[a, b] = [b, a];

// This pattern is warned by the `no-use-before-define` rule.
let foo = foo;

// The default values have an effect.
[foo = 1] = [foo];

// non-self-assignments with properties.
obj.a = obj.b;
obj.a.b = obj.c.b;
obj.a.b = obj.a.c;
obj[a] = obj["a"];
```

👎 Examples of incorrect code

```typescript
foo = foo;

[a, b] = [a, b];

[a, ...b] = [x, ...b];

({a, b} = {a, x});

foo &&= foo;
foo ||= foo;
foo ??= foo;
```

## Force Return Type

----------

Force fill return type in typescript

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md>

👍 Examples of correct code

```typescript
function test(): void {
  return;
}

// A return value of type number
var fn = function (): number {
  return 1;
};

// A return value of type string
var arrowFn = (): string => 'test';

class Test {
  // No return value should be expected (void)
  method(): void {
    return;
  }
}
```

👎 Examples of incorrect code

```typescript
function test() {
  return;
}

// Should indicate that a number is returned
var fn = function () {
  return 1;
};

// Should indicate that a string is returned
var arrowFn = () => 'test';

class Test {
  // Should indicate that no value is returned (void)
  method() {
    return;
  }
}
```

## Array Bracket Line

----------

Requires consistent usage of linebreaks for each pair of brackets. It reports an error if one bracket in the pair has a
linebreak inside it and the other bracket does not.

<https://eslint.org/docs/rules/array-bracket-newline#consistent>

👍 Examples of correct code

```typescript
var a = [];
var c = [ 1 ];
var d = [
    1
];
var f = [
    function foo() {
        dosomething();
    }
];
```

👎 Examples of incorrect code

```typescript
var a = [1
];
var b = [
    1];
var c = [function foo() {
    dosomething();
}
]
var d = [
    function foo() {
        dosomething();
    }]
```

## Unused Vars

----------

Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.
Such variables take up space in the code and can lead to confusion by readers.

<https://eslint.org/docs/rules/no-unused-vars#no-unused-vars>

👍 Examples of correct code

```typescript
var x = 10;
alert(x);

// foo is considered used here
myFunc(function foo() {
    // ...
}.bind(this));

(function(foo) {
    return foo;
})();

var myFunc;
myFunc = setTimeout(function() {
    // myFunc is considered used
    myFunc();
}, 50);

// Only the second argument from the destructured array is used.
function getY([, y]) {
    return y;
}
```

👎 Examples of incorrect code

```typescript
// It checks variables you have defined as global
some_unused_var = 42;

var x;

// Write-only variables are not considered as used.
var y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
var z = 0;
z = z + 1;

// By default, unused arguments cause warnings.
(function(foo) {
    return 5;
})();

// Unused recursive functions also cause warnings.
function fact(n) {
    if (n < 2) return 1;
    return n * fact(n - 1);
}

// When a function definition destructures an array, unused entries from the array also cause warnings.
function getY([x, y]) {
    return y;
}
```

## Comma Spacing

----------

Putting default parameter at last allows function calls to omit optional tail arguments.

<https://eslint.org/docs/rules/comma-spacing#options>

👍 Examples of correct code

```typescript
var foo = 1, bar = 2
    , baz = 3;
var arr = [1, 2];
var arr = [1,, 3]
var obj = {"foo": "bar", "baz": "qur"};
foo(a, b);
new Foo(a, b);
function foo(a, b){}
a, b
```

👎 Examples of incorrect code

```typescript
var foo = 1 ,bar = 2;
var arr = [1 , 2];
var obj = {"foo": "bar" ,"baz": "qur"};
foo(a ,b);
new Foo(a ,b);
function foo(a ,b){}
a ,b
```

## Comma Dangle

----------

This rule enforces consistent use of trailing commas in object and array literals.

<https://eslint.org/docs/rules/comma-dangle#comma-dangle>
<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/comma-dangle.md>

👍 Examples of correct code

```typescript
var foo = {
    bar: "baz",
    qux: "quux",
    bar: "baz",
};
function baz(
    a,
    b,
    c,
) {
    // code ...
}
```

👎 Examples of incorrect code

```typescript
var foo = {
    bar: "baz",
    qux: "quux",
    bar: "baz"
};
function baz(
    a,
    b,
    c
) {
    // code ...
}
```

## Prefer Arrow Function

----------

Requires using arrow functions for callbacks.

<https://eslint.org/docs/rules/prefer-arrow-callback#prefer-arrow-callback>

👍 Examples of correct code

```typescript
foo(a => a);
foo(() => this.a);
foo(function*() { yield; });

```

👎 Examples of incorrect code

```typescript
foo(function(a) { return a; });
foo(function() { return this.a; }.bind(this));
```

## Arrow Function Body

----------

Enforces no braces where they can be omitted

<https://eslint.org/docs/rules/arrow-body-style#arrow-body-style>

👍 Examples of correct code

```typescript
let foo = () => 0;
let foo = (retv, name) => {
    retv[name] = true;
    return retv;
};
let foo = () => ({
    bar: {
        foo: 1,
        bar: 2,
    }
});
let foo = () => { bar(); };
let foo = () => {};
let foo = () => { /* do nothing */ };
let foo = () => {
    // do nothing.
};
let foo = () => ({ bar: 0 });
```

👎 Examples of incorrect code

```typescript
let foo = () => {
    return 0;
};
let foo = () => {
    return {
       bar: {
            foo: 1,
            bar: 2,
        }
    };
};
```

## No Empty Block

----------

Disallows empty block statements.

<https://eslint.org/docs/rules/no-empty#no-empty>

👍 Examples of correct code

```typescript
if (!foo) {
    // code
}

while (foo) {
    // code
}

try {
    doSomething();
} catch (ex) {
    // continue regardless of error
}

try {
    doSomething();
} finally {
    /* continue regardless of error */
}
```

👎 Examples of incorrect code

```typescript
if (foo) {
} else {
  // code
}

while (foo) {
}

switch(foo) {
}

try {
    doSomething();
} catch(ex) {

} finally {

}
```

## No Long Syntax

----------

Disallow long syntax

<https://eslint.org/docs/rules/no-empty#no-empty>

👍 Examples of correct code

```typescript
const arr: Array<number> = [ 1, 2, 3 ];
const arr: Array<Foo> = [ x, y, z ];

Array(500);
new Array(someOtherArray.length);
```

👎 Examples of incorrect code

```typescript
const arr = Array(0, 1, 2);
const arr = new Array(0, 1, 2);
```

## Useless Call Code

----------

Disallow useless code

<https://eslint.org/docs/rules/no-useless-call#no-useless-call>

👍 Examples of correct code

```typescript
foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
obj.foo.call(null, 1, 2, 3);
obj.foo.apply(null, [1, 2, 3]);
obj.foo.call(otherObj, 1, 2, 3);
obj.foo.apply(otherObj, [1, 2, 3]);

// The argument list is variadic.
// Those are warned by the `prefer-spread` rule.
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);

a[++i].foo.call(a[i], 1, 2, 3);
```

👎 Examples of incorrect code

```typescript
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
foo.call(null, 1, 2, 3);
foo.apply(null, [1, 2, 3]);

// These are same as `obj.foo(1, 2, 3);`
obj.foo.call(obj, 1, 2, 3);
obj.foo.apply(obj, [1, 2, 3]);

a[i++].foo.call(a[i++], 1, 2, 3);
```

## Useless Catch Code

----------

Disallow useless code

<https://eslint.org/docs/rules/no-useless-catch#no-useless-catch>

👍 Examples of correct code

```typescript
try {
  doSomethingThatMightThrow();
} catch (e) {
  doSomethingBeforeRethrow();
  throw e;
}

try {
  doSomethingThatMightThrow();
} catch (e) {
  handleError(e);
}

try {
  doSomethingThatMightThrow();
} finally {
  cleanUp();
}
```

👎 Examples of incorrect code

```typescript
try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
}

try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
} finally {
  cleanUp();
}
```

## Useless Expression Code

----------

Disallow useless code

<https://eslint.org/docs/rules/no-unused-expressions>

👍 Examples of correct code

```typescript
{} // In this context, this is a block statement, not an object literal

{myLabel: someVar} // In this context, this is a block statement with a label and expression, not an object literal

function namedFunctionDeclaration () {}

(function aGenuineIIFE () {}());

f()

a = 0

new C

delete a.b

void a

a ? b() : c();
a ? (b = c) : d();
```

👎 Examples of incorrect code

```typescript
0

if(0) 0

{0}

f(0), {}

a && b()

a, b()

c = a, b;

a() && function namedFunctionInExpressionContext () {f();}

(function anIncompleteIIFE () {});

injectGlobal`body{ color: red; }`

function foo() {
    "bar" + 1;
}

class Foo {
    static {
        "use strict"; // class static blocks do not have directive prologues
    }
}
```

## Useless Return Code

----------

Disallow useless code

<https://eslint.org/docs/rules/no-useless-return#no-useless-return>

👍 Examples of correct code

```typescript
function foo() { return 5; }

function foo() {
  return doSomething();
}

function foo() {
  if (condition) {
    bar();
    return;
  } else {
    baz();
  }
  qux();
}

function foo() {
  switch (bar) {
    case 1:
      doSomething();
      return;
    default:
      doSomethingElse();
  }
}

function foo() {
  for (const foo of bar) {
    return;
  }
}
```

👎 Examples of incorrect code

```typescript
function foo() { return; }

function foo() {
  doSomething();
  return;
}

function foo() {
  if (condition) {
    bar();
    return;
  } else {
    baz();
  }
}

function foo() {
  switch (bar) {
    case 1:
      doSomething();
    default:
      doSomethingElse();
      return;
  }
}
```

## Useless Construct Code

----------

Disallow useless code

<https://eslint.org/docs/rules/no-useless-constructor#options>

👍 Examples of correct code

```typescript

class A { }

class A {
    constructor () {
        doSomething();
    }
}

class B extends A {
    constructor() {
        super('foo');
    }
}

class B extends A {
    constructor() {
        super();
        doSomething();
    }
}
```

👎 Examples of incorrect code

```typescript
class A {
    constructor () {
    }
}

class B extends A {
    constructor (...args) {
      super(...args);
    }
}
```

## Useless Parens

----------

Disallows unnecessary parentheses.

<https://eslint.org/docs/rules/no-extra-parens#no-extra-parens>

👍 Examples of correct code

```typescript
a = (b * c);

(a * b) + c;

for (a in (b, c));

for (a in (b));

for (a of (b));

typeof (a);

(function(){} ? a() : b());

class A {
    [(x)] = 1;
}

class B {
    x = (y + z);
}
```

👎 Examples of incorrect code

```typescript
a = (b * c);

(a * b) + c;

for (a in (b, c));

for (a in (b));

for (a of (b));

typeof (a);

(function(){} ? a() : b());

class A {
    [(x)] = 1;
}

class B {
    x = (y + z);
}
```

## Useless Boolean

----------

Disallow useless code

<https://eslint.org/docs/rules/no-useless-constructor#options>

👍 Examples of correct code

```typescript
var foo = !!bar;
var foo = Boolean(bar);

function foo() {
    return !!bar;
}

var foo = bar ? !!baz : !!bat;
```

👎 Examples of incorrect code

```typescript
var foo = !!!bar;

var foo = !!bar ? baz : bat;

var foo = Boolean(!!bar);

var foo = new Boolean(!!bar);

if (!!foo) {
    // ...
}

if (Boolean(foo)) {
    // ...
}

while (!!foo) {
    // ...
}

do {
    // ...
} while (Boolean(foo));

for (; !!foo; ) {
    // ...
}
```

## Return New line

----------

Force new line before return

<https://eslint.org/docs/rules/newline-before-return#newline-before-return>

👍 Examples of correct code

```typescript
function foo(bar) {
  var baz = 'baz';

  if (bar()) {
    return true;
  }

  if (!bar) {
    bar = baz;

    return baz;
  }

  return bar;
}
```

👎 Examples of incorrect code

```typescript
function foo(bar) {
  var baz = 'baz';
  if (bar()) {
    return true;
  }
  if (!bar) {
    bar = baz;
    return bar;
  }
  return bar;
}
```

## Comment Multi Line Prefer

----------

Prefer Multi-line comment formated

<https://eslint.org/docs/rules/newline-before-return#newline-before-return>

👍 Examples of correct code

```typescript
/*
 * this line
 * calls foo()
 */
foo();

// single-line comment
```

👎 Examples of incorrect code

```typescript

// this line
// calls foo()
foo();

/* this line
calls foo() */
foo();

/* this comment
 * is missing a newline after /*
 */

/*
 * this comment
 * is missing a newline at the end */

/*
* the star in this line should have a space before it
 */

/*
 * the star on the following line should have a space before it
*/
```

## No throw Literal

----------

Create custom class to Throw

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-throw-literal.md>
<https://eslint.org/docs/rules/prefer-promise-reject-errors#prefer-promise-reject-errors>

👍 Examples of correct code

```typescript
class CustomError extends Error {
  // ...
};

const e = new CustomError("error");
throw e;

throw new CustomError("error");

function err() {
  return new CustomError();
}
throw err();

const foo = {
  bar: new CustomError();
}
throw foo.bar;

// promises

Promise.reject(new CustomError("something bad happened"));

Promise.reject(new TypeError("something bad happened"));

new Promise(function(resolve, reject) {
  reject(new CustomError("something bad happened"));
});

var foo = getUnknownValue();
Promise.reject(foo);

```

👎 Examples of incorrect code

```typescript
throw new Error();

throw 'error';

throw 0;

throw undefined;

throw null;

const err = new Error();
throw 'an ' + err;

const err = new Error();
throw `${err}`;

const err = '';
throw err;

function err() {
  return '';
}
throw err();

const foo = {
  bar: '',
};
throw foo.bar;

// Promise

Promise.reject("something bad happened");

Promise.reject(5);

Promise.reject();

new Promise(function(resolve, reject) {
  reject("something bad happened");
});

new Promise(function(resolve, reject) {
  reject();
});
```

## No Unreachable

----------

No Unreachable code

<https://eslint.org/docs/rules/no-unreachable>

👍 Examples of correct code

```typescript
function foo() {
    function bar() {
        return 1;
    }

    return bar();

}

function bar() {
    var x;
    return x;
}

switch (foo) {
    case 1:
        break;
}
```

👎 Examples of incorrect code

```typescript
function foo() {
    return true;
    console.log("done");
}

function bar() {
    throw new Error("Oops!");
    console.log("done");
}

while(value) {
    break;
    console.log("done");
}

throw new Error("Oops!");
console.log("done");

function baz() {
    if (Math.random() < 0.5) {
        return;
    } else {
        throw new Error();
    }
    console.log("done");
}

for (;;) {}
console.log("done");
```

## Useless Loop

----------

No useless loop

<https://eslint.org/docs/rules/no-unreachable-loop>

👍 Examples of correct code

```typescript
do {
    doSomething();
} while (false)

for (let i = 0; i < 1; i++) {
    doSomething(i);
}

for (const a of [1]) {
    doSomething(a);
}
```

👎 Examples of incorrect code

```typescript
while (foo) {
    doSomething(foo);
    foo = foo.parent;
    break;
}

function verifyList(head) {
    let item = head;
    do {
        if (verify(item)) {
            return true;
        } else {
            return false;
        }
    } while (item);
}

function findSomething(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (isSomething(arr[i])) {
            return arr[i];
        } else {
            throw new Error("Doesn't exist.");
        }
    }
}

for (key in obj) {
    if (key.startsWith("_")) {
        break;
    }
    firstKey = key;
    firstValue = obj[key];
    break;
}

for (foo of bar) {
    if (foo.id === id) {
        doSomething(foo);
    }
    break;
}
```

## No Multiline String

----------

Prevent break line in string

<https://eslint.org/docs/rules/no-multi-str#no-multi-str>

👍 Examples of correct code

```typescript
var x = "some very\nlong text";

var x = "some very " +
        "long text";
```

👎 Examples of incorrect code

```typescript
var x = "some very \
long text";
```

## No Unsafe Assign

----------

Disallows assigning any to variables and properties.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md>

👍 Examples of correct code

```typescript
const x = 1,
  y = 1;
const [x] = [1];
[x] = [1] as [number];

function foo(a = 1) {}
class Foo {
  constructor(private a = 1) {}
}
class Foo {
  private a = 1;
}

// generic position examples
const x: Set<string> = new Set<string>();
const x: Map<string, string> = new Map<string, string>();
const x: Set<string[]> = new Set<string[]>();
const x: Set<Set<Set<string>>> = new Set<Set<Set<string>>>();
```

👎 Examples of incorrect code

```typescript
const x = 1 as any,
  y = 1 as any;
const [x] = 1 as any;
const [x] = [] as any[];
const [x] = [1 as any];
[x] = [1] as [any];

function foo(a = 1 as any) {}
class Foo {
  constructor(private a = 1 as any) {}
}
class Foo {
  private a = 1 as any;
}

// generic position examples
const x: Set<string> = new Set<any>();
const x: Map<string, string> = new Map<string, any>();
const x: Set<string[]> = new Set<any[]>();
const x: Set<Set<Set<string>>> = new Set<Set<Set<any>>>();
```

## This Pattern

----------

- Enforces consistent naming when capturing the current execution context.
- Disallows this keywords outside of classes or class-like objects.

<https://eslint.org/docs/rules/consistent-this#consistent-this>

👍 Examples of correct code

```typescript
var that = this;

var self = 42;

var self;

that = this;

foo.bar = this;

function Foo() {
    // OK, this is in a legacy style constructor.
    this.a = 0;
    baz(() => this);
}

class Foo {
    constructor() {
        // OK, this is in a constructor.
        this.a = 0;
        baz(() => this);
    }
}

var obj = {
    foo: function foo() {
        // OK, this is in a method (this function is on object literal).
        this.a = 0;
    }
};
```

👎 Examples of incorrect code

```typescript
var that = 42;

var self = this;

that = 42;

self = this;

this.a = 0;
baz(() => this);

(function() {
    this.a = 0;
    baz(() => this);
})();

function foo() {
    this.a = 0;
    baz(() => this);
}

var foo = function() {
    this.a = 0;
    baz(() => this);
};
```

## Use Dot

----------

Enforces use dot notation

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/dot-notation.md>
<https://eslint.org/docs/rules/dot-notation>

👍 Examples of correct code

```typescript
var x = foo.bar;

var x = foo[bar];
```

👎 Examples of incorrect code

```typescript
var x = foo["bar"];
```

## Dot Object Format

----------

- The dot in a member expression should be on the same line as the property portion.
- Disallows whitespace before properties.

<https://eslint.org/docs/rules/dot-location#dot-location>
<https://eslint.org/docs/rules/no-whitespace-before-property>

👍 Examples of correct code

```typescript
foo.bar

foo[bar]

foo[ bar ]

foo.bar.baz

foo
  .bar().baz()

foo
  .bar()
  .baz()
```

👎 Examples of incorrect code

```typescript
foo [bar]

foo. bar

foo .bar

foo. bar. baz

foo. bar()
  .baz()

foo
  .bar(). baz()
```

## No Trailing Space

----------

Not allow trailing whitespace

<https://eslint.org/docs/rules/dot-location#dot-location>
<https://eslint.org/docs/rules/no-whitespace-before-property>

👍 Examples of correct code

```typescript
var foo = 0;
var baz = 5;

class A {

  b = 1;

}
```

👎 Examples of incorrect code

```typescript
var foo = 0;//•••••
var baz = 5;//••

class A {
//••
  b = 1;
//••
}
//••
```

## Type Format

----------

Require consistent spacing around type annotations.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/type-annotation-spacing.md>

👍 Examples of correct code

```typescript
let foo: string = "bar";

function foo(): string {}

class Foo {
    name: string;
}

type Foo = () => {};
```

👎 Examples of incorrect code

```typescript
let foo:string = "bar";
let foo :string = "bar";
let foo : string = "bar";

function foo():string {}
function foo() :string {}
function foo() : string {}

class Foo {
    name:string;
}

class Foo {
    name :string;
}

class Foo {
    name : string;
}

type Foo = ()=>{};
type Foo = () =>{};
type Foo = ()=> {};
```

## No Constant Condition

----------

Disallows constant expressions in conditions. always use variables instead.

<https://eslint.org/docs/rules/no-constant-condition#no-constant-condition>

👍 Examples of correct code

```typescript
if (x === 0) {
    doSomething();
}

for (let i = 0; i < 2; i++) {

}

while (typeof x === "undefined") {
    doSomething();
}

do {
    doSomething();
} while (x);

var result = x !== 0 ? a : b;
```

👎 Examples of incorrect code

```typescript
if (false) {
    doSomethingUnfinished();
}

if (void x) {
    doSomethingUnfinished();
}

if (x &&= false) {
    doSomethingNever();
}

if (class {}) {
    doSomethingAlways();
}

if (new Boolean(x)) {
    doSomethingAlways();
}

if (Boolean(1)) {
    doSomethingAlways();
}

if (undefined) {
    doSomethingUnfinished();
}

if (x ||= true) {
    doSomethingAlways();
}

for (;-2;) {
    doSomethingForever();
}

while (typeof x) {
    doSomethingForever();
}

do {
    doSomethingForever();
} while (x = -1);

var result = 0 ? a : b;
```

## No Debugger

----------

Debugger not recommended use break point.

<https://eslint.org/docs/rules/no-debugger#no-debugger>

👍 Examples of correct code

```typescript
function isTruthy(x) {
    return Boolean(x); // set a breakpoint at this line
}
```

👎 Examples of incorrect code

```typescript
function isTruthy(x) {
    debugger;
    return Boolean(x);
}
```

## Useless Object

----------

- No Duplicate Key in Object

<https://eslint.org/docs/rules/no-dupe-keys#no-dupe-keys>

👍 Examples of correct code

```typescript
var foo = {
    bar: "baz",
    quxx: "qux"
};
```

👎 Examples of incorrect code

```typescript
var foo = {
    bar: "baz",
    bar: "qux"
};

var foo = {
    "bar": "baz",
    bar: "qux"
};

var foo = {
    0x1: "baz",
    1: "qux"
};
```

## Not Duplicate Case

----------

No Duplicate case in switch

<https://eslint.org/docs/rules/no-duplicate-case#no-duplicate-case>

👍 Examples of correct code

```typescript
switch (a) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
        break;
}

switch (a) {
    case one:
        break;
    case two:
        break;
    case three:
        break;
    default:
        break;
}

switch (a) {
    case "1":
        break;
    case "2":
        break;
    case "3":
        break;
    default:
        break;
```

👎 Examples of incorrect code

```typescript
switch (a) {
    case 1:
        break;
    case 2:
        break;
    case 1:         // duplicate test expression
        break;
    default:
        break;
}

switch (a) {
    case one:
        break;
    case 2:
        break;
    case one:         // duplicate test expression
        break;
    default:
        break;
}

switch (a) {
    case "1":
        break;
    case "2":
        break;
    case "1":         // duplicate test expression
        break;
    default:
        break;
}
```

## Regex Block

----------

- Disallows empty character classes in regular expressions.
- No Invalid Regex

<https://eslint.org/docs/rules/no-empty-character-class#no-empty-character-class>

👍 Examples of correct code

```typescript
/^abc/.test("abcdefg"); // true
"abcdefg".match(/^abc/); // ["abc"]

/^abc[a-z]/.test("abcdefg"); // true
"abcdefg".match(/^abc[a-z]/); // ["abcd"]

// valid regex
RegExp('.')
new RegExp
this.RegExp('[')
```

👎 Examples of incorrect code

```typescript
/^abc[]/.test("abcdefg"); // false
"abcdefg".match(/^abc[]/); // null

// invalid regex
RegExp('[')
RegExp('.', 'z')
new RegExp('\\')
```

## No Overwrite Exception

----------

Disallows empty character classes in regular expressions.

<https://eslint.org/docs/rules/no-ex-assign#no-ex-assign>

👍 Examples of correct code

```typescript
try {
    // code
} catch (e) {
    var foo = 10;
}
```

👎 Examples of incorrect code

```typescript
try {
    // code
} catch (e) {
    e = 10;
}
```

## No Extra Semi

----------

Disallows unnecessary semicolons.

<https://eslint.org/docs/rules/no-extra-semi#no-extra-semi>

👍 Examples of correct code

```typescript
var x = 5;

function foo() {
    // code
}

var bar = function() {
    // code
};

class C {
    field;

    method() {
        // code
    }

    static {
        // code
    }
}
```

👎 Examples of incorrect code

```typescript
var x = 5;;

function foo() {
    // code
};

class C {
    field;;

    method() {
        // code
    };

    static {
        // code
    };
};
```

## No Function Overwrite

----------

Disallows reassigning function declarations.

<https://eslint.org/docs/rules/no-func-assign#no-func-assign>

👍 Examples of correct code

```typescript
var foo = function () {}
foo = bar;

function foo(foo) { // `foo` is shadowed.
}
```

👎 Examples of incorrect code

```typescript
function foo() {}
foo = bar;

function foo() {
    foo = bar;
}

var a = function hello() {
  hello = 123;
};
```

## No Declare in Block

----------

Disallows variable or function declarations in nested blocks.

<https://eslint.org/docs/rules/no-func-assign#no-func-assign>

👍 Examples of correct code

```typescript
function doSomething() { }

function doSomethingElse() {
    function doAnotherThing() { }
}

class C {
    static {
        function doSomething() { }
    }
}

if (test) {
    asyncCall(id, function (err, data) { });
}

var fn;
if (test) {
    fn = function fnExpression() { };
}

if (foo) var a;
```

👎 Examples of incorrect code

```typescript
if (test) {
    function doSomething() { }
}

function doSomethingElse() {
    if (test) {
        function doAnotherThing() { }
    }
}

if (foo) function f(){}

class C {
    static {
        if (test) {
            function doSomething() { }
        }
    }
}
```

## Security Negation

----------

Disallows variable or function declarations in nested blocks.

<https://eslint.org/docs/rules/no-negated-in-lhs#no-negated-in-lhs>

👍 Examples of correct code

```typescript
if(!(key in object)) {
    // key is not in object
}
```

👎 Examples of incorrect code

```typescript
if(!key in object) {
    // operator precedence makes it equivalent to (!key) in object
    // and type conversion makes it equivalent to (key ? "false" : "true") in object
}
```

## Regex Space

----------

Disallows multiple spaces in regular expression literals.

<https://eslint.org/docs/rules/no-regex-spaces#no-regex-spaces>

👍 Examples of correct code

```typescript
var re = /foo {3}bar/;
var re = new RegExp("foo {3}bar");

// better
var re = /foo {3}bar/;
var re = new RegExp("foo\s{3}bar");
```

👎 Examples of incorrect code

```typescript
var re = /foo   bar/;
var re = new RegExp("foo   bar");
```

## Array No Space

----------

Disallows sparse arrays.

<https://eslint.org/docs/rules/no-sparse-arrays#no-sparse-arrays>

👍 Examples of correct code

```typescript
var items = [];
var items = new Array(23);

// trailing comma (after the last element) is not a problem
var colors = [ "red", "blue", ];
```

👎 Examples of incorrect code

```typescript
var items = [,];
var colors = [ "red",, "blue" ];
```

## Valid TypeOf

----------

Enforces comparing typeof expressions against valid strings.

<https://eslint.org/docs/rules/valid-typeof#valid-typeof>

👍 Examples of correct code

```typescript
typeof foo === "string"
typeof bar == "undefined"
typeof foo === baz
typeof bar === typeof qux
```

👎 Examples of incorrect code

```typescript
typeof foo === "strnig"
typeof foo == "undefimed"
typeof bar != "nunber"
typeof bar !== "fucntion"
```

## Strict equality

----------

Requires the use of === and !== instead of == and !=.
It is considered good practice to use the type-safe equality operators === and !== instead of their regular counterparts == and !=.

<https://eslint.org/docs/rules/eqeqeq#eqeqeq>

👍 Examples of correct code

```typescript
a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null
```

👎 Examples of incorrect code

```typescript
a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null
```

## Eval Disabled

----------

JavaScript's eval() function is potentially dangerous and is often misused.
Using eval() on untrusted code can open a program up to several different injection attacks.
The use of eval() in most contexts can be substituted for a better, alternative approach to a problem.

<https://eslint.org/docs/rules/no-eval#no-eval>

👍 Examples of correct code

```typescript
var obj = { x: "foo" },
    key = "x",
    value = obj[key];

class A {
    foo() {
        // This is a user-defined method.
        this.eval("var a = 0");
    }

    eval() {
    }

    static {
        // This is a user-defined static method.
        this.eval("var a = 0");
    }

    static eval() {
    }
}
```

👎 Examples of incorrect code

```typescript
var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

(0, eval)("var a = 0");

var foo = eval;
foo("var a = 0");

// This `this` is the global object.
this.eval("var a = 0");
```

## No Label

----------

- Disallows unnecessary labels.
- Labeled statements in JavaScript are used in conjunction with break and continue to control flow around multiple loops. For example:

<https://eslint.org/docs/rules/no-extra-label#no-extra-label>
<https://eslint.org/docs/rules/no-labels#no-labels>

👍 Examples of correct code

```typescript
while (a) {
    break;
}

for (let i = 0; i < 10; ++i) {
    break;
}

switch (a) {
    case 0:
        break;
}
```

👎 Examples of incorrect code

```typescript
A: while (a) {
    break A;
}

B: for (let i = 0; i < 10; ++i) {
    break B;
}

C: switch (a) {
    case 0:
        break C;
}
```

## Full Decimal Number

----------

Disallows leading or trailing decimal points in numeric literals.

<https://eslint.org/docs/rules/no-floating-decimal#no-floating-decimal>

👍 Examples of correct code

```typescript
var num = 0.5;
var num = 2.0;
var num = -0.7;
```

👎 Examples of incorrect code

```typescript
var num = .5;
var num = 2.;
var num = -.7;
```

## No Global Overwrite

----------

Disallows reassignment of native objects.

<https://eslint.org/docs/rules/no-floating-decimal#no-floating-decimal>

👍 Examples of correct code

```typescript
a = 1
var b = 1
b = 2

onload = function() {}

/*global a:writable*/
a = 1
```

👎 Examples of incorrect code

```typescript
Object = null;
undefined = 1;
window = {};
length = 1;
top = 1;

/*global a:readonly*/
a = 1
```

## Not Used New

----------

Disallows `new` operators outside of assignments or comparisons.

<https://eslint.org/docs/rules/no-new#no-new>

👍 Examples of correct code

```typescript
var thing = new Thing();

Thing();
```

👎 Examples of incorrect code

```typescript
new Thing();
```

## No New Function

----------

Disallows new operators with the Function object.
It's possible to create functions in JavaScript from strings at runtime using the Function constructor, such as:

<https://eslint.org/docs/rules/no-new-func#no-new-func>

👍 Examples of correct code

```typescript
var x = function (a, b) {
    return a + b;
};
```

👎 Examples of incorrect code

```typescript
var x = new Function("a", "b", "return a + b");
var x = Function("a", "b", "return a + b");
var x = Function.call(null, "a", "b", "return a + b");
var x = Function.apply(null, ["a", "b", "return a + b"]);
var x = Function.bind(null, "a", "b", "return a + b")();
var f = Function.bind(null, "a", "b", "return a + b"); // assuming that the result of Function.bind(...) will be eventually called.
```

## No Redeclare

----------

Disallows variable redeclarations.

<https://eslint.org/docs/rules/no-redeclare#no-redeclare>

👍 Examples of correct code

```typescript
var a = 3;
a = 10;

class C {
    foo() {
        var b = 3;
        b = 10;
    }

    static {
        var c = 3;
        c = 10;
    }
}

```

👎 Examples of incorrect code

```typescript
var a = 3;
var a = 10;

class C {
    foo() {
        var b = 3;
        var b = 10;
    }

    static {
        var c = 3;
        var c = 10;
    }
}
```

## No Self Compare

----------

Disallows comparisons where both sides are exactly the same.

<https://eslint.org/docs/rules/no-self-compare#no-self-compare>

👍 Examples of correct code

```typescript
var x = 10;
var y = 10;
if (x === y) {
    x = 20;
}
```

👎 Examples of incorrect code

```typescript
var x = 10;
if (x === x) {
    x = 20;
}
```

## Loop Valid

----------

Disallows unmodified conditions of loops.

<https://eslint.org/docs/rules/no-unmodified-loop-condition#no-unmodified-loop-condition>

👍 Examples of correct code

```typescript
while (node) {
    doSomething(node);
    node = node.parent;
}

for (var j = 0; j < items.length; ++j) {
    doSomething(items[j]);
}

// OK, the result of this binary expression is changed in this loop.
while (node !== root) {
    doSomething(node);
    node = node.parent;
}

// OK, the result of this ternary expression is changed in this loop.
while (node ? A : B) {
    doSomething(node);
    node = node.parent;
}

// A property might be a getter which has side effect...
// Or "doSomething" can modify "obj.foo".
while (obj.foo) {
    doSomething(obj);
}

// A function call can return various values.
while (check(obj)) {
    doSomething(obj);
}
```

👎 Examples of incorrect code

```typescript
var node = something;

while (node) {
    doSomething(node);
}
node = other;

for (var j = 0; j < items.length; ++i) {
    doSomething(items[j]);
}

while (node !== root) {
    doSomething(node);
}
```

## Useless Scape

----------

Disallows unnecessary escape characters.

<https://eslint.org/docs/rules/no-useless-escape#no-useless-escape>

👍 Examples of correct code

```typescript
"\"";
'\'';
"\x12";
"\u00a9";
"\371";
"xs\u2111";
`\``;
`\${${foo}}`;
`$\{${foo}}`;
/\\/g;
/\t/g;
/\w\$\*\^\./;
/[[]/;
/[\]]/;
/[a-z-]/;
```

👎 Examples of incorrect code

```typescript
"\'";
'\"';
"\#";
"\e";
`\"`;
`\"${foo}\"`;
`\#{foo}`;
/\!/;
/\@/;
/[\[]/;
/[a-z\-]/;
```

## No Yoda

----------

Disallows "Yoda" conditions.

<https://eslint.org/docs/rules/yoda#yoda>

> Yoda conditions are so named because the literal value of the condition comes first while the variable comes second. For example, the following is a Yoda condition:

👍 Examples of correct code

```typescript
if (5 & value) {
    // ...
}

if (value === "red") {
    // ...
}

if (value === `red`) {
    // ...
}

if (`${value}` === `red`) {

}
```

👎 Examples of incorrect code

```typescript
if ("red" === color) {
    // ...
}

if (`red` === color) {
    // ...
}

if (`red` === `${color}`) {
    // ...
}

if (true == flag) {
    // ...
}

if (5 > count) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}

if (0 <= x && x < 1) {
    // ...
}
```

## No Undefined declare

----------

Disallows initializing variables to undefined.

<https://eslint.org/docs/rules/no-undef-init#no-undef-init>

👍 Examples of correct code

```typescript
var foo;
let bar;

const foo = undefined;

let { bar = undefined } = baz;

[quux = undefined] = quuux;

(foo = undefined) => {};

class Foo {
    bar = undefined;
}
```

👎 Examples of incorrect code

```typescript
var foo = undefined;
let bar = undefined;
```

## No New require

----------

Disallows new operators with calls to require.

<https://eslint.org/docs/rules/no-new-require#no-new-require>

👍 Examples of correct code

```typescript
var AppHeader = require('app-header');
var appHeader = new AppHeader();
```

👎 Examples of incorrect code

```typescript
var appHeader = new require('app-header');
```

## Prefer Literals

----------

Suggests using template literals instead of string concatenation.

<https://eslint.org/docs/rules/prefer-template#prefer-template>

👍 Examples of correct code

```typescript
var str = "Hello World!";
var str = `Hello, ${name}!`;
var str = `Time: ${12 * 60 * 60 * 1000}`;

// This is reported by `no-useless-concat`.
var str = "Hello, " +
  "World!";
```

👎 Examples of incorrect code

```typescript
var str = "Hello, " + name + "!";
var str = "Time: " + (12 * 60 * 60 * 1000);
```

## Useless Condition

----------

Prevents conditionals where the type is always truthy or always falsy.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md>

👍 Examples of correct code

```typescript
function head<T>(items: T[]) {
  // Necessary, since items.length might be 0
  if (items.length) {
    return items[0].toUpperCase();
  }
}

function foo(arg: string) {
  // Necessary, since foo might be ''.
  if (arg) {
  }
}

function bar(arg?: string | null) {
  // Necessary, since arg might be nullish
  return arg?.length;
}

[0, 1, 2, 3].filter(t => t); // number can be truthy or falsy
```

👎 Examples of incorrect code

```typescript
function head<T>(items: T[]) {
  // items can never be nullable, so this is unnecessary
  if (items) {
    return items[0].toUpperCase();
  }
}

function foo(arg: 'bar' | 'baz') {
  // arg is never nullable or empty string, so this is unnecessary
  if (arg) {
  }
}

function bar<T>(arg: string) {
  // arg can never be nullish, so ?. is unnecessary
  return arg?.length;
}

// Checks array predicate return types, where possible
[
  [1, 2],
  [3, 4],
].filter(t => t); // number[] is always truthy
```

## No multiple empty line

----------

we should avoid using lots of white spaces, this takes up the screen and tries to supply a bad organization with spaces

<https://eslint.org/docs/rules/no-multiple-empty-lines>

👍 Examples of correct code

```typescript
function foo<T>(items: T[]) {

}

function bar(arg: string) {

}
```

👎 Examples of incorrect code

```typescript
function foo<T>(items: T[]) {



}


function bar(arg: string) {



}
```

## No Misused New

----------

Block misused new instance

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-new.md>

👍 Examples of correct code

```typescript
class C {
  constructor() {}
}
interface I {
  new (): C;
}
```

👎 Examples of incorrect code

```typescript
class C {
  new(): C;
}

interface I {
  new (): I;
  constructor(): void;
}
```

## No Semicolon Before spacing

----------

Disallows space before semicolon.

<https://eslint.org/docs/rules/semi-spacing>

👍 Examples of correct code

```typescript
var foo;
var foo; var bar;
throw new Error("error");
while (a) { break; }
for (i = 0; i < 10; i++) {}
```

👎 Examples of incorrect code

```typescript
var foo ;
var foo;var bar;
throw new Error("error") ;
while (a) { break ; }
for (i = 0 ; i < 10 ; i++) {}
for (i = 0;i < 10;i++) {}
```

## Disallow Type

----------

Disallow specific types from being used.
Disallow any use.

<https://typescript-eslint.io/rules/ban-types>
<https://typescript-eslint.io/rules/no-explicit-any>

👍 Examples of correct code

```typescript
// use lower-case primitives for consistency
const str: string = 'foo';
const bool: boolean = true;
const num: number = 1;
const symb: symbol = Symbol('foo');

// use a proper function type
const func: () => number = () => 1;

// use safer object types
const lowerObj: object = {};

const capitalObj1: number = 1;
const capitalObj2: { a: string } = { a: 'string' };

const curly1: number = 1;
const curly2: Record<'a', string> = { a: 'string' };

interface ObjInterface {
    a: number
}
const obj: ObjInterface = { a: 1 };
```

👎 Examples of incorrect code

```typescript
// use lower-case primitives for consistency
const str: String = 'foo';
const bool: Boolean = true;
const num: Number = 1;
const symb: Symbol = Symbol('foo');

// use a proper function type
const func: Function = () => 1;

// use safer object types
const capitalObj1: Object = 1;
const capitalObj2: Object = { a: 'string' };

const curly1: {} = 1;
const curly2: {} = { a: 'string' };

const obj: any = { a: 1 };
```

## Disallow Empty Function

----------

Disallow empty functions

<https://typescript-eslint.io/rules/no-empty-function>

👍 Examples of correct code

```typescript
function foo() {
    // do nothing.
}

var foo = function() {
    // any clear comments.
};

var foo = () => {
    bar();
};

function* foo() {
    // do nothing.
}

var foo = function*() {
    // do nothing.
};

var obj = {
    foo: function() {
        // do nothing.
    },

    foo: function*() {
        // do nothing.
    },

    foo() {
        // do nothing.
    },

    *foo() {
        // do nothing.
    },

    get foo() {
        // do nothing.
    },

    set foo(value) {
        // do nothing.
    }
};

class A {
    constructor() {
        // do nothing.
    }

    foo() {
        // do nothing.
    }

    *foo() {
        // do nothing.
    }

    get foo() {
        // do nothing.
    }

    set foo(value) {
        // do nothing.
    }

    static foo() {
        // do nothing.
    }

    static *foo() {
        // do nothing.
    }

    static get foo() {
        // do nothing.
    }

    static set foo(value) {
        // do nothing.
    }
}
```

👎 Examples of incorrect code

```typescript
function foo() {}

var foo = function() {};

var foo = () => {};

function* foo() {}

var foo = function*() {};

var obj = {
    foo: function() {},

    foo: function*() {},

    foo() {},

    *foo() {},

    get foo() {},

    set foo(value) {}
};

class A {
    constructor() {}

    foo() {}

    *foo() {}

    get foo() {}

    set foo(value) {}

    static foo() {}

    static *foo() {}

    static get foo() {}

    static set foo(value) {}
}
```

## Disallow Duplicate Imports

----------

Disallow duplicate imports.

<https://typescript-eslint.io/rules/no-duplicate-imports>

👍 Examples of correct code

```typescript
import { merge, find } from "module";

import something from "another-module";
// or
import * as something from "another-module";
```

👎 Examples of incorrect code

```typescript
import { merge } from "module";
import something from "another-module";
import { find } from "module";
```

## Disallow Unnecessary Type

----------

Disallows unnecessary constraints on generic types.

<https://typescript-eslint.io/rules/no-unnecessary-type-constraint>

👍 Examples of correct code

```typescript
interface Foo<T> {}

type Bar<T> = {};

class Baz<T> {
    qux<U> { }
}

const Quux = <T>() => {};

function Quuz<T>() {}
```

👎 Examples of incorrect code

```typescript
interface FooAny<T extends any> {}
interface FooUnknown<T extends unknown> {}

type BarAny<T extends any> = {};
type BarUnknown<T extends unknown> = {};

class BazAny<T extends any> {
  quxUnknown<U extends unknown>() {}
}

class BazUnknown<T extends unknown> {
  quxUnknown<U extends unknown>() {}
}

const QuuxAny = <T extends any>() => {};
const QuuxUnknown = <T extends unknown>() => {};

function QuuzAny<T extends any>() {}
function QuuzUnknown<T extends unknown>() {}
```

## Prefer Const

----------

If a variable is never reassigned, using the const declaration is better.

<https://eslint.org/docs/rules/prefer-const>
<https://typescript-eslint.io/rules/prefer-as-const>

👍 Examples of correct code

```typescript
const a = 0;

// it's never initialized.
let a;
console.log(a);

// it's reassigned after initialized.
let a;
a = 0;
a = 1;
console.log(a);

// it's initialized in a different block from the declaration.
let a;
if (true) {
    a = 0;
}
console.log(a);

// it's initialized in a different scope.
let a;
class C {
    #x;
    static {
        a = obj => obj.#x;
    }
}

// it's initialized at a place that we cannot write a variable declaration.
let a;
if (true) a = 0;
console.log(a);

// `i` gets a new binding each iteration
for (const i in [1, 2, 3]) {
  console.log(i);
}

// `a` gets a new binding each iteration
for (const a of [1, 2, 3]) {
  console.log(a);
}

let foo = 'bar';
let foo = 'bar' as const;
let foo: 'bar' = 'bar' as const;
let bar = 'bar' as string;
let foo = <string>'bar';
let foo = { bar: 'baz' };
```

👎 Examples of incorrect code

```typescript
let a = 3;
console.log(a);

let a;
a = 0;
console.log(a);

class C {
    static {
        let a;
        a = 0;
        console.log(a);
    }
}

// `i` is redefined (not reassigned) on each loop step.
for (let i in [1, 2, 3]) {
    console.log(i);
}

// `a` is redefined (not reassigned) on each loop step.
for (let a of [1, 2, 3]) {
    console.log(a);
}

let bar: 2 = 2;
let foo = <'bar'>'bar';
let foo = { bar: 'baz' as 'baz' };
```

## Array Type

----------

Requires using either T[] instead of Array\<T\>.

<https://typescript-eslint.io/rules/array-type>

👍 Examples of correct code

```typescript
const x: string[] = ['a', 'b'];
const y: readonly string[] = ['a', 'b'];
```

👎 Examples of incorrect code

```typescript
const x: Array<string> = ['a', 'b'];
const y: ReadonlyArray<string> = ['a', 'b'];
```

## Disallow Await sync function

----------

Disallows awaiting a value that is not a Thenable.

<https://typescript-eslint.io/rules/await-thenable>

👍 Examples of correct code

```typescript
await Promise.resolve('value');

const createValue = async () => 'value';
await createValue();
```

👎 Examples of incorrect code

```typescript
await 'value';

const createValue = () => 'value';
await createValue();
```

## Method Signature Style

----------

Enforces using a particular method signature syntax.

<https://typescript-eslint.io/rules/method-signature-style>

👍 Examples of correct code

```typescript
interface T1 {
  func(arg: string): number;
}
type T2 = {
  func(arg: boolean): void;
};
interface T3 {
  func(arg: number): void;
  func(arg: string): void;
  func(arg: boolean): void;
}
```

👎 Examples of incorrect code

```typescript
interface T1 {
  func: (arg: string) => number;
}
type T2 = {
  func: (arg: boolean) => void;
};
// this is equivalent to the overload
interface T3 {
  func: ((arg: number) => void) &
    ((arg: string) => void) &
    ((arg: boolean) => void);
}
```

## No Unnecessary Type Assertion

----------

Warns if a type assertion does not change the type of an expression.

<https://typescript-eslint.io/rules/no-unnecessary-type-assertion>

👍 Examples of correct code

```typescript
const foo = <number>3;

const foo = 3 as number;
const foo: number = 3;

const foo = 'foo' as const;
```

👎 Examples of incorrect code

```typescript
const foo = 3;
const bar = foo!;

const foo = <3>3;

type Foo = 3;
const foo = <Foo>3;

type Foo = 3;
const foo = 3 as Foo;
```

## No Unsafe Call

----------

This rule disallows calling any variable that is typed as any.

<https://typescript-eslint.io/rules/no-unsafe-call>

👍 Examples of correct code

```typescript
declare const typedVar: () => void;
declare const typedNested: { prop: { a: () => void } };

typedVar();
typedNested.prop.a();

(() => {})();

new Map();

String.raw`foo`;
```

👎 Examples of incorrect code

```typescript
declare const anyVar: any;
declare const nestedAny: { prop: any };

anyVar();
anyVar.a.b();

nestedAny.prop();
nestedAny.prop['a']();

new anyVar();
new nestedAny.prop();

anyVar`foo`;
nestedAny.prop`foo`;
```

## No Var

----------

Requires let or const instead of var.

<https://eslint.org/docs/rules/no-var>

👍 Examples of correct code

```typescript
let x = "y";
const CONFIG = {};

// init var is better
let y;
if (CONFIG.y) {
    y = CONFIG.y;
}
console.log(y);
```

👎 Examples of incorrect code

```typescript
var x = "y";
var CONFIG = {};

if (CONFIG.y) {
    var y = CONFIG.y;
}
console.log(y);
```

## Promise Rules

### No New Statics

----------

Calling a Promise static method with new is invalid, resulting in a TypeError at runtime.

<https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-new-statics.md>

👍 Examples of correct code

```typescript
Promise.resolve(value)
Promise.reject(error)
Promise.race([p1, p2])
Promise.all([p1, p2])
```

👎 Examples of incorrect code

```typescript
new Promise.resolve(value)
new Promise.reject(error)
new Promise.race([p1, p2])
new Promise.all([p1, p2])
```

### No Return Wrap

----------

Ensure that inside a then() or a catch() we always return or throw a raw value instead of wrapping in Promise.resolve or Promise.reject

<https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-new-statics.md>

👍 Examples of correct code

```typescript
myPromise.then(function (val) {
  return val * 2
})
myPromise.then(function (val) {
  throw new Exception("Message");
})
```

👎 Examples of incorrect code

```typescript
myPromise.then(function (val) {
  return Promise.resolve(val * 2)
})
myPromise.then(function (val) {
  return Promise.reject('bad thing')
})
```

### Param Name

----------

Ensure that inside a then() or a catch() we always return or throw a raw value instead of wrapping in Promise.resolve or Promise.reject

<https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/param-names.md>

👍 Examples of correct code

```typescript
new Promise(function (resolve) { ... })
new Promise(function (resolve, reject) { ... })
new Promise(function (_resolve, _reject) { ... }) // Unused marker for parameters are allowed
```

👎 Examples of incorrect code

```typescript
new Promise(function (reject, resolve) { ... }) // incorrect order
new Promise(function (ok, fail) { ... }) // non-standard parameter names
new Promise(function (_, reject) { ... }) // a simple underscore is not allowed
```

### Always Return

----------

Ensure that inside a then() or a catch() we always return or throw a raw value instead of wrapping in Promise.resolve or Promise.reject

<https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/always-return.md>

👍 Examples of correct code

```typescript
myPromise.then((val) => val * 2);
myPromise.then(function(val) { return val * 2; });
myPromise.then(doSomething); // could be either
myPromise.then((b) => { if (b) { return "yes" } else { return "no" } });
```

👎 Examples of incorrect code

```typescript
myPromise.then(function (val) {})
myPromise.then(() => {
  doSomething()
})
myPromise.then((b) => {
  if (b) {
    return 'yes'
  } else {
    forgotToReturn()
  }
})
```

### No Nesting

----------

`Warning` Avoid nested then() or catch() statements (no-nesting)

<https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-nesting.md>

👍 Examples of correct code

```typescript
myPromise.then(doSomething).then(doSomethingElse).catch(errors)
```

👎 Examples of incorrect code

```typescript
myPromise.then((val) => doSomething(val).then(doSomethingElse))

myPromise.then((val) => doSomething(val).catch(errors))

myPromise.catch((err) => doSomething(err).then(doSomethingElse))

myPromise.catch((err) => doSomething(err).catch(errors))
```

### No Return Finally

----------

Disallow return statements inside a callback passed to finally(), since nothing would consume what's returned.

<https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-return-in-finally.md>

👍 Examples of correct code

```typescript
myPromise.finally(function (val) {
  console.log('value:', val)
})
```

👎 Examples of incorrect code

```typescript
myPromise.finally(function (val) {
  return val
})
```

### Valid Params

----------

Disallow return statements inside a callback passed to finally(), since nothing would consume what's returned.

<https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/valid-params.md>

👍 Examples of correct code

```typescript
// Promise.all() requires 1 argument
Promise.all([p1, p2, p3])
Promise.all(iterable)

// Promise.race() requires 1 argument
Promise.race([p1, p2, p3])
Promise.race(iterable)

// Promise.resolve() requires 0 or 1 arguments
Promise.resolve()
Promise.resolve({})
Promise.resolve([1, 2, 3])
Promise.resolve(referenceToObject)

// Promise.reject() requires 0 or 1 arguments
Promise.reject()
Promise.reject(Error())
Promise.reject(referenceToError)

// Promise.then() requires 1 or 2 arguments
somePromise().then((value) => doSomething(value))
somePromise().then(successCallback, errorCallback)

// Promise.catch() requires 1 argument
somePromise().catch((error) => {
  handleError(error)
})
somePromise().catch(console.error)

// Promise.finally() requires 1 argument
somePromise().finally(() => {
  console.log('done!')
})
somePromise().finally(console.log)
```

👎 Examples of incorrect code

```typescript
Promise.all() // is called with 0 or 2+ arguments
Promise.race() // is called with 0 or 2+ arguments
Promise.resolve(a, b) // is called with 2+ arguments
Promise.reject(a, b) // is called with 2+ arguments
Promise.then() // is called with 0 or 3+ arguments
Promise.catch() // is called with 0 or 2+ arguments
Promise.finally() // is called with 0 or 2+ arguments
```

## No Async Promise Executor

----------

Disallows using an async function as a Promise executor.

<https://eslint.org/docs/rules/no-async-promise-executor>

👍 Examples of correct code

```typescript
const foo = new Promise((resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = Promise.resolve(foo);
```

👎 Examples of incorrect code

```typescript
const foo = new Promise(async (resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});
```

## No Misused Promises

----------

Block misused of promise

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md>

👍 Examples of correct code

```typescript
const promise = Promise.resolve('value');

// Always `await` the Promise in a conditional
if (await promise) {
  // Do something
}

const val = (await promise) ? 123 : 456;

while (await promise) {
  // Do something
}
```

👎 Examples of incorrect code

```typescript
const promise = Promise.resolve('value');

// always true
if (promise) {
  // Do something
}

const val = promise ? 123 : 456;

while (promise) {
  // Do something
}
```

## Documentation

### Spaced Comment

----------

Require space after comment block

<https://eslint.org/docs/rules/spaced-comment>

👍 Examples of correct code

```typescript
// This is a comment with a whitespace at the beginning

/* This is a comment with a whitespace at the beginning */

/*
 * This is a comment with a whitespace at the beginning
 */
```

👎 Examples of incorrect code

```typescript
//This is a comment with no whitespace at the beginning

/*This is a comment with no whitespace at the beginning */
```

### Capitalized Comments

----------

Require capitalization of the first letter of a comment.

<https://eslint.org/docs/rules/capitalized-comments>

👍 Examples of correct code

```typescript
// Capitalized comment

// 1. Non-letter at beginning of comment

// 丈 Non-Latin character at beginning of comment
```

👎 Examples of incorrect code

```typescript
// lowercase comment
```

### Comment Align

----------

Require alignment of JSDoc block asterisks.

<https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules-check-alignment>

👍 Examples of correct code

```typescript
/**
 * @param {Number} foo
 */
```

👎 Examples of incorrect code

```typescript
/**
  * @param {Number} foo
 */

/**
* @param {Number} foo
*/
```

### Disallow Space Align

----------

Disallow use space for align dockblock

<https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules-check-alignment>

👍 Examples of correct code

```typescript
/**
 * @param {string} lorem Description.
 * @param {int} sit Description multi words.
 */
```

👎 Examples of incorrect code

```typescript
/**
 * @param {string} lorem Description.
 * @param {int}    sit Description multi words.
 */
```

### Validate Param

----------

Check is valid @param and exists

<https://github.com/gajus/eslint-plugin-jsdoc#check-param-names>

👍 Examples of correct code

```typescript
/**
 * @param {string} a Description.
 */
foo(a) {
}

/**
 * @param {string} a Description.
 * @param {string} b Description.
 */
foo(a, b) {
}
```

👎 Examples of incorrect code

```typescript
/**
 * @param {string} b B iss not exists.
 */
foo(a) {
}

/**
 * @param {string} b order is not correct
 * @param {string} a
 */
foo(a, b) {
}

/**
 * @param {string} a
 * required b
 */
foo(a, b) {
}
```

### Validate Syntax

----------

Check is valid syntax docblock

<https://github.com/gajus/eslint-plugin-jsdoc#check-syntax>

👍 Examples of correct code

```typescript
/**
 * @param {string} foo
 */
function quux (foo) {

}
```

👎 Examples of incorrect code

```typescript
/**
 * @param {string=} foo
 */
function quux (foo) {

}

/**
 * @param {string} [foo]
 */
function quux (foo) {

}
```

### Validate Tag Name

----------

Check is valid tag docblock

<https://github.com/gajus/eslint-plugin-jsdoc#check-tag-names>

👍 Examples of correct code

```typescript
/**
 * @param
 */
```

👎 Examples of incorrect code

```typescript
/**
 * @notExistTag
 */
```

### Validate Type

----------

Check is valid type in docblock

<https://github.com/gajus/eslint-plugin-jsdoc#check-types>

👍 Examples of correct code

```typescript
/**
 * @param {string} a
 */
```

👎 Examples of incorrect code

```typescript
/**
 * @param {strings} a strings is not valid
 */
```

### Validate Values

----------

Check is valid values in docblock

<https://github.com/gajus/eslint-plugin-jsdoc#check-values>

👍 Examples of correct code

```typescript
/**
 * @version 1.0.0
 */

/**
 * @version v1.0.0
 */
```

👎 Examples of incorrect code

```typescript
/**
 * @version v 1.0.0
 */

/**
 * @version it's my version
 */
```

### Empty Tags

----------

Require tags is empty

<https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules-empty-tags>

👍 Examples of correct code

```typescript
/**
 * @global
 */
```

👎 Examples of incorrect code

```typescript
/**
 * @global this is global
 */
```

### Disallow Extra Asterisk

----------

Disallow Extra asterisk in docblock

<https://github.com/gajus/eslint-plugin-jsdoc#no-multi-asterisks>

👍 Examples of correct code

```typescript
/**
 * bold text
 */
```

👎 Examples of incorrect code

```typescript
/**
 * *bold* text
 */
```

### Disallow Default Value

----------

Disallow Extra asterisk in docblock

<https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules-no-defaults>

👍 Examples of correct code

```typescript
/**
 * @param {number} foo
 */
function quux(foo) {

}
```

👎 Examples of incorrect code

```typescript
/**
 * @param {number} [foo="7"]
 */
function quux(foo) {

}
```
