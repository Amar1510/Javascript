# Control flow

Making decisions in code: branching with `if`/`switch`, understanding truthy/falsy
values, and the handy `??` and ternary operators.

[← Back to main README](../README.md)

---

## Files in this folder

| File | What it covers |
|------|----------------|
| `control_flows.js` | `if`/`else` and `switch` (with fall-through) |
| `truthy.js` | Truthy/falsy values, empty checks, `??`, ternary |

---

## Branching (`control_flows.js`)

`if (condition) { ... } else { ... }` runs a block when the condition is truthy.

A `switch` matches a value against `case` labels. **Without a `break`**, execution
"falls through" into the following cases (and `default`):

```js
switch (key) {
  case "one": console.log("1");     // no break → falls through
  case "two": console.log("two"); break;
  default:    console.log("default");
}
```

## Truthy & falsy (`truthy.js`)

In a boolean context, every value is either truthy or falsy:

- **Falsy:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
- **Truthy:** everything else — including `"0"`, `"false"`, `" "`, `[]`, `{}`, functions.

Because `[]` and `{}` are truthy, check emptiness explicitly:

```js
if (arr.length === 0) { /* empty array */ }
if (Object.keys(obj).length === 0) { /* empty object */ }
```

### Nullish coalescing `??`

Returns the right side **only** when the left is `null` or `undefined` (unlike `||`,
it does not treat `0` or `""` as missing):

```js
null ?? null ?? 15   // 15  (first non-nullish wins)
```

### Ternary operator

A one-line `if/else` that produces a value:

```js
price > 90 ? console.log("greater") : console.log("less");
```

## Run it

```bash
node control_flows.js
node truthy.js
```
