# Security — market-cap arithmetic

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Remainder conservation | `value * scale + remainder === supply * unitPrice` |
| Decimals | **0..18**; 19 refused |
| Negative supply | refused |
| `marketCap(1000n, 200000000n, 8)` | value **2000**, remainder **0**, exact |
| `marketCap(1n, 1n, 8)` | value **0**, remainder **1**, not exact |

**PXJ product precision is always 8** in other token labs; this function still takes `decimals` as an argument for teaching other scales.

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Live prices | Arguments only; no Alcor/Atomic read |
| Investable claim | Forbidden |
| Display | Keep remainder visible if you teach conservation |

## Attack angles

1. Marketing "market cap" from demo numbers.  
2. Dropping remainder and claiming exactness.  
3. Using JS `Number` for large supply × price products.  
4. Confusing `issue(1n)` with one whole token at precision 8.

## Honesty limits

No private keys, wallets, or signing. No market APIs on the measure path.

| Sibling | Distinction |
| --- | --- |
| [decimal simulator](https://github.com/pixel-journey/px-token-ft-decimal-supply-simulator) | Precision 0..18 issue/retire |
| [RWA floor](https://github.com/pixel-journey/wax-rwa-fractional-floor-index) | wholePrice × held / supply |
| [Alcor bubble chart](https://github.com/pixel-journey/wax-alcor-market-cap-bubble-chart) | Product UI layer (if present) |

[docs.wax.io](https://docs.wax.io/).
