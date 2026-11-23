# AI handoff — market-cap bubble arithmetic

## Non-negotiables

1. `value = floor(supply * unitPrice / 10^decimals)` with remainder conservation:
   `value * 10^decimals + remainder === supply * unitPrice`.
2. Sample: `marketCap(1000n, 200000000n, 8)` → value **2000**, remainder **0**.
3. `marketCap(1n, 1n, 8)` → value **0**, remainder **1**.
4. Decimals **0..18**; 19 refused. Use **bigint**, never `Number` for large products.
5. **Not** a live market cap. Arguments only.
6. Org policy: **PXJ precision is always 8** in production token labs (this function still takes `decimals` for teaching).

## Prompt seeds

- "Show conservation for supply 1 unitPrice 1 decimals 8."
- "Refuse decimals 19."
- "Refuse calling demo numbers a live market cap."

## Do not

- Fetch Alcor prices in unit tests.
- Drop remainder and claim exactness.
- Market investable advice from the bubble radius.
