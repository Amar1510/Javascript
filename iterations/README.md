# Iterations

Every way to loop in JavaScript — from the classic `for` loop to the functional array
methods `map`, `filter`, and `reduce`.

[← Back to main README](../README.md)

---

## Files in this folder

| File | What it covers |
|------|----------------|
| `loops_01.js` | `for` loop, nested loops, `break` / `continue` |
| `while_loop.js` | `while` and `do...while` |
| `loops_02.js` | `for...of` over arrays, strings, Maps, Sets |
| `loops_03.js` | `for...of` vs `for...in` on objects; `forEach`, `filter`, `map`, `reduce` |

---

## `for`, `break`, `continue` (`loops_01.js`)

The classic counting loop: `for (init; condition; step)`. Loops can be **nested** (e.g. a
multiplication table). Inside any loop:

- **`break`** terminates the loop entirely.
- **`continue`** skips the rest of the current iteration and moves to the next.

## `while` / `do...while` (`while_loop.js`)

`while (cond) { ... }` checks the condition **before** each run. `do { ... } while (cond)`
runs the body **once first**, then checks — so it executes at least once even if the
condition is already false.

## `for...of` (`loops_02.js`)

Iterates over the **values** of any iterable — arrays, strings, **Maps**, and **Sets**:

```js
for (const val of [1, 2, 3]) { /* values */ }
for (const [key, value] of myMap) { /* Map entries */ }
```

A `Map` keeps key→value pairs in insertion order; a `Set` stores only unique values.
Both are iterable with `for...of` (but **not** `for...in`).

## `for...in` vs object iteration (`loops_03.js`)

Plain objects aren't directly iterable. Either use `for...in` (iterates **keys**), or
convert with `Object.keys()` / `values()` / `entries()` and use `for...of`:

```js
for (const key in obj) { console.log(key, obj[key]); }
for (const [k, v] of Object.entries(obj)) { /* ... */ }
```

> `for...in` works on arrays too but isn't recommended (it iterates inherited
> enumerable keys and gives string indices). Prefer `for...of` for arrays.

### Array iteration methods

| Method | Returns | Notes |
|--------|---------|-------|
| `forEach(fn)` | `undefined` | Runs `fn` per item; no `break`/`continue` (use `return` to skip) |
| `filter(fn)` | new array | Keeps items where `fn` returns truthy |
| `map(fn)` | new array | Transforms each item |
| `reduce(fn, init)` | single value | Folds the array down to one result |

```js
const evens   = numbers.filter((n) => n % 2 === 0);
const squares = numbers.map((n) => n * n);
const total   = numbers.reduce((acc, n) => acc + n, 0);
```

`map` and `filter` can be **chained** because each returns a new array. Use `map` (not
`forEach`) when you need a transformed array back.

## Run it

```bash
node loops_01.js
node while_loop.js
node loops_03.js
```
