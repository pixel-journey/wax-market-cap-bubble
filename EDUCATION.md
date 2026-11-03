# Education — market-cap arithmetic

## Pattern

```text
value     = floor(supply * unitPrice / 10^decimals)
remainder = (supply * unitPrice) % 10^decimals
```

## Teaching points

1. Not a live market-cap product or bubble chart library.
2. Dust remainder is intentional — do not silently round up.
3. `bubbleRadius` is a teaching clamp, not production layout.
4. Pair with `wax-rwa-fractional-floor-index` for share-of-whole math.

## Related

- `wax-rwa-fractional-floor-index`
- `px-token-dust-truncation-visualizer`
