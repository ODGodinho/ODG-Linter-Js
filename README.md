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
- [Camel Case Rule](#camel-case-rule)
- [Strict](#strict)
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
- [Arrow Spacing](#arrow-spacing)
- [Prefer Arrow Function](#prefer-arrow-function)
- [Prefer Destructuring](#prefer-destructuring)
- [Arrow Function Body](#arrow-function-body)
- [Arrow Function Parentheses](#arrow-function-parentheses)
- [Arrow Function No Break Line](#arrow-function-no-break-line)
- [No Empty Block](#no-empty-block)
- [No Long Syntax](#no-long-syntax)
- [Useless Parens](#useless-parens)
- [Useless Boolean](#useless-boolean)
- [Useless Alias](#useless-alias)
- [Return New line](#return-new-line)
- [Comment Multi Line Prefer](#comment-multi-line-prefer)
- [No throw Literal](#no-throw-literal)
- [No Unreachable](#no-unreachable)
- [No Multiline String](#no-multiline-string)
- [No Unsafe Assign](#no-unsafe-assign)
- [Disallow Script Url](#disallow-script-url)
- [Disallow Undefined](#disallow-undefined)
- [Function Name](#function-name)
- [Function Name Match](#function-name-match)
- [Get And Setters](#get-and-setters)
- [Function Style](#function-style)
- [No Else Return](#no-else-return)
- [No Console Spaces](#no-console-spaces)
- [No Hex Escape](#no-hex-escape)
- [Prefer Array Flat Map](#prefer-array-flat-map)
- [Prefer String Slice](#prefer-string-slice)
- [Prefer Modern DOM](#prefer-modern-dom)
- [Prefer Prefix Number](#prefer-prefix-number)
- [Numeric Separators Style](#numeric-separators-style)
- [Prefer Default Parame](#prefer-default-parame)
- [No Avoid Reverse](#no-avoid-reverse)
- [Prefer Code Point](#prefer-code-point)
- [Bool Param Default](#bool-param-default)
- [Class Name Convention](#class-name-convention)
- [Comma Or Logical Or Case](#comma-or-logical-or-case)
- [No Constructor Bind](#no-constructor-bind)
- [No Thenable](#no-thenable)
- [No Unreadable Iife](#no-unreadable-iife)
- [Prefer Native Cast](#prefer-native-cast)
- [Prefer Logical Operator Over Ternary](#prefer-logical-operator-over-ternary)
- [Prefer Event Target](#prefer-event-target)
- [Prefer Object From Entries](#prefer-object-from-entries)
- [Prefer Array From.Map](#prefer-array-from-map)
- [Prefer Array Flat](#prefer-array-flat)
- [This Pattern](#this-pattern)
- [Use Dot](#use-dot)
- [Use this](#use-this)
- [Use IsNan](#use-is-nan)
- [Dot Object Format](#dot-object-format)
- [No Trailing Space](#no-trailing-space)
- [Type Format](#type-format)
- [Max Statements Per Line](#max-statements-per-line)
- [No Constant Condition](#no-constant-condition)
- [No Debugger](#no-debugger)
- [Not Duplicate Case](#not-duplicate-case)
- [Regex Block](#regex-block)
- [No Overwrite Exception](#no-overwrite-exception)
- [No Extra Semi](#no-extra-semi)
- [No Function Overwrite](#no-function-overwrite)
- [No Delete Var](#no-delete-var)
- [No Lone Blocks](#no-lone-blocks)
- [No Proto](#no-proto)
- [No Declare in Block](#no-declare-in-block)
- [No Nonoctal Decimal Escape](#no-nonoctal-decimal-escape)
- [No Import Absolute Path](#no-import-absolute-path)
- [No Webpack Loader Syntax](#no-webpack-loader-syntax)
- [No Magic Number](#no-magic-number)
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
- [No New Object](#no-new-object)
- [No New Symbol](#no-new-symbol)
- [Var Size](#var-size)
- [Max Depth](#max-depth)
- [Max Params](#max-params)
- [Max Statements](#max-statements)
- [Operator Assignment](#operator-assignment)
- [Require Yield](#require-yield)
- [Prefer Rest Params](#prefer-rest-params)
- [Symbol Description](#symbol-description)
- [No Await Return](#no-await-return)
- [Max Class Per File](#max-class-per-file)
- [No Constructor Return](#no-constructor-return)
- [Prefer Exponentiation Operator](#prefer-exponentiation-operator)
- [Prefer Object Spread](#prefer-object-spread)
- [Accessor Pairs](#accessor-pairs)
- [Default Case Last](#default-case-last)
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
- [Object Break Line](#object-break-line)
- [Object Curly Newline](#object-curly-newline)
- [No Negative Condition](#no-negated-condition)
- [No Shadow](#no-shadow)
- [Parentheses New Line](#parentheses-new-line)
- [No Func Call Spacing](#no-func-call-spacing)
- [Array Element New Line](#array-element-new-line)
- [Wrap Iife](#wrap-iife)
- [Disallow Template Tag Space](#disallow-template-tag-space)
- [No Space Spread](#no-space-spread)
- [Inline IF](#inline-if)
- [New Instance Use Parentheses](#new-instance-use-parentheses)
- [Logical Assignment Operators](#logical-assignment-operators)
- [No With](#no-with)
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
  - [Import Deprecated](#import-deprecated)
  - [No Mutable Export](#no-mutable-export)
  - [No Amd](#no-amd)
  - [Prefer Default Export](#prefer-default-export)
  - [Max Imports](#max-imports)
  - [No CommanJs Export](#no-comman-js-export)
  - [No Useless Path Import](#no-useless-path-import)
  - [No Extraneous Dependencies](#no-extraneous-dependencies)
  - [Import Order](#import-order)
  - [No Anonymous Default Export](#no-anonymous-default-export)
  - [Prefer Node Protocol](#prefer-node-protocol)
  - [Prefer export from](#prefer-export-from)
  - [No Empty Import](#no-empty-import)
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
  - [Optimal LookAround Quantifier](#optimal-lookaround-quantifier)
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
  - [Prefer Unicode Code Point Escapes](#prefer-unicode-code-point-escapes)
  - [Prefer W](#prefer-w)
  - [Sort Character Class Elements](#sort-character-class-elements)
  - [Sort Flags](#sort-flags)
  - [Prefer Named Capture Group](#prefer-named-capture-group)
- [Security](#security)
  - [Eval Disabled](#eval-disabled)
  - [Detect Unsafe Regex](#detect-unsafe-regex)
  - [Buffer No Assert](#buffer-no-assert)
  - [No Exec Child Process](#no-exec-child-process)
  - [No Mustache Scape](#no-mustache-scape)
  - [No Csrf Before Method Override](#no-csrf-before-method-override)
  - [No Literal Fs Filename](#no-literal-fs-filename)
  - [No Pseudo Random Bytes](#no-pseudo-random-bytes)
  - [Prevent Secret Token](#prevent-secret-token)
  - [Prevent Literal Code](#prevent-literal-code)
  - [No Import Dynamic](#no-import-dynamic)
  - [Security SSL](#security-ssl)
  - [Security Encrypt/Access](#security-encrypt-access)
  - [Certificate Transparency](#certificate-transparency)
  - [No Log confidential information](#no-log-confidential-information)
  - [Content Length](#content-length)
  - [Anti Trojan Source No Bidi](#anti-trojan-source-no-bidi)
  - [Cookie Httponly](#cookie-httponly)
  - [Protect XSS Render](#protect-xss-render)
  - [Force Integrity](#force-integrity)
  - [DNS prefetching](#dns-prefetching)
  - [No Prototype Builtins](#no-prototype-builtins)
  - [No Dynamic Delete](#no-dynamic-delete)
- [Catch Error Name](#catch-error-name)
- [Consistent Destructured](#consistent-destructured)
- [Consistent Function Scope](#consistent-function-scope)
- [Exception With Message](#exception-with-message)
- [Escape Case](#escape-case)
- [New For Builtin](#new-for-builtin)
- [No Abusive Eslint Disable](#no-abusive-eslint-disable)
- [Prefer for-of](#prefer-for-of)
- [No Array Push Push](#no-array-push-push)
- [No Await Chased](#no-await-chased)
- [No Document Cookie](#no-document-cookie)
- [No Empty File](#no-empty-file)
- [No Instance Of Array](#no-instance-of-array)
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
- [Prefer Include](#prefer-include)
- [Prefer Keyboard Event Key](#prefer-keyboard-event-key)
- [Prefer Negative Index](#prefer-negative-index)
- [Prefer Optional Catch Binding](#prefer-optional-catch-binding)
- [Prefer Prototype Methods](#prefer-prototype-methods)
- [Prefer Query Selector](#prefer-query-selector)
- [Prefer Regexp Test](#prefer-regexp-test)
- [Prefer Spread](#prefer-spread)
- [Prefer String Replace All](#prefer-string-replace-all)
- [Prefer String Starts Ends With](#prefer-string-starts-ends-with)
- [Prefer String Trim Start End](#prefer-string-trim-start-end)
- [Prefer Switch](#prefer-switch)
- [Prefer Ternary](#prefer-ternary)
- [Multiline Ternary Multiple](#multiline-ternary-multiple)
- [Prevent Abbreviations](#prevent-abbreviations)
- [Consistent Relative URL](#consistent-relative-url)
- [Require Array Join Separator](#require-array-join-separator)
- [Require Number To Fixed Digits Argument](#require-number-to-fixed-digits-argument)
- [Template String Indent](#template-string-indent)
- [Adjacent Overload Signatures](#adjacent-overload-signatures)
- [Ban Ts Comment](#ban-ts-comment)
- [Ban Tslint Comment](#ban-tslint-comment)
- [Class Literal Property Style](#class-literal-property-style)
- [Consistent Generic Constructors](#consistent-generic-constructors)
- [Consistent Indexed Object Style](#consistent-indexed-object-style)
- [Consistent Type Assertions](#consistent-type-assertions)
- [Consistent Type Definitions](#consistent-type-definitions)
- [Consistent Type Exports](#consistent-type-exports)
- [Consistent Type Imports](#consistent-type-imports)
- [Member Delimiter Style](#member-delimiter-style)
- [Member Ordering](#member-ordering)
- [No Confusing Non Null Assertion](#no-confusing-non-null-assertion)
- [No Extra Non Null Assertion](#no-extra-non-null-assertion)
- [No For In Array](#no-for-in-array)
- [No Inferrable Type](#no-inferrable-type)
- [No This Alias](#no-this-alias)
- [Non Nullable Type Assertion Style](#non-nullable-type-assertion-style)
- [Parameter Properties](#parameter-properties)
- [Prefer Enum Initializers](#prefer-enum-initializers)
- [Prefer Function Type](#prefer-function-type)
- [Prefer Namespace Keyword](#prefer-namespace-keyword)
- [Prefer Nullish Coalescing](#prefer-nullish-coalescing)
- [Prefer Optional Chain](#prefer-optional-chain)
- [Prefer Readonly](#prefer-readonly)
- [Performance](#performance)
  - [No Alert](#no-alert)
  - [No Loop Func](#no-loop-func)
- [Errors](#errors)
  - [Construtor Super Invalid](#construtor-super-invalid)
  - [Getter Return](#getter-return)
  - [No Class Assign](#no-class-assign)
  - [No Compare Neg Zero](#no-compare-neg-zero)
  - [No Setter Return](#no-setter-return)
  - [Useless Loop](#useless-loop)
  - [No Loss Of Precision](#no-loss-of-precision)
  - [No Dupe Class Members](#no-dupe-class-members)
  - [No Dupe Keys](#no-dupe-keys)
  - [Import Default Not Fount](#import-default-not-fount)
  - [Import Namespace](#import-namespace)
  - [No Self Import](#no-self-import)
  - [Export Name](#export-name)
  - [Import Namespace](#import-namespace)
  - [No Import Resolve](#no-import-resolve)
  - [Import Not Found](#import-not-found)
  - [JS Type](#js-type)
  - [No Invalid This](#no-invalid-this)
  - [No This Before Super](#no-this-before-super)
  - [No Obj Calls](#no-obj-calls)
  - [No Empty Pattern](#no-empty-pattern)
  - [No Useless Computed Key](#no-useless-computed-key)
  - [Useless Call Code](#useless-call-code)
  - [Useless Catch Code](#useless-catch-code)
  - [Useless Expression Code](#useless-expression-code)
  - [Useless Return Code](#useless-return-code)
  - [Useless Construct Code](#useless-construct-code)
  - [No Use Before Define](#no-use-before-define)
  - [No Base To String](#no-base-to-string)
- [Possible Errors](#possible-errors)
  - [For Direction](#for-direction)
  - [No Extra Bind](#no-extra-bind)
  - [No Template Curly In String](#no-template-curly-in-string)
  - [No Dupe Else If](#no-dupe-else-if)
  - [No Unused Private Class Members](#no-unused-private-class-members)
  - [No Constant Binary Expression](#no-constant-binary-expression)
  - [No Unneeded Ternary](#no-unneeded-ternary)
  - [No Unsafe Negation](#no-unsafe-negation)
  - [Text Encoding Identifier Case](#text-encoding-identifier-case)
  - [Arguments Order](#arguments-order)
  - [Assertions In Tests](#assertions-in-tests)
  - [Test Multiple Possible Assert](#test-multiple-possible-assert)
  - [No Disable Timeout](#no-disable-timeout)
  - [No Empty Static Block](#no-empty-static-block)
  - [No Fallthrough](#no-fallthrough)
  - [No Octal](#no-octal)
  - [Octal Scape](#octal-scape)
  - [No Global Assign](#no-global-assign)
  - [No Case Declarations](#no-case-declarations)
  - [No Confusing Void Expression](#no-confusing-void-expression)
  - [No Duplicate Enum Values](#no-duplicate-enum-values)
  - [No Floating Promises](#no-floating-promises)
  - [No Invalid Void Type](#no-invalid-void-type)
  - [No Non Null Asserted Nullish Coalescing](#no-non-null-asserted-nullish-coalescing)
  - [No Non Null Asserted Optional Chain](#no-non-null-asserted-optional-chain)
  - [No Unsafe Declaration Merging](#no-unsafe-declaration-merging)
  - [No Useless Empty Export](#no-useless-empty-export)
- [YAML / JSON](#yaml-json)

## Introduction

### Installation

Add dependence to package.json

```bash
npm install eslint @odg/eslint-config
# or
yarn add -D eslint @odg/eslint-config
```

Add extends in your `.eslintrc` file

```json
{
    "extends": [ "@odg" ]
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
<https://eslint.org/docs/rules/semi-style>

👍 Examples of correct code

```typescript
var name = "ODG";

object.method = function() {
    // ...
};

class Foo {
    bar = 1;
}

foo();
[1, 2, 3].forEach(bar);

for (
    var i = 0;
    i < 10;
    ++i
) {
    foo();
}

class C {
    static {
        foo();
    }
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


foo()
;[1, 2, 3].forEach(bar)

for (
    var i = 0
    ; i < 10
    ; ++i
) {
    foo()
}

class C {
    static {
        foo()
        ;bar()
    }
}
```

## Quotes Rule

----------

Requires the use of double quotes wherever possible

Enforces the use of double quotes for all JSX attribute values that don’t contain a double quote.

<https://eslint.org/docs/rules/quotes>
<https://eslint.org/docs/rules/jsx-quotes>

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
Tabs Disallow

<https://eslint.org/docs/rules/indent#indent>
<https://sonarsource.github.io/rspec/#/rspec/S3973/javascript>
<https://eslint.org/docs/latest/rules/no-tabs>
<https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs>

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

## Camel Case Rule

----------

Force use camel case variable

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

## Strict

----------

A strict mode directive is a "use strict" literal at the beginning of a script or function body.
It enables strict mode semantics.

<https://eslint.org/docs/latest/rules/strict>

👍 Examples of correct code

```typescript
"use strict";

function foo() {
}
```

👎 Examples of incorrect code

```typescript
function foo() {
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
<https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/handle-callback-err.md>

👍 Examples of correct code

```typescript
function loadData (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}

function loadData (exception, data) {
    if (exception) {
        console.log(exception);
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
function loadData (exception, data) {
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
<https://eslint.org/docs/rules/yield-star-spacing>

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

function *generator() {
  yield *other();
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

function*generator() {
  yield*other();
}

function* generator() {
  yield* other();
}

function * generator() {
  yield * other();
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

## Arrow Spacing

----------

This rule normalize style of spacing before/after an arrow function’s arrow(=>).

<https://eslint.org/docs/latest/rules/arrow-spacing>

👍 Examples of correct code

```typescript
() => {};
(a) => {};
() => {'\n'};
```

👎 Examples of incorrect code

```typescript
()=> {};
() =>{};
(a)=> {};
(a) =>{};
a =>a;
a=> a;
()=> {'\n'};
() =>{'\n'};
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

## Prefer Destructuring

----------

Require destructuring from arrays and/or objects

<https://eslint.org/docs/latest/rules/prefer-destructuring>

👍 Examples of correct code

```typescript
var [ foo ] = array;
var foo = array[someIndex];

var { foo } = object;

var foo = object.bar;

let foo;
({ foo } = object);

```

👎 Examples of incorrect code

```typescript
// With `array` enabled
var foo = array[0];

// With `object` enabled
var foo = object.foo;
var foo = object['foo'];
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

## Arrow Function No Break Line

----------

Enforces parentheses around arguments in all cases.

<https://eslint.org/docs/rules/arrow-parens>

👍 Examples of correct code

```typescript
(foo) => bar;

(foo) => (bar);

(foo) => bar => baz;

(foo) => (
  bar()
);

// functions with block bodies allowed with this rule using any style
// to enforce a consistent location for this case, see the rule: `brace-style`
(foo) => {
  return bar();
}

(foo) =>
{
  return bar();
}
```

👎 Examples of incorrect code

```typescript
(foo) =>
  bar;

(foo) =>
  (bar);

(foo) =>
  bar =>
    baz;

(foo) =>
(
  bar()
);
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

Disallow Array constructors

<https://eslint.org/docs/latest/rules/no-array-constructor>

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

## Function Name Match

----------

This rule requires function names to match the name of the variable or property to which they are assigned.
The rule will ignore property assignments where the property name is a literal that
is not a valid identifier in the ECMAScript version specified in your configuration (default ES5).

<https://eslint.org/docs/latest/rules/func-name-matching>

👍 Examples of correct code

```typescript
var foo = function foo() {};
var foo = function() {};
var foo = () => {};
foo = function foo() {};

obj.foo = function foo() {};
obj['foo'] = function foo() {};
obj['foo//bar'] = function foo() {};
obj[foo] = function bar() {};

var obj = {foo: function foo() {}};
var obj = {[foo]: function bar() {}};
var obj = {'foo//bar': function foo() {}};
var obj = {foo: function() {}};

obj['x' + 2] = function bar(){};
var [ bar ] = [ function bar(){} ];
({[foo]: function bar() {}})

class C {
    foo = function foo() {};
    baz = function() {};
}

// private names are ignored
class D {
    #foo = function foo() {};
    #bar = function foo() {};
    baz() {
        this.#foo = function foo() {};
        this.#foo = function bar() {};
    }
}

module.exports = function foo(name) {};
module['exports'] = function foo(name) {};
```

👎 Examples of incorrect code

```typescript
var foo = function bar() {};
foo = function bar() {};
obj.foo = function bar() {};
obj['foo'] = function bar() {};
var obj = {foo: function bar() {}};
({['foo']: function bar() {}});

class C {
    foo = function bar() {};
}
```

## Get And Setters

----------

A getter and setter for the same property don’t necessarily have to be defined adjacent to each other.

<https://eslint.org/docs/latest/rules/grouped-accessor-pairs>

👍 Examples of correct code

```typescript

var foo = {
    get a() {
        return this.val;
    },
    set a(value) {
        this.val = value;
    },
    b: 1
};

var bar = {
    set b(value) {
        this.val = value;
    },
    get b() {
        return this.val;
    },
    a: 1
}

class Foo {
    set a(value) {
        this.val = value;
    }
    get a() {
        return this.val;
    }
    b(){}
}

const Bar = class {
    static get a() {
        return this.val;
    }
    static set a(value) {
        this.val = value;
    }
}
```

👎 Examples of incorrect code

```typescript
var foo = {
    get a() {
        return this.val;
    },
    b: 1,
    set a(value) {
        this.val = value;
    }
};

var bar = {
    set b(value) {
        this.val = value;
    },
    a: 1,
    get b() {
        return this.val;
    }
}

class Foo {
    set a(value) {
        this.val = value;
    }
    b(){}
    get a() {
        return this.val;
    }
}

const Bar = class {
    static get a() {
        return this.val;
    }
    b(){}
    static set a(value) {
        this.val = value;
    }
}
```

## Function Style

----------

Enforce the consistent use of either function declarations or expressions

<https://eslint.org/docs/latest/rules/func-style>

👍 Examples of correct code

```typescript
function foo() {
    // ...
}

// Methods (functions assigned to objects) are not checked by this rule
SomeObject.foo = function() {
    // ...
};
```

👎 Examples of incorrect code

```typescript
var foo = function() {
    // ...
};

var foo = () => {};
```

## No Else Return

----------

Disallow else blocks after return statements in if statements

<https://eslint.org/docs/latest/rules/no-else-return>

👍 Examples of correct code

```typescript
function foo() {
    if (x) {
        return y;
    }

    return z;
}

function foo() {
    if (x) {
        return y;
    } else if (z) {
        var t = "foo";
    } else {
        return w;
    }
}

function foo() {
    if (x) {
        if (z) {
            return y;
        }
    } else {
        return z;
    }
}

function foo() {
    if (error) {
        return 'It failed';
    } else if (loading) {
        return "It's still loading";
    }
}
```

👎 Examples of incorrect code

```typescript
function foo() {
    if (x) {
        return y;
    } else {
        return z;
    }
}

function foo() {
    if (x) {
        return y;
    } else if (z) {
        return w;
    } else {
        return t;
    }
}

function foo() {
    if (x) {
        return y;
    } else {
        var t = "foo";
    }

    return t;
}

function foo() {
    if (error) {
        return 'It failed';
    } else {
        if (loading) {
            return "It's still loading";
        }
    }
}

// Two warnings for nested occurrences
function foo() {
    if (x) {
        if (y) {
            return y;
        } else {
            return x;
        }
    } else {
        return z;
    }
}
```

## No Console Spaces

----------

The console.log() method and similar methods joins the parameters with a space,
so adding a leading/trailing space to a parameter, results in two spaces being added.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-console-spaces.md>

👍 Examples of correct code

```typescript
console.log('abc');
console.log('abc', 'def');

console.log('abc ');
console.log(' abc');

console.log('abc  ', 'def');
console.log('abc\t', 'def');
console.log('abc\n', 'def');

console.log(`
    abc
`);
```

👎 Examples of incorrect code

```typescript
console.log('abc ', 'def');
console.log('abc', ' def');

console.log("abc ", " def");
console.log(`abc `, ` def`);

console.debug('abc ', 'def');
console.info('abc ', 'def');
console.warn('abc ', 'def');
console.error('abc ', 'def');
```

## No Hex Escape

----------

Enforce the use of Unicode escapes instead of hexadecimal escapes

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-hex-escape.md>

👍 Examples of correct code

```typescript
const foo = '\u001B';
const foo = `\u001B${bar}`;
```

👎 Examples of incorrect code

```typescript
const foo = '\x1B';
const foo = `\x1B${bar}`;
```

## Prefer Array Flat Map

----------

Prefer .flatMap(…) over .map(…).flat()

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md>

👍 Examples of correct code

```typescript
const foo = bar.flatMap(element => unicorn(element));
const foo = bar.map(element => unicorn(element)).flat(2);
const foo = bar.map(element => unicorn(element)).foo().flat();
const foo = bar.flat().map(element => unicorn(element));
```

👎 Examples of incorrect code

```typescript
const foo = bar.map(element => unicorn(element)).flat();
const foo = bar.map(element => unicorn(element)).flat(1);
```

## Prefer String Slice

----------

Prefer String#slice() over String#substr() and String#substring()

String#substr() and String#substring() are the two lesser known legacy ways to slice a string.
It's better to use String#slice() as it's a more popular option with clearer
behavior that has a consistent Array counterpart.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-slice.md>

👍 Examples of correct code

```typescript
foo.slice(beginIndex, endIndex);
```

👎 Examples of incorrect code

```typescript
foo.substr(start, length);
foo.substring(indexStart, indexEnd);
```

## Prefer Modern DOM

----------

Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(),
prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement()

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-dom-apis.md>

👍 Examples of correct code

```typescript
foo.replaceWith(bar);
foo.replaceWith('bar');
foo.replaceWith(bar, 'baz'));

foo.before(bar)
foo.before('bar')
foo.before(bar, 'baz')

foo.prepend(bar)
foo.prepend('bar')
foo.prepend(bar, 'baz')

foo.append(bar)
foo.append('bar')
foo.append(bar, 'baz')

foo.after(bar)
foo.after('bar')
foo.after(bar, 'baz')
```

👎 Examples of incorrect code

```typescript
foo.replaceChild(baz, bar);

foo.insertBefore(baz, bar);

foo.insertAdjacentText('position', bar);

foo.insertAdjacentElement('position', bar);
```

## Prefer Prefix Number

----------

Prefer Number static properties over global ones

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md>

👍 Examples of correct code

```typescript
const foo = Number.parseInt('10', 2);

const foo = Number.parseFloat('10.5');

const foo = Number.isNaN(10);

const foo = Number.isFinite(10);

if (Object.is(foo, Number.NaN)) {}

const isPositiveZero = value => value === 0 && 1 / value === Number.POSITIVE_INFINITY;

const isNegativeZero = value => value === 0 && 1 / value === Number.NEGATIVE_INFINITY;
```

👎 Examples of incorrect code

```typescript
const foo = parseInt('10', 2);

const foo = parseFloat('10.5');

const foo = isNaN(10);

const foo = isFinite(10);

if (Object.is(foo, NaN)) {}

const isPositiveZero = value => value === 0 && 1 / value === Infinity;

const isNegativeZero = value => value === 0 && 1 / value === -Infinity;

const {parseInt} = Number;
const foo = parseInt('10', 2);
```

## Numeric Separators Style

----------

Enforce the style of numeric separators by correctly grouping digits

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md>

👍 Examples of correct code

```typescript
const foo = 1_234_444;
const foo = 1_234.567_89;
const foo = 0xAB_CD_EF;
const foo = 0b1000_1111;
const foo = 0o10_4421;
const foo = 1_294_287_712n;
```

👎 Examples of incorrect code

```typescript
const foo = 1_23_4444;
const foo = 1_234.56789;
const foo = 0xAB_C_D_EF;
const foo = 0b10_00_1111;
const foo = 0o1_0_44_21;
const foo = 1_294_28771_2n;
```

## Prefer Default Parame

----------

Prefer default parameters over reassignment

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md>

👍 Examples of correct code

```typescript
function abc(foo = 'bar') {}
function abc(foo) {
    const parameter = foo || bar();
}
```

👎 Examples of incorrect code

```typescript
function abc(foo) {
    foo = foo || 'bar';
}
function abc(foo) {
    const bar = foo || 'bar';
}
```

## No Avoid Reverse

----------

Prefer Array#flat() over legacy techniques to flatten arrays

<https://github.com/freaktechnik/eslint-plugin-array-func#avoid-reverse>

👍 Examples of correct code

```typescript
const string = array.reduceRight((p, c) => p + c, "");

const reverseString = array.reduce((p, c) => p + c, "");
```

👎 Examples of incorrect code

```typescript
const string = array.reverse().reduce((p, c) => p + c, '');

const reverseString = array.reverse().reduceRight((p, c) => p + c, '');
```

## Bool Param Default

----------

Optional boolean parameters should have default value

<https://sonarsource.github.io/rspec/#/rspec/S4798/javascript>

👍 Examples of correct code

```typescript
function countPositiveNumbers(arr: number[], countZero = false) {
  // ...
}

function toggleProperty(property: string, value: boolean) {
  setProperty(property, value);
}

function togglePropertyToCalculatedValue(property: string) {
  setProperty(property, calculateProperty());
}
```

👎 Examples of incorrect code

```typescript
function countPositiveNumbers(arr: number[], countZero?: boolean) { // Noncompliant, default value for 'countZero' should be defined
  // ...
}

function toggleProperty(property: string, value?: boolean) { // Noncompliant, a new function should be defined
  if (value !== undefined) {
    setProperty(property, value);
  } else {
    setProperty(property, calculateProperty());
  }
}
```

## Class Name Convention

----------

Class names should comply with a naming convention

<https://sonarsource.github.io/rspec/#/rspec/S101/javascript>

👍 Examples of correct code

```typescript
// With default provided regular expression /^[A-Z][a-zA-Z0-9]*$/:
class MyClass { }
```

👎 Examples of incorrect code

```typescript
class my_class { }
```

## No Class prototype

----------

Class methods should be used instead of "prototype" assignments

<https://sonarsource.github.io/rspec/#/rspec/S3525/javascript>

👍 Examples of correct code

```typescript
class MyClass {
  constructor(initializerArgs = []) {
    this._values = [...initializerArgs];
  }

  doSomething() {
    //...
  }
}
```

👎 Examples of incorrect code

```typescript
function MyNonClass(initializerArgs = []) {
  this._values = [...initializerArgs];
}

MyNonClass.prototype.doSomething = function () {  // Noncompliant
  // ...
}
```

## Comma Or Logical Or Case

----------

Comma and logical OR operators should not be used in switch cases

<https://sonarsource.github.io/rspec/#/rspec/S3616/javascript>

👍 Examples of correct code

```typescript
switch (a) {
  case 1:
  case 2:
    doTheThing(a);
  case 3:
  case 4:
    doThatThing(a);
  case 5:
    doTheOtherThing(a);
  default:
    console.log('Neener, neener!');
}
```

👎 Examples of incorrect code

```typescript
switch (a) {
  case 1,2:  // Noncompliant; only 2 is ever handled by this case
    doTheThing(a);
  case 3 || 4: // Noncompliant; only '3' is handled
    doThatThing(a);
  case 5:
    doTheOtherThing(a);
  default:
    console.log('Neener, neener!');  // this happens when a==1 or a == 4
}
```

## No Constructor Bind

----------

Prefer class properties to equivalent setup steps taken in a class' constructor method.

<https://github.com/markalfred/eslint-plugin-no-constructor-bind>

👍 Examples of correct code

```typescript
class User {
  greet = () => 'hello'
}
```

👎 Examples of incorrect code

```typescript
class User {
  constructor() {
    this.greet = this.greet.bind(this)
  }
  greet() { return 'Hello' }
}
```

## Prefer Code Point

----------

Prefer String#codePointAt(…) over String#charCodeAt(…) and String.fromCodePoint(…) over String.fromCharCode(…)

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md>

👍 Examples of correct code

```typescript
const unicorn = '🦄'.codePointAt(0).toString(16);
const unicorn = String.fromCodePoint(0x1f984);
```

👎 Examples of incorrect code

```typescript
const unicorn = '🦄'.charCodeAt(0).toString(16);
const unicorn = String.fromCharCode(0x1f984);
```

## No Thenable

----------

If an object is defined as "thenable", once it's accidentally used in an await expression, it may cause problems:

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md>

👍 Examples of correct code

```typescript
export {then as success};
const foo = {
    success() {}
};
class Foo {
    success() {}
}
const foo = bar.then;
```

👎 Examples of incorrect code

```typescript
export {then};
const foo = {
    then() {}
};
const foo = {
    get then() {}
};
foo.then = function () {}
class Foo {
    then() {}
}
class Foo {
    static then() {}
}
```

## No Unreadable Iife

----------

IIFE with parenthesized arrow function body is considered unreadable.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md>

👍 Examples of correct code

```typescript
const bar = getBar();
const foo = bar ? bar.baz : baz;

const getBaz = bar => (bar ? bar.baz : baz);
const foo = getBaz(getBar());

const foo = (bar => {
    return bar ? bar.baz : baz;
})(getBar());
```

👎 Examples of incorrect code

```typescript
const foo = (bar => (bar ? bar.baz : baz))(getBar());
const foo = ((bar, baz) => ({bar, baz}))(bar, baz);
```

## Prefer Native Cast

----------

Prefer using String, Number, BigInt, Boolean, and Symbol directly

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md>

👍 Examples of correct code

```typescript
const toBoolean = Boolean;

if (Number(foo) === 1) {}

const hasTruthyValue = array.some(Boolean);

const toStringObject = value => new String(value);

const toObject = value => Object(value);
```

👎 Examples of incorrect code

```typescript
const toBoolean = value => Boolean(value);
function toNumber(value) {
    return Number(value);
}

if (toNumber(foo) === 1) {}
const hasTruthyValue = array.some(element => element);
```

## Prefer Logical Operator Over Ternary

----------

Prefer using a logical operator over a ternary

Ideally, most reported cases have an equivalent Logical OR(||) expression.
The rule intentionally provides suggestions instead of auto-fixes, because in many cases,
the nullish coalescing operator (??) should be preferred.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md>

👍 Examples of correct code

```typescript
foo ?? bar;
foo || bar;
foo ? bar : baz;
foo.bar ?? foo.baz
foo?.bar ?? baz
```

👎 Examples of incorrect code

```typescript
foo ? foo : bar;
foo.bar ? foo.bar : foo.baz
foo?.bar ? foo.bar : baz
!bar ? foo : bar;
```

## Prefer Event Target

----------

Prefer EventTarget over EventEmitter

While EventEmitter is only available in Node.js, EventTarget is also available in Deno and browsers.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md>

👍 Examples of correct code

```typescript
class Foo extends EventTarget {}

const target = new EventTarget();
```

👎 Examples of incorrect code

```typescript
import {EventEmitter} from 'node:event';
class Foo extends EventEmitter {}

const emitter = new EventEmitter();
```

## Prefer Object From Entries

----------

Prefer using Object.fromEntries(…) to transform a list of key-value pairs into an object

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md>

👍 Examples of correct code

```typescript
const object = Object.fromEntries(pairs);

const object = new Map(pairs);
```

👎 Examples of incorrect code

```typescript
const object = pairs.reduce(
    (object, [key, value]) => ({...object, [key]: value}),
    {}
);

const object = pairs.reduce(
    (object, [key, value]) => ({...object, [key]: value}),
    Object.create(null)
);

const object = pairs.reduce(
    (object, [key, value]) => Object.assign(object, {[key]: value}),
    {}
);

const object = _.fromPairs(pairs);
```

## Prefer Array From.Map

----------

Prefer using the mapFn callback of Array.from over an immediate .map() call on the Array.from result.

<https://github.com/freaktechnik/eslint-plugin-array-func#from-map>

👍 Examples of correct code

```typescript
Array.from(iterable).map((t) => t.id);

Array.from(iterable, (t) => t.id).map((id) => id[0]);
```

👎 Examples of incorrect code

```typescript
Array.from(iterable, (t) => t.id);

Array.from(iterable, function(t) { this.format(t); }, this);

const arr = Array.from(iterable);
const mappedArray = arr.map((t) => t.id);
```

## Prefer Array Flat

----------

Use .flat() to flatten an array of arrays. This rule currently recognizes two patterns and can replace them with a .flat() call:

<https://github.com/freaktechnik/eslint-plugin-array-func#prefer-flat>
<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md>


👍 Examples of correct code

```typescript
const concatFlat = array.flat();

const reverseFlat = array.reduce((p, n) => n.concat(p), []);

const otherReduce = array.reduce((p, n) => n + p, 0);
```

👎 Examples of incorrect code

```typescript
const concatFlat = [].concat(...array);

const reduceFlat = array.reduce((p, n) => p.concat(n), []);
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

## Use IsNan

----------

Require calls to isNaN() when checking for NaN

<https://eslint.org/docs/latest/rules/use-isnan>

👍 Examples of correct code

```typescript
if (isNaN(foo)) {
    // ...
}

if (!isNaN(foo)) {
    // ...
}
```

👎 Examples of incorrect code

```typescript
if (foo == NaN) {
    // ...
}

if (foo != NaN) {
    // ...
}

if (foo == Number.NaN) {
    // ...
}

if (foo != Number.NaN) {
    // ...
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

## No Delete Var

----------

Disallow deleting variables.

<https://eslint.org/docs/latest/rules/no-delete-var>

👍 Examples of correct code

```typescript
// don't remove
```

👎 Examples of incorrect code

```typescript
var x;
delete x;
```

## No Lone Blocks

----------

Disallow unnecessary nested blocks

<https://eslint.org/docs/latest/rules/no-lone-blocks>

👍 Examples of correct code

```typescript

while (foo) {
    bar();
}

if (foo) {
    if (bar) {
        baz();
    }
}

function bar() {
    baz();
}

{
    let x = 1;
}

{
    const y = 1;
}

{
    class Foo {}
}

aLabel: {
}

class C {
    static {
        lbl: {
            if (something) {
                break lbl;
            }

            foo();
        }
    }
}
```

👎 Examples of incorrect code

```typescript
if (foo) {
    bar();
    {
        baz();
    }
}

function bar() {
    {
        baz();
    }
}

{
    function foo() {}
}

{
    aLabel: {
    }
}

class C {
    static {
        {
            foo();
        }
    }
}
```

## No Proto

----------

Disallow the use of the __proto__ property

<https://eslint.org/docs/latest/rules/no-proto>

👍 Examples of correct code

```typescript
var a = Object.getPrototypeOf(obj);

Object.setPrototypeOf(obj, b);

var c = { __proto__: a };
```

👎 Examples of incorrect code

```typescript
var a = obj.__proto__;

var a = obj["__proto__"];

obj.__proto__ = b;

obj["__proto__"] = b;
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

## No Nonoctal Decimal Escape

----------

Disallow \8 and \9 escape sequences in string literals

<https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape>

👍 Examples of correct code

```typescript
"8";

"9";

var foo = "w8less";

var bar = "December 19";

var baz = "Don't use \\8 and \\9 escapes.";

var quux = "\0\u0038";
```

👎 Examples of incorrect code

```typescript
"\8";

"\9";

var foo = "w\8less";

var bar = "December 1\9";

var baz = "Don't use \8 and \9 escapes.";

var quux = "\0\8";
```

## No Import Absolute Path

----------

Node.js allows the import of modules using an absolute path such as /home/xyz/file.js. That is a bad practice as it ties the code using it to your computer, and therefore makes it unusable in packages distributed on npm for instance.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-absolute-path.md>

👍 Examples of correct code

```typescript
import _ from 'lodash';
import foo from 'foo';
import foo from './foo';

var _ = require('lodash');
var foo = require('foo');
var foo = require('./foo');
```

👎 Examples of incorrect code

```typescript
import f from '/foo';
import f from '/some/path';

var f = require('/foo');
var f = require('/some/path');
```

## No Webpack Loader Syntax

----------

Forbid Webpack loader syntax in imports.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-webpack-loader-syntax.md>

👍 Examples of correct code

```typescript
import myModule from 'my-module';
import theme from './theme.css';

var myModule = require('my-module');
var theme = require('./theme.css');
```

👎 Examples of incorrect code

```typescript
import myModule from 'my-loader!my-module';
import theme from 'style!css!./theme.css';

var myModule = require('my-loader!./my-module');
var theme = require('style!css!./theme.css');
```

## No Magic Number

----------

Disallow magic numbers

<https://eslint.org/docs/latest/rules/no-magic-numbers>

👍 Examples of correct code

```typescript
var TAX = 0.25;

var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * TAX);
```

👎 Examples of incorrect code

```typescript
var dutyFreePrice = 100,
    finalPrice = dutyFreePrice + (dutyFreePrice * 0.25);

// or

var data = ['foo', 'bar', 'baz'];

var dataLast = data[2];
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
<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare.md>

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

## No New Object

----------

Disallow Object constructors

<https://eslint.org/docs/rules/no-new-object>

👍 Examples of correct code

```typescript
var myObject = new CustomObject();

var myObject = {};

var Object = function Object() {};
new Object();
```

👎 Examples of incorrect code

```typescript
var myObject = new Object();

new Object();
```

## No New Symbol

----------

Disallow new operators with the Symbol object

<https://eslint.org/docs/latest/rules/no-new-symbol>

👍 Examples of correct code

```typescript
var foo = Symbol('foo');

// Ignores shadowed Symbol.
function bar(Symbol) {
    const baz = new Symbol("baz");
}
```

👎 Examples of incorrect code

```typescript
var foo = new Symbol('foo');
```

## Var Size

----------

Enforce minimum identifier lengths

<https://eslint.org/docs/latest/rules/id-length>

👍 Examples of correct code

```typescript
var num = 5;
function _f() { return 42; }
function _func() { return 42; }
obj.el = document.body;
var foo = function (evt) { /* do stuff */ };
try {
    dangerousStuff();
} catch (error) {
    // ignore as many do
}
var myObj = { apple: 1 };
(num) => { num * num };
function foo(num = 0) { }
class MyClass { }
class Foo { method() {} }
class Foo { #method() {} }
class Foo { field = 1 }
class Foo { #field = 1 }
function foo(...args) { }
function foo([longName]) { }
var { prop } = {};
var { prop: [longName] } = {};
var [longName] = arr;
function foo({ prop }) { }
function foo({ a: prop }) { }
var { prop } = {};
var { a: prop } = {};
({ prop: obj.longName } = {});
var data = { "x": 1 };  // excused because of quotes
data["y"] = 3;  // excused because of calculated property access
```

👎 Examples of incorrect code

```typescript
var x = 5;
obj.e = document.body;
var foo = function (e) { };
try {
    dangerousStuff();
} catch (e) {
    // ignore as many do
}
var myObj = { a: 1 };
(a) => { a * a };
class x { }
class Foo { x() {} }
class Foo { #x() {} }
class Foo { x = 1 }
class Foo { #x = 1 }
function foo(...x) { }
function foo([x]) { }
var [x] = arr;
var { prop: [x]} = {};
function foo({x}) { }
var { x } = {};
var { prop: a} = {};
({ prop: obj.x } = {});
```

## Max Depth

----------

Enforce a maximum depth that blocks can be nested

<https://eslint.org/docs/latest/rules/max-depth>

👍 Examples of correct code

```typescript
function foo() {
    for (;;) { // Nested 1 deep
        while (true) { // Nested 2 deep
            if (true) { // Nested 3 deep
            }
        }
    }
}
```

👎 Examples of incorrect code

```typescript
function foo() {
    for (;;) { // Nested 1 deep
        while (true) { // Nested 2 deep
            if (true) { // Nested 3 deep
                if (true) { // Nested 4 deep
                    if (true) { // Nested 5 deep
                    }
                }
            }
        }
    }
}
```

## Max Params

----------

Enforce a maximum number of parameters in function definitions

<https://eslint.org/docs/latest/rules/max-params>

👍 Examples of correct code

```typescript
function foo (bar, baz, qux) {
    doSomething();
}

let foo = (bar, baz, qux) => {
    doSomething();
};
```

👎 Examples of incorrect code

```typescript
function foo (bar, baz, qux, qxx) {
    doSomething();
}

let foo = (bar, baz, qux, qxx) => {
    doSomething();
};
```

## Max Statements

----------

Enforce a maximum number of parameters in function definitions

<https://eslint.org/docs/latest/rules/max-params>

👍 Examples of correct code

```typescript
function foo() {
  var foo1 = 1;
  var foo2 = 2;
  var foo3 = 3;
  var foo4 = 4;
  var foo5 = 5;
  var foo6 = 6;
  var foo7 = 7;
  var foo8 = 8;
  var foo9 = 9;
  var foo10 = 10;
  return function () {

    // The number of statements in the inner function does not count toward the
    // statement maximum.

    return 42;
  };
}

let foo = () => {
  var foo1 = 1;
  var foo2 = 2;
  var foo3 = 3;
  var foo4 = 4;
  var foo5 = 5;
  var foo6 = 6;
  var foo7 = 7;
  var foo8 = 8;
  var foo9 = 9;
  var foo10 = 10;
  return function () {

    // The number of statements in the inner function does not count toward the
    // statement maximum.

    return 42;
  };
}
```

👎 Examples of incorrect code

```typescript
function foo() {
  var foo1 = 1;
  var foo2 = 2;
  var foo3 = 3;
  var foo4 = 4;
  var foo5 = 5;
  var foo6 = 6;
  var foo7 = 7;
  var foo8 = 8;
  var foo9 = 9;
  var foo10 = 10;

  var foo11 = 11; // Too many.
}

let foo = () => {
  var foo1 = 1;
  var foo2 = 2;
  var foo3 = 3;
  var foo4 = 4;
  var foo5 = 5;
  var foo6 = 6;
  var foo7 = 7;
  var foo8 = 8;
  var foo9 = 9;
  var foo10 = 10;

  var foo11 = 11; // Too many.
};
```

## Operator Assignment

----------

Require or disallow assignment operator shorthand where possible

<https://eslint.org/docs/latest/rules/operator-assignment>

👍 Examples of correct code

```typescript
x = y;
x += y;
x = y * z;
x = (x * y) * z;
x[0] /= y;
x[foo()] = x[foo()] % 2;
x = y + x; // `+` is not always commutative (e.g. x = "abc")
```

👎 Examples of incorrect code

```typescript
x = x + y;
x = y * x;
x[0] = x[0] / y;
x.y = x.y << z;
```

## Require Yield

----------

Require generator functions to contain yield

<https://eslint.org/docs/latest/rules/require-yield>

👍 Examples of correct code

```typescript
function* foo() {
  yield 5;
  return 10;
}

function foo() {
  return 10;
}

// This rule does not warn on empty generator functions.
function* foo() { }
```

👎 Examples of incorrect code

```typescript
function* foo() {
  return 10;
}
```

## Prefer Rest Params

----------

Require rest parameters instead of arguments

<https://eslint.org/docs/latest/rules/prefer-rest-params>

👍 Examples of correct code

```typescript
function foo(...args) {
    console.log(args);
}

function foo(action, ...args) {
    action.apply(null, args); // or `action(...args)`, related to the `prefer-spread` rule.
}

// Note: the implicit arguments can be overwritten.
function foo(arguments) {
    console.log(arguments); // This is the first argument.
}
function foo() {
    var arguments = 0;
    console.log(arguments); // This is a local variable.
}
```

👎 Examples of incorrect code

```typescript
function foo() {
    console.log(arguments);
}

function foo(action) {
    var args = Array.prototype.slice.call(arguments, 1);
    action.apply(null, args);
}

function foo(action) {
    var args = [].slice.call(arguments, 1);
    action.apply(null, args);
}
```

## Symbol Description

----------

Require symbol descriptions

<https://eslint.org/docs/latest/rules/symbol-description>

👍 Examples of correct code

```typescript
var foo = Symbol("some description");

// or

var someString = "some description";
var bar = Symbol(someString);
```

👎 Examples of incorrect code

```typescript
var foo = Symbol();
```

## No Await Return

----------

Disallow unnecessary return await

<https://eslint.org/docs/latest/rules/no-return-await>

👍 Examples of correct code

```typescript
async function foo() {
    return bar();
}

async function foo() {
    await bar();
    return;
}

// This is essentially the same as `return await bar();`, but the rule checks only `await` in `return` statements
async function foo() {
    const x = await bar();
    return x;
}

// In this example the `await` is necessary to be able to catch errors thrown from `bar()`
async function foo() {
    try {
        return await bar();
    } catch (error) {}
}
```

👎 Examples of incorrect code

```typescript
async function foo() {
    return await bar();
}
```

## Max Class Per File

----------

Enforce a maximum 1 classes per file

<https://eslint.org/docs/latest/rules/max-classes-per-file>

👍 Examples of correct code

```typescript
class Foo {}
```

👎 Examples of incorrect code

```typescript
class Foo {}
class Bar {}
```

## No Constructor Return

----------

Disallow returning value from constructor

<https://eslint.org/docs/latest/rules/no-constructor-return>

👍 Examples of correct code

```typescript
class C {
    constructor(c) {
        this.c = c;
    }
}

class D {
    constructor(f) {
        if (!f) {
            return;  // Flow control.
        }

        f();
    }
}
```

👎 Examples of incorrect code

```typescript
class A {
    constructor(a) {
        this.a = a;
        return a;
    }
}

class B {
    constructor(f) {
        if (!f) {
            return 'falsy';
        }
    }
}
```

## Prefer Exponentiation Operator

----------

Prefira o operador de exponencial

<https://eslint.org/docs/latest/rules/prefer-exponentiation-operator>

👍 Examples of correct code

```typescript
const foo = 2 ** 8;

const bar = a ** b;

let baz = (a + b) ** (c + d);

let quux = (-1) ** n;
```

👎 Examples of incorrect code

```typescript
const foo = Math.pow(2, 8);

const bar = Math.pow(a, b);

let baz = Math.pow(a + b, c + d);

let quux = Math.pow(-1, n);
```

## Prefer Object Spread

----------

Disallow using Object.assign with an object literal as the first argument and
prefer the use of object spread instead.

<https://eslint.org/docs/latest/rules/prefer-object-spread>

👍 Examples of correct code

```typescript
({ ...foo });

({ ...baz, foo: 'bar' });

// Any Object.assign call without an object literal as the first argument
Object.assign(foo, { bar: baz });

Object.assign(foo, bar);

Object.assign(foo, { bar, baz });

Object.assign(foo, { ...baz });
```

👎 Examples of incorrect code

```typescript
Object.assign({}, foo);

Object.assign({}, {foo: 'bar'});

Object.assign({ foo: 'bar'}, baz);

Object.assign({}, baz, { foo: 'bar' });

Object.assign({}, { ...baz });

// Object.assign with a single argument that is an object literal
Object.assign({});

Object.assign({ foo: bar });
```

## Accessor Pairs

----------

Enforce getter and setter pairs in objects and classes

<https://eslint.org/docs/latest/rules/accessor-pairs>

👍 Examples of correct code

```typescript
var o = {
    set a(value) {
        this.val = value;
    },
    get a() {
        return this.val;
    }
};

var myObject = { d: 1 };
Object.defineProperty(myObject, 'c', {
    set: function(value) {
        this.val = value;
    },
    get: function() {
        return this.val;
    }
});
```

👎 Examples of incorrect code

```typescript
var o = {
    set a(value) {
        this.val = value;
    }
};


var myObject = { d: 1 };
Object.defineProperty(myObject, 'c', {
    set: function(value) {
        this.val = value;
    }
});
```

## Default Case Last

----------

Enforce default clauses in switch statements to be last

<https://eslint.org/docs/latest/rules/default-case-last>

👍 Examples of correct code

```typescript
```

👎 Examples of incorrect code

```typescript
switch (foo) {
    default:
        bar();
        break;
    case "a":
        baz();
        break;
}

switch (foo) {
    case 1:
        bar();
        break;
    default:
        baz();
        break;
    case 2:
        quux();
        break;
}

switch (foo) {
    case "x":
        bar();
        break;
    default:
    case "y":
        baz();
        break;
}

switch (foo) {
    default:
        break;
    case -1:
        bar();
        break;
}

switch (foo) {
  default:
    doSomethingIfNotZero();
  case 0:
    doSomethingAnyway();
}
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
<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md>

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

const a: Array<string | number> = ['a', 'b'];
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
<https://sonarsource.github.io/rspec/#/rspec/S3796/javascript>

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

## Object Break Line

----------

Enforces placing object properties on separate lines.

<https://eslint.org/docs/rules/object-property-newline>

👍 Examples of correct code

```typescript
const obj1 = { foo: "foo", bar: "bar", baz: "baz" };

const obj2 = {
    foo: "foo",
    bar: "bar",
    baz: "baz",
};

const user = process.argv[2];
const obj3 = {
    user,
    [ process.argv[3] ? "foo" : "bar" ]: 0,
    baz: [
        1,
        2,
        4,
        8,
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

## Object Curly Newline

----------

A number of style guides require or disallow line breaks inside of object braces and other tokens.

<https://eslint.org/docs/latest/rules/object-curly-newline>

👍 Examples of correct code

```typescript
let a = {};
let b = { foo: 1 };
let c = { foo: 1, bar: 2 };
let d = {
    foo: 1,
    bar: 2,
};
let e = {
    foo: function() {
        dosomething();
    }
};

let { f } = obj;
let { g, h } = obj;
let {
    i,
    j
} = obj;
let { k = () => dosomething() } = obj;
```

👎 Examples of incorrect code

```typescript
let b = {
    foo: 1
};
let c = { foo: 1,
    bar: 2 };
let d = {foo: 1
    , bar: 2};
let e = { foo: function() {
    dosomething();
} };

let {i,
    j} = obj;
```

## No Negative Condition

----------

Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition instead.

<https://eslint.org/docs/latest/rules/no-negated-condition>

👍 Examples of correct code

```typescript
if (!a) {
    doSomething();
}

if (!a) {
    doSomething();
} else if (b) {
    doSomething();
}

if (a != b) {
    doSomething();
}

a ? b : c
```

👎 Examples of incorrect code

```typescript
if (!a) {
    doSomething();
} else {
    doSomethingElse();
}

if (a != b) {
    doSomething();
} else {
    doSomethingElse();
}

if (a !== b) {
    doSomething();
} else {
    doSomethingElse();
}

!a ? c : b
```

## No Shadow

----------

Enforces placing object properties on separate lines.

Then any code used within the same scope would not get the global undefined,
but rather the local version with a very different meaning.

<https://eslint.org/docs/rules/no-shadow>
<https://eslint.org/docs/rules/no-shadow-restricted-names>
<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md>

👍 Examples of correct code

```typescript
var a = 3;
function b() {
    var c = 10;
}

var b = function () {
    var c = 10;
}

function b(a) {
    var c = 10;
}
b(a);

function f(a, b){}
```

👎 Examples of incorrect code

```typescript
var a = 3;
function b() {
    var a = 10;
}

var b = function () {
    var a = 10;
}

function b(a) {
    a = 10;
}
b(a);

if (true) {
    let a = 5;
}

function NaN(){}

!function(Infinity){};

var undefined = 5;

try {} catch(eval){}
```

## Parentheses New Line

----------

This rule enforces consistent line breaks inside parentheses of function parameters or arguments.

<https://eslint.org/docs/latest/rules/function-paren-newline>
<https://eslint.org/docs/latest/rules/function-call-argument-newline>

👍 Examples of correct code

```typescript
function foo(
  bar,
  baz
) {}

var foo = function(bar, baz) {};

var foo = (
  bar
) => {};

foo(
  function() {
    return baz;
  }
);

foo("one", "two", "three");
// or
foo(
    "one",
    "two",
    "three"
);

bar("one", "two", {
    one: 1,
    two: 2
});
// or
bar(
    "one",
    "two",
    { one: 1, two: 2 }
);
// or
bar(
    "one",
    "two",
    {
        one: 1,
        two: 2
    }
);

baz("one", "two", (x) => {
    console.log(x);
});
// or
baz(
    "one",
    "two",
    (x) => {
        console.log(x);
    }
);
```

👎 Examples of incorrect code

```typescript
function foo(bar,
  baz
) {}

var foo = function(bar,
baz) {};

var foo = (
  bar) => {};

foo(
  function() {
    return baz;
  });

foo("one", "two",
    "three");
//or
foo("one",
    "two", "three");

bar("one", "two",
    { one: 1, two: 2}
);

baz("one", "two",
    (x) => { console.log(x); }
);
```

## No Func Call Spacing

----------

Disallows space between the function name and the opening parenthesis.

<https://eslint.org/docs/latest/rules/func-call-spacing>

👍 Examples of correct code

```typescript
fn();
```

👎 Examples of incorrect code

```typescript
fn ();

fn
();
```

## Array Element New Line

----------

This rule enforces line breaks between array elements.

<https://eslint.org/docs/latest/rules/array-element-newline>

👍 Examples of correct code

```typescript
var a = [];
var b = [1];
var c = [1, 2];
var d = [1, 2, 3];
var e = [
    1,
    2
];
var f = [
    1,
    2,
    3
];
var g = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    }, function baz() {
        dosomething();
    }
];
var h = [
    function foo() {
        dosomething();
    },
    function bar() {
        dosomething();
    },
    function baz() {
        dosomething();
    }
];
```

👎 Examples of incorrect code

```typescript
var a = [
    1, 2,
    3
];
var b = [
    function foo() {
        dosomething();
    }, function bar() {
        dosomething();
    },
    function baz() {
        dosomething();
    }
];
```

## Wrap Iife

----------

Enforces always wrapping the function expression

<https://eslint.org/docs/latest/rules/wrap-iife>

👍 Examples of correct code

```typescript
var x = (function () { return { y: 1 }; })(); // wrapped function expression
```

👎 Examples of incorrect code

```typescript
var x = function () { return { y: 1 };}(); // unwrapped
var x = (function () { return { y: 1 };}()); // wrapped call expression
```

## Disallow Template Tag Space

----------

Disallows spaces between a tag function and its template literal.

<https://eslint.org/docs/latest/rules/template-tag-spacing>

👍 Examples of correct code

```typescript
func`Hello world`;
```

👎 Examples of incorrect code

```typescript
func `Hello world`;
```

## No Space Spread

----------

Enforce spacing between rest and spread operators and their expressions

<https://eslint.org/docs/latest/rules/rest-spread-spacing>

👍 Examples of correct code

```typescript
fn(...args)
[...arr, 4, 5, 6]
let [a, b, ...arr] = [1, 2, 3, 4, 5];
function fn(...args) { console.log(args); }
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
```

👎 Examples of incorrect code

```typescript
fn(... args)
[... arr, 4, 5, 6]
let [a, b, ... arr] = [1, 2, 3, 4, 5];
function fn(... args) { console.log(args); }
let { x, y, ... z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ... z };
```

## Inline IF

----------

Disallows a newline before a single-line statement.

<https://eslint.org/docs/latest/rules/nonblock-statement-body-position>

👍 Examples of correct code

```typescript
if (foo) bar();
else baz();

while (foo) bar();

for (let i = 1; i < foo; i++) bar();

do bar(); while (foo)

if (foo) { // block statements are always allowed with this rule
  bar();
} else {
  baz();
}
```

👎 Examples of incorrect code

```typescript
if (foo)
  bar();
else
  baz();

while (foo)
  bar();

for (let i = 1; i < foo; i++)
  bar();

do
  bar();
while (foo)
```

## New Instance Use Parentheses

----------

This rule can enforce or disallow parentheses when invoking a constructor with no arguments using the new keyword.

<https://eslint.org/docs/latest/rules/new-parens>

👍 Examples of correct code

```typescript
var person = new Person();
var person = new Person("name");
```

👎 Examples of incorrect code

```typescript
var person = new Person;
var person = new (Person);
```

## Logical Assignment Operators

----------

The shorthand can be used if the assignment target and the left expression of a logical expression are the same.
For example `a = a || b` can be shortened to `a ||= b`.

<https://eslint.org/docs/latest/rules/logical-assignment-operators>

👍 Examples of correct code

```typescript
a = b
a += b
a ||= b
a = b || c
a || (b = c)

if (a) a = b
```

👎 Examples of incorrect code

```typescript
a = a || b
a = a && b
a = a ?? b
a || (a = b)
a && (a = b)
a ?? (a = b)
```

## No With

----------

The with statement is potentially problematic because it adds members of an object to the current scope,
making it impossible to tell what a variable inside the block actually refers to.

<https://eslint.org/docs/rules/no-with>

👍 Examples of correct code

```typescript
const r = ({x, y}) => Math.sqrt(x * x + y * y);
```

👎 Examples of incorrect code

```typescript
with (point) {
    r = Math.sqrt(x * x + y * y); // is r a member of point?
}
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

### Import Deprecated

----------

Reports use of a deprecated name, as indicated by a JSDoc block with a @deprecated tag or TomDoc Deprecated: comment.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-deprecated.md>

👍 Examples of correct code

```typescript

```

👎 Examples of incorrect code

```typescript
// @file: ./answer.js

/**
 * this is what you get when you trust a mouse talk show
 * @deprecated need to restart the experiment
 * @returns {Number} nonsense
 */
export function multiply(six, nine) {
  return 42
}


import { multiply } from './answer';
```

### No Mutable Export

----------

Forbids the use of mutable exports with var or let.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-mutable-exports.md>

👍 Examples of correct code

```typescript
export const count = 1
export function getCount() {}
export class Counter {}
```

👎 Examples of incorrect code

```typescript
export let count = 2
export var count = 3

let count = 4
export { count } // reported here
```

### No Amd

----------

Reports require([array], ...) and define([array], ...) function calls at the module scope.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-amd.md>

👍 Examples of correct code

```typescript
```

👎 Examples of incorrect code

```typescript
define(["a", "b"], function (a, b) { /* ... */ })

require(["b", "c"], function (b, c) { /* ... */ })
```

### Prefer Default Export

----------

When there is only a single export from a module, prefer using default export over named export.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md>

👍 Examples of correct code

```typescript
// There is a default export.
export const foo = 'foo';
const bar = 'bar';
export default bar;

// or

// good2.js
// There is more than one named export in the module.
export const foo = 'foo';
export const bar = 'bar';

// or

// good3.js
// There is more than one named export in the module
const foo = 'foo';
const bar = 'bar';
export { foo, bar }

// or

// good4.js
// There is a default export.
const foo = 'foo';
export { foo as default }

// or

// export-star.js
// Any batch export will disable this rule. The remote module is not inspected.
export * from './other-module'
```

👎 Examples of incorrect code

```typescript
// There is only a single module export and it's a named export.
export const foo = 'foo';
```

### Max Imports

----------

Forbid modules to have too many dependencies (import or require statements).

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/max-dependencies.md>

👍 Examples of correct code

```typescript
import a from './a'; // 1
const b = require('./b'); // 2
// ...
import y from './y'; // 25 - No exceeds!
```

👎 Examples of incorrect code

```typescript
import a from './a'; // 1
const b = require('./b'); // 2
// ...
import z from './z'; // 26 - exceeds max!
```

### No CommanJs Export

----------

Reports the use of import declarations with CommonJS exports in any module except for the main module.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-import-module-exports.md>

👍 Examples of correct code

```typescript
import thing from 'other-thing'
export default thing

const thing = require('thing')
module.exports = thing

const thing = require('thing')
exports.foo = bar

import thing from 'otherthing'
console.log(thing.module.exports)

// in lib/index.js
import foo from 'path';
module.exports = foo;

```

👎 Examples of incorrect code

```typescript
import { stuff } from 'starwars'
module.exports = thing

import * as allThings from 'starwars'
exports.bar = thing

import thing from 'other-thing'
exports.foo = bar

import thing from 'starwars'
const baz = module.exports = thing
console.log(baz)
```

### No Useless Path Import

----------

Use this rule to prevent unnecessary path segments in import and require statements.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-useless-path-segments.md>

👍 Examples of correct code

```typescript
import "./header.js";
import "./pages";
import "./pages/about";
import ".";
import "..";
import fs from "fs";
```

👎 Examples of incorrect code

```typescript
import "./../my-project/pages/about.js"; // should be "./pages/about.js"
import "./../my-project/pages/about"; // should be "./pages/about"
import "../my-project/pages/about.js"; // should be "./pages/about.js"
import "../my-project/pages/about"; // should be "./pages/about"
import "./pages//about"; // should be "./pages/about"
import "./pages/"; // should be "./pages"
import "./pages/index"; // should be "./pages" (except if there is a ./pages.js file)
import "./pages/index.js"; // should be "./pages" (except if there is a ./pages.js file)
```

### No Extraneous Dependencies

----------

Disable import dependencies if no exists in package.json dependencies

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md>

👍 Examples of correct code

```typescript
import anything from "anything"; // exists in dependencies
```

👎 Examples of incorrect code

```typescript
import typescript from "typescript"; // exists in dev dependency package.json
```

### Import Order

----------

Enforce a convention in the order of require() / import statements
Use: Alphabetic order import

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/order.md>

👍 Examples of correct code

```typescript
import fs from "fs"
import file from "./file";
import file2 from "./file2";
```

👎 Examples of incorrect code

```typescript
import file from "./file";
import fs from "fs"
import file2 from "./file2";
```

### No Anonymous Default Export

----------

Reports if a module's default export is unnamed.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-anonymous-default-export.md>

👍 Examples of correct code

```typescript
const foo = 123;
export default foo;

export default class MyClass() {};

export default function foo() {};
```

👎 Examples of incorrect code

```typescript
export default []

export default () => {}

export default class {}

export default function () {}

export default 123

export default {}

export default new Foo()
```

### Prefer Node Protocol

----------

Prefer using the node: protocol when importing Node.js builtin modules

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md>

👍 Examples of correct code

```typescript
import dgram from 'node:dgram';
export {strict as default} from 'node:assert';
import fs from 'node:fs/promises';
const fs = require('fs');
import _ from 'lodash';
import fs from './fs.js';
const fs = require('node:fs/promises');
```

👎 Examples of incorrect code

```typescript
import dgram from 'dgram';
export {strict as default} from 'assert';
import fs from 'fs/promises';
const fs = require('fs/promises');
```

### Prefer export from

----------

Prefer export…from when re-exporting

When re-exporting from a module, it's unnecessary to import and then export.
It can be done in a single export…from declaration.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md>

👍 Examples of correct code

```typescript
export {default} from './foo.js';

export {named} from './foo.js';

export * as namespace from './foo.js';
export {
    default,
    default as renamedDefault,
    named,
    named as renamedNamed,
} from './foo.js';

// There is no substitution
import * as namespace from './foo.js';
export default namespace;
```

👎 Examples of incorrect code

```typescript
import defaultExport from './foo.js';
export default defaultExport;

import {named} from './foo.js';
export {named};

import * as namespace from './foo.js';
export {namespace};

import defaultExport, {named} from './foo.js';
export default defaultExport;
export {
    defaultExport as renamedDefault,
    named,
    named as renamedNamed,
};
```

### No Empty Import

----------

Prevent import empty

<https://github.com/ODGodinho/ODG-Linter-Js>

👍 Examples of correct code

```typescript
import { a } from './foo.js';
import a from './foo.js';
```

👎 Examples of incorrect code

```typescript
import { } from './foo.js';
import t, { } from './foo.js';
```

## Documentation

### Spaced Comment

----------

Require space after comment block.

Many style guides require empty lines before or after comments.
The primary goal of these rules is to make the comments easier to read and improve readability of the code.

<https://eslint.org/docs/rules/spaced-comment>
<https://eslint.org/docs/latest/rules/lines-around-comment>

👍 Examples of correct code

```typescript
// This is a comment with a whitespace at the beginning

/* This is a comment with a whitespace at the beginning */

/*
 * This is a comment with a whitespace at the beginning
 */


/**
 * valid
 */
function() {}
```

👎 Examples of incorrect code

```typescript
//This is a comment with no whitespace at the beginning

/*This is a comment with no whitespace at the beginning */

/**
 * invalid after space
 */

function() {}
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
<https://eslint.org/docs/latest/rules/no-useless-backreference>

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

### Prefer Unicode Code Point Escapes

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

### Prefer Named Capture Group

----------

This rule reports capturing groups without a name.

<https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-capture-group.html>

👍 Examples of correct code

```typescript
var foo = /(?<foo>ba+r)/;
var foo = /\b(?:foo)+\b/;
```

👎 Examples of incorrect code

```typescript
var foo = /\b(foo)+\b/;
```

## Security

### Eval Disabled

----------

JavaScript's eval() function is potentially dangerous and is often misused.
Using eval() on untrusted code can open a program up to several different injection attacks.
The use of eval() in most contexts can be substituted for a better, alternative approach to a problem.
Disallow the use of eval()-like methods

<https://eslint.org/docs/rules/no-eval#no-eval>
<https://eslint.org/docs/rules/no-implied-eval>
<https://sonarsource.github.io/rspec/#/rspec/S1523/javascript>
<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-implied-eval.md>

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

### Prevent Secret Token

----------

Prevent commit with token, passwords, keys etc.

👍 Examples of correct code

```typescript
const apiKey = process.env.apiKey;
```

👎 Examples of incorrect code

```typescript
const apiKey = "123456"

```

### Prevent Literal Code

----------

Prevent attack in your code

<https://github.com/nodesecurity/eslint-plugin-security/blob/HEAD/docs/regular-expression-dos-and-node.md>

👍 Examples of correct code

```typescript
require('../name');
require(`../name`);
```

👎 Examples of incorrect code

```typescript
require(name);
require('../' + name);
require(`../${name}`);
require(name());
```

### No Import Dynamic

----------

This rule checks every call to require() that uses expressions for the module name argument.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md>

👍 Examples of correct code

```typescript
require('../name');
require(`../name`);
```

👎 Examples of incorrect code

```typescript
require(name);
require('../' + name);
require(`../${name}`);
require(name());
```

### Security SSL

----------

Authorizing HTTP communications with S3 buckets is security-sensitive

<https://sonarsource.github.io/rspec/#/rspec/S6249/javascript>

👍 Examples of correct code

```typescript
const s3 = require('aws-cdk-lib/aws-s3');

const bucket = new s3.Bucket(this, 'example', {
    bucketName: 'example',
    versioned: true,
    publicReadAccess: false,
    enforceSSL: true
});
```

👎 Examples of incorrect code

```typescript
const s3 = require('aws-cdk-lib/aws-s3');

const bucket = new s3.Bucket(this, 'example'); // Sensitive
```

### Security Encrypt/Access

----------

Allowing public ACLs or policies on a S3 bucket is security-sensitive
Disabling server-side encryption of S3 buckets is security-sensitive

By default S3 buckets are private, it means that only the bucket owner can access it.
This access control can be relaxed with ACLs or policies.
To prevent permissive policies or ACLs to be set on a S3 bucket the following booleans settings can be enabled:

<https://sonarsource.github.io/rspec/#/rspec/S6281/javascript>
<https://sonarsource.github.io/rspec/#/rspec/S6245/javascript>

👍 Examples of correct code

```typescript
const s3 = require('aws-cdk-lib/aws-s3');

new s3.Bucket(this, 'id', {
    bucketName: 'bucket',
    blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL
});


new s3.Bucket(this, 'id', {
    blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    encryption: s3.BucketEncryption.KMS_MANAGED
});

# Alternatively with a KMS key managed by the user.

new s3.Bucket(this, 'id', {
    blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    encryption: s3.BucketEncryption.KMS_MANAGED,
    encryptionKey: access_key
});
```

👎 Examples of incorrect code

```typescript
const s3 = require('aws-cdk-lib/aws-s3');

new s3.Bucket(this, 'id', {
    bucketName: 'bucket'
}); // Sensitive
```

### Certificate Transparency

----------

Disabling Certificate Transparency monitoring is security-sensitive

Implement Expect-CT HTTP header which instructs the web browser to check public CT logs in order to verify if
the website appears inside and if it is not, the browser will block the request and display a warning to the user.

<https://sonarsource.github.io/rspec/#/rspec/S5742/javascript>

👍 Examples of correct code

```typescript
const express = require('express');
const helmet = require('helmet');

let app = express();

app.use(helmet.expectCt({
  enforce: true,
  maxAge: 86400
})); // Compliant
```

👎 Examples of incorrect code

```typescript
const express = require('express');
const helmet = require('helmet');

let app = express();

app.use(
    helmet({
      expectCt: false // Sensitive
    })
);
```

### No Log confidential information

----------

Log management is an important topic, especially for the security of a web application, to ensure user activity,
including potential attackers, is recorded and available for an analyst to understand what’s happened on the
web application in case of malicious activities.

<https://sonarsource.github.io/rspec/#/rspec/S5757/javascript>

👍 Examples of correct code

```typescript
const { Signale } = require('signale');

const CREDIT_CARD_NUMBERS = fetchFromWebForm()
// here we suppose the credit card numbers are retrieved somewhere and CREDIT_CARD_NUMBERS looks like ["1234-5678-0000-9999", "1234-5678-0000-8888"]; for instance

const options = {
  secrets: ["([0-9]{4}-?)+"]
};

const logger = new Signale(options); // Compliant

CREDIT_CARD_NUMBERS.forEach(function(CREDIT_CARD_NUMBER) {
  logger.log('The customer ordered products with the credit card number = %s', CREDIT_CARD_NUMBER);
});
```

👎 Examples of incorrect code

```typescript
const { Signale } = require('signale');

const CREDIT_CARD_NUMBERS = fetchFromWebForm()
// here we suppose the credit card numbers are retrieved somewhere and CREDIT_CARD_NUMBERS looks like ["1234-5678-0000-9999", "1234-5678-0000-8888"]; for instance

const options = {
  secrets: []         // empty list of secrets
};

const logger = new Signale(options); // Sensitive

CREDIT_CARD_NUMBERS.forEach(function(CREDIT_CARD_NUMBER) {
  logger.log('The customer ordered products with the credit card number = %s', CREDIT_CARD_NUMBER);
});
```

### Content Length

----------

Rejecting requests with significant content length is a good practice to control the network traffic intensity
and thus resource consumption in order to prevents DoS attacks.

<https://sonarsource.github.io/rspec/#/rspec/S5693/javascript>

👍 Examples of correct code

```typescript
const form = new Formidable();
form.maxFileSize = 8000000; // Compliant: 8MB

let diskUpload = multer({
  storage: diskStorage,
  limits: {
     fileSize: 8000000 // Compliant: 8MB
  }
});

let jsonParser = bodyParser.json(); // Compliant, when the limit is not defined, the default value is set to 100kb
let urlencodedParser = bodyParser.urlencoded({ extended: false, limit: "2mb" }); // Compliant
```

👎 Examples of incorrect code

```typescript
const form = new Formidable();
form.maxFileSize = 10000000; // Sensitive: 10MB is more than the recommended limit of 8MB

const formDefault = new Formidable(); // Sensitive, the default value is 200MB

let diskUpload = multer({
  storage: diskStorage,
  limits: {
    fileSize: 10000000; // Sensitive: 10MB is more than the recommended limit of 8MB
  }
});

let diskUploadUnlimited = multer({ // Sensitive: the default value is no limit
  storage: diskStorage,
});

// 4MB is more than the recommended limit of 2MB for non-file-upload requests
let jsonParser = bodyParser.json({ limit: "4mb" }); // Sensitive
let urlencodedParser = bodyParser.urlencoded({ extended: false, limit: "4mb" }); // Sensitive
```

### Anti Trojan Source No Bidi

----------

The trick is to use Unicode control characters to reorder tokens in source code at the encoding level.
These visually reordered tokens can be used to display logic that, while semantically correct, diverges from the logic presented by the logical ordering of source code tokens.

<https://trojansource.codes/>
<https://github.com/lirantal/eslint-plugin-anti-trojan-source>

### Cookie Httponly

----------

When a cookie is configured with the HttpOnly attribute set to true,
the browser guaranties that no client-side script will be able to read it. In most cases,
when a cookie is created, the default value of HttpOnly is false and it’s up to the developer to decide whether or
not the content of the cookie can be read by the client-side script. As a majority of Cross-Site Scripting (XSS)
attacks target the theft of session-cookies, the HttpOnly attribute can help to reduce their impact as it won’t be
possible to exploit the XSS vulnerability to steal session-cookies.

<https://sonarsource.github.io/rspec/#/rspec/S3330/javascript>
<https://sonarsource.github.io/rspec/#/rspec/S2255/javascript>

```typescript
let session = cookieSession({
  httpOnly: true,// Compliant
});  // Compliant

const express = require('express');
const session = require('express-session');

let app = express();
app.use(session({
  cookie:
  {
    httpOnly: true // Compliant
  }
}));

let cookies = new Cookies(req, res, { keys: keys });

cookies.set('LastVisit', new Date().toISOString(), {
  httpOnly: true // Compliant
}); // Compliant

const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const express = require('express');

let csrfProtection = csrf({ cookie: { httpOnly: true }}); // Compliant
```

👎 Examples of incorrect code

```typescript
let session = cookieSession({
  httpOnly: false,// Sensitive
});  // Sensitive

const express = require('express');
const session = require('express-session');

let app = express()
app.use(session({
  cookie:
  {
    httpOnly: false // Sensitive
  }
}));

let cookies = new Cookies(req, res, { keys: keys });

cookies.set('LastVisit', new Date().toISOString(), {
  httpOnly: false // Sensitive
}); // Sensitive

const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const express = require('express');

let csrfProtection = csrf({ cookie: { httpOnly: false }}); // Sensitive
```

### Protect XSS Render

----------

Disabling auto-escaping in template engines is security-sensitive

<https://sonarsource.github.io/rspec/#/rspec/S5247/javascript>

```typescript
let Mustache = require("mustache");

let rendered = Mustache.render(template, { name: inputName });

// or

const Handlebars = require('handlebars');

let source = "<p>attack {{name}}</p>";
let data = { "name": "<b>Alan</b>" };

let template = Handlebars.compile(source);

// or

let md = require('markdown-it')();

let result = md.render('# <b>attack</b>');

// or

const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer()
}); // Compliant by default sanitize is set to true

console.log(marked("# test <b>attack/b>"));

// or

let kramed = require('kramed');

let options = {
  renderer: new kramed.Renderer({
    sanitize: true // Compliant
  })
};

console.log(kramed('Attack [xss?](javascript:alert("xss")).', options));
```

👎 Examples of incorrect code

```typescript
let Mustache = require("mustache");

Mustache.escape = function(text) {return text;}; // Sensitive

let rendered = Mustache.render(template, { name: inputName });

// or

const Handlebars = require('handlebars');
let source = "<p>attack {{name}}</p>";
let template = Handlebars.compile(source, { noEscape: true }); // Sensitive

// or

const markdownIt = require('markdown-it');
let md = markdownIt({
  html: true // Sensitive
});

let result = md.render('# <b>attack</b>');

// or

const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: false // Sensitive
});

console.log(marked("# test <b>attack/b>"));

// or

let kramed = require('kramed');

var options = {
  renderer: new kramed.Renderer({
    sanitize: false // Sensitive
  })
};
```

### Force Integrity

----------

Disabling resource integrity features is security-sensitive

Fetching external resources, for example from a CDN, without verifying their integrity could impact the security of an
application if the CDN gets compromised and resources are replaced by malicious ones.
Resources integrity feature will block resources inclusion into an application if the pre-computed digest
of the expected resource doesn’t match with the digest of the retrieved resource.

<https://sonarsource.github.io/rspec/#/rspec/S5725/javascript>

```typescript
let script = document.createElement("script");
script.src = "https://cdnexample.com/script-v1.2.3.js";
script.integrity = "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"; // Compliant
script.crossOrigin = "anonymous";
document.head.appendChild(script);
```

👎 Examples of incorrect code

```typescript
let script = document.createElement("script");
script.src = "https://cdnexample.com/script-latest.js";
 // Sensitive no integrity
script.crossOrigin = "anonymous";
document.head.appendChild(script);
```

### DNS prefetching

----------

Allowing browsers to perform DNS prefetching is security-sensitive

<https://sonarsource.github.io/rspec/#/rspec/S5743/javascript>

```typescript
const express = require('express');
const helmet = require('helmet');

let app = express();

app.use(
  helmet.dnsPrefetchControl({
    allow: false // Compliant
  })
);
```

👎 Examples of incorrect code

```typescript
const express = require('express');
const helmet = require('helmet');

let app = express();

app.use(
  helmet.dnsPrefetchControl({
    allow: true // Sensitive: allowing DNS prefetching is security-sensitive
  })
);
```

### No Prototype Builtins

----------

Additionally, objects can have properties that shadow the builtins on Object.prototype,
potentially causing unintended behavior or denial-of-service security vulnerabilities.
For example, it would be unsafe for a webserver to parse JSON input from a client and call hasOwnProperty directly
on the resulting object, because a malicious client could send a JSON value like {"hasOwnProperty": 1}
and cause the server to crash.

To avoid subtle bugs like this, it’s better to always call these methods from Object.prototype.
For example, foo.hasOwnProperty("bar") should be replaced with Object.prototype.hasOwnProperty.call(foo, "bar").

<https://eslint.org/docs/latest/rules/No-Prototype-Builtins>

```typescript
var hasBarProperty = Object.prototype.hasOwnProperty.call(foo, "bar");

var isPrototypeOfBar = Object.prototype.isPrototypeOf.call(foo, bar);

var barIsEnumerable = {}.propertyIsEnumerable.call(foo, "bar");
```

👎 Examples of incorrect code

```typescript
var hasBarProperty = foo.hasOwnProperty("bar");

var isPrototypeOfBar = foo.isPrototypeOf(bar);

var barIsEnumerable = foo.propertyIsEnumerable("bar");
```

## No Dynamic Delete

----------

Deleting dynamically computed keys can be dangerous and in some cases not well optimized.
Using the delete operator on keys that aren't runtime constants could be a sign that you're using the wrong data
structures. Using Objects with added and removed keys can cause occasional edge case bugs,
such as if a key is named "hasOwnProperty".

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-dynamic-delete.md>

👍 Examples of correct code

```typescript
const container: { [i: string]: number } = {
  /* ... */
};

// Constant runtime lookups by string index
delete container.aaa;

// Constants that must be accessed by []
delete container[7];
delete container['-Infinity'];

const name = 'aaa';
switch (name) {
    case "aaa":
        delete container.aaa
        break;
    case "bbb":
        delete container.bbb
        break;
    default:
        throw new Error("Not Authorized");
        break;
}
```

👎 Examples of incorrect code

```typescript
// Can be replaced with the constant equivalents, such as container.aaa
delete container['aaa'];
delete container['Infinity'];

// Dynamic, difficult-to-reason-about lookups
const name = 'name';
delete container[name];
delete container[name.toUpperCase()];
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

## Prefer for-of

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

## No Instance Of Array

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

<https://eslint.org/docs/latest/rules/no-nested-ternary>
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

```typescript
foo.append(bar);
foo.append('bar');
foo.append(bar, 'baz');
```

👎 Examples of incorrect code

```typescript
foo.appendChild(bar);
```

## Prefer Dom Node Remove

----------

Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-dataset.md>

👍 Examples of correct code

```typescript
foo.remove();
this.remove();
```

👎 Examples of incorrect code

```typescript
parentNode.removeChild(foo);
parentNode.removeChild(this);
```

## Prefer Include

----------

Prefer `.includes()` over `.indexOf()` and Array#some() when checking for existence or non-existence

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes.md>
<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-includes.md>

👍 Examples of correct code

```typescript
const str = 'foobar';
str.indexOf('foo') !== -n;
str.indexOf('foo') !== 1;
!str.indexOf('foo') === 1;
!str.indexOf('foo') === -n;
str.includes('foo');
[1,2,3].includes(4);
const isFound = foo.includes('foo');
const isFound = foo.some(x => x == undefined);
const isFound = foo.some(x => x !== 'foo');
const isFound = foo.some((x, index) => x === index);
const isFound = foo.some(x => (x === 'foo') && isValid());
const isFound = foo.some(x => y === 'foo');
const isFound = foo.some(x => y.x === 'foo');
const isFound = foo.some(x => {
    const bar = getBar();
    return x === bar;
});
```

👎 Examples of incorrect code

```typescript
[].indexOf('foo') !== -1;
x.indexOf('foo') != -1;
str.indexOf('foo') > -1;
'foobar'.indexOf('foo') >= 0;
x.indexOf('foo') === -1
const isFound = foo.some(x => x === 'foo');
const isFound = foo.some(x => 'foo' === x);
const isFound = foo.some(x => {
    return x === 'foo';
});
```

## Prefer Keyboard Event Key

----------

Enforces the use of KeyboardEvent#key over KeyboardEvent#keyCode which is deprecated.
The .key property is also more semantic and readable.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md>

👍 Examples of correct code

```typescript
window.addEventListener("click", event => {
    console.log(event.key);
});
window.addEventListener("keydown", event => {
    if (event.key === "Backspace") {
        console.log("Backspace was pressed");
    }
});
```

👎 Examples of incorrect code

```typescript
window.addEventListener("keydown", event => {
    console.log(event.keyCode);
});
window.addEventListener("keydown", event => {
    if (event.keyCode === 8) {
        console.log("Backspace was pressed");
    }
});
```

## Prefer Negative Index

----------

Prefer negative index over .length - index for {String,Array,TypedArray}#slice(), Array#splice() and Array#at()

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-negative-index.md>

👍 Examples of correct code

```typescript
foo.slice(-2, -1);
foo.splice(-1, 1);
foo.at(-1);
Array.prototype.slice.call(foo, -2, -1);
Array.prototype.slice.apply(foo, [-2, -1]);
```

👎 Examples of incorrect code

```typescript
foo.slice(foo.length - 2, foo.length - 1);
foo.splice(foo.length - 1, 1);
foo.at(foo.length - 1);
Array.prototype.slice.call(foo, foo.length - 2, foo.length - 1);
Array.prototype.slice.apply(foo, [foo.length - 2, foo.length - 1]);
```

## Prefer Optional Catch Binding

----------

Prefer omitting the catch binding parameter

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-optional-catch-binding.md>

👍 Examples of correct code

```typescript
try {} catch {}
try {} catch (error) {
    console.error(error);
}
```

👎 Examples of incorrect code

```typescript
try {} catch (notUsedError) {}
try {} catch ({message}) {}
```

## Prefer Prototype Methods

----------

Prefer borrowing methods from the prototype instead of the instance
When “borrowing” a method from Array or Object, it's clearer to get it from the prototype than from an instance.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md>

👍 Examples of correct code

```typescript
const array = Array.prototype.slice.apply(bar);
const hasProperty = Object.prototype.hasOwnProperty.call(foo, 'property');
Reflect.apply(Array.prototype.forEach, arrayLike, [callback]);
const maxValue = Math.max.apply(Math, numbers);
```

👎 Examples of incorrect code

```typescript
const array = [].slice.apply(bar);
const hasProperty = {}.hasOwnProperty.call(foo, 'property');
Reflect.apply([].forEach, arrayLike, [callback]);
```

## Prefer Query Selector

----------

Prefer .querySelector() over .getElementById(),
.querySelectorAll() over .getElementsByClassName() and .getElementsByTagName()

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md>

👍 Examples of correct code

```typescript
document.querySelector('#foo');
document.querySelector('.bar');
document.querySelector('main #foo .bar');
document.querySelectorAll('.foo .bar');
document.querySelectorAll('li a');
document.querySelector('li').querySelectorAll('a');
```

👎 Examples of incorrect code

```typescript
document.getElementById('foo');
document.getElementsByClassName('foo bar');
document.getElementsByTagName('main');
document.getElementsByClassName(fn());
```

## Prefer Regexp Test

----------

Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md>

👍 Examples of correct code

```tsx
if (/unicorn/.test(string)) {}
<template>
    <div v-if="/unicorn/.test(string)">Vue</div>
</template>
```

👎 Examples of incorrect code

```tsx
if (string.match(/unicorn/)) {}
if (/unicorn/.exec(string)) {}
<template>
    <div v-if="/unicorn/.exec(string)">Vue</div>
</template>
```

## Prefer Spread

----------

Prefer the spread operator over Array.from(…), Array#concat(…), Array#slice() and String#split('')

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md>

👍 Examples of correct code

```typescript
[ ...set ].map(element => foo(element));
const array = [ ...array1, ...array2 ];
const tail = array.slice(1);
const copy = [ ...array ];
```

👎 Examples of incorrect code

```typescript
Array.from(set).map(element => foo(element));
const array = array1.concat(array2);
const copy = array.slice();
const characters = string.split('');
```

## Prefer String Replace All

----------

Prefer String#replaceAll() over regex searches with the global flag
The String#replaceAll() method is both faster and safer as you don't have to escape the regex
if the string is not a literal.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md>

👍 Examples of correct code

```typescript
string.replace(/Non-literal characters .*/g, "");
string.replace(/Extra flags/gi, "");
string.replace("Not a regex expression", "")
string.replaceAll("Literal characters only", "");
```

👎 Examples of incorrect code

```typescript
string.replace(/This has no special regex symbols/g, "");
string.replace(/\(It also checks for escaped regex symbols\)/g, "");
string.replace(/Works for u flag too/gu, "");
```

## Prefer String Starts Ends With

----------

Prefer String#startsWith() & String#endsWith() over RegExp#test()

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md>

👍 Examples of correct code

```typescript
const foo = baz.startsWith("bar");
const foo = baz.endsWith("bar");
const foo = baz?.startsWith("bar");
const foo = (baz ?? "").startsWith("bar");
const foo = String(baz).startsWith("bar");
const foo = /^bar/i.test(baz);
```

👎 Examples of incorrect code

```typescript
const foo = /^bar/.test(baz);
const foo = /bar$/.test(baz);
```

## Prefer String Trim Start End

----------

Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-trim-start-end.md>

👍 Examples of correct code

```typescript
const foo = bar.trimStart();
const foo = bar.trimEnd();
```

👎 Examples of incorrect code

```typescript
const foo = bar.trimLeft();
const foo = bar.trimRight();
```

## Prefer Switch

----------

Prefer switch over multiple else-if

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md>

👍 Examples of correct code

```typescript
if (foo === 1) {
    // 1
} else if (foo === 2) {
    // 2
}
switch (foo) {
    case 1: {
        // 1
        break;
    }
    case 2: {
        // 2
        break;
    }
    case 3: {
        // 3
        break;
    }
    default: {
        // default
    }
}
```

👎 Examples of incorrect code

```typescript
if (foo === 1) {
    // 1
} else if (foo === 2) {
    // 2
} else if (foo === 3) {
    // 3
} else {
    // default
}
```

## Prefer Ternary

----------

This rule enforces the use of ternary expressions over 'simple' if-else statements,
where 'simple' means the consequent and alternate are each one line and have the same basic type and form.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md>

👍 Examples of correct code

```typescript
function func() {
    return test ? a : b;
}
function* func() {
    yield (test ? a : b);
}
async function func() {
    await (test ? a() : b());
}
const error = test ? new Error('foo') : new Error('bar');
throw error;
let foo;
foo = test ? 1 : 2;
// Multiple expressions
let foo;
let bar;
if (test) {
    foo = 1;
    bar = 2;
} else{
    foo = 2;
}
// Different expressions
function func() {
    if (test) {
        return a;
    } else {
        throw new Error('error');
    }
}
// Assign to different variable
let foo;
let bar;
if (test) {
    foo = 1;
} else{
    baz = 2;
}
```

👎 Examples of incorrect code

```typescript
function func() {
    if (test) {
        return a;
    } else {
        return b;
    }
}
function* func() {
    if (test) {
        yield a;
    } else {
        yield b;
    }
}
async function func() {
    if (test) {
        await a();
    } else {
        await b();
    }
}
if (test) {
    throw new Error('foo');
} else {
    throw new Error('bar');
}
let foo;
if (test) {
    foo = 1;
} else {
    foo = 2;
}
```

## Multiline Ternary Multiple

----------

Enforces newlines between the operands of a ternary expression if the expression spans multiple lines.

<https://eslint.org/docs/latest/rules/multiline-ternary>

👍 Examples of correct code

```typescript
foo > bar ? value1 : value2;

foo > bar ?
    value1 :
    value2;

foo > bar ?
    (baz > qux ? value1 : value2) :
    value3;

foo > bar ?
    (baz > qux ?
        value1 :
        value2) :
    value3;

foo > bar &&
    bar > baz ?
        value1 :
        value2;
```

👎 Examples of incorrect code

```typescript
foo > bar ? value1 :
    value2;

foo > bar ?
    value1 : value2;

foo > bar &&
    bar > baz ? value1 : value2;
```

## Prevent Abbreviations

----------

Using complete words results in more readable code. Not everyone knows all your abbreviations.
Code is written only once, but read many times.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md>

👍 Examples of correct code

```typescript
const error = new Error();
const event = document.createEvent('Event');
const levels = {
    error: 0
};
this.event = 'click';
class Button {}
// Property is not checked by default
const levels = {
    err: 0
};
// Property is not checked by default
this.evt = 'click';
```

👎 Examples of incorrect code

```typescript
const e = new Error();
const e = document.createEvent('Event');
class Btn {}
```

## Consistent Relative URL

----------

Enforce consistent relative URL style

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md>

👍 Examples of correct code

```typescript
const url = new URL('foo', base);
```

👎 Examples of incorrect code

```typescript
const url = new URL('./foo', base)
```

## Require Array Join Separator

----------

Enforce using the separator argument with Array#join()
It's better to make it clear what the separator is when calling Array#join(),
instead of relying on the default comma (',') separator.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md>

👍 Examples of correct code

```typescript
const string = array.join(',');
const string = array.join('|');
const string = Array.prototype.join.call(arrayLike, '');
const string = [].join.call(arrayLike, '\n');
```

👎 Examples of incorrect code

```typescript
const string = array.join();
const string = Array.prototype.join.call(arrayLike);
const string = [].join.call(arrayLike);
```

## Require Number To Fixed Digits Argument

----------

Enforce using the digits argument with Number#toFixed()

It's better to make it clear what the value of the digits argument is when calling Number#toFixed(),
instead of relying on the default value of 0.

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md>

👍 Examples of correct code

```typescript
const string = foo.toFixed(0);
const string = foo.toFixed(2);
const integer = Math.floor(foo);
const integer = Math.ceil(foo);
const integer = Math.round(foo);
const integer = Math.trunc(foo);
```

👎 Examples of incorrect code

```typescript
const string = number.toFixed();
```

## Template String Indent

----------

Fix whitespace-insensitive template indentation

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md>

👍 Examples of correct code

```typescript
function foo() {
    const sqlQuery = sql`
        select *
        from students
        where first_name = ${x}
        and last_name = ${y}
    `;

    const gqlQuery = gql`
        query user(id: 5) {
            firstName
            lastName
        }
    `;

    const html = /* HTML */ `
        <div>
            <span>hello</span>
        </div>
    `;
}
```

👎 Examples of incorrect code

```typescript
function foo() {
    const sqlQuery = sql`
select *
from students
where first_name = ${x}
and last_name = ${y}
    `;

    const gqlQuery = gql`
                                    query user(id: 5) {
                                        firstName
                                        lastName
                                    }
                                `;

    const html = /* HTML */ `
                <div>
                        <span>hello</span>
                </div>
    `;
}
```

## Adjacent Overload Signatures

----------

Function overload signatures represent multiple ways a function can be called, potentially with different return types.
It's typical for an interface or type alias describing a function to place all overload signatures next to each other.
If Signatures placed elsewhere in the type are easier to be missed by future developers reading the code.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md>

👍 Examples of correct code

```typescript
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function foo(sn: string | number): void;
  export function bar(): void;
}

type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void {}
  bar(): void {}
}

export function bar(): void;
export function foo(s: string): void;
export function foo(n: number): void;
export function foo(sn: string | number): void;
```

👎 Examples of incorrect code

```typescript
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void;
  export function foo(sn: string | number): void;
}

type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {}
  foo(sn: string | number): void {}
}

export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void;
export function foo(sn: string | number): void;
```

## Ban Ts Comment

----------

TypeScript provides several directive comments that can be used to alter how it processes files.
Using these to suppress TypeScript compiler errors reduces the effectiveness of TypeScript overall.
Instead, it's generally better to correct the types of code, to make directives unnecessary.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md>

👍 Examples of correct code

```typescript
if (false) {
  // @ts-ignore: Unreachable code error
  console.log('hello');
}
if (false) {
  /*
  @ts-ignore: Unreachable code error
  */
  console.log('hello');
}
```

👎 Examples of incorrect code

```typescript
if (false) {
  // Compiler warns about unreachable code error
  console.log('hello');
}

if (false) {
  // @ts-expect-error: Unreachable code error
  console.log('hello');
}
if (false) {
  /*
  @ts-expect-error: Unreachable code error
  */
  console.log('hello');
}
```

## Ban Tslint Comment

----------

Useful when migrating from TSLint to ESLint. Once TSLint has been removed,
this rule helps locate TSLint annotations (e.g. // tslint:disable).

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-tslint-comment.md>

👍 Examples of correct code

```typescript
// This is a comment that just happens to mention tslint
/* This is a multiline comment that just happens to mention tslint */
someCode(); // This is a comment that just happens to mention tslint
```

👎 Examples of incorrect code

```typescript
/* tslint:disable */
/* tslint:enable */
/* tslint:disable:rule1 rule2 rule3... */
/* tslint:enable:rule1 rule2 rule3... */
// tslint:disable-next-line
someCode(); // tslint:disable-line
// tslint:disable-next-line:rule1 rule2 rule3...
```

## Class Literal Property Style

----------

This style checks for any getter methods that return literal values,
and requires them to be defined using fields with the readonly modifier instead.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/class-literal-property-style.md>

👍 Examples of correct code

```typescript
class Mx {
  public readonly myField1 = 1;

  // not a literal
  public readonly myField2 = [1, 2, 3];

  private readonly ['myField3'] = 'hello world';

  public get myField4() {
    return `hello from ${window.location.href}`;
  }
}
```

👎 Examples of incorrect code

```typescript
class Mx {
  public static get myField1() {
    return 1;
  }

  private get ['myField2']() {
    return 'hello world';
  }
}
```

## Consistent Generic Constructors

----------

When constructing a generic class, you can specify the type arguments on either the left-hand side
(as a type annotation) or the right-hand side (as part of the constructor call):

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-generic-constructors.md>

👍 Examples of correct code

```typescript
const map = new Map<string, number>();
const map: Map<string, number> = new MyMap();
const set = new Set<string>();
const set = new Set();
const set: Set<string> = new Set<string>();
```

👎 Examples of incorrect code

```typescript
const map: Map<string, number> = new Map();
const set: Set<string> = new Set();
```

## Consistent Indexed Object Style

----------

TypeScript supports defining arbitrary object keys using an index signature.
TypeScript also has a builtin type named Record to create an empty object defining only an index signature.
For example, the following types are equal:

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md>

👍 Examples of correct code

```typescript
type Foo = Record<string, unknown>;
```

👎 Examples of incorrect code

```typescript
interface Foo {
  [key: string]: unknown;
}

type Foo = {
  [key: string]: unknown;
};
```

## Consistent Type Assertions

----------

This rule aims to standardize the use of type assertion style across the codebase.
Keeping to one syntax consistently helps with code readability.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md>

👍 Examples of correct code

```typescript
const x: T = { ... };
const y = { ... } as any;
const z = { ... } as unknown;
foo({ ... } as T);
new Clazz({ ... } as T);
function foo() { throw { bar: 5 } as Foo }
const foo = <Foo props={{ ... } as Bar}/>;
```

👎 Examples of incorrect code

```typescript
const x = { ... } as T;

function foo() {
  return { ... } as T;
}
```

## Consistent Type Definitions

----------

TypeScript provides two common ways to define an object type: interface and type.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.md>

👍 Examples of correct code

```typescript
type T = string;
type Foo = string | {};

interface T {
  x: number;
}
```

👎 Examples of incorrect code

```typescript
type T = { x: number };
```

## Consistent Type Exports

----------

TypeScript allows specifying a keyword on exports to indicate that the export exists only in the type system,
not at runtime. This allows transpilers to drop exports without knowing the types of the dependencies.type

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-exports.md>

👍 Examples of correct code

```typescript
const x = 1;
type T = number;

export { x, type T };
```

👎 Examples of incorrect code

```typescript
const x = 1;
type T = number;

export { x, T };
```

## Consistent Type Imports

----------

TypeScript allows specifying a type keyword on imports to indicate that the export exists only in the type system,
not at runtime. This allows transpilers to drop imports without knowing the types of the dependencies.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md>

👍 Examples of correct code

```typescript
import { type Foo } from 'Foo';
import type Bar from 'Bar';
type T = Foo;
const x: Bar = 1;
```

👎 Examples of incorrect code

```typescript
import type { Foo } from 'Foo';

// or

import { Foo } from 'Foo';
import Bar from 'Bar';
type T = Foo;
const x: Bar = 1;
```

## Member Delimiter Style

----------

TypeScript allows three delimiters between members in interfaces and type aliases:

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-delimiter-style.md>

👍 Examples of correct code

```typescript
interface Foo {
    name: string;
    greet(): string;
}

interface Foo { name: string }

type Bar = {
    name: string;
    greet(): string;
}

type Bar = { name: string }

type FooBar = { name: string; greet(): string }
```

👎 Examples of incorrect code

```typescript
// missing semicolon delimiter
interface Foo {
    name: string
    greet(): string
}

// using incorrect delimiter
interface Bar {
    name: string,
    greet(): string,
}

// missing last member delimiter
interface Baz {
    name: string;
    greet(): string
}

// incorrect delimiter
type FooBar = { name: string, greet(): string }

// last member should not have delimiter
type FooBar = { name: string; greet(): string; }
```

## Member Ordering

----------

This rule aims to standardize the way classes, interfaces, and type literals are structured and ordered.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-ordering.md>

👍 Examples of correct code

```typescript
[
  // Index signature
  "signature",

  // Fields
  "public-static-field",
  "protected-static-field",
  "private-static-field",
  "#private-static-field",

  "public-decorated-field",
  "protected-decorated-field",
  "private-decorated-field",

  "public-instance-field",
  "protected-instance-field",
  "private-instance-field",
  "#private-instance-field",

  "public-abstract-field",
  "protected-abstract-field",

  "public-field",
  "protected-field",
  "private-field",
  "#private-field",

  "static-field",
  "instance-field",
  "abstract-field",

  "decorated-field",

  "field",

  // Static initialization
  "static-initialization",

  // Constructors
  "public-constructor",
  "protected-constructor",
  "private-constructor",

  // Getters
  "public-static-get",
  "protected-static-get",
  "private-static-get",
  "#private-static-get",

  "public-decorated-get",
  "protected-decorated-get",
  "private-decorated-get",

  "public-instance-get",
  "protected-instance-get",
  "private-instance-get",
  "#private-instance-get",

  "public-abstract-get",
  "protected-abstract-get",

  "public-get",
  "protected-get",
  "private-get",
  "#private-get",

  "static-get",
  "instance-get",
  "abstract-get",

  "decorated-get",

  "get",

  // Setters
  "public-static-set",
  "protected-static-set",
  "private-static-set",
  "#private-static-set",

  "public-decorated-set",
  "protected-decorated-set",
  "private-decorated-set",

  "public-instance-set",
  "protected-instance-set",
  "private-instance-set",
  "#private-instance-set",

  "public-abstract-set",
  "protected-abstract-set",

  "public-set",
  "protected-set",
  "private-set",

  "static-set",
  "instance-set",
  "abstract-set",

  "decorated-set",

  "set",

  // Methods
  "public-static-method",
  "protected-static-method",
  "private-static-method",
  "#private-static-method",
  "public-decorated-method",
  "protected-decorated-method",
  "private-decorated-method",
  "public-instance-method",
  "protected-instance-method",
  "private-instance-method",
  "#private-instance-method",
  "public-abstract-method",
  "protected-abstract-method"
]
```

👎 Examples of incorrect code

```typescript
// another order
```

## No Confusing Non Null Assertion

----------

Using a non-null assertion (!) next to an assign or equals check (= or == or ===)
creates code that is confusing as it looks similar to a not equals check (!= !==).

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md>

👍 Examples of correct code

```typescript
interface Foo {
  bar?: string;
  num?: number;
}

const foo: Foo = getFoo();
const isEqualsBar = foo.bar === "hello";
const isEqualsNum = 1 + foo.num! === 2;
```

👎 Examples of incorrect code

```typescript
interface Foo {
  bar?: string;
  num?: number;
}

const foo: Foo = getFoo();
const isEqualsBar = foo.bar! == 'hello';
const isEqualsNum = 1 + foo.num! == 2;
```

## No Extra Non Null Assertion

----------

The ! non-null assertion operator in TypeScript is used to assert that a value's type does not include null or undefined.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md>

👍 Examples of correct code

```typescript
const foo: { bar: number } | null = null;
const bar = foo!.bar;
function foo(bar: number | undefined) {
  const bar: number = bar!;
}
function foo(bar?: { n: number }) {
  return bar?.n;
}
```

👎 Examples of incorrect code

```typescript
const foo: { bar: number } | null = null;
const bar = foo!!!.bar;
function foo(bar: number | undefined) {
  const bar: number = bar!!!;
}
function foo(bar?: { n: number }) {
  return bar!?.n;
}
```

## No For In Array

----------

A for-in loop (for (var i in o)) iterates over the properties of an Object.
While it is legal to use for-in loops with array types, it is not common.
for-in will iterate over the indices of the array as strings, omitting any "holes" in the array.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-for-in-array.md>

👍 Examples of correct code

```typescript
for (const value of array) {
  console.log(value);
}

for (const [ index, value ] of array.entries()) {
    console.log(index, value);
}

```

👎 Examples of incorrect code

```typescript
for (const i in array) {
  console.log(array[i]);
}

for (const i in array) {
  console.log(i, array[i]);
}
```

## No Inferrable Type

----------

TypeScript is able to infer the types of parameters, properties, and variables from their default or initial values.
There is no need to use an explicit : type annotation on one of those constructs initialized to a boolean, number,
or string.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md>

👍 Examples of correct code

```typescript
const a = 10n;
const a = BigInt(10);
const a = !0;
const a = Boolean(null);
const a = true;
const a = null;
const a = 10;
const a = Infinity;
const a = NaN;
const a = Number('1');
const a = /a/;
const a = new RegExp('a');
const a = `str`;
const a = String(1);
const a = Symbol('a');
const a = undefined;
const a = void someValue;
```

👎 Examples of incorrect code

```typescript
const a: bigint = 10n;
const a: bigint = BigInt(10);
const a: boolean = !0;
const a: boolean = Boolean(null);
const a: boolean = true;
const a: null = null;
const a: number = 10;
const a: number = Infinity;
const a: number = NaN;
const a: number = Number('1');
const a: RegExp = /a/;
const a: RegExp = new RegExp('a');
const a: string = `str`;
const a: string = String(1);
const a: symbol = Symbol('a');
const a: undefined = undefined;
const a: undefined = void someValue;
```

## No This Alias

----------

Assigning a variable to this instead of properly using arrow lambdas may be a symptom of pre-ES6 practices or
not managing scope well.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.md>

👍 Examples of correct code

```typescript
setTimeout(() => {
  this.doWork();
});
```

👎 Examples of incorrect code

```typescript
const self = this;

setTimeout(function () {
  self.doWork();
});
```

## Non Nullable Type Assertion Style

----------

!: Non-null assertion
as: Traditional type assertion with a coincidentally equivalent type

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md>

👍 Examples of correct code

```typescript
const maybe = Math.random() > 0.5 ? '' : undefined;

const definitely = maybe!;
const alsoDefinitely = maybe!;
```

👎 Examples of incorrect code

```typescript
const maybe = Math.random() > 0.5 ? '' : undefined;

const definitely = maybe as string;
const alsoDefinitely = <string>maybe;
```

## Parameter Properties

----------

The constructor parameter is assigned to the class property at the beginning of the constructor

<http://link.com>

👍 Examples of correct code

```typescript
class Foo {
  constructor(readonly name: string) {}
}

class Foo {
  constructor(private name: string) {}
}

class Foo {
  constructor(protected name: string) {}
}

class Foo {
  constructor(public name: string) {}
}

class Foo {
  constructor(private readonly name: string) {}
}

class Foo {
  constructor(protected readonly name: string) {}
}

class Foo {
  constructor(public readonly name: string) {}
}
```

👎 Examples of incorrect code

```typescript
class Foo {
  constructor(name: string) {
    this.name = name;
  }
}
```

## Prefer Enum Initializers

----------

TypeScript enums are a practical way to organize semantically related constant values.
Members of enums thatdon't have explicit values are by default given sequentially increasing numbers.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md>

👍 Examples of correct code

```typescript
enum Status {
  Open = 'Open',
  Close = 'Close',
}

enum Direction {
  Up = 1,
  Down = 2,
}

enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}
```

👎 Examples of incorrect code

```typescript
enum Status {
  Open = 1,
  Close,
}

enum Direction {
  Up,
  Down,
}

enum Color {
  Red,
  Green = 'Green'
  Blue = 'Blue',
}
```

## Prefer Function Type

----------

TypeScript allows for two common ways to declare a type for a function:

Function type: () => string
Object type with a signature: { (): string }

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-function-type.md>

👍 Examples of correct code

```typescript
type Example = () => string;
function foo(example: () => number): number {
  return bar();
}
// returns the function itself, not the `this` argument.
type ReturnsSelf = (arg: string) => ReturnsSelf;
function foo(bar: { (): string; baz: number }): string {
  return bar();
}
interface Foo {
  bar: string;
}
interface Bar extends Foo {
  (): void;
}
// multiple call signatures (overloads) is allowed:
interface Overloaded {
  (data: string): number;
  (id: number): string;
}
// this is equivelent to Overloaded interface.
type Intersection = ((data: string) => number) & ((id: number) => string);
```

👎 Examples of incorrect code

```typescript
interface Example {
  (): string;
}
function foo(example: { (): number }): number {
  return example();
}
interface ReturnsSelf {
  // returns the function itself, not the `this` argument.
  (arg: string): this;
}
```

## Prefer Namespace Keyword

----------

TypeScript historically allowed a form of code organization called "custom modules" (module Example {}),
later renamed to "namespaces" (namespace Example).

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md>

👍 Examples of correct code

```typescript
namespace Example {}

declare module 'foo' {}
```

👎 Examples of incorrect code

```typescript
module Example {}

```

## Prefer Nullish Coalescing

----------

The ?? nullish coalescing runtime operator allows providing a default value when dealing with null or undefined.
Because the nullish coalescing operator only coalesces when the original value is null or undefined, it is much
safer than relying upon logical OR operator chaining ||, which coalesces on any falsy value.

This rule reports when an || operator can be safely replaced with a ??.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md>

👍 Examples of correct code

```typescript
const foo: any = 'bar';
foo ?? 'a string';
foo ?? 'a string';
foo ?? 'a string';
foo ?? 'a string';

const foo: string | undefined = 'bar';
foo ?? 'a string';
foo ?? 'a string';

const foo: string | null = 'bar';
foo ?? 'a string';
foo ?? 'a string';
```

👎 Examples of incorrect code

```typescript
const foo: any = 'bar';
foo !== undefined && foo !== null ? foo : 'a string';
foo === undefined || foo === null ? 'a string' : foo;
foo == undefined ? 'a string' : foo;
foo == null ? 'a string' : foo;

const foo: string | undefined = 'bar';
foo !== undefined ? foo : 'a string';
foo === undefined ? 'a string' : foo;

const foo: string | null = 'bar';
foo !== null ? foo : 'a string';
foo === null ? 'a string' : foo;
```

## Prefer Optional Chain

----------

This rule reports on code where an && operator can be safely replaced with ?. optional chaining.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-optional-chain.md>

👍 Examples of correct code

```typescript
foo?.a?.b?.c;
foo?.['a']?.b?.c;
foo?.a?.b?.method?.();

foo?.a?.b?.c?.d?.e;

!foo?.bar;
!foo?.[bar];
!foo?.bar?.baz?.();
```

👎 Examples of incorrect code

```typescript
foo && foo.a && foo.a.b && foo.a.b.c;
foo && foo['a'] && foo['a'].b && foo['a'].b.c;
foo && foo.a && foo.a.b && foo.a.b.method && foo.a.b.method();

// With empty objects
(((foo || {}).a || {}).b || {}).c;
(((foo || {})['a'] || {}).b || {}).c;

// With negated `or`s
!foo || !foo.bar;
!foo || !foo[bar];
!foo || !foo.bar || !foo.bar.baz || !foo.bar.baz();

// this rule also supports converting chained strict nullish checks:
foo &&
  foo.a != null &&
  foo.a.b !== null &&
  foo.a.b.c != undefined &&
  foo.a.b.c.d !== undefined &&
  foo.a.b.c.d.e;
```

## Prefer Readonly

----------

This rule reports on private members are marked as readonly if they're never modified outside of the constructor.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-readonly.md>

👍 Examples of correct code

```typescript
class Container {

  // Public members might be modified externally
  public publicMember: boolean;

  // Protected members might be modified by child classes
  protected protectedMember: number;

  // This is modified later on by the class
  private modifiedLater = 'unchanged';

  private readonly myProp = 'readonly';

  public mutate() {
    this.modifiedLater = 'mutated';
  }
}
```

👎 Examples of incorrect code

```typescript
class Container {

  // These member variables could be marked as readonly
  private neverModifiedMember = true;
  private onlyModifiedInConstructor: number;

  public constructor(
    onlyModifiedInConstructor: number,
    // Private parameter properties can also be marked as readonly
    private neverModifiedParameter: string,
  ) {
    this.onlyModifiedInConstructor = onlyModifiedInConstructor;
  }
}
```

## Performance

### No Alert

----------

Disallow the use of alert, confirm, and prompt

<https://eslint.org/docs/latest/rules/no-alert>

👍 Examples of correct code

```typescript
// Example Switch Alerts
Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)

customAlert("Something happened!");

customConfirm("Are you sure?");

customPrompt("Who are you?");

function foo() {
    var alert = myCustomLib.customAlert;
    alert();
}
```

👎 Examples of incorrect code

```typescript
alert("here!");

confirm("Are you sure?");

prompt("What's your name?", "John Doe");
```

### No Loop Func

----------

Disallow function declarations that contain unsafe references inside loop statements

<https://eslint.org/docs/latest/rules/no-loop-func>

👍 Examples of correct code

```typescript
var a = function() {};

for (var i=10; i; i--) {
    a();
}
```

👎 Examples of incorrect code

```typescript
for (var i=10; i; i--) {
    (function() { return i; })();
}

while(i) {
    var a = function() { return i; };
    a();
}

do {
    function a() { return i; };
    a();
} while (i);

let foo = 0;
for (let i = 0; i < 10; ++i) {
    //Bad, `foo` is not in the loop-block's scope and `foo` is modified in/after the loop
    setTimeout(() => console.log(foo));
    foo += 1;
}

for (let i = 0; i < 10; ++i) {
    //Bad, `foo` is not in the loop-block's scope and `foo` is modified in/after the loop
    setTimeout(() => console.log(foo));
}
foo = 100;
```

## Errors

### Construtor Super Invalid

----------

Verifies calls of super() in constructors.

<https://eslint.org/docs/latest/rules/constructor-super>

👍 Examples of correct code

```typescript
class A {
    constructor() { }
}

class A extends B {
    constructor() {
        super();
    }
}
```

👎 Examples of incorrect code

```typescript
class A {
    constructor() {
        super();  // This is a SyntaxError.
    }
}

class A extends B {
    constructor() { }  // Would throw a ReferenceError.
}

// Classes which inherits from a non constructor are always problems.
class A extends null {
    constructor() {
        super();  // Would throw a TypeError.
    }
}

class A extends null {
    constructor() { }  // Would throw a ReferenceError.
}
```

### Getter Return

----------

Enforces that a return statement is present in property getters.

<https://eslint.org/docs/latest/rules/getter-return>

👍 Examples of correct code

```typescript
p = {
    get name(){
        return "nicholas";
    }
};

Object.defineProperty(p, "age", {
    get: function (){
        return 18;
    }
});

class P{
    get name(){
        return "nicholas";
    }
}
```

👎 Examples of incorrect code

```typescript
p = {
    get name(){
        // no returns.
    }
};

Object.defineProperty(p, "age", {
    get: function (){
        // no returns.
    }
});

class P{
    get name(){
        // no returns.
    }
}
```

### No Class Assign

----------

Disallows modifying variables of class declarations.

<https://eslint.org/docs/latest/rules/no-class-assign>

👍 Examples of correct code

```typescript
let A = class {
    b() {
        A = 0; // A is a variable.
    }
}

// OR

class A {
    b(A) {
        A = 0; // A is a parameter.
    }
}
```

👎 Examples of incorrect code

```typescript
class A { }
A = 0;

// OR

A = 0;
class A { }

// OR

class A {
    b() {
        A = 0;
    }
}

// OR

let A = class A {
    b() {
        A = 0;
        // `let A` is shadowed by the class name.
    }
}
```

### No Compare Neg Zero

----------

Disallows comparing against -0.

<https://eslint.org/docs/latest/rules/no-compare-neg-zero>

👍 Examples of correct code

```typescript
if (x === 0) {
    // doSomething()...
}
```

👎 Examples of incorrect code

```typescript
if (x === -0) {
    // doSomething()...
}
```

### No Const Assign

----------

Disallow reassigning const variables

<https://eslint.org/docs/latest/rules/no-const-assign>

👍 Examples of correct code

```typescript
const a = 0;
console.log(a);

// or

let a = 0;
a = 1;

// or

// `a` is re-defined (not modified) on each loop step.
for (const a in [ 1, 2, 3 ]) {
    console.log(a);
}
```

👎 Examples of incorrect code

```typescript
const a = 0;
a = 1;

// or

const a = 0;
a += 1;

// or

const a = 0;
++a;
```

### No Dupe Class Members

----------

Disallow duplicate class members

<https://eslint.org/docs/latest/rules/no-dupe-class-members>

👍 Examples of correct code

```typescript
class Foo {
  bar() { }
  qux() { }
}

class Foo {
  get bar() { }
  set bar(value) { }
}

class Foo {
  bar;
  qux;
}

class Foo {
  bar;
  qux() { }
}

class Foo {
  static bar() { }
  bar() { }
}
```

👎 Examples of incorrect code

```typescript
class Foo {
  bar() { }
  bar() { }
}

class Foo {
  bar() { }
  get bar() { }
}

class Foo {
  bar;
  bar;
}

class Foo {
  bar;
  bar() { }
}

class Foo {
  static bar() { }
  static bar() { }
}
```

### No Dupe Keys

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

### No Dupe Args

----------

Disallow duplicate arguments in function definitions

<https://eslint.org/docs/latest/rules/no-dupe-args#rule-details>

👍 Examples of correct code

```typescript
function foo(a, b, c) {
    console.log(a, b, c);
}

var bar = function (a, b, c) {
    console.log(a, b, c);
};
```

👎 Examples of incorrect code

```typescript
function foo(a, b, a) {
    console.log("value of the second a:", a);
}

var bar = function (a, b, a) {
    console.log("value of the second a:", a);
};
```

### No Unsafe Finally

----------

Disallow control flow statements in finally blocks

<https://eslint.org/docs/latest/rules/no-unsafe-finally>

👍 Examples of correct code

```typescript
let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        console.log("hola!");
    }
};

let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        let a = function() {
            return "hola!";
        }
    }
};

let foo = function(a) {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        switch(a) {
            case 1: {
                console.log("hola!")
                break;
            }
        }
    }
};
```

👎 Examples of incorrect code

```typescript
let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        return 3;
    }
};

let foo = function() {
    try {
        return 1;
    } catch(err) {
        return 2;
    } finally {
        throw new Error;
    }
};
```

### No Import Assign

----------

Disallow control flow statements in finally blocks

<https://eslint.org/docs/latest/rules/no-unsafe-finally>

👍 Examples of correct code

```typescript
import mod, { named } from "./mod.mjs"
import * as mod_ns from "./mod.mjs"

mod.prop = 1
named.prop = 2
mod_ns.named.prop = 3

// Known Limitation
function test(obj) {
    obj.named = 4 // Not errored because 'obj' is not namespace objects.
}
test(mod_ns) // Not errored because it doesn't know that 'test' updates the member of the argument.
```

👎 Examples of incorrect code

```typescript
import mod, { named } from "./mod.mjs"
import * as mod_ns from "./mod.mjs"

mod = 1          // ERROR: 'mod' is readonly.
named = 2        // ERROR: 'named' is readonly.
mod_ns.named = 3 // ERROR: The members of 'mod_ns' are readonly.
mod_ns = {}      // ERROR: 'mod_ns' is readonly.
// Can't extend 'mod_ns'
Object.assign(mod_ns, { foo: "foo" }) // ERROR: The members of 'mod_ns' are readonly.
```

### No Self Import

----------

Forbid a module from importing itself.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md>

👍 Examples of correct code

```typescript
// foo.js
import bar from './bar';

const bar = require('./bar');
```

👎 Examples of incorrect code

```typescript
// foo.js
import foo from './foo';
const foo = require('./foo');

// index.js
import index from '.';
const index = require('.');
```

### Export Name

----------

Reports funny business with exports, like repeated exports of names or defaults.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/export.md>

👍 Examples of correct code

```typescript
// foo.js
export default class MyClass { /*...*/ } // Multiple default exports.

function makeFunction() { return new MyClass(...arguments) }

export default makeFunction // Multiple default exports.
```

👎 Examples of incorrect code

```typescript
export default class MyClass { /*...*/ } // Multiple default exports.

function makeClass() { return new MyClass(...arguments) }

export default makeClass // Multiple default exports.

// OR

export const foo = function () { /*...*/ } // Multiple exports of name 'foo'.

function bar() { /*...*/ }
export { bar as foo } // Multiple exports of name 'foo'.
```

### Useless Loop

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

### No Loss Of Precision

----------

Disallow literal numbers that lose precision

<https://eslint.org/docs/latest/rules/no-loss-of-precision>

👍 Examples of correct code

```typescript
const x = 12345
const x = 123.456
const x = 123e34
const x = 12300000000000000000000000
const x = 0x1FFFFFFFFFFFFF
const x = 9007199254740991
const x = 9007_1992547409_91
```

👎 Examples of incorrect code

```typescript
const x = 9007199254740993
const x = 5123000000000000000000000000001
const x = 1230000000000000000000000.0
const x = .1230000000000000000000000
const x = 0X20000000000001
const x = 0X2_000000000_0001;
```

### Import Default Not Fount

----------

If a default import is requested, report if there is no default export in the imported module.

<https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md>

👍 Examples of correct code

```typescript
// ./foo.js
export class Example {}
```

```typescript
import foo from './foo'

// assuming 'node_modules' are ignored (true by default)
import someModule from 'some-module'
```

👎 Examples of incorrect code

```typescript
import bar from './bar' // no default export found in ./bar
import baz from './baz' // no default export found in ./baz
```

### Import Namespace

### No Import Resolve

----------

Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node require.resolve behavior.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md>

👍 Examples of correct code

```typescript
import x from './bar' // file found
```

👎 Examples of incorrect code

```typescript
import x from './foo' // File not found
```

### Import Not Found

----------

Verifies that all named imports are part of the set of named exports in the referenced module.

<https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/named.md>

👍 Examples of correct code

```typescript
// ./foo.js
export const foo = "I'm so foo"

// -------------------

// ./bar.js
import { foo } from './foo';

// ES7 proposal
export { foo as bar } from './foo';

// node_modules without jsnext:main are not analyzed by default
// (import/ignore setting)
import { SomeNonsenseThatDoesntExist } from 'react';
```

👎 Examples of incorrect code

```typescript
// ./baz.js
import { notFoo } from './foo';

// ES7 proposal
export { notFoo as defNotBar } from './foo';

// will follow 'jsnext:main', if available
import { dontCreateStore } from 'redux';
```

### JS Type

----------

The types of the arguments to built-in functions are specified in the JavaScript language specifications

<https://sonarsource.github.io/rspec/#/rspec/S3782/javascript>

👍 Examples of correct code

```typescript
const isTooSmall = Math.abs(x) < 0.0042;
```

👎 Examples of incorrect code

```typescript
const isTooSmall = Math.abs(x < 0.0042); // Type require number no boolean
```

### No Invalid This

----------

Under the strict mode, this keywords outside of classes or class-like objects might be undefined and raise a TypeError.

<https://eslint.org/docs/latest/rules/no-invalid-this#rule-details>
<https://typescript-eslint.io/rules/no-invalid-this>

👍 Examples of correct code

```typescript
"use strict";

this.a = 0;
baz(() => this);

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

var obj = {
    foo() {
        // OK, this is in a method (this function is on object literal).
        this.a = 0;
    }
};

var obj = {
    get foo() {
        // OK, this is in a method (this function is on object literal).
        return this.a;
    }
};

var obj = Object.create(null, {
    foo: {value: function foo() {
        // OK, this is in a method (this function is on object literal).
        this.a = 0;
    }}
});

Object.defineProperty(obj, "foo", {
    value: function foo() {
        // OK, this is in a method (this function is on object literal).
        this.a = 0;
    }
});

Object.defineProperties(obj, {
    foo: {value: function foo() {
        // OK, this is in a method (this function is on object literal).
        this.a = 0;
    }}
});

function Foo() {
    this.foo = function foo() {
        // OK, this is in a method (this function assigns to a property).
        this.a = 0;
        baz(() => this);
    };
}

obj.foo = function foo() {
    // OK, this is in a method (this function assigns to a property).
    this.a = 0;
};

Foo.prototype.foo = function foo() {
    // OK, this is in a method (this function assigns to a property).
    this.a = 0;
};

class Foo {

    // OK, this is in a class field initializer.
    a = this.b;

    // OK, static initializers also have valid this.
    static a = this.b;

    foo() {
        // OK, this is in a method.
        this.a = 0;
        baz(() => this);
    }

    static foo() {
        // OK, this is in a method (static methods also have valid this).
        this.a = 0;
        baz(() => this);
    }

    static {
        // OK, static blocks also have valid this.
        this.a = 0;
        baz(() => this);
    }
}

var foo = (function foo() {
    // OK, the `bind` method of this function is called directly.
    this.a = 0;
}).bind(obj);

foo.forEach(function() {
    // OK, `thisArg` of `.forEach()` is given.
    this.a = 0;
    baz(() => this);
}, thisArg);

/** @this Foo */
function foo() {
    // OK, this function has a `@this` tag in its JSDoc comment.
    this.a = 0;
}
```

👎 Examples of incorrect code

```typescript
"use strict";

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

foo(function() {
    this.a = 0;
    baz(() => this);
});

var obj = {
    aaa: function() {
        return function foo() {
            // There is in a method `aaa`, but `foo` is not a method.
            this.a = 0;
            baz(() => this);
        };
    }
};

foo.forEach(function() {
    this.a = 0;
    baz(() => this);
});
```

### No This Before Super

----------

In the constructor of derived classes, if this/super are used before super() calls, it raises a reference error.

<https://eslint.org/docs/latest/rules/no-this-before-super>

👍 Examples of correct code

```typescript
class A {
    constructor() {
        this.a = 0; // OK, this class doesn't have an `extends` clause.
    }
}

class A extends B {
    constructor() {
        super();
        this.a = 0; // OK, this is after `super()`.
    }
}

class A extends B {
    foo() {
        this.a = 0; // OK. this is not in a constructor.
    }
}
```

👎 Examples of incorrect code

```typescript
class A extends B {
    constructor() {
        this.a = 0;
        super();
    }
}

class A extends B {
    constructor() {
        this.foo();
        super();
    }
}

class A extends B {
    constructor() {
        super.foo();
        super();
    }
}

class A extends B {
    constructor() {
        super(this.foo());
    }
}
```

### No Obj Calls

----------

Disallow calling global object properties as functions

<https://eslint.org/docs/latest/rules/no-obj-calls>

👍 Examples of correct code

```typescript
function area(r) {
    return Math.PI * r * r;
}

var object = JSON.parse("{}");

var value = Reflect.get({ x: 1, y: 2 }, "x");

var first = Atomics.load(foo, 0);

var segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
```

👎 Examples of incorrect code

```typescript
var math = Math();

var newMath = new Math();

var json = JSON();

var newJSON = new JSON();

var reflect = Reflect();

var newReflect = new Reflect();

var atomics = Atomics();

var newAtomics = new Atomics();

var intl = Intl();

var newIntl = new Intl();
```

### No Empty Pattern

----------

Disallow empty destructuring patterns

<https://eslint.org/docs/latest/rules/no-empty-pattern>

👍 Examples of correct code

```typescript

```

👎 Examples of incorrect code

```typescript
var {} = foo;
var [] = foo;
var {a: {}} = foo;
var {a: []} = foo;
function foo({}) {}
function foo([]) {}
function foo({a: {}}) {}
function foo({a: []}) {}
```

### No Useless Computed Key

----------

Disallow unnecessary computed property keys in objects and classes

<https://eslint.org/docs/latest/rules/no-useless-computed-key>

👍 Examples of correct code

```typescript
var c = { 'a': 0 };
var c = { 0: 0 };
var a = { x() {} };
var c = { a: 0 };
var c = { '0+1,234': 0 };
```

👎 Examples of incorrect code

```typescript
var a = { ['0']: 0 };
var a = { ['0+1,234']: 0 };
var a = { [0]: 0 };
var a = { ['x']: 0 };
var a = { ['x']() {} };
```


### Useless Call Code

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

### Useless Catch Code

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

### Useless Expression Code

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

### Useless Return Code

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

### Useless Construct Code

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

### No Use Before Define

----------

In JavaScript, prior to ES6, variable and function declarations are hoisted to the top of a scope,
so it’s possible to use identifiers before their formal declarations in code.

<https://eslint.org/docs/latest/rules/no-use-before-define>

👍 Examples of correct code

```typescript
var a;
a = 10;
alert(a);

function f() {}
f(1);

var b = 1;
function g() {
    return b;
}

{
    let c;
    c++;
}

{
    class C {
        static x = C;
    }
}

{
    const C = class C {
        static x = C;
    }
}

{
    const C = class {
        x = C;
    }
}

{
    const C = class C {
        static {
            C.x = "foo";
        }
    }
}

const foo = 1;
export { foo };
```

👎 Examples of incorrect code

```typescript
alert(a);
var a = 10;

f();
function f() {}

function g() {
    return b;
}
var b = 1;

{
    alert(c);
    let c = 1;
}

{
    class C extends C {}
}

{
    class C {
        static x = "foo";
        [C.x]() {}
    }
}

{
    const C = class {
        static x = C;
    }
}

{
    const C = class {
        static {
            C.x = "foo";
        }
    }
}

export { foo };
const foo = 1;
```

### No Base To String

----------

JavaScript will call toString() on an object when it is converted to a string,
such as when + adding to a string or in ${} template literals.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-base-to-string.md>

👍 Examples of correct code

```typescript
// These types all have useful .toString()s
'Text' + true;
`Value: ${123}`;
`Arrays too: ${[1, 2, 3]}`;
(() => {}).toString();

// Defining a custom .toString class is considered acceptable
class CustomToString {
  toString() {
    return 'Hello, world!';
  }
}
`Value: ${new CustomToString()}`;

const literalWithToString = {
  toString: () => 'Hello, world!',
};

`Value: ${literalWithToString}`;
```

👎 Examples of incorrect code

```typescript
// Passing an object or class instance to string concatenation:
'' + {};

class MyClass {}
const value = new MyClass();
value + '';

// Interpolation and manual .toString() calls too:
`Value: ${value}`;
({}.toString());
```

## Possible Errors

### For Direction

----------

Enforces for loop update clause moving the counter in the right direction.

<https://eslint.org/docs/latest/rules/for-direction>

👍 Examples of correct code

```typescript
for (var i = 0; i < 10; i++) {
}
```

👎 Examples of incorrect code

```typescript
for (var i = 0; i < 10; i--) {
}

for (var i = 10; i >= 0; i++) {
}

for (var i = 0; i > 10; i++) {
}
```

### No Extra Bind

----------

Disallow unnecessary calls to .bind()

<https://eslint.org/docs/latest/rules/no-extra-bind>

👍 Examples of correct code

```typescript
var x = function () {
    this.foo();
}.bind(bar);

var x = function (a) {
    return a + 1;
}.bind(foo, bar);
```

👎 Examples of incorrect code

```typescript
var x = function () {
    foo();
}.bind(bar);

var x = (() => {
    foo();
}).bind(bar);

var x = (() => {
    this.foo();
}).bind(bar);

var x = function () {
    (function () {
      this.foo();
    }());
}.bind(bar);

var x = function () {
    function foo() {
      this.bar();
    }
}.bind(baz);
```

### No Template Curly In String

----------

Disallow template literal placeholder syntax in regular strings

<https://eslint.org/docs/latest/rules/no-template-curly-in-string>

👍 Examples of correct code

```typescript
`Hello ${name}!`;
`Time: ${12 * 60 * 60 * 1000}`;

templateFunction`Hello ${name}`;
```

👎 Examples of incorrect code

```typescript
"Hello ${name}!";
'Hello ${name}!';
"Time: ${12 * 60 * 60 * 1000}";
```

### No Dupe Else If

----------

Disallow duplicate conditions in if-else-if chains

<https://eslint.org/docs/latest/rules/no-dupe-else-if>

👍 Examples of correct code

```typescript
if (isSomething(x)) {
    foo();
} else if (isSomethingElse(x)) {
    bar();
}

if (a) {
    foo();
} else if (b) {
    bar();
} else if (c && d) {
    baz();
} else if (c && e) {
    quux();
} else {
    quuux();
}

if (n === 1) {
    foo();
} else if (n === 2) {
    bar();
} else if (n === 3) {
    baz();
} else if (n === 4) {
    quux();
} else if (n === 5) {
    quuux();
}
```

👎 Examples of incorrect code

```typescript
if (isSomething(x)) {
    foo();
} else if (isSomething(x)) {
    bar();
}

if (a) {
    foo();
} else if (b) {
    bar();
} else if (c && d) {
    baz();
} else if (c && d) {
    quux();
} else {
    quuux();
}

if (n === 1) {
    foo();
} else if (n === 2) {
    bar();
} else if (n === 3) {
    baz();
} else if (n === 2) {
    quux();
} else if (n === 5) {
    quuux();
}
```

### No Unused Private Class Members

----------

Disallow unused private class members

<https://eslint.org/docs/latest/rules/no-unused-private-class-members>

👍 Examples of correct code

```typescript
class Foo {
    #usedMember = 42;
    method() {
        return this.#usedMember;
    }
}

class Foo {
    #usedMethod() {
        return 42;
    }
    anotherMethod() {
        return this.#usedMethod();
    }
}

class Foo {
    get #usedAccessor() {}
    set #usedAccessor(value) {}

    method() {
        this.#usedAccessor = 42;
    }
}
```

👎 Examples of incorrect code

```typescript
class Foo {
    #unusedMember = 5;
}

class Foo {
    #usedOnlyInWrite = 5;
    method() {
        this.#usedOnlyInWrite = 42;
    }
}

class Foo {
    #usedOnlyToUpdateItself = 5;
    method() {
        this.#usedOnlyToUpdateItself++;
    }
}

class Foo {
    #unusedMethod() {}
}

class Foo {
    get #unusedAccessor() {}
    set #unusedAccessor(value) {}
}
```

### No Constant Binary Expression

----------

Disallow expressions where the operation doesn't affect the value

<https://eslint.org/docs/latest/rules/no-constant-binary-expression>

👍 Examples of correct code

```typescript
const value1 = x == null;

const value2 = (condition ? x : {}) || DEFAULT;

const value3 = !(foo == null);

const value4 = Boolean(foo) === true;

const objIsEmpty = Object.keys(someObj).length === 0;

const arrIsEmpty = someArr.length === 0;
```

👎 Examples of incorrect code

```typescript
const value1 = +x == null;

const value2 = condition ? x : {} || DEFAULT;

const value3 = !foo == null;

const value4 = new Boolean(foo) === true;

const objIsEmpty = someObj === {};

const arrIsEmpty = someArr === [];
```

### No Unneeded Ternary

----------

Disallow ternary operators when simpler alternatives exist

<https://eslint.org/docs/latest/rules/no-unneeded-ternary>

👍 Examples of correct code

```typescript
var a = x === 2 ? "Yes" : "No";

var a = x !== false;

var a = x ? "Yes" : "No";

var a = x ? y : x;

f(x || 1);

```

👎 Examples of incorrect code

```typescript
var a = x === 2 ? true : false;

var a = x ? true : false;

f(x ? x : 1);
```

### No Unsafe Negation

----------

Disallow negating the left operand of relational operators

<https://eslint.org/docs/latest/rules/no-unsafe-negation>

👍 Examples of correct code

```typescript
if (!(key in object)) {
    // key is not in object
}

if (!(obj instanceof Ctor)) {
    // obj is not an instance of Ctor
}
```

👎 Examples of incorrect code

```typescript
if (!key in object) {
    // operator precedence makes it equivalent to (!key) in object
    // and type conversion makes it equivalent to (key ? "false" : "true") in object
}

if (!obj instanceof Ctor) {
    // operator precedence makes it equivalent to (!obj) instanceof Ctor
    // and it equivalent to always false since boolean values are not objects.
}
```

### Text Encoding Identifier Case

----------

Enforce consistent case for text encoding identifiers

<https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md>

👍 Examples of correct code

```typescript
await fs.readFile(file, 'utf8');
await fs.readFile(file, 'ascii');
const string = buffer.toString('utf8');
```

👎 Examples of incorrect code

```typescript
await fs.readFile(file, 'UTF-8');
await fs.readFile(file, 'ASCII');
const string = buffer.toString('utf-8');
```

### Arguments Order

----------

Parameters should be passed in the correct order

<https://sonarsource.github.io/rspec/#/rspec/S2234/javascript>

👍 Examples of correct code

```typescript
function divide(divisor, dividend) {
  return divisor/dividend;
}

function doTheThing() {
  var divisor = 15;
  var dividend = 5;

  var result = divide(divisor, dividend);
  //...
}
```

👎 Examples of incorrect code

```typescript
function divide(divisor, dividend) {
  return divisor/dividend;
}

function doTheThing() {
  var divisor = 15;
  var dividend = 5;

  var result = divide(dividend, divisor);  // Noncompliant; operation succeeds, but result is unexpected
  //...
}
```

### Assertions In Tests

----------

A test case without assertions ensures only that no exceptions are thrown. Beyond basic runnability,
it ensures nothing about the behavior of the code under test.

<https://sonarsource.github.io/rspec/#/rspec/S2699/javascript>

👍 Examples of correct code

```typescript
const expect = require('chai').expect;

describe("Has assertions", function() {
    it("tests a string", function() {
        const str = "";
        expect(str).to.be.a('string');
    });
});
```

👎 Examples of incorrect code

```typescript
const expect = require('chai').expect;

describe("No assertion", function() {
    it("doesn't test anything", function() { // Noncompliant
        const str = "";
    });
});
```

### Test Multiple Possible Assert

----------

A test case without assertions ensures only that no exceptions are thrown. Beyond basic runnability,
it ensures nothing about the behavior of the code under test.

<https://sonarsource.github.io/rspec/#/rspec/S2699/javascript>

👍 Examples of correct code

```typescript
const expect = require('chai').expect;

describe("uncertain assertions", function() {
    const throwsTypeError = () => { throw new TypeError() }

    it("uses chai 'expect'", function() {
        expect(throwsTypeError).to.throw(TypeError)
        expect({a: 42}).to.not.have.any.keys('b', 'c');
        expect({a: 21}).to.not.have.property('b');
        expect({a: 21}).to.not.have.ownPropertyDescriptor('b');
        expect([21, 42]).to.not.include(1).and.not.include(2);

        var myObj = { value: 1 }
        const incThree = () => { myObj.value += 3; };
        const decThree = () => { myObj.value -= 3; };
        const doNothing = () => {};

        expect(incThree).to.increase(myObj, 'value').by(3);
        expect(decThree).to.decrease(myObj, 'value').by(3);

        expect(decThree).to.decrease(myObj, 'value').by(3);
        expect(incThree).to.increase(myObj, 'value').by(3);

        expect(doNothing).to.not.change(myObj, 'value');

        expect(incThree).to.increase(myObj, 'value').by(3);

        let toCheck;
        // Either of the following is valid
        expect(toCheck).to.be.a('string');
        expect(toCheck).to.be.NaN;
        expect(toCheck).to.equal(Infinity);
        expect(toCheck).to.equal(-Infinity);
    });
});
```

👎 Examples of incorrect code

```typescript
const expect = require('chai').expect;

describe("uncertain assertions", function() {
    const throwsTypeError = () => { throw new TypeError() }

    it("uses chai 'expect'", function() {
        expect(throwsTypeError).to.not.throw(ReferenceError) // Noncompliant
        expect({a: 42}).to.not.include({b: 10, c: 20});  // Noncompliant
        expect({a: 21}).to.not.have.property('b', 42); // Noncompliant
        expect({a: 21}).to.not.have.ownPropertyDescriptor('b', {   // Noncompliant
            configurable: true,
            enumerable: true,
            writable: true,
            value: 42,
        });
        expect([21, 42]).to.not.have.members([1, 2]); // Noncompliant

        var myObj = { value: 1 }
        const incThree = () => { myObj.value += 3; };
        const decThree = () => { myObj.value -= 3; };
        const doNothing = () => {};

        expect(incThree).to.change(myObj, 'value').by(3); // Noncompliant
        expect(decThree).to.change(myObj, 'value').by(3); // Noncompliant

        expect(decThree).to.not.increase(myObj, 'value'); // Noncompliant
        expect(incThree).to.not.decrease(myObj, 'value'); // Noncompliant

        expect(doNothing).to.not.increase(myObj, 'value'); // Noncompliant
        expect(doNothing).to.not.decrease(myObj, 'value'); // Noncompliant

        expect(incThree).to.increase(myObj, 'value').but.not.by(1); // Noncompliant

        let toCheck;
        expect(toCheck).to.not.be.finite; // Noncompliant
    });
});
```

### No Disable Timeout

----------

Timeout should be disabled by setting it to "0".

<https://sonarsource.github.io/rspec/#/rspec/S6080/javascript>

👍 Examples of correct code

```typescript
describe("testing this.timeout", function() {
  it("doesn't disable the timeout", function(done) {
    this.timeout(1000);
  });
});
```

👎 Examples of incorrect code

```typescript
describe("testing this.timeout", function() {
  it("unexpectedly disables the timeout", function(done) {
    this.timeout(2147483648); // Noncompliant
  });
});

describe("testing this.timeout", function() {
  it("disables the timeout as expected", function(done) {
    this.timeout(0);
  });
});
```

### No Empty Static Block

----------

Empty static blocks, while not technically errors, usually occur due to refactoring that wasn’t completed.
They can cause confusion when reading code.

<https://eslint.org/docs/latest/rules/no-empty-static-block>

👍 Examples of correct code

```typescript
class Foo {
    static {
        bar();
    }
}

class Foo {
    static {
        // comment
    }
}
```

👎 Examples of incorrect code

```typescript
class Foo {
    static {}
}
```

### No Fallthrough

----------

The switch statement in JavaScript is one of the more error-prone constructs of the language
thanks in part to the ability to “fall through” from one case to the next. For example:

Use `// falls through` comments to run multiple cases

<https://eslint.org/docs/latest/rules/no-fallthrough>

👍 Examples of correct code

```typescript
switch(foo) {
    case 1:
        doSomething();
        break;

    case 2:
        doSomething();
}

function bar(foo) {
    switch(foo) {
        case 1:
            doSomething();
            return;

        case 2:
            doSomething();
    }
}

switch(foo) {
    case 1:
        doSomething();
        throw new Error("Boo!");

    case 2:
        doSomething();
}

switch(foo) {
    case 1:
    case 2:
        doSomething();
}

switch(foo) {
    case 1:
        doSomething();
        // falls through

    case 2:
        doSomething();
}

switch(foo) {
    case 1: {
        doSomething();
        // falls through
    }

    case 2: {
        doSomethingElse();
    }
}
```

👎 Examples of incorrect code

```typescript
switch(foo) {
    case 1:
        doSomething();

    case 2:
        doSomething();
}
```

### No Octal

----------

Octal literals are numerals that begin with a leading zero, such as:

<https://eslint.org/docs/latest/rules/no-octal>

👍 Examples of correct code

```typescript
var test = 71 + 5; // 76
```

👎 Examples of incorrect code

```typescript
var num = 071; // 57
var result = 5 + 07;

var test = 071 + 5; // 62
```

### Octal Scape

----------

As of the ECMAScript 5 specification, octal escape sequences in string literals
are deprecated and should not be used. Unicode escape sequences should be used instead.

<https://eslint.org/docs/latest/rules/no-octal-escape>

👍 Examples of correct code

```typescript
var foo = "Copyright \u00A9";   // unicode

var foo = "Copyright \xA9";     // hexadecimal
```

👎 Examples of incorrect code

```typescript
var foo = "Copyright \251";
```

### No Global Assign

----------

JavaScript environments contain a number of built-in global variables, such as window in browsers
and process in Node.js. In almost all cases, you don’t want to assign a value to these global
variables as doing so could result in losing access to important functionality.
For example, you probably don’t want to do this in browser code:

<https://eslint.org/docs/latest/rules/no-global-assign>

👍 Examples of correct code

```typescript
a = 1
const b = 1
b = 2
```

👎 Examples of incorrect code

```typescript
Object = null
undefined = 1
window = {}
length = 1
top = 1
```

### No Case Declarations

----------

This rule disallows lexical declarations (let, const, function and class) in case/default clauses.
The reason is that the lexical declaration is visible in the entire switch block but it only gets
initialized when it is assigned, which will only happen if the case where it is defined is reached.

<https://eslint.org/docs/latest/rules/no-case-declarations>

👍 Examples of correct code

```typescript
// Declarations outside switch-statements are valid
const a = 0;

switch (foo) {
    // The following case clauses are wrapped into blocks using brackets
    case 1: {
        let x = 1;
        break;
    }
    case 2: {
        const y = 2;
        break;
    }
    case 3: {
        function f() {}
        break;
    }
    case 4:
        // Declarations using var without brackets are valid due to function-scope hoisting
        var z = 4;
        break;
    default: {
        class C {}
    }
}
```

👎 Examples of incorrect code

```typescript
switch (foo) {
    case 1:
        let x = 1;
        break;
    case 2:
        const y = 2;
        break;
    case 3:
        function f() {}
        break;
    default:
        class C {}
}
```

### No Confusing Void Expression

----------

void in TypeScript refers to a function return that is meant to be ignored. Attempting to use a void-typed value,
such as storing the result of a called function in a variable, is often a sign of a programmer error.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md>

👍 Examples of correct code

```typescript
// just a regular void function in a statement position
alert('Hello, world!');

// this function returns a boolean value so it's ok
const response = confirm('Are you sure?');
console.log(confirm('Are you sure?'));

// now it's obvious that `postMessage` doesn't return any response
promise.then(value => {
  window.postMessage(value);
});

// now it's explicit that we want to log the error and return early
function doSomething() {
  if (!somethingToDo) {
    console.error('Nothing to do!');
    return;
  }

  console.log('Doing a thing...');
}

// using logical expressions for their side effects is fine
cond && console.log('true');
cond || console.error('false');
cond ? console.log('true') : console.error('false');
```

👎 Examples of incorrect code

```typescript
// somebody forgot that `alert` doesn't return anything
const response = alert('Are you sure?');
console.log(alert('Are you sure?'));

// it's not obvious whether the chained promise will contain the response (fixable)
promise.then(value => window.postMessage(value));

// it looks like we are returning the result of `console.error` (fixable)
function doSomething() {
  if (!somethingToDo) {
    return console.error('Nothing to do!');
  }

  console.log('Doing a thing...');
}
```

### No Duplicate Enum Values

----------

Although TypeScript supports duplicate enum member values, people usually expect members to have unique values within
the same enum. Duplicate values can lead to bugs that are hard to track down.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicate-enum-values.md>

👍 Examples of correct code

```typescript
enum E {
  A = 0,
  B = 1,
}
enum E {
  A = 'A',
  B = 'B',
}
```

👎 Examples of incorrect code

```typescript
enum E {
  A = 0,
  B = 0,
}
enum E {
  A = 'A',
  B = 'A',
}
```

### No Floating Promises

----------

A "floating" Promise is one that is created without any code set up to handle any errors it might throw.
Floating Promises can cause several issues, such as improperly sequenced operations, ignored Promise rejections,
and more.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.md>

👍 Examples of correct code

```typescript
const promise = new Promise((resolve, reject) => resolve('value'));
await promise;

async function returnsPromise() {
  return 'value';
}
returnsPromise()
    .then(() => {})
    .catch(() => {});

Promise.reject('value').catch(() => {});

Promise.reject('value').finally(() => {});
```

👎 Examples of incorrect code

```typescript
const promise = new Promise((resolve, reject) => resolve('value'));
promise;

async function returnsPromise() {
  return 'value';
}

returnsPromise().then(() => {});

Promise.reject('value').catch();

Promise.reject('value').finally();
```

### No Invalid Void Type

----------

void in TypeScript refers to a function return that is meant to be ignored. Attempting to use a void type outside of
a return type or generic type argument is often a sign of programmer error.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-invalid-void-type.md>

👍 Examples of correct code

```typescript
type NoOp = () => void;

function noop(): void {}

let trulyUndefined = void 0;

async function promiseMeSomething(): Promise<void> {}

type stillVoid = void | never;
```

👎 Examples of incorrect code

```typescript
type PossibleValues = string | number | void;
type MorePossibleValues = string | ((number & any) | (string | void));

function logSomething(thing: void) {}
function printArg<T = void>(arg: T) {}

logAndReturn<void>(undefined);

interface Interface {
  lambda: () => void;
  prop: void;
}

class MyClass {
  private readonly propName: void;
}
```

### No Non Null Asserted Nullish Coalescing

----------

The ?? nullish coalescing runtime operator allows providing a default value when dealing with null or undefined.
Using a ! non-null assertion type operator in the left operand of a nullish coalescing operator is redundant,
and likely a sign of programmer error or confusion over the two operators.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md>

👍 Examples of correct code

```typescript
foo ?? bar;
foo ?? bar!;
foo!.bazz ?? bar;
foo!.bazz ?? bar!;
foo() ?? bar;

// This is considered correct code because there's no way for the user to satisfy it.
let x: string;
x! ?? '';
```

👎 Examples of incorrect code

```typescript
foo! ?? bar;
foo.bazz! ?? bar;
foo!.bazz! ?? bar;
foo()! ?? bar;

let x!: string;
x! ?? '';

let x: string;
x = foo();
x! ?? '';
```

### No Non Null Asserted Optional Chain

----------

?. optional chain expressions provide undefined if an object is null or undefined.
Using a ! non-null assertion to assert the result of an ?. optional chain expression is non-nullable is likely wrong.

Most of the time, either the object was not nullable and did not need the ?. for its property lookup,
or the ! is incorrect and introducing a type safety hole.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md>

👍 Examples of correct code

```typescript
foo?.bar;
foo?.bar();

foo.bar!;
```

👎 Examples of incorrect code

```typescript
foo?.bar!;
foo?.bar()!;
```

## No Unsafe Declaration Merging

----------

TypeScript's "declaration merging" supports merging separate declarations with the same name.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-declaration-merging.md>

👍 Examples of correct code

```typescript
interface Foo {}
class Bar implements Foo {}

namespace Baz {}
namespace Baz {}
enum Baz {}

namespace Qux {}
function Qux() {}
```

👎 Examples of incorrect code

```typescript
interface Foo {}

class Foo {}
```

## No Useless Empty Export

----------

An empty export {} statement is sometimes useful in TypeScript code to turn a file that would otherwise be a script
file into a module file.

<https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-useless-empty-export.md>

👍 Examples of correct code

```typescript
export const value = 'Hello, world!';
export {};
// or
import 'some-other-module';
export {};
```

👎 Examples of incorrect code

```typescript
export const value = 'Hello, world!';
// or
import 'some-other-module';
```

## Yaml Json

add suport yaml and json files
