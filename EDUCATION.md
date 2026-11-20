# Education — supply times price, then the scale

> **Rung:** `npm test` passes. `floor(supply * unitPrice / 10^decimals)` and the remainder. Not a chart and not a live market cap.  
> **The test is the rule.** A holder's floor of one whole price is [wax-rwa-fractional-floor-index](https://github.com/pixel-journey/wax-rwa-fractional-floor-index). Eight decimals here is the argument you pass, which is also WAX token precision, not a chain read.

## Predict, then run

Invariant: `value * scale + remainder === supply * unitPrice`.

| Call | Locked result |
| --- | --- |
| `marketCap(1000n, 200000000n, 8)` | value `2000n`, remainder `0n`, exact. `1000 * 200000000 / 100000000 = 2000`. |
| `marketCap(1n, 1n, 8)` | value `0n`, remainder `1n`, not exact |
| decimals `19` | not ok. The cap is 18. |
| a negative supply | not ok |
| half that supply at the same price | `valueDelta` is `1000n` (2000 minus 1000) |
| `bubbleRadius(2000n, 100n, 40)` | radius `20` |
| `bubbleRadius(1000000n, 1n, 40)` | radius `40`. The radius clamps. It is not a pixel recommendation. |

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this product.
