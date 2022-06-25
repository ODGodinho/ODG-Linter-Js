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
- [File Name Convention](#file-name-convention)
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
- [Exception Handled](#exception-handled)
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
- [Arrow Function Parentheses](#arrow-function-parentheses)
- [No Empty Block](#no-empty-block)
- [No Long Syntax](#no-long-syntax)
- [Useless Call Code](#useless-call-code)
- [Useless Catch Code](#useless-catch-code)
- [Useless Expression Code](#useless-expression-code)
- [Useless Return Code](#useless-return-code)
- [Useless Construct Code](#useless-construct-code)
- [Useless Parens](#useless-parens)
- [Useless Boolean](#useless-boolean)
- [Useless Alias](#useless-alias)
- [Return New line](#return-new-line)
- [Comment Multi Line Prefer](#comment-multi-line-prefer)
- [No throw Literal](#no-throw-literal)
- [No Unreachable](#no-unreachable)
- [Useless Loop](#useless-loop)
- [No Multiline String](#no-multiline-string)
- [No Unsafe Assign](#no-unsafe-assign)
- [Disallow Script Url](#disallow-script-url)
- [Disallow Undefined](#disallow-undefined)
- [Function Name](#function-name)
- [This Pattern](#this-pattern)
- [Use Dot](#use-dot)
- [Use this](#use-this)
- [Dot Object Format](#dot-object-format)
- [No Trailing Space](#no-trailing-space)
- [Type Format](#type-format)
- [Max Statements Per Line](#max-statements-per-line)
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
- [Disallow Caller](#disallow-caller)
- [Disallow Underscore](#disallow-underscore)
- [Disallow Param Reassign](#disallow-param-reassign)
- [Prefer Const](#prefer-const)
- [Array Type](#array-type)
- [Disallow Await sync function](#disallow-await-sync-function)
- [Method Signature Style](#method-signature-style)
- [No Unnecessary Type Assertion](#no-unnecessary-type-assertion)
- [No Unsafe Call](#no-unsafe-call)
- [No Var](#no-var)
- [Operator BreakLine](#operator-break-line)
- [Generator Function Stars](#generator-function-stars)
- [No Unsafe Optional Chaining](#no-unsafe-optional-chaining)
- [Array Callback](#array-callback)
- [Space Types](#space-types)
- [Curly](#curly)
- [Quote Props](#quote-props)
- [Brace Style](#brace-style)
- [Comma Style](#comma-style)
- [Object BreakLine](#object-break-line)
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
- [Import](#import)
  - [New Line After Import](#new-line-after-import)
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
- [Regex Rules](#regex-rules)
  - [No Optional With Assertion](#no-optional-with-assertion)
  - [No Control Character](#no-control-character)
  - [No Dupe Condition](#no-dupe-condition)
  - [No Empty Alternative](#no-empty-alternative)
  - [No Empty Capturing Group](#no-empty-capturing-group)
  - [No Empty Character Class](#no-empty-character-class)
  - [No Empty Group](#no-empty-group)
  - [No Empty Look Rounds Assertion](#no-empty-look-rounds-assertion)
  - [No Escape Backspace](#no-escape-backspace)
  - [No Invalid Regexp](#no-invalid-regexp)
  - [No Lazy Ends](#no-lazy-ends)
  - [No Misleading Unicode Character](#no-misleading-unicode-character)
  - [No Optional Assertion](#no-optional-assertion)
  - [No Potentially Useless BackReference](#no-potentially-useless-back-reference)
  - [No Useless Assertions](#no-useless-assertions)
  - [No Useless BackReference](#no-useless-back-reference)
  - [No Useless Dollar Replacements](#no-useless-dollar-replacements)
  - [strict](#strict)
  - [Confusing Quantifier](#confusing-quantifier)
  - [Control Character Escape](#control-character-escape)
  - [Negation](#negation)
  - [No Dupe Characters Character Class](#no-dupe-characters-character-class)
  - [No Invisible Character](#no-invisible-character)
  - [No Legacy Features](#no-legacy-features)
  - [No Non Standard Flag](#no-non-standard-flag)
  - [No Obscure Range](#no-obscure-range)
  - [No Trivially Nested Quantifier](#no-trivially-nested-quantifier)
  - [No Unused Capturing Group](#no-unused-capturing-group)
  - [No Useless Character Class](#no-useless-character-class)
  - [No Useless Flag](#no-useless-flag)
  - [No Useless Lazy](#no-useless-lazy)
  - [No Useless Quantifier](#no-useless-quantifier)
  - [No Useless Range](#no-useless-range)
  - [No Useless Two Num Quantifier](#no-useless-two-num-quantifier)
  - [No Zero Quantifier](#no-zero-quantifier)
  - [Optimal LookAround Quantifier](#optimal-look-around-quantifier)
  - [Optimal Quantifier Concatenation](#optimal-quantifier-concatenation)
  - [Prefer Quantifier](#prefer-quantifier)
  - [Prefer Range](#prefer-range)
  - [Sort Alternatives](#sort-alternatives)
  - [Hexadecimal Escape](#hexadecimal-escape)
  - [Match Any](#match-any)
  - [No Useless Escape](#no-useless-escape)
  - [No Useless Non Capturing Group](#no-useless-non-capturing-group)
  - [Prefer Character Class](#prefer-character-class)
  - [Prefer D](#prefer-d)
  - [Prefer Plus](#prefer-plus)
  - [Prefer Question Quantifier](#prefer-question-quantifier)
  - [Prefer Star Quantifier](#prefer-star-quantifier)
  - [Prefer Unicode CodePoint Escapes](#prefer-unicode-code-point-escapes)
  - [Prefer W](#prefer-w)
  - [Sort Character Class Elements](#sort-character-class-elements)
  - [Sort Flags](#sort-flags)
- [Security](#security)
  - [Eval Disabled](#eval-disabled)
  - [Detect Unsafe Regex](#detect-unsafe-regex)
  - [Buffer No Assert](#buffer-no-assert)
  - [No Exec Child Process](#no-exec-child-process)
  - [No Mustache Scape](#no-mustache-scape)
  - [No Csrf Before Method Override](#no-csrf-before-method-override)
  - [No Literal Fs Filename](#no-literal-fs-filename)
  - [No Pseudo Random Bytes](#no-pseudo-random-bytes)
- [Catch Error Name](#catch-error-name)
- [Consistent Destructured](#consistent-destructured)
- [Consistent Function Scope](#consistent-function-scope)
- [Exception With Message](#exception-with-message)
- [Escape Case](#escape-case)
- [New For Builtin](#new-for-builtin)
- [No Abusive Eslint Disable](#no-abusive-eslint-disable)
- [Prefer for…of](#prefer-for-of)
- [No Array Push Push](#no-array-push-push)
- [No Await Chased](#no-await-chased)
- [No Document Cookie](#no-document-cookie)
- [No Empty File](#no-empty-file)
- [No InstanceOf Array](#no-instance-of-array)
- [No Invalid Remove Event Listener](#no-invalid-remove-event-listener)
- [No Lonely If](#no-lonely-if)
- [No Nested Ternary](#no-nested-ternary)
- [No New Buffer](#no-new-buffer)
- [No This Assignment](#no-this-assignment)
- [No Useless Fallback In Spread](#no-useless-fallback-in-spread)
- [No Useless Length Check](#no-useless-length-check)
- [No Useless Spread](#no-useless-spread)
- [No Useless Switch Case](#no-useless-switch-case)
- [No Useless Undefined](#no-useless-undefined)
- [Prefer Add Event Listener](#prefer-add-event-listener)
- [Prefer Array Find](#prefer-array-find)
- [Prefer Array Index Of](#prefer-array-index-of)
- [Prefer Array Some](#prefer-array-some)
- [Prefer Dom Node Append](#prefer-dom-node-append)

## Introduction

### Installation

Add dependence to package.json

```bash
npm install eslint @odg/eslint-config-odg-linter-js \
    eslint-plugin-jsdoc@* eslint-plugin-import@* \
    eslint-plugin-promise@* eslint-plugin-regexp@* \
    eslint-plugin-filenames@* --save-dev
# or
yarn add -D eslint @odg/eslint-config-odg-linter-js \
    eslint-plugin-jsdoc@* eslint-plugin-import@* \
    eslint-plugin-promise@* eslint-plugin-regexp@* \
    eslint-plugin-filenames@*
```

Add extends in your `.eslintrc` file

```json
{
    "extends": [
        "@odg/odg-linter-js",
    ],
    "overrides": [
        {
            "files": [ "*.ts", "*.tsx" ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaFeatures": { "jsx": true },
                "ecmaVersion": 2018,
                "sourceType": "module",
                "project": [ "tsconfig.json" ], // Specify it only for TypeScript files
            },
        },
    ],
}
```

Test: `npm run eslint` or `yarn eslint`

## File Name Convention

----------

File Name Convention

<https://github.com/selaux/eslint-plugin-filenames>

👍 Examples of correct code

```typescript
// File name Foo.ts
export default class Foo {
}
```

👎 Examples of incorrect code

```typescript
// File name FooClass.ts
export default class Foo {
}
```

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

## Exception Handled

----------

Enforces callback error handling.

<https://eslint.org/docs/rules/handle-callback-err>

👍 Examples of correct code

```typescript
function loadData (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}

function generateError (err) {
    if (err) {
        throw new Exception(err.message);
    }
}
```

👎 Examples of incorrect code

```typescript
function loadData (err, data) {
    doSomething();
}
```

## Class Name

----------

This rule requires constructor names to begin with a capital letter.

<https://eslint.org/docs/rules/new-cap>

👍 Examples of correct code

```typescript
var friend = new Person();
```

👎 Examples of incorrect code

```typescript
var friend = new person();
var friend = Person();
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
() => {};
(a) => {};
(a) => a;
(a) => {'\n'}
a.then((foo) => {});
a.then((foo) => { if (true) {} });
```

👎 Examples of incorrect code

```typescript
a => {};
a => a;
a => {'\n'};
a.then(foo => {});
a.then(foo => a);
a(foo => { if (true) {} });
```

## Arrow Function Parentheses

----------

Enforces parentheses around arguments in all cases.

<https://eslint.org/docs/rules/arrow-parens>

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

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extra-parens.md>
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

for ( ;!!foo; ) {
    // ...
}
```

## Useless Alias

----------

Disallows renaming import, export, and destructured assignments to the same name.

<https://eslint.org/docs/rules/no-useless-rename>

👍 Examples of correct code

```typescript
import * as foo from "foo";
import { foo } from "bar";
import { foo as bar } from "baz";
import { "foo" as bar } from "baz";

export { foo };
export { foo as bar };
export { foo as bar } from "foo";

let { foo } = bar;
let { foo: bar } = baz;
let { [foo]: foo } = bar;

function foo({ bar }) {}
function foo({ bar: baz }) {}

({ foo }) => {}
({ foo: bar }) => {}
```

👎 Examples of incorrect code

```typescript
import { foo as foo } from "bar";
import { "foo" as foo } from "bar";
export { foo as foo };
export { foo as "foo" };
export { foo as foo } from "bar";
export { "foo" as "foo" } from "bar";
let { foo: foo } = bar;
let { 'foo': foo } = bar;
function foo({ bar: bar }) {}
({ foo: foo }) => {}
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

## Disallow Script Url

----------

Using javascript: URLs is considered by some as a form of eval.

<https://eslint.org/docs/rules/no-script-url>

👍 Examples of correct code

```typescript
location.href = "#";
```

👎 Examples of incorrect code

```typescript
location.href = "javascript:void(0)";

location.href = `javascript:void(0)`;
```

## Disallow Undefined

----------

Disallows the use of undeclared variables unless mentioned in /\*global\*/ comments.

<https://eslint.org/docs/rules/no-undef>

👍 Examples of correct code

```typescript
/* global someFunction, a */

var foo = someFunction();
var bar = a + 1;
```

👎 Examples of incorrect code

```typescript
var foo = someFunction();
var bar = a + 1;
```

## Function Name

----------

Requires function expressions to have a name, if the name isn't assigned automatically per the ECMAScript specification.

<https://eslint.org/docs/rules/func-names>

👍 Examples of correct code

```typescript
/* global someFunction, a */

var foo = someFunction();
var bar = a + 1;
```

👎 Examples of incorrect code

```typescript
Foo.prototype.bar = function() {};

(function() {
    // ...
}())

export default function() {}
```

## This Pattern

----------

- Enforces consistent naming when capturing the current execution context.
- Disallows this keywords outside of classes or class-like objects.

<https://eslint.org/docs/rules/consistent-this#consistent-this>

👍 Examples of correct code

```typescript
var bar = function() {};

const cat = {
  meow: function() {}
}

class C {
    #bar = function() {};
    baz = function() {};
}

quux ??= function() {};

(function bar() {
    // ...
}())

export default function foo() {}
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

## Use This

----------

Enforces that `this` is used when only `this` type is returned.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-return-this-type.md>

👍 Examples of correct code

```typescript
class Foo {
  f1(): this {
    return this;
  }
  f2() {
    return this;
  }
  f3 = (): this => {
    return this;
  };
  f4 = () => {
    return this;
  };
}

class Base {}
class Derived extends Base {
  f(): Base {
    return this;
  }
}
```

👎 Examples of incorrect code

```typescript
class Foo {
  f1(): Foo {
    return this;
  }
  f2 = (): Foo => {
    return this;
  };
  f3(): Foo | undefined {
    return Math.random() > 0.5 ? this : undefined;
  }
}
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

## Max Statements Per Line

----------

This rule enforces a maximum number of statements allowed per line.

<https://eslint.org/docs/rules/max-statements-per-line>

👍 Examples of correct code

```typescript
var bar, baz;
if (condition) bar = 1;
for (var i = 0; i < length; ++i);
switch (discriminant) { default: }
function foo() { }
var foo = function foo() { };
(function foo() { })();
```

👎 Examples of incorrect code

```typescript
var bar; var baz;
if (condition) { bar = 1; }
for (var i = 0; i < length; ++i) { bar = 1; }
switch (discriminant) { default: break; }
function foo() { bar = 1; }
var foo = function foo() { bar = 1; };
(function foo() { bar = 1; })();
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

## Disallow Caller

----------

The use of `arguments.caller` and `arguments.callee` make several code optimizations impossible. They have been deprecated in future versions of JavaScript and their use is forbidden in ECMAScript 5 while in strict mode.

<https://eslint.org/docs/rules/no-caller>

👍 Examples of correct code

```typescript
function foo(n) {
    if (n <= 0) {
        return;
    }

    foo(n - 1);
}

[1,2,3,4,5].map(function factorial(n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
});
```

👎 Examples of incorrect code

```typescript
function foo(n) {
    if (n <= 0) {
        return;
    }

    arguments.callee(n - 1);
}

[1,2,3,4,5].map(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

## Disallow Underscore

----------

This rule disallows dangling underscores in identifiers.

<https://eslint.org/docs/rules/no-underscore-dangle>

👍 Examples of correct code

```typescript
var _ = require('underscore');
var obj = _.contains(items, item);
obj.__proto__ = {};
var file = __filename;
function foo(_bar) {};
const foo = { onClick(_bar) {} };
const foo = (_bar) => {};
```

👎 Examples of incorrect code

```typescript
var foo_;
var __proto__ = {};
foo._bar();
function _foo(_bar) {};
```

## Disallow Param Reassign

----------

This rule aims to prevent unintended behavior caused by modification or reassignment of function parameters.

<https://eslint.org/docs/rules/no-param-reassign>

👍 Examples of correct code

```typescript
function foo(bar) {
    var baz = bar;
}
```

👎 Examples of incorrect code

```typescript
function foo(bar) {
    bar = 13;
}

function foo(bar) {
    bar++;
}

function foo(bar) {
    for (bar in baz) {}
}

function foo(bar) {
    for (bar of baz) {}
}
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

## Operator BreakLine

----------

The operator-linebreak rule is aimed at enforcing a particular operator line break style

<https://eslint.org/docs/rules/operator-linebreak>

👍 Examples of correct code

```typescript
foo = 1 + 2;

foo = 1
    + 2
    + 3;

foo = 5;

if (
  someCondition
  || otherCondition
) {
  // code ...
}

answer = everything
  ? 42
  : foo;

class Foo {
    a  = 1;
    [b]  = 2;
    d = 4;
}
```

👎 Examples of incorrect code

```typescript

foo = 1 +
      2;

foo =
    5;

foo
    = 5;

if (
    someCondition ||
    otherCondition
) {
}

answer = everything ?
  42 :
  foo;

class Foo {
    a =
        1;
    [b] =
        2;
    [c
    ] =
        3;
}
```

## Generator Function Stars

----------

Enforces spacing before * in generator functions.

<https://eslint.org/docs/rules/generator-star-spacing>

👍 Examples of correct code

```typescript
function *generator() {}

var anonymous = function *() {};

var shorthand = { *generator() {} };
```

👎 Examples of incorrect code

```typescript
function* generator() {}

var anonymous = function* () {};

var shorthand = { * generator() {} };
```

## No Unsafe Optional Chaining

----------

Enforces spacing before * in generator functions.

<https://eslint.org/docs/rules/no-unsafe-optional-chaining>

👍 Examples of correct code

```typescript
(obj?.foo)?.();

obj?.foo();

(obj?.foo ?? bar)();

obj?.foo.bar;

obj.foo?.bar;

foo?.()?.bar;

(obj?.foo ?? bar)`template`;

new (obj?.foo ?? bar)();

var baz = {...obj?.foo};

const { bar } = obj?.foo || baz;

async function foo () {
  const { bar } = await obj?.foo || baz;
   (await obj?.foo)?.();
   (await obj?.foo)?.bar;
}
```

👎 Examples of incorrect code

```typescript
(obj?.foo)();

(obj?.foo).bar;

(foo?.()).bar;

(foo?.()).bar();

(obj?.foo ?? obj?.bar)();

(foo || obj?.foo)();

(obj?.foo && foo)();

(foo ? obj?.foo : bar)();

(foo, obj?.bar).baz;

(obj?.foo)`template`;

new (obj?.foo)();

[...obj?.foo];

bar(...obj?.foo);

1 in obj?.foo;

bar instanceof obj?.foo;

for (bar of obj?.foo);

const { bar } = obj?.foo;

[{ bar } = obj?.foo] = [];

with (obj?.foo);

class A extends obj?.foo {}

var a = class A extends obj?.foo {};

async function foo () {
    const { bar } = await obj?.foo;
   (await obj?.foo)();
   (await obj?.foo).bar;
}
```

## Array Callback

----------

Array has several methods for filtering, mapping, and folding.
If we forget to write return statement in a callback of those, it's probably a mistake.

<https://eslint.org/docs/rules/array-callback-return>

👍 Examples of correct code

```typescript
var indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
    return memo;
}, {});

var foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
    return false;
});

var bar = foo.map(node => node.getAttribute("id"));
```

👎 Examples of incorrect code

```typescript
var indexMap = myArray.reduce(function(memo, item, index) {
    memo[item] = index;
}, {});

var foo = Array.from(nodes, function(node) {
    if (node.tagName === "DIV") {
        return true;
    }
});

var bar = foo.filter(function(x) {
    if (x) {
        return true;
    } else {
        return;
    }
});
```

## Space Types

----------

Requires spacing around infix operators.

<https://eslint.org/docs/rules/space-infix-ops>
<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/space-infix-ops.md>
<https://eslint.org/docs/rules/key-spacing>

👍 Examples of correct code

```typescript
a + b

a ? b : c

const a = {b:1};

var {a = 0} = bar;

function foo(a = 0) { }

function foo(a = 0): string | number { }

var obj = { "foo": 42 };
```

👎 Examples of incorrect code

```typescript
a+b

a+ b

a +b

a?b:c

const a={b:1};

var {a=0}=bar;

function foo(a=0) { }

function foo(): string|number { }

var obj = { "foo" : 42 };
var obj = { "foo" :42 };
```

## Curly

----------

Requires following curly brace conventions.

<https://eslint.org/docs/rules/curly>

👍 Examples of correct code

```typescript
if (foo) {
    bar();
    baz();
} else {
    buz();
}

if (foo) {
    bar();
} else if (faa) {
    bor();
} else {
    other();
    things();
}

if (true)
    foo();
else
    baz();

if (foo)
    foo++;
```

👎 Examples of incorrect code

```typescript
if (foo) {
    bar();
    baz();
} else
    buz();

if (foo)
    bar();
else if (faa)
    bor();
else {
    other();
    things();
}

if (true)
    foo();
else {
    baz();
}

if (foo) {
    foo++;
}
```

## Quote Props

----------

Requires quotes around all object literal property names if any name strictly requires quotes,
otherwise disallows quotes around object property names.

<https://eslint.org/docs/rules/quote-props>

👍 Examples of correct code

```typescript
var object1 = {
    "foo": "bar",
    "baz": 42,
    "qux-lorem": true
};

var object2 = {
    foo: 'bar',
    baz: 42
};
```

👎 Examples of incorrect code

```typescript
var object1 = {
    foo: "bar",
    "baz": 42,
    "qux-lorem": true
};

var object2 = {
    'foo': 'bar',
    'baz': 42
};
```

## Brace Style

----------

Enforces consistent brace style for blocks.

<https://eslint.org/docs/rules/brace-style>

👍 Examples of correct code

```typescript
function foo() {
  return true;
}

if (foo) {
  bar();
}

if (foo) {
  bar();
} else {
  baz();
}

try {
  somethingRisky();
} catch(e) {
  handleError();
}

class C {
    static {
        foo();
    }
}

// when there are no braces, there are no problems
if (foo) bar();
else if (baz) boom();
```

👎 Examples of incorrect code

```typescript
function foo()
{
  return true;
}

if (foo)
{
  bar();
}

try
{
  somethingRisky();
} catch(e)
{
  handleError();
}

if (foo) {
  bar();
}
else {
  baz();
}

class C
{
    static
    {
        foo();
    }
}
```

## Comma Style

----------

This rule enforce consistent comma style in array literals, object literals, and variable declarations.

<https://eslint.org/docs/rules/comma-style>

👍 Examples of correct code

```typescript
var foo = 1, bar = 2;

var foo = 1,
    bar = 2;

var foo = ["apples",
           "oranges"];

function bar() {
    return {
        "a": 1,
        "b:": 2
    };
}
```

👎 Examples of incorrect code

```typescript
var foo = 1,
    bar = 2;

var foo = ["apples",
           "oranges"];

function bar() {
    return {
        "a": 1,
        "b:": 2
    };
}
```

## Object BreakLine

----------

Enforces placing object properties on separate lines.

<https://eslint.org/docs/rules/object-property-newline>

👍 Examples of correct code

```typescript
const obj1 = {
    foo: "foo",
    bar: "bar",
    baz: "baz"
};

const obj2 = {
    foo: "foo"
    , bar: "bar"
    , baz: "baz"
};

const user = process.argv[2];
const obj3 = {
    user,
    [process.argv[3] ? "foo" : "bar"]: 0,
    baz: [
        1,
        2,
        4,
        8
    ]
};
```

👎 Examples of incorrect code

```typescript
const obj1 = {
    foo: "foo", bar: "bar", baz: "baz"
};

const obj2 = {
    foo: "foo", bar: "bar",
    baz: "baz"
};

const obj3 = {
    [process.argv[3] ? "foo" : "bar"]: 0, baz: [
        1,
        2,
        4,
        8
    ]
};
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

### No Async Promise Executor

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

### No Misused Promises

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

## Import

### New Line After Import

----------

Enforces having one empty lines after the last top-level import statement or require call.

<https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md>

👍 Examples of correct code

```typescript
import defaultExport from './foo'

const FOO = 'BAR'

// OR
import defaultExport from './foo'
import { bar }  from 'bar-lib'

const FOO = 'BAR'

// OR
const FOO = require('./foo')
const BAR = require('./bar')

const BAZ = 1
```

👎 Examples of incorrect code

```typescript
import * as foo from 'foo'
const FOO = 'BAR'

// OR
import * as foo from 'foo'
const FOO = 'BAR'

import { bar }  from 'bar-lib'

// OR
const FOO = require('./foo')
const BAZ = 1
const BAR = require('./bar')
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

## Regex Rules

### No Optional With Assertion

----------

This rule reports elements that contradict an assertion. All elements reported by this rule fall into one of two categories:

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html>

👍 Examples of correct code

```typescript
var foo = /a\b-a/;
var foo = /a\ba/; // handled by regexp/no-useless-assertions
```

👎 Examples of incorrect code

```typescript
var foo = /a\b-?a/;
var foo = /a\b(a|-)/;
var foo = /a\ba*-/;
```

### No Control Character

----------

Control characters are special, invisible characters in the ASCII range 0-31.
These characters are rarely used in JavaScript strings so a regular expression
containing elements that explicitly match these characters is most likely a mistake.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-control-character.html>
<https://eslint.org/docs/rules/no-control-regex>

👍 Examples of correct code

```typescript
var foo = /\n/;
var foo = RegExp("\n");

var pattern1 = /\x20/;
var pattern2 = /\u0020/;
var pattern3 = /\u{20}/u;
var pattern4 = /\t/;
var pattern5 = /\n/;
var pattern6 = new RegExp("\x20");
var pattern7 = new RegExp("\\t");
var pattern8 = new RegExp("\\n");
```

👎 Examples of incorrect code

```typescript
var foo = /\x1f/;
var foo = /\x0a/;
var foo = RegExp('\x0a');

var pattern1 = /\x00/;
var pattern2 = /\x0C/;
var pattern3 = /\x1F/;
var pattern4 = /\u000C/;
var pattern5 = /\u{C}/u;
var pattern6 = new RegExp("\x0C"); // raw U+000C character in the pattern
var pattern7 = new RegExp("\\x0C"); // \x0C pattern
```

### No Dupe Condition

----------

This rule disallows duplicate disjunctions.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html>

👍 Examples of correct code

```typescript
const foo = /a|b/
const foo = /(a|b)/
const foo = /(?:a|b)/
```

👎 Examples of incorrect code

```typescript
const foo = /a|a/
const foo = /(a|a)/
const foo = /(?:a|a)/
const foo = /abc|abc/
const foo = /[ab]|[ba]/
const foo = /a|abc/
const foo = /.|abc/
const foo = /.|a|b|c/
```

### No Empty Alternative

----------

While (re-)writing long regular expressions,
it can happen that one forgets to remove the | character of a former alternative.
This rule tries to point out these potential mistakes by reporting all empty alternatives.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html>

👍 Examples of correct code

```typescript
var foo = /(?:)/
var foo = /a+|b*/
```

👎 Examples of incorrect code

```typescript
var foo = /a+|b+|/
var foo = /\|\||\|||\|\|\|/
var foo = /a(?:a|bc|def|h||ij|k)/
```

### No Empty Capturing Group

----------

This rule reports capturing group that captures assertions.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html>

👍 Examples of correct code

```typescript
var foo = /(?:)/
var foo = /a+|b*/
```

👎 Examples of incorrect code

```typescript
var foo = /a+|b+|/
var foo = /\|\||\|||\|\|\|/
var foo = /a(?:a|bc|def|h||ij|k)/
```

### No Empty Character Class

----------

This rule reports character classes that cannot match any characters.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html>

👍 Examples of correct code

```typescript
var foo = /abc[d]/;
var foo = /abc[a-z]/;
var foo = /[^]/;
var foo = /[\s\S]/;
```

👎 Examples of incorrect code

```typescript
var foo = /abc[]/;
var foo = /[^\s\S]/;
```

### No Empty Group

----------

This rule reports empty groups.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html>

👍 Examples of correct code

```typescript
var foo = /(a)/;
var foo = /(?:a)/;
```

👎 Examples of incorrect code

```typescript
var foo = /()/;
var foo = /(|)/;
// non-capturing group
var foo = /(?:)/;
var foo = /(?:|)/;
```

### No Empty Look Rounds Assertion

----------

This rule reports empty lookahead assertion or empty lookbehind assertion.

> What are empty lookarounds?

An empty lookaround is a lookaround for which at least one path in the lookaround expression
contains only elements that do not consume characters and do not assert characters.
This means that the lookaround expression will trivially accept any input string.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html>

👍 Examples of correct code

```typescript
var foo = /x(?=y)/;
var foo = /x(?!y)/;
var foo = /(?<=y)x/;
var foo = /(?<!y)x/;
```

👎 Examples of incorrect code

```typescript
var foo = /x(?=)/;
var foo = /x(?!)/;
var foo = /(?<=)x/;
var foo = /(?<!)x/;
var foo = /(?=b?)\w/;
var foo = /(?!b?)\w/;
```

### No Escape Backspace

----------

This rule reports [\b].
The word boundaries (\b) and the escape backspace ([\b]) are indistinguishable at a glance.
This rule does not allow backspace ([\b]). Use unicode escapes (\u0008) instead.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html>

👍 Examples of correct code

```typescript
var foo = /\b/;
var foo = /\u0008/;
var foo = /\cH/;
var foo = /\x08/;
```

👎 Examples of incorrect code

```typescript
var foo = /[\b]/;
```

### No Invalid Regexp

----------

This rule reports invalid regular expression patterns given to RegExp constructors.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html>

👍 Examples of correct code

```typescript
RegExp('foo')
RegExp('[a' + ']')
```

👎 Examples of incorrect code

```typescript
RegExp('\\')
RegExp('[a-Z]*')
RegExp('\\p{Foo}', 'u')

const space = '\\s*'
RegExp('=' + space + '+(\\w+)', 'u')
```

### No Lazy Ends

----------

If a lazily quantified element is the last element matched by an expression (e.g. the a{2,3}? in b+a{2,3}?),
we know that the lazy quantifier will always only match the element the minimum number of times.
The maximum is completely ignored because the expression can accept after the minimum was reached.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html>

👍 Examples of correct code

```typescript
var foo = /a+?b*/.test(str)
var foo = /a??(?:ba+?|c)*/.test(str)
var foo = /ba*?$/.test(str)
```

👎 Examples of incorrect code

```typescript
var foo = /a??/.test(str)
var foo = /a+b+?/.test(str)
var foo = /a(?:c|ab+?)?/.test(str)
```

### No Misleading Unicode Character

----------

This rule reports misleading Unicode characters.

Some Unicode characters like '❇️', '🇧🇷', and '👨‍👩‍👦' consist of multiple code points.
This causes problems in character classes and around quantifiers. E.g.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html>

👍 Examples of correct code

```typescript
var foo = /👍+/u;
var foo = /👨‍👩‍👦/;
```

👎 Examples of incorrect code

```typescript
var foo = /👍+/;
var foo = /[❇️👨‍👩‍👦]❤️/;
```

### No Optional Assertion

----------

Assertions that are quantified (directly or indirectly) can be considered optional
if the quantifier has a minimum of zero.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html>

👍 Examples of correct code

```typescript
var foo = /\w+(?::|\b)/;
```

👎 Examples of incorrect code

```typescript
var foo = /a(?:$)*b/;
var foo = /a(?:foo|(?<!-)(?:-|\b))*b/; // The `\b` is optional.
var foo = /(?:^)?\w+/;   // warns about `^`
var foo = /\w+(?::|$)?/; // warns about `$`
```

### No Potentially Useless BackReference

----------

If the referenced group of a backreference is not matched because some other path leads to the backreference,
the backreference will trivially accept (e.g. /(?:(a)|b)\1/).
The same will happen if the captured text of the referenced group was reset before reaching the backreference.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html>

👍 Examples of correct code

```typescript
var foo = /(a+)b\1/;
var foo = /(a+)b|\1/;
```

👎 Examples of incorrect code

```typescript
var foo = /(?:(a)|b)\1/;
var foo = /(a)?b\1/;
var foo = /((a)|c)+b\2/;
```

### No Useless Assertions

----------

Some assertion are unnecessary because the rest of the pattern forces them to always be accept (or reject).

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html>

👍 Examples of correct code

```typescript
var foo = /\bfoo\b/;
```

👎 Examples of incorrect code

```typescript
var foo = /#\bfoo/;    // \b will always accept
var foo = /foo\bbar/;  // \b will always reject
var foo = /$foo/;      // $ will always reject
var foo = /(?=\w)\d+/; // (?=\w) will always accept
```

### No Useless BackReference

----------

Backreferences that will always trivially accept serve no function and can be removed.

This rule is a based on the ESLint core no-useless-backreference rule.
It reports all the ESLint core rule reports and some more.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html>

👍 Examples of correct code

```typescript
var foo = /(a)b\1/;
var foo = /(a?)b\1/;
var foo = /(\b|a)+b\1/;
var foo = /(a)?(?:a|\1)/;
```

👎 Examples of incorrect code

```typescript
var foo = /\1(a)/;
var foo = /(a\1)/;
var foo = /(a)|\1/;
var foo = /(?:(a)|\1)+/;
var foo = /(?<=(a)\1)/;
var foo = /(\b)a\1/;
```

### No Useless Dollar Replacements

----------

This rule aims to detect and disallow useless $ replacements in regular expression replacements.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html>

👍 Examples of correct code

```typescript
var newStr = str.replace(/(\w+)\s(\w+)/, '$2, $1');
// newStr = "Smith, John"

var newStr = str.replace(/(?<first>\w+)\s(?<last>\w+)/, '$<last>, $<first>');
// newStr = "Smith, John"

'123456789012'.replaceAll(/(.)../g, '$1**'); // "1**4**7**0**"
```

👎 Examples of incorrect code

```typescript
var newStr = str.replace(/(\w+)\s(\w+)/, '$3, $1 $2');
// newStr = "$3, John Smith"

var newStr = str.replace(/(?<first>\w+)\s(?<last>\w+)/, '$<last>, $<first> $<middle>');
// newStr = "Smith, John "

var newStr = str.replace(/(\w+)\s(\w+)/, '$<last>, $<first>');
// newStr = "$<last>, $<first>"
```

### Strict

----------

This rule disallows not strictly valid regular expressions.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html>

👍 Examples of correct code

```typescript
var foo = /\}/
var foo = /\{/
var foo = /\]/
var foo = /\u{42}/u; // It matches "B".
var foo = /u{42}/; // It matches a string followed by 42 "u"s.
```

👎 Examples of incorrect code

```typescript
var foo = /}/
var foo = /{/
var foo = /]/
var foo = /\u{42}/; // It matches a string followed by 42 "u"s.
```

### Confusing Quantifier

----------

Confusing quantifiers are ones which imply one thing but don't deliver on that.

An example of this is (?:a?b*|c+){4}. The group is quantified with {4} which implies that at least 4 characters
will be matched but this is not the case. The whole pattern will match the empty string.
It does that because in the a?b* alternative, it's possible to choose 0 many a and b.
So rather than {4}, {0,4} should be used to reflect the fact that the empty string can be matched.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/confusing-quantifier.html>

👍 Examples of correct code

```typescript
var foo = /a*/;
var foo = /(a|b|c)+/;
var foo = /a?/;
```

👎 Examples of incorrect code

```typescript
var foo = /(a?){4}/; // warns about `{4}`
var foo = /(a?b*)+/; // warns about `+`
```

### Control Character Escape

----------

This rule reports control characters that were not escaped using a control escape (\0, t, \n, \v, f, \r).

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html>

👍 Examples of correct code

```typescript
var foo = /[\n\r]/;
var foo = /\t/;
var foo = RegExp("\t+\n");
```

👎 Examples of incorrect code

```typescript
var foo = / /;
var foo = /\u0009/;
var foo = /\u{a}/u;
var foo = RegExp("\\u000a");
```

### Negation

----------

This rule enforces use of \D, \W, \S and \P on negation.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html>

👍 Examples of correct code

```typescript
var foo = /\D/
var foo = /\W/
var foo = /\S/
var foo = /\P{ASCII}/u

var foo = /\d/
var foo = /\w/
var foo = /\s/
var foo = /\p{ASCII}/u
```

👎 Examples of incorrect code

```typescript
var foo = /[^\d]/
var foo = /[^\w]/
var foo = /[^\s]/
var foo = /[^\p{ASCII}]/u

var foo = /[^\D]/
var foo = /[^\W]/
var foo = /[^\S]/
var foo = /[^\P{ASCII}]/u
```

### No Dupe Characters Character Class

----------

Because multiple same character classes in regular expressions only one is useful,
they might be typing mistakes.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html>

👍 Examples of correct code

```typescript
var foo = /[\(\)]/;

var foo = /[a-z\s]/;

var foo = /[\w]/;
```

👎 Examples of incorrect code

```typescript
var foo = /[\\(\\)]/;
//          ^^ ^^        "\\" are duplicated
var foo = /[a-z\\s]/;
//          ^^^  ^       "s" are duplicated
var foo = /[\w0-9]/;
//          ^^^^^        "0-9" are duplicated
```

### No Invisible Character

----------

This rule disallows using invisible characters other than SPACE (U+0020) without using escapes.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html>

👍 Examples of correct code

```typescript
var foo = /\t/;
var foo = /\v/;
var foo = /\f/;
var foo = /\u3000/;
var foo = / /; // SPACE (`U+0020`)
```

👎 Examples of incorrect code

```typescript
var foo = / /;
var foo = //;
var foo = //;
var foo = /　/;
```

### No Legacy Features

----------

This rule disallow legacy RegExp features.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html>

👍 Examples of correct code

```typescript

```

👎 Examples of incorrect code

```typescript
RegExp.input
RegExp.$_
RegExp.lastMatch
RegExp["$&"]
RegExp.lastParen
RegExp["$+"]
RegExp.leftContext
RegExp["$`"]
RegExp.rightContext
RegExp["$'"]
RegExp.$1
RegExp.$2
RegExp.$3
RegExp.$4
RegExp.$5
RegExp.$6
RegExp.$7
RegExp.$8
RegExp.$9

const regexObj = new RegExp('foo', 'gi');
regexObj.compile('new foo', 'g');
```

### No Non Standard Flag

----------

This rule reports non-standard flags.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html>

👍 Examples of correct code

```typescript
var foo = /a*b*c/guy;
```

👎 Examples of incorrect code

```typescript
var foo = RegExp("a*b*c", "l"); // L don1t exists
```

### No Obscure Range

----------

The character range operator (the - inside character classes) can easily be misused
(mostly unintentionally) to construct non-obvious character class.
This rule will disallow all non-obvious uses of the character range operator.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html>

👍 Examples of correct code

```typescript
var foo = /[a-z]/;
var foo = /[J-O]/;
var foo = /[1-9]/;
var foo = /[\x00-\x40]/;
var foo = /[\0-\uFFFF]/;
var foo = /[\0-\u{10FFFF}]/u;
var foo = /[\1-\5]/;
var foo = /[\cA-\cZ]/;
```

👎 Examples of incorrect code

```typescript
var foo = /[A-\x43]/;
var foo = /[\41-\x45]/;
var foo = /[!-$]/;
var foo = /[😀-😄]/u;
```

### No Trivially Nested Quantifier

----------

The character range operator (the - inside character classes) can easily be misused
(mostly unintentionally) to construct non-obvious character class.
This rule will disallow all non-obvious uses of the character range operator.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html>

👍 Examples of correct code

```typescript
var foo = /[a-z]/;
var foo = /[J-O]/;
var foo = /[1-9]/;
var foo = /[\x00-\x40]/;
var foo = /[\0-\uFFFF]/;
var foo = /[\0-\u{10FFFF}]/u;
var foo = /[\1-\5]/;
var foo = /[\cA-\cZ]/;
```

👎 Examples of incorrect code

```typescript
var foo = /[A-\x43]/;
var foo = /[\41-\x45]/;
var foo = /[!-$]/;
var foo = /[😀-😄]/u;
```

### No Unused Capturing Group

----------

This rule reports unused capturing groups.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html>

👍 Examples of correct code

```typescript
var matches = '2000-12-31 2001-01-01'.match(/(\d{4})-(\d{2})-(\d{2})/)
var y = matches[1] // "2000"
var m = matches[2] // "12"
var d = matches[3] // "31"
```

👎 Examples of incorrect code

```typescript
var isDate = /(\d{4})-(\d{2})-(\d{2})/.test('2000-12-31') // true But group never used
```

### No Useless Character Class

----------

This rule reports character classes that defines only one character.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html>

👍 Examples of correct code

```typescript
var foo = /abc/;
```

👎 Examples of incorrect code

```typescript
var foo = /a[b]c/;
```

### No Useless Flag

----------

This will point out present regex flags that do not change the pattern.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html>

👍 Examples of correct code

```typescript
var foo = /a|b/i;

var foo = /^foo$/m;

var foo = /a.*?b/s;

const regex1 = /foo/y;
const str = 'table football, foosball';
regex1.lastIndex = 6
var array = regex1.exec(str)
```

👎 Examples of incorrect code

```typescript
var foo = /\.{3}/i;
var foo = /\w+/i;

var foo = /foo|[^\r\n]*/m;
var foo = /a|b/m;

var foo = /[.:]/s;
var foo = /^foo$/s;

str.split(/foo/y);
```

### No Useless Lazy

----------

This rule reports lazy quantifiers that don't need to by lazy.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html>

👍 Examples of correct code

```typescript
var foo = /a*?/;
var foo = /a+?/;
var foo = /a{4,}?/;
var foo = /a{2,4}?/;
var foo = /a[\s\S]*?bar/;
```

👎 Examples of incorrect code

```typescript
var foo = /a{1}?/;
var foo = /a{4}?/;
var foo = /a{2,2}?/;
var foo = /ab+?c/;
```

### No Useless Quantifier

----------

This rule reports quantifiers that can trivially be removed without affecting the pattern.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html>

👍 Examples of correct code

```typescript
var foo = /a*/;
var foo = /(?:a|b?)??/;
var foo = /(?:\b|(?!a))*/;
```

👎 Examples of incorrect code

```typescript
var foo = /a{1}/;
var foo = /(?:\b)+/;
var foo = /(?:a+b*|c*)?/;
```

### No Useless Range

----------

This rule reports unnecessary range of characters by using a hyphen. e.g. `[a-a]`

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html>

👍 Examples of correct code

```typescript
var foo = /[a]/
var foo = /[ab]/
```

👎 Examples of incorrect code

```typescript
var foo = /[a-a]/
var foo = /[a-b]/
```

### No Useless Two Num Quantifier

----------

This rule reports unnecessary {n,m} quantifiers.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html>

👍 Examples of correct code

```typescript
var foo = /a{0,1}/;
var foo = /a{1,5}/;
var foo = /a{1,}/;
var foo = /a{2}/;
```

👎 Examples of incorrect code

```typescript
var foo = /a{0,0}/;
var foo = /a{1,1}/;
var foo = /a{2,2}/;
```

### No Zero Quantifier

----------

This rule reports quantifiers with a maximum of zero.
These quantifiers trivially do not affect the pattern is any way and can be removed.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html>

👍 Examples of correct code

```typescript
var foo = /a?/;
var foo = /a{0,}/;
var foo = /a{0,1}/;
```

👎 Examples of incorrect code

```typescript
var foo = /a{0}/;
var foo = /a{0,0}?/;
var foo = /(a){0}/;
```

### Optimal LookAround Quantifier

----------

Non-constant quantifiers are quantifiers that describe a range.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html>

👍 Examples of correct code

```typescript
// lookaheads
var foo = /\w+(?=\s*:)/;

// lookbehinds
var foo = /(?<=ab+)/;
```

👎 Examples of incorrect code

```typescript
// lookaheads
var foo = /(?=ab+)/; // == /(?=ab)/
var foo = /(?=ab*)/; // == /(?=a)/
var foo = /(?!ab?)/; // == /(?!a)/
var foo = /(?!ab{6,})/; // == /(?!ab{6})/

// lookbehinds
var foo = /(?<=a+b)/; // == /(?<=ab)/
var foo = /(?<!\w*\s*,)/; // == /(?<!,)/
```

### Optimal Quantifier Concatenation

----------

If two quantified characters, character classes, or characters are concatenated,
the quantifiers can be optimized if either of the characters elements is a subset of the other.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html>

👍 Examples of correct code

```typescript
var foo = /\w+\d{4}/;
var foo = /\w{3,5}\d*/;
var foo = /a+b+c+d+[abc]+/;
var foo = /a\w*/;
```

👎 Examples of incorrect code

```typescript
var foo = /\w+\d+/;
var foo = /\w+\d?/;
var foo = /[ab]*(?:a|b)/;
var foo = /\w+(?:(a)|b)*/;
```

### Prefer Quantifier

----------

This rule is aimed to use quantifiers instead of consecutive characters in regular expressions.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html>

👍 Examples of correct code

```typescript
var foo = /\d{4}-\d{2}-\d{2}/;
```

👎 Examples of incorrect code

```typescript
var foo = /\d\d\d\d-\d\d-\d\d/;
```

### Prefer Range

----------

This rule is aimed to use ranges instead of multiple adjacent characters in character class.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html>

👍 Examples of correct code

```typescript
var foo = /[0-9]/
var foo = /[a-f]/
```

👎 Examples of incorrect code

```typescript
var foo = /[123456789]/
var foo = /[a-cd-f]/
```

### Sort Alternatives

----------

This rule will only sort alternatives if reordering the alternatives doesn't affect the pattern.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-alternatives.html>

👍 Examples of correct code

```typescript
var foo = /\b(1|2|3)\b/;
var foo = /\b(alpha|beta|gamma)\b/;
```

👎 Examples of incorrect code

```typescript
var foo = /\b(2|1|3)\b/;
var foo = /__(?:Foo|Bar)__/;
var foo = /\((?:TM|R|C)\)/;
```

### Hexadecimal Escape

----------

This rule aims is enforces the consistent use of hexadecimal escapes.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/hexadecimal-escape.html>

👍 Examples of correct code

```typescript
var foo = /\x0a/;
```

👎 Examples of incorrect code

```typescript
var foo = /\u000a/;
var foo = /\u{a}/u;
```

### Match Any

----------

This rule enforces the regular expression notation to match any character.
e.g. `[\s\S], [^], /./s` (dotAll) and more.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html>

👍 Examples of correct code

```typescript
var foo = /[\s\S]/;
var foo = /./s;
```

👎 Examples of incorrect code

```typescript
var foo = /[\S\s]/;
var foo = /[^]/;
var foo = /[\d\D]/;
var foo = /[\w\W]/;
```

### No Useless Escape

----------

This rule reports unnecessary escape characters in RegExp.
You may be able to find another mistake by finding unnecessary escapes.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html>

👍 Examples of correct code

```typescript
var foo = /\[/
var foo = /\\/
```

👎 Examples of incorrect code

```typescript
var foo = /\a/
var foo = /\x7/
var foo = /\u41/
var foo = /\u{[41]}/
```

### No Useless Non Capturing Group

----------

This rule reports unnecessary non-capturing group

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html>

👍 Examples of correct code

```typescript
var foo = /(?:abcd)?/.test(str)
var foo = /a(?:ab|cd)/.test(str)
```

👎 Examples of incorrect code

```typescript
var foo = /(?:ab|cd)/.test(str)
var foo = /(?:abcd)/.test(str)
var foo = /(?:[a-d])/.test(str)
var foo = /(?:[a-d])|e/.test(str)
var foo = /(?:a|(?:b|c)|d)/.test(str)
```

### Prefer Character Class

----------

Instead of single-character alternatives
(e.g. (?:a|b|c)),character classes (e.g. [abc]) should be preferred.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html>

👍 Examples of correct code

```typescript
var foo = /[abc]/
var foo = /(?:a|b)/
```

👎 Examples of incorrect code

```typescript
var foo = /a|b|c/
var foo = /(a|b|c)c/
var foo = /.|\s/
var foo = /(\w|\d)+:/
```

### Prefer D

----------

This rule is aimed at using \d instead of [0-9] in regular expressions.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html>

👍 Examples of correct code

```typescript
var foo = /\d/;
var foo = /\D/;
```

👎 Examples of incorrect code

```typescript
var foo = /[0-9]/;
var foo = /[^0-9]/;
```

### Prefer Plus

----------

This rule is aimed at using + quantifier instead of {1,} in regular expressions.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html>

👍 Examples of correct code

```typescript
var foo = /a+/;
```

👎 Examples of incorrect code

```typescript
var foo = /a{1,}/;
```

### Prefer Question Quantifier

----------

This rule is aimed at using ? quantifier instead of {0,1} in regular expressions.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html>

👍 Examples of correct code

```typescript
var foo = /a?/;
```

👎 Examples of incorrect code

```typescript
var foo = /a{0,1}/;
```

### Prefer Star Quantifier

----------

This rule is aimed at using * quantifier instead of {0,} in regular expressions.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html>

👍 Examples of correct code

```typescript
var foo = /a*/
```

👎 Examples of incorrect code

```typescript
var foo = /a{0,}/;
```

### Prefer Unicode CodePoint Escapes

----------

This rule enforces the use of Unicode codepoint escapes instead of Unicode escapes using surrogate pairs.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html>

👍 Examples of correct code

```typescript
var foo = /\u{1f600}/u
var foo = /😀/u
```

👎 Examples of incorrect code

```typescript
var foo = /\ud83d\ude00/u
```

### Prefer W

----------

This rule is aimed at using \w in regular expressions.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html>

👍 Examples of correct code

```typescript
var foo = /\w/;
var foo = /\W/;
```

👎 Examples of incorrect code

```typescript
var foo = /[0-9a-zA-Z_]/;
var foo = /[^0-9a-zA-Z_]/;
var foo = /[0-9a-z_]/i;
var foo = /[0-9a-z_-]/i;
```

### Sort Character Class Elements

----------

This rule checks elements of character classes are sorted.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-character-class-elements.html>

👍 Examples of correct code

```typescript
var foo = /[abcdef]/
var foo = /[ab-f]/
```

👎 Examples of incorrect code

```typescript
var foo = /[bcdefa]/
var foo = /[b-fa]/
```

### Sort Flags

----------

The flags of JavaScript regular expressions should be sorted alphabetically because the flags of the
`.flags` property of `RegExp` objects are always sorted.
Not sorting flags in regex literals misleads readers into thinking
that the order may have some purpose which it doesn't.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html>

👍 Examples of correct code

```typescript
var foo = /abc/
var foo = /abc/iu
var foo = /abc/gimsuy
```

👎 Examples of incorrect code

```typescript
var foo = /abc/mi
var foo = /abc/us
```

## Catch Error Name

----------

Enforce a specific parameter name in catch clauses

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md>

👍 Examples of correct code

```typescript
try {} catch (exception) {}
promise.catch(exception => {});
promise.catch(error => {});
promise.catch(error1 => {});
promise.catch(error2 => {});
```

👎 Examples of incorrect code

```typescript
try {} catch (badName) {}
// `_` is not allowed if it's used
try {} catch (_) {
    console.log(_);
}
promise.catch(badName => {});
promise.then(undefined, badName => {});
```

## Consistent Destructured

----------

Enforces the use of already destructured objects and their variables over accessing each property individually.
Previous destructurings are easily missed which leads to an inconsistent code style.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md>

👍 Examples of correct code

```typescript
const {a} = foo;
console.log(a);
console.log(foo.a, foo.b);
const {a} = foo;
console.log(a, foo.b());
const {a} = foo.bar;
console.log(foo.bar);
```

👎 Examples of incorrect code

```typescript
const {a} = foo;
console.log(a, foo.b);
const {a} = foo;
console.log(foo.a);
const {
    a: {
        b
    }
} = foo;
console.log(foo.a.c);
const {bar} = foo;
const {a} = foo.bar;
```

## Consistent Function Scope

----------

A function definition should be placed as close to the top-level scope as possible without breaking its captured values.
This improves readability, directly improves performance and allows JavaScript engines to better optimize performance.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md>

👍 Examples of correct code

```typescript
function doBar(bar) {
    return bar === 'bar';
}

export function doFoo(foo) {
    return doBar;
}

export function doFoo(foo) {
    function doBar(bar) {
        return bar === 'bar' && foo.doBar(bar);
    }

    return doBar;
}
```

👎 Examples of incorrect code

```typescript
export function doFoo(foo) {
    // Does not capture anything from the scope, can be moved to the outer scope
    function doBar(bar) {
        return bar === 'bar';
    }

    return doBar;
}

function doFoo(foo) {
    const doBar = bar => {
        return bar === 'bar';
    };
}
```

## Exception With Message

----------

This rule enforces a message value to be passed in when creating an instance of a built-in Error object,
which leads to more readable and debuggable code.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md>

👍 Examples of correct code

```typescript
throw new TypeError('Array expected.');
const error = new AggregateError(errors, 'Promises rejected.');
```

👎 Examples of incorrect code

```typescript
throw Error();
throw Error('');
throw new TypeError();
const error = new AggregateError(errors);
```

## Escape Case

----------

Enforces defining escape sequence values with uppercase characters rather than lowercase ones.
This promotes readability by making the escaped value more distinguishable from the identifier.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/escape-case.md>

👍 Examples of correct code

```typescript
const foo = '\xA9';
const foo = '\uD834';
const foo = '\u{1D306}';
const foo = '\cA';
```

👎 Examples of incorrect code

```typescript
const foo = '\xa9';
const foo = '\ud834';
const foo = '\u{1d306}';
const foo = '\ca';
```

## New For Builtin

----------

Enforce the use of new for all builtin's, except String, Number, Boolean, Symbol and BigInt

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md>

👍 Examples of correct code

```typescript
const list = new Array(10);
const now = new Date();
const map = new Map([
    ['foo', 'bar']
]);
```

👎 Examples of incorrect code

```typescript
const list = Array(10);
const now = Date();
const map = Map([
    ['foo', 'bar']
]);
```

## No Abusive Eslint Disable

----------

This rule makes you specify the rules you want to disable when using eslint-disable,
eslint-disable-line or eslint-disable-next-line comments.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md>

👍 Examples of correct code

```typescript
/* eslint-disable no-console */
console.log(message);

console.log(message); // eslint-disable-line no-console

// eslint-disable-next-line no-console
console.log(message);
```

👎 Examples of incorrect code

```typescript
/* eslint-disable */
console.log(message);

console.log(message); // eslint-disable-line

// eslint-disable-next-line
console.log(message);
```

## Prefer for…of

----------

Prefer for…of over the forEach method
Do not use a for loop that can be replaced with a for-of loop

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md>
<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md>

👍 Examples of correct code

```typescript
for (const element of array) {
    bar(element);
}
for (const [index, element] of array.entries()) {
    bar(element, index);
}
for (const [index, element] of array.entries()) {
    bar(element, index, array);
}
```

👎 Examples of incorrect code

```typescript
array.forEach(element => {
    bar(element);
});
array?.forEach(element => {
    bar(element);
});
array.forEach((element, index) => {
    bar(element, index);
});
array.forEach((element, index, array) => {
    bar(element, index, array);
});

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(index, element);
}

```

## No Array Push Push

----------

Enforce combining multiple Array#push() into one call

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md>

👍 Examples of correct code

```typescript
foo.push(1, 2, 3);

// or
const length = foo.push(1);
foo.push(2);

// or
foo.push(1);
bar();
foo.push(2);
```

👎 Examples of incorrect code

```typescript
foo.push(1);
foo.push(2, 3);
```

## No Await Chased

----------

Disallow member access from await expression

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md>

👍 Examples of correct code

```typescript
const {default: foo} = await import('./foo.js');
const [, secondElement] = await getArray();
const {property} = await getObject();
const response = await fetch('/foo');
const data = await response.json();
```

👎 Examples of incorrect code

```typescript
const foo = (await import('./foo.js')).default;
const secondElement = (await getArray())[1];
const property = (await getObject()).property;
const data = await (await fetch('/foo')).json();
```

## No Document Cookie

----------

Do not use document.cookie directly
It's not recommended to use document.cookie directly as it's easy to get the string wrong.
Instead, you should use the [Cookie Store API](https://developer.mozilla.org/en-US/docs/Web/API/Cookie_Store_API) or a cookie library.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md>

👍 Examples of correct code

```typescript
await cookieStore.set({
    name: 'foo',
    value: 'bar',
    expires: Date.now() + 24 * 60 * 60 * 1000,
    domain: 'example.com'
});
const array = document.cookie.split('; ');
import Cookies from 'js-cookie';

Cookies.set('foo', 'bar');
```

👎 Examples of incorrect code

```typescript
document.cookie =
    'foo=bar' +
    '; Path=/' +
    '; Domain=example.com' +
    '; expires=Fri, 31 Dec 9999 23:59:59 GMT' +
    '; Secure';

document.cookie += '; foo=bar';
```

## No Empty File

----------

Disallow any files only containing the following:
    Whitespace
    Comments
    Directives
    Empty statements
    Empty block statements
    Hashbang

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md>

👍 Examples of correct code

```typescript
await cookieStore.set({
    name: 'foo',
    value: 'bar',
    expires: Date.now() + 24 * 60 * 60 * 1000,
    domain: 'example.com'
});
const array = document.cookie.split('; ');
import Cookies from 'js-cookie';

Cookies.set('foo', 'bar');
```

👎 Examples of incorrect code

```typescript
const x = 0;
```

```typescript
/* Comment */
```

```typescript
;
```

## No InstanceOf Array

----------

Require Array.isArray() instead of instanceof Array

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-array.md>

👍 Examples of correct code

```typescript
Array.isArray(array);
Array.isArray([ 1, 2, 3 ]);
```

👎 Examples of incorrect code

```typescript
array instanceof Array;
[ 1, 2, 3 ] instanceof Array;
```

## No Invalid Remove Event Listener

----------

The removeEventListener function must be called with a reference to the same function that
was passed to addEventListener. Calling removeEventListener with an inline function or the result of an inline .bind()
call is indicative of an error, and won't actually remove the listener.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md>

👍 Examples of correct code

```typescript
window.removeEventListener('click', listener);
window.removeEventListener('click', getListener());
class MyElement extends HTMLElement {
    constructor() {
        super();
        this.handler = this.handler.bind(this);
    }

    handler() {}

    disconnectedCallback() {
        this.removeEventListener('click', this.handler);
    }
}
```

👎 Examples of incorrect code

```typescript
window.removeEventListener('click', fn.bind(window));
window.removeEventListener('click', () => {});
window.removeEventListener('click', function () {});
class MyElement extends HTMLElement {
    handler() {}

    disconnectedCallback() {
        this.removeEventListener('click', this.handler.bind(this));
    }
}
```

## No Lonely If

----------

This rule adds onto the built-in no-lonely-if rule, which only disallows if statements in else, not in if.

<https://eslint.org/docs/latest/rules/no-lonely-if>
<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-lonely-if.md>

👍 Examples of correct code

```typescript
if (foo && bar) {
    // …
}
if (foo) {
    // …
} else if (bar && baz) {
    // …
}
if (foo) {
    // …
} else if (bar) {
    if (baz) {
        // …
    }
} else {
    // …
}
```

👎 Examples of incorrect code

```typescript
if (foo) {
    if (bar) {
        // …
    }
}
if (foo) {
    // …
} else if (bar) {
    if (baz) {
        // …
    }
}
```

## No Nested Ternary

----------

Improved version of the no-nested-ternary ESLint rule,
which allows cases where the nested ternary is only one level and wrapped in Parentheses.

<https://eslint.org/docs/latest/rules/no-nested-ternary#rule-details>
<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md>

👍 Examples of correct code

```typescript
const foo = i > 5 ? (i < 100 ? true : false) : true;
const foo = i > 5 ? (i < 100 ? true : false) : (i < 100 ? true : false);
```

👎 Examples of incorrect code

```typescript
const foo = i > 5 ? i < 100 ? true : false : true;
const foo = i > 5 ? true : (i < 100 ? true : (i < 1000 ? true : false));
```

## No New Buffer

----------

Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer()

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md>

👍 Examples of correct code

```typescript
const buffer = Buffer.from('7468697320697320612074c3a97374', 'hex');
const buffer = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
const buffer = Buffer.alloc(10);
```

👎 Examples of incorrect code

```typescript
const buffer = new Buffer('7468697320697320612074c3a97374', 'hex');
const buffer = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const buffer = new Buffer(10);
```

## No This Assignment

----------

this should be used directly. If you want a reference to this from a higher scope,
consider using arrow function expression or Function#bind().

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md>

👍 Examples of correct code

```typescript
setTimeout(() => {
    this.bar();
}, 1000);
setTimeout(function () {
    this.bar();
}.bind(this), 1000);
class Bar {
    constructor(fooInstance) {
        this.fooInstance = fooInstance;
    }
    method() {
        this.fooInstance.baz();
    }
}

new Bar(this).method();
```

👎 Examples of incorrect code

```typescript
const foo = this;

setTimeout(function () {
    foo.bar();
}, 1000);
const foo = this;

class Bar {
    method() {
        foo.baz();
    }
}

new Bar().method();
```

## No Useless Fallback In Spread

----------

Disallow useless fallback when spreading in object literals

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md>

👍 Examples of correct code

```typescript
const object = {...foo};
const object = {...(foo && {})};
const array = [...(foo || [])];
```

👎 Examples of incorrect code

```typescript
const object = {...(foo || {})};
const object = {...(foo ?? {})};
```

## No Useless Length Check

----------

Disallow useless array length check

Array#some() returns false for an empty array. There is no need to check if the array is not empty.
Array#every() returns true for an empty array. There is no need to check if the array is empty.

We only check .length === 0, .length !== 0, and .length > 0.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md>

👍 Examples of correct code

```typescript
if (array.every(Boolean));
if (array.some(Boolean));
const isAllTrulyOrEmpty = array.every(Boolean);
if (array.length === 0 || anotherCheck() || array.every(Boolean));
const isNonEmptyAllTrulyArray = array.length > 0 && array.every(Boolean);
const isEmptyArrayOrAllTruly = array.length === 0 || array.some(Boolean);
```

👎 Examples of incorrect code

```typescript
if (array.length === 0 || array.every(Boolean));
if (array.length !== 0 && array.some(Boolean));
if (array.length > 0 && array.some(Boolean));
const isAllTrulyOrEmpty = array.length === 0 || array.every(Boolean);
```

## No Useless Spread

----------

Disallow unnecessary spread

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md>

👍 Examples of correct code

```typescript
const array = [firstElement, secondElement, thirdElement];
const object = {firstProperty, secondProperty, thirdProperty};
foo(firstArgument, secondArgument, thirdArgument);
const object = new Foo(firstArgument, secondArgument, thirdArgument);
const array = [...foo, bar];
const object = {...foo, bar};
foo(foo, ...bar);
const object = new Foo(...foo, bar);
const set = new Set(iterable);
const results = await Promise.all(iterable);
for (const foo of set);
function * foo() {
    yield * anotherGenerator();
}
```

👎 Examples of incorrect code

```typescript

const array = [firstElement, ...[secondElement], thirdElement];
const object = {firstProperty, ...{secondProperty}, thirdProperty};
foo(firstArgument, ...[secondArgument], thirdArgument);
const object = new Foo(firstArgument, ...[secondArgument], thirdArgument);
const set = new Set([...iterable]);
const results = await Promise.all([...iterable]);
for (const foo of [...set]);
function * foo() {
    yield * [...anotherGenerator()];
}
```

## No Useless Switch Case

----------

Disallow useless case in switch statements

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md>

👍 Examples of correct code

```typescript
switch (foo) {
    case 1:
    case 2:
        handleCase1And2();
        break;
}
switch (foo) {
    case 1:
        handleCase1();
        break;
    default:
        handleDefaultCase();
        break;
}
switch (foo) {
    case 1:
        handleCase1();
        // Fallthrough
    default:
        handleDefaultCase();
        break;
}
switch (foo) {
    // This is actually useless, but we only check cases where the last case is the `default` case
    case 1:
    default:
        handleDefaultCase();
        break;
    case 2:
        handleCase2();
        break;
}
```

👎 Examples of incorrect code

```typescript
switch (foo) {
    case 1:
    default:
        handleDefaultCase();
        break;
}
```

## No Useless Undefined

----------

Disallow useless undefined

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md>

👍 Examples of correct code

```typescript
let foo;
const {foo} = bar;
const noop = () => {};
function foo() {
    return;
}
function* foo() {
    yield;
}
function foo(bar) {
}
function foo({bar}) {
}
foo();
```

👎 Examples of incorrect code

```typescript
let foo = undefined;
const {foo = undefined} = bar;
const noop = () => undefined;
function foo() {
    return undefined;
}
function* foo() {
    yield undefined;
}
function foo(bar = undefined) {
}
function foo({bar = undefined}) {
}
foo(undefined);
```

## Prefer Add Event Listener

----------

Prefer .addEventListener() and .removeEventListener() over on-functions

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md>

👍 Examples of correct code

```typescript
foo.addEventListener('click', () => {});
foo.addEventListener('keydown', () => {});
foo.bar.addEventListener('click', onClick);
foo.removeEventListener('click', onClick);
```

👎 Examples of incorrect code

```typescript
foo.onclick = () => {};
foo.onkeydown = () => {};
foo.bar.onclick = onClick;
foo.onclick = null;
```

## Prefer Array Find

----------

Prefer .find(…) over the first element from .filter(…)

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md>

👍 Examples of correct code

```typescript
const item = array.find(x => callback(x));
item = array.find(x => callback(x));
```

👎 Examples of incorrect code

```typescript
const item = array.filter(x => callback(x))[0];
const item = array.filter(x => callback(x)).shift();
const [item] = array.filter(x => callback(x));
[item] = array.filter(x => callback(x));
```

## Prefer Array Index Of

----------

Prefer Array#indexOf() over Array#findIndex() when looking for the index of an item

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-index-of.md>

👍 Examples of correct code

```typescript
const index = foo.indexOf('foo');
const index = foo.findIndex(x => x == undefined);
const index = foo.findIndex(x => x !== 'foo');
const index = foo.findIndex((x, index) => x === index);
const index = foo.findIndex(x => (x === 'foo') && isValid());
const index = foo.findIndex(x => y === 'foo');
const index = foo.findIndex(x => y.x === 'foo');
const index = foo.findIndex(x => {
    const bar = getBar();
    return x === bar;
});
```

👎 Examples of incorrect code

```typescript
const index = foo.findIndex(x => x === 'foo');
const index = foo.findIndex(x => 'foo' === x);
const index = foo.findIndex(x => {
    return x === 'foo';
});
```

## Prefer Array Some

----------

Prefer .some(…) over .filter(…).length check and .find(…)

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-some.md>

👍 Examples of correct code

```tsx
const hasUnicorn = array.some(element => callback(element));
if (array.some(element => callback(element))) {
    // …
}
const foo = array.find(element => callback(element)) || bar;
<template>
    <div v-if="array.some(element => callback(element))">Vue</div>
</template>
```

👎 Examples of incorrect code

```tsx
const hasUnicorn = array.filter(element => callback(element)).length > 0;
const hasUnicorn = array.filter(element => callback(element)).length !== 0;
const hasUnicorn = array.filter(element => callback(element)).length >= 1;
if (array.find(element => callback(element))) {
    // …
}
const foo = array.find(element => callback(element)) ? bar : baz;
const hasUnicorn = array.find(element => callback(element) !== undefined);
const hasUnicorn = array.find(element => callback(element) != null);
<template>
    <div v-if="array.find(element => callback(element))">Vue</div>
</template>
<template>
    <div v-if="array.filter(element => callback(element)).length > 0">Vue</div>
</template>
```

## Prefer Dom Node Append

----------

Prefer Node#append() over Node#appendChild()

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-append.md>

👍 Examples of correct code

```tsx
foo.append(bar);
foo.append('bar');
foo.append(bar, 'baz');
```

👎 Examples of incorrect code

```tsx
foo.appendChild(bar);
```

## Security

### Eval Disabled

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

### Detect Unsafe Regex

----------

There are many ways to block the event loop, one way an attacker can do that
is with Regular Expression Denial of Service (ReDoS).

<https://github.com/nodesecurity/eslint-plugin-security/blob/main/docs/regular-expression-dos-and-node.md>

👍 Examples of correct code

```typescript
 var expression = /^[\w+\-.]+@[\d\-A-Za-z]+\.[\d\-.A-Za-z]+$/
```

👎 Examples of incorrect code

```typescript
var expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
```

### Buffer No Assert

----------

Detect calls to buffer with noAssert flag set.

From the Node.js API docs: "Setting noAssert to true skips validation of the offset. This allows the offset to be beyond the end of the Buffer."

<https://github.com/nodesecurity/eslint-plugin-security#detect-buffer-noassert>

👍 Examples of correct code

```typescript
```

👎 Examples of incorrect code

```typescript
/** https://nodejs.org/api/buffer.html */
```

### No Exec Child Process

----------

Detect instances of child_process & non-literal exec()

<https://github.com/nodesecurity/eslint-plugin-security/blob/main/docs/avoid-command-injection-node.md>

👍 Examples of correct code

```typescript
var child_process = require('child_process');

var path = '.';
child_process.execFile('/bin/ls', ['-l', path], function (err, result) {
  console.log(result);
});

// Or

var child_process = require('child_process');

var path = '.';
var ls = child_process.spawn('/bin/ls', ['-l', path]);
ls.stdout.on('data', function (data) {
  console.log(data.toString());
});
```

👎 Examples of incorrect code

```typescript
var path = 'user input';
child_process.exec('ls -l ' + path, function (err, data) {
  console.log(data);
});
```

### No Mustache Scape

----------

Detects object.escapeMarkup = false, which can be used with some template engines to disable
escaping of HTML entities. This can lead to Cross-Site Scripting (XSS) vulnerabilities.

More information: [OWASP XSS](https://owasp.org/www-community/attacks/xss/)

<https://github.com/nodesecurity/eslint-plugin-security#detect-disable-mustache-escape>

👍 Examples of correct code

```typescript
// No remove object.escapeMarkup = false
```

👎 Examples of incorrect code

```typescript
object.escapeMarkup = false
```

### No Csrf Before Method Override

----------

As the declaration order of middlewares determines the execution stack in Connect,
it is possible to abuse this functionality in order to bypass the standard Connect's anti-CSRF protection.

<https://github.com/nodesecurity/eslint-plugin-security/blob/main/docs/bypass-connect-csrf-protection-by-abusing.md>

👍 Examples of correct code

```typescript
app.use(express.csrf())
app.use(express.methodOverride())
```

👎 Examples of incorrect code

```typescript
app.use(express.methodOverride())
app.use(express.csrf())
```

### No Literal Fs Filename

----------

Detects variable in filename argument of fs calls, which might allow an attacker to access anything on your system.

<https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-fs-filename>

👍 Examples of correct code

```typescript
```

👎 Examples of incorrect code

```typescript
```

### No Pseudo Random Bytes

----------

Detects if pseudoRandomBytes() is in use, which might not give you the randomness you need and expect.

<https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-fs-filename>

👍 Examples of correct code

```typescript
var crypto = require("crypto")

const random = crypto.randomBytes(60);
```

👎 Examples of incorrect code

```typescript
const random = Math.random();
```
