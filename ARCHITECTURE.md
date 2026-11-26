# Architecture — supply × price with remainder kept

## Pure core

```
supply, unitPrice, decimals (0..18)
        │
        ▼
scale = 10^decimals
product = supply * unitPrice
value = product / scale          // floor
remainder = product % scale

invariant: value * scale + remainder === product
```

| Helper | Role |
| --- | --- |
| `marketCap` | value, remainder, exact flag |
| `compareCaps` | teaching delta between two supplies |
| `bubbleRadius` | clamped teaching radius — not UI pixels |

## Locked scene

`marketCap(1000n, 200_000_000n, 8)` → value `2000n`, remainder `0n`.
`marketCap(1n, 1n, 8)` → value `0n`, remainder `1n` (floor of a tiny product).

## What is not in the tree

- Live market feeds or Alcor quotes
- Wallet or broadcast
- Investable valuation advice
- That bubble radius is financial or pixel truth

## UI

`Demo.tsx` is an offline illustration of the pure product.

## Verification

`npm test` locks the remainder identity, decimals 0..18, and negative/oversize refusals.
