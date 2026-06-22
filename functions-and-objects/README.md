# Functions, scope & objects

How code is organized and executed: functions and their modern forms, scope and the
execution model, plus the two core reference types — arrays and objects.

[← Back to main README](../README.md)

---

## Files in this folder

| File | What it covers |
|------|----------------|
| `functions.js` | Declaring functions, parameters vs arguments, `return`, rest `...` |
| `arrow.js` | Arrow functions, implicit return, `this` behavior |
| `iife.js` | Immediately Invoked Function Expressions |
| `scopes.js` | Global / block / nested scope, hoisting |
| `javascript execution.txt` | Execution context & call stack (notes) |
| `arrays.js` | Array methods and the spread operator |
| `objects.js`, `objects_02.js`, `objects3.js` | Object literals, methods, merging, destructuring |

---

## Functions (`functions.js`)

A function takes **parameters** in its definition and is called with **arguments**.
Without a `return`, a function yields `undefined`. The **rest** operator (`...args`)
collects an unknown number of arguments into an array:

```js
function calculateCartPrice(...items) { return items; }
calculateCartPrice(200, 400, 500); // [200, 400, 500]
```

## Arrow functions (`arrow.js`)

A compact function syntax. Curly braces need an explicit `return`; parentheses give an
**implicit return** (wrap an object literal in `()` to return it):

```js
const add = (a, b) => a + b;            // implicit return
const makeUser = () => ({ name: "amar" }); // return an object
```

Arrow functions **do not** bind their own `this` — unlike normal functions/methods,
where `this` refers to the calling object.

## IIFE (`iife.js`)

An **Immediately Invoked Function Expression** runs as soon as it's defined. It's used to
avoid polluting the global scope. The trailing `;` ends the statement:

```js
(function () { console.log("DB connected"); })();
(() => { console.log("DB connected"); })();   // arrow form
```

## Scope & hoisting (`scopes.js`)

- `let` / `const` are **block-scoped** (only exist inside their `{ }`); `var` leaks out
  because it is function-scoped.
- **Nested** functions can read variables from their enclosing function, but not vice versa.
- **Hoisting:** `function` declarations work before their line; function **expressions**
  (`const fn = function(){}`) do not.

## Execution context (`javascript execution.txt`)

JS runs a file by creating a **Global Execution Context**, and a new one for each function
call. Each context has a **memory phase** (variables → `undefined`, functions stored in
full) then an **execution phase** (real values assigned). Contexts run on the **call
stack**, LIFO.

## Arrays (`arrays.js`)

Arrays are resizable, zero-indexed, and can mix types. Highlights:

- **Mutating ends:** `push`/`pop` (end), `unshift`/`shift` (start — slower, shifts all).
- **`slice(a, b)`** copies a section (original unchanged); **`splice(a, n)`** removes/inserts
  in place (mutates).
- **Merge:** `concat()` or spread `[...a, ...b]`; **`flat(Infinity)`** flattens nesting.
- **Statics:** `Array.isArray()`, `Array.from()`, `Array.of()`.

## Objects (`objects.js`, `objects_02.js`, `objects3.js`)

Key → value collections. Access via `obj.key` or `obj["key"]` (bracket syntax is required
for keys with spaces or `Symbol` keys). Notable patterns:

- **Methods & `this`** — a function on an object can read sibling properties via `this`.
- **Singleton** via `new Object()` vs a plain object **literal** `{}`.
- **Merging** — `Object.assign({}, a, b)` or spread `{ ...a, ...b }`.
- **Inspect** — `Object.keys` / `values` / `entries`, `hasOwnProperty()`.
- **`Object.freeze(obj)`** makes it immutable; **destructuring** pulls keys into variables.

## Run it

```bash
node functions.js
node arrow.js
node "objects.js"
```
