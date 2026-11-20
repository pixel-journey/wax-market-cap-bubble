# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Token precision context |
| [SECURITY.md](SECURITY.md) | Non-claims |

## Product facts locked by tests

```text
value = floor(supply * unitPrice / 10^decimals)
value * 10^decimals + remainder === supply * unitPrice
```

- `marketCap(1000n, 200000000n, 8)` → value `2000n`, remainder `0n`.
- Decimals **0..18**; 19 refused.
- Bubble radius clamps; it is not a chart recommendation.
- Not a live market cap. Arguments only.
