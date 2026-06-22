# JavaScript

A hands-on learning repo for JavaScript fundamentals. Each topic I learn lives in its
own folder with small, runnable `.js` files **and its own README** explaining the
concepts. This root README holds the shared fundamentals and a consolidated reference;
click any topic in [Repo structure](#repo-structure) to read its details.

---

## What is JavaScript?

**JavaScript (JS)** is a high-level, **dynamically typed**, interpreted programming
language. It runs in two main places:

- **The browser** — where the global object is `window` and JS manipulates the page.
- **Node.js** — a runtime that runs JS outside the browser (servers, scripts, tooling).
  Here the global object is different and `this` at the top level is an empty object `{}`.

All the examples in this repo are plain `.js` files meant to be run with **Node.js**.

### Dynamically typed

You don't declare a variable's type; the type is decided at runtime and a variable can
hold different types over its lifetime:

```js
let x = 10;      // number
x = "Hello";     // string
x = true;        // boolean
```

This is flexible but can cause subtle runtime bugs (see **type coercion** below).
Statically typed languages (Java, C++, TypeScript) check types at compile time instead.

---

## Core concepts

### Data types

JS values are split into two groups based on how they are stored in memory:

| Group | Stored as | Types |
|-------|-----------|-------|
| **Primitive** (call by value) | The value itself is copied | `String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt` |
| **Non-primitive / reference** (call by reference) | A reference (address) is copied | `Object`, `Array`, `Function` |

- **Primitives** are copied by *value* — copying one variable into another duplicates the value.
- **Reference types** are copied by *reference* — two variables can point to the **same**
  underlying object, so changing one changes the other.

### Type coercion

When operators mix types, JS converts ("coerces") values automatically. The `+` operator
is special: if either side is a string, it does string **concatenation**, otherwise it adds.

```js
"5" + 3   // "53"  (number 3 becomes a string)
5 + "3"   // "53"
```

You can also convert explicitly with `Number()`, `String()`, and `Boolean()`.

### Truthy & falsy

Every value is either "truthy" or "falsy" when used in a boolean context (like `if`).

- **Falsy:** `false`, `0`, `-0`, `0n` (BigInt zero), `""` (empty string), `null`,
  `undefined`, `NaN`.
- **Truthy:** everything else — including `"0"`, `"false"`, `" "`, `[]`, `{}`, and functions.

### Scope & hoisting

- **Global scope** — declared outside any block/function.
- **Block scope** — `let` / `const` only exist inside the `{ }` they're declared in.
  `var` ignores block scope (function-scoped), which is why it leaks out of `if` blocks.
- **Hoisting** — `function` declarations are available before their line in the file;
  `let`/`const` and function **expressions** are not.

### Execution context

When JS runs a file it creates a **Global Execution Context**, then each function call
creates its own. Each context runs in two phases: a **memory phase** (variables set to
`undefined`, functions stored fully) and an **execution phase** (actual values assigned).
The call stack runs these contexts **LIFO** (last in, first out).

---

## Repo structure

Each folder is one self-contained topic with its own README. Click a topic below to read
its full explanation.

| Topic | What it demonstrates |
|-------|----------------------|
| [Basics — values & built-ins](./basics) | Data types, type conversion/coercion, strings, numbers & `Math`, dates |
| [Functions, scope & objects](./functions-and-objects) | Functions, arrow functions, IIFE, scope, execution context, arrays, objects |
| [Control flow](./control-flow) | `if`/`switch`, truthy/falsy, nullish coalescing `??`, ternary operator |
| [Iterations](./iterations) | `for`, `for...of`, `for...in`, `while`/`do...while`, `forEach`, `map`/`filter`/`reduce` |

### Running an example

These are plain Node.js scripts — no dependencies or build step. Run any file with:

```bash
node basics/strings.js
node iterations/loops_03.js
```

---

## JavaScript reference

A running cheat-sheet of the methods and operators used across this repo.

### String methods

| Method | What it does | Topic |
|--------|--------------|-------|
| `str[i]` / `str.charAt(i)` | Character at an index | `basics` |
| `str.length` | Number of characters | `basics` |
| `str.toUpperCase()` / `toLowerCase()` | Change case | `basics` |
| `str.indexOf(x)` | First index of `x` (`-1` if absent) | `basics` |
| `str.substring(a, b)` | Substring between two indices | `basics` |
| `str.slice(a, b)` | Substring; supports negative indices | `basics` |
| `str.trim()` | Remove surrounding whitespace | `basics` |
| `str.replace(a, b)` / `replaceAll(a, b)` | Replace first / all matches | `basics` |
| `str.includes(x)` | `true`/`false` if `x` is present | `basics` |
| `str.split(sep)` | Split into an array on `sep` | `basics` |

### Number / Math

| Expression | What it does | Topic |
|------------|--------------|-------|
| `new Number(n)` | Number object wrapper | `basics` |
| `n.toString()` | Convert number to string | `basics` |
| `Math.floor(x)` | Round down to an integer | `basics` |

### Dates

| Expression | What it does | Topic |
|------------|--------------|-------|
| `new Date()` | Current date/time object | `basics` |
| `new Date("2023-01-14")` | Date from a string | `basics` |
| `d.toISOString()` / `toDateString()` / `toLocaleString()` | Formatted output | `basics` |
| `Date.now()` | Current time as a millisecond timestamp | `basics` |
| `d.getTime()` | Milliseconds since epoch for a date | `basics` |

### Conversion functions

| Function | Converts to | Notes |
|----------|-------------|-------|
| `Number(x)` | number | `"33"`→`33`, `"33asdf"`→`NaN`, `null`→`0`, `undefined`→`NaN`, `true`→`1` |
| `String(x)` | string | — |
| `Boolean(x)` | boolean | follows truthy/falsy rules |

### Array methods

| Method | What it does | Topic |
|--------|--------------|-------|
| `push` / `pop` | Add / remove at the **end** | `functions-and-objects` |
| `unshift` / `shift` | Add / remove at the **start** | `functions-and-objects` |
| `includes(x)` / `indexOf(x)` | Membership / position | `functions-and-objects` |
| `join(sep)` | Array → string | `functions-and-objects` |
| `slice(a, b)` | Copy a section (non-mutating) | `functions-and-objects` |
| `splice(a, n)` | Remove/insert in place (mutating) | `functions-and-objects` |
| `concat(arr)` | Merge arrays | `functions-and-objects` |
| `[...a, ...b]` | Spread to merge/clone | `functions-and-objects` |
| `flat(depth)` | Flatten nested arrays | `functions-and-objects` |
| `Array.isArray(x)` | Is it an array? | `functions-and-objects` |
| `Array.from(x)` / `Array.of(...)` | Build arrays | `functions-and-objects` |
| `forEach(fn)` | Run `fn` for each item (returns `undefined`) | `iterations` |
| `map(fn)` | Transform → **new** array | `iterations` |
| `filter(fn)` | Keep items passing a test → **new** array | `iterations` |
| `reduce(fn, init)` | Fold to a single value | `iterations` |

### Object methods

| Method | What it does | Topic |
|--------|--------------|-------|
| `obj.key` / `obj["key"]` | Access a property | `functions-and-objects` |
| `Object.assign(target, ...src)` | Merge objects into `target` | `functions-and-objects` |
| `{ ...a, ...b }` | Spread to merge/clone objects | `functions-and-objects` |
| `Object.keys` / `values` / `entries` | Properties as arrays | `functions-and-objects` |
| `obj.hasOwnProperty(key)` | Does the key exist? | `functions-and-objects` |
| `Object.freeze(obj)` | Make immutable | `functions-and-objects` |
| `const { x } = obj` | Destructuring | `functions-and-objects` |

### Operators & control flow

| Syntax | What it does | Topic |
|--------|--------------|-------|
| `if / else`, `switch` | Branching | `control-flow` |
| `a ?? b` | Nullish coalescing — use `b` only if `a` is `null`/`undefined` | `control-flow` |
| `cond ? a : b` | Ternary (inline if/else) | `control-flow` |
| `...rest` | Collect remaining args into an array | `functions-and-objects` |

### Loops

| Loop | Best for | Topic |
|------|----------|-------|
| `for (init; cond; step)` | Counting / index-based loops | `iterations` |
| `for (const v of iterable)` | Values of arrays, strings, Maps, Sets | `iterations` |
| `for (const k in obj)` | Keys of an object | `iterations` |
| `while` / `do...while` | Loop until a condition; `do` runs at least once | `iterations` |
| `break` / `continue` | Exit loop / skip to next iteration | `iterations` |
