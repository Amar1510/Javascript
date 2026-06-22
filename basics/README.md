# Basics — values & built-ins

The foundation of JavaScript: how values are typed and stored, how they convert between
types, and the most-used built-in objects (`String`, `Number`, `Math`, `Date`).

[← Back to main README](../README.md)

---

## Files in this folder

| File | What it covers |
|------|----------------|
| `datatypes.js` | Dynamic typing; primitive vs reference types |
| `conversionOperation.js` | Explicit conversion (`Number`/`String`/`Boolean`) and `+` coercion |
| `strings.js` | Common string methods |
| `nums_and_maths.js` | The `Number` wrapper and chaining |
| `dates.js` | Creating and formatting dates, timestamps |

---

## Data types (`datatypes.js`)

JavaScript is **dynamically typed** — a variable's type is decided at runtime and can
change over its lifetime. Values fall into two groups based on how they're stored:

- **Primitive** (call by value) — `String`, `Number`, `Boolean`, `null`, `undefined`,
  `Symbol` (used to make unique keys), `BigInt`. The value itself is copied.
- **Non-primitive / reference** — `Array`, `Object`, `Function`. A reference is copied,
  so two variables can point at the same underlying data.

## Type conversion & coercion (`conversionOperation.js`)

Convert explicitly with `Number()`, `String()`, `Boolean()`:

| Input | `Number(x)` | `Boolean(x)` |
|-------|-------------|--------------|
| `"33"` | `33` | `true` |
| `"33asdf"` | `NaN` | `true` |
| `""` | `0` | `false` |
| `null` | `0` | `false` |
| `undefined` | `NaN` | `false` |
| `true` | `1` | — |

The `+` operator coerces automatically — if **either** operand is a string it
concatenates instead of adding:

```js
"5" + 3   // "53"
5 + "3"   // "53"
```

## Strings (`strings.js`)

Strings are indexable (`name[0]`) and have a `.length`. Key methods used here:
`toUpperCase()`, `charAt()`, `indexOf()`, `substring()`, `slice()` (supports negative
indices), `trim()`, `replace()` (first match) vs `replaceAll()` (all matches),
`includes()`, and `split()` (string → array).

## Numbers & Math (`nums_and_maths.js`)

`new Number(500)` creates a Number **object** wrapper. Methods can be chained, e.g.
`balance.toString().length`. `Math.floor()` rounds down (handy with `Date.now()/1000`).

## Dates (`dates.js`)

`new Date()` is an object for the current date/time. Format it with `toString()`,
`toDateString()`, `toISOString()`, or `toLocaleString()`. Get timestamps with
`Date.now()` (ms now) and `date.getTime()` (ms since epoch). Divide by `1000` and
`Math.floor()` for a Unix seconds timestamp.

## Run it

```bash
node datatypes.js
node strings.js
node dates.js
```
