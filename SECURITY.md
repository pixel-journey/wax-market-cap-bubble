# Security — market-cap arithmetic

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Remainder conservation | `value * scale + remainder === supply * unitPrice` |
| Decimals | 0..18; 19 refused |
| Negative supply | refused |

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

## Honesty limits

No private keys, wallets, or signing. No market APIs on the measure path. [docs.wax.io](https://docs.wax.io/) · [decimal simulator](https://github.com/pixel-journey/px-token-ft-decimal-supply-simulator).
