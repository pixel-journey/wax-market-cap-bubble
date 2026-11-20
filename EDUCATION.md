# Education — supply times price, then the scale

> **Rung:** `npm test` passes. `floor(supply * unitPrice / 10^decimals)` and the remainder. Not a chart and not a live market cap.  
> **The test is the rule.** A holder's floor of one whole price is [wax-rwa-fractional-floor-index](https://github.com/pixel-journey/wax-rwa-fractional-floor-index). Eight decimals here is the argument you pass, which is also WAX token precision, not a chain read.

**PXJ precision is always 8** in Pixel Journey token labs; this function still takes `decimals` as an argument so you can teach other scales.

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Show 1000 × 2e8 at 8 decimals → value 2000 exact |
| Intermediate | Keep the remainder identity |
| Masterclass | Refuse to call the integer a live market cap |

---

## Beginner — one scene

Invariant: `value * scale + remainder === supply * unitPrice`.

| Call | Locked result |
| --- | --- |
| `marketCap(1000n, 200000000n, 8)` | value `2000n`, remainder `0n`, exact |
| `marketCap(1n, 1n, 8)` | value `0n`, remainder `1n`, not exact |
| decimals `19` | not ok. The cap is 18. |
| a negative supply | not ok |
| half that supply at the same price | `valueDelta` is `1000n` |
| `bubbleRadius(2000n, 100n, 40)` | radius `20` |
| `bubbleRadius(1000000n, 1n, 40)` | radius `40` (clamped) |

```bash
npm test
```

---

## Intermediate

- Decimals allowed 0..18 inclusive.
- Bubble radius is a teaching clamp, not a pixel recommendation.
- Unsent HTTP examples (including packs) are not this product.

---

## Masterclass

### Common mistakes

1. Dropping the remainder and still claiming conservation.  
2. Reading Alcor and citing this pure product as the scan.  
3. Treating bubble radius as financial advice.

### Exercises

1. Why is `1n, 1n, 8` value 0?  
2. Max decimals? (18.)  
3. Is this a live market cap? (No.)

---

## What this course will not teach

- Live order books
- Investable valuation
