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
- [Array Bracket Line](#array-bracket-line)
- [Unused Vars](#unused-vars)
- [Comma Spacing](#comma-spacing)
- [Comma Dangle](#comma-dangle)
- [Prefer Arrow Function](#prefer-arrow-function)
- [Arrow Function Body](#arrow-function-body)
- [No Empty Block](#no-empty-block)
- [No Long Syntax](#no-long-syntax)
- [Unless Call Code](#unless-call-code)
- [Unless Catch Code](#unless-catch-code)
- [Unless Expression Code](#unless-expression-code)
- [Unless Return Code](#unless-return-code)
- [Unless Construct Code](#unless-construct-code)
- [Return New line](#return-new-line)
- [Comment Multi Line Prefer](#comment-multi-line-prefer)
- [No throw Literal](#no-throw-literal)
- [No Unreachable](#no-unreachable)
- [No Unreachable](#no-unreachable)
- [Unless Loop](#unless-loop)
- [No Multiline String](#no-multiline-string)
- [No Unsafe Assign](#no-unsafe-assign)
- [This Pattern](#this-pattern)
- [Use Dot](#use-dot)
- [Dot Object Format](#dot-object-format)
- [No Trailing Space](#no-trailing-space)
- [Type Format](#type-format)


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
} // \n

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

<br />

## Array Bracket Line
----------

Requires consistent usage of linebreaks for each pair of brackets. It reports an error if one bracket in the pair has a
linebreak inside it and the other bracket does not.

https://eslint.org/docs/rules/array-bracket-newline#consistent

<br />

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

<br />

## Unused Vars
----------

Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.
Such variables take up space in the code and can lead to confusion by readers.

https://eslint.org/docs/rules/no-unused-vars#no-unused-vars

<br />

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

<br />

## Comma Spacing
----------

Putting default parameter at last allows function calls to omit optional tail arguments.

https://eslint.org/docs/rules/comma-spacing#options

<br />

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

<br />

## Comma Dangle
----------

This rule enforces consistent use of trailing commas in object and array literals.

https://eslint.org/docs/rules/comma-dangle#comma-dangle
https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/comma-dangle.md

<br />

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

<br />

## Prefer Arrow Function
----------

Requires using arrow functions for callbacks.

https://eslint.org/docs/rules/prefer-arrow-callback#prefer-arrow-callback

<br />

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

<br />

## Arrow Function Body
----------

Enforces no braces where they can be omitted

https://eslint.org/docs/rules/arrow-body-style#arrow-body-style

<br />

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

<br />

## No Empty Block
----------

Disallows empty block statements.

https://eslint.org/docs/rules/no-empty#no-empty

<br />

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

<br />

## No Long Syntax
----------

Disallow long syntax

https://eslint.org/docs/rules/no-empty#no-empty

<br />

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

<br />

## Unless Call Code
----------

Disallow unless code

https://eslint.org/docs/rules/no-useless-call#no-useless-call

<br />

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

<br />

## Unless Catch Code
----------

Disallow unless code

https://eslint.org/docs/rules/no-useless-catch#no-useless-catch

<br />

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

<br />

## Unless Expression Code
----------

Disallow unless code

https://eslint.org/docs/rules/no-unused-expressions

<br />

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

<br />

## Unless Return Code
----------

Disallow unless code

https://eslint.org/docs/rules/no-useless-return#no-useless-return

<br />

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

<br />

## Unless Construct Code
----------

Disallow unless code

https://eslint.org/docs/rules/no-useless-constructor#options

<br />

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

<br />

## Return New line
----------

Force new line before return

https://eslint.org/docs/rules/newline-before-return#newline-before-return

<br />

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

<br />

## Comment Multi Line Prefer
----------

Prefer Multi-line comment formated

https://eslint.org/docs/rules/newline-before-return#newline-before-return

<br />

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

<br />

## No throw Literal
----------

Create custom class to Throw

https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-throw-literal.md

<br />

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
```

<br />

## No Unreachable
----------

No Unreachable code

https://eslint.org/docs/rules/no-unreachable

<br />

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

<br />

## No Unreachable
----------

No Unreachable code

https://eslint.org/docs/rules/no-unreachable

<br />

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

<br />

## Unless Loop
----------

No unless loop

https://eslint.org/docs/rules/no-unreachable-loop

<br />

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

<br />

## No Multiline String
----------

Prevent break line in string

https://eslint.org/docs/rules/no-multi-str#no-multi-str

<br />

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

<br />

## No Unsafe Assign
----------

Disallows assigning any to variables and properties.

https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md

<br />

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

<br />

## This Pattern
----------

- Enforces consistent naming when capturing the current execution context.
- Disallows this keywords outside of classes or class-like objects.

https://eslint.org/docs/rules/consistent-this#consistent-this

<br />

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

<br />

## Use Dot
----------

Enforces use dot notation

https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/dot-notation.md
https://eslint.org/docs/rules/dot-notation

<br />

👍 Examples of correct code

```typescript
var x = foo.bar;

var x = foo[bar];
```

👎 Examples of incorrect code

```typescript
var x = foo["bar"];
```

<br/>

## Dot Object Format
----------

- The dot in a member expression should be on the same line as the property portion.
- Disallows whitespace before properties.

https://eslint.org/docs/rules/dot-location#dot-location
https://eslint.org/docs/rules/no-whitespace-before-property

<br />

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

<br/>

## No Trailing Space
----------

- The dot in a member expression should be on the same line as the property portion.
- Disallows whitespace before properties.

https://eslint.org/docs/rules/dot-location#dot-location
https://eslint.org/docs/rules/no-whitespace-before-property

<br />

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

<br/>

## Type Format
----------

Require consistent spacing around type annotations.

https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/type-annotation-spacing.md

<br />

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
