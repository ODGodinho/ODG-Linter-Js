<h1 align="center">
  <br>
  <a href="https://github.com/ODGodinho"><img src="public/images/quality.png" alt="Stanley Imagem" width="200"/></a><br>
  ODG Linter Js By Dragons Gamers
  <br>
</h1>

<h4 align="center">✴️ Code Quality for typescript ✴️!</h4>

<p align="center">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ODGodinho/ODG-Linter-Js">

  <a href="https://www.linkedin.com/in/victor-alves-odgodinho/">
    <img alt="Made by ODGodinho" src="https://img.shields.io/badge/made%20by-ODGodinho-%2304D361">
  </a>

  <a href="https://github.com/ODGodinho/Prime-Gaming-Crawler/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ODGodinho/ODG-Linter-Js">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <a href="https://github.com/ODGodinho/ODG-Linter-Js/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ODGodinho/ODG-Linter-Js?style=social">
  </a>

</p>

<h1>Standard Code</h1>

- [Introduction](#introduction)
- [Semi Rule](#semi-rule)
- [Quotes Rule](#quotes-rule)
- [Indent Rule](#indent-rule)
- [Line Break Rule](#line-break-rule)
- [EOL last Rule](#eol-last-rule)
- [Max Line Len Rule](#max-line-len-rule)
- [CamelCase Rule](#camelcase-rule)
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
- [Unless String Concat](#unless-string-concat)
- [No Self Assign](#no-self-assign)
- [Force Return Type](#force-return-type)

## Introduction

introduction code format

## Semi Rule
----------

Requires semicolons at the end of statements

https://eslint.org/docs/rules/semi#semi

<br />

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

<br>

## Quotes Rule
----------

Requires the use of double quotes wherever possible

https://eslint.org/docs/rules/quotes#quotes

<br />

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


<br>

## Indent Rule
----------

Requires indent with 4 spaces

https://eslint.org/docs/rules/indent#indent

<br />

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

<br>

## Line Break Rule
----------

Enforces the usage of Unix line endings: `\n` for LF.

https://eslint.org/docs/rules/linebreak-style#linebreak-style

<br />

👍 Examples of correct code

```typescript
var a = 'a'; // \n
```

👎 Examples of incorrect code

```typescript
var a = 'a'; // \r\n
```

<br>

## EOL last Rule
----------

Force empty end line

https://eslint.org/docs/rules/eol-last#eol-last

<br />

👍 Examples of correct code

```typescript
function doSmth() {
  var foo = 2;
}

```

👎 Examples of incorrect code

```typescript
function doSmth() {
  var foo = 2;
}
```

<br>

## Max Line Len Rule
----------

Max line len is 120

https://eslint.org/docs/rules/max-len#max-len

<br />

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

<br>

## CamelCase Rule
----------

Force use camelcase variable

https://eslint.org/docs/rules/camelcase#camelcase

<br />

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

<br>

## Padded Block Rule
----------

force empty line in blocks

https://eslint.org/docs/rules/padded-blocks#padded-blocks

```json
{
  "classes": "always",
  "blocks": "never",
  "switches": "never",
}
```

<br />

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

<br>

## Lines Between Class Members
----------

Enforces consistent spacing before function parenthesis.

https://eslint.org/docs/rules/lines-between-class-members#lines-between-class-members

<br />

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


<br>

## No Multi Assign Rule
----------

Chaining the assignment of variables can lead to unexpected results and be difficult to read.
Disabled.

https://eslint.org/docs/rules/no-multi-assign#no-multi-assign

<br />

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

<br>

## Explicit Member Accessibility Rule
----------

Force specific public/private or protected visibility

https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md

```json
{
    "anonymous": "never",
    "named": "never",
    "asyncArrow": "always"
}
```

<br />

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

<br>

## Default Param Last Rule
----------

Enforces default parameters to be last.

https://eslint.org/docs/rules/default-param-last#default-param-last

<br />

👍 Examples of correct code

```typescript
function f(a = 0, b) {}

function f(a, b = 0, c) {}
```

👎 Examples of incorrect code

```typescript
function f(a, c, b = 0) {}
```

<br>

## Space Before Function Paren
----------

Enforces default parameters to be last.

https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/space-before-function-paren.md

<br />

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

<br>

## Array Space
----------

requires one or more spaces or newlines inside array brackets, and disallow space inside of computed properties.

https://eslint.org/docs/rules/array-bracket-spacing#array-bracket-spacing

https://eslint.org/docs/rules/computed-property-spacing#computed-property-spacing

<br />

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


<br>

## Key Word Space
----------

Enforces consistent spacing before and after keywords.

https://eslint.org/docs/rules/keyword-spacing#keyword-spacing

<br />

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

<br>

## Space Format
----------

This rule enforces consistency regarding the spaces after

https://eslint.org/docs/rules/space-unary-ops#space-unary-ops

<br />

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

<br>

## UTF-8 Only
----------

Disallow the Unicode Byte Order Mark (BOM).

https://eslint.org/docs/rules/unicode-bom#unicode-bom

<br />

<br />

## No Space in Parentheses
----------

Disallows or enforce spaces inside of parentheses.

https://eslint.org/docs/rules/space-in-parens#space-in-parens

<br />

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

<br />

## No Multiple Space
----------

Disallows multiple consecutive spaces.

https://eslint.org/docs/rules/no-multi-spaces#no-multi-spaces

<br />

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

<br />

## Unless String Concat
----------

Disallows unless string concat.

https://eslint.org/docs/rules/no-useless-concat#no-useless-concat

<br />

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

<br />

## No Self Assign
----------

Disallows assignments where both sides are exactly the same.

https://eslint.org/docs/rules/no-self-assign#no-self-assign

<br />

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

<br />

## Force Return Type
----------

Force fill return type in typescript

https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md

<br />

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
