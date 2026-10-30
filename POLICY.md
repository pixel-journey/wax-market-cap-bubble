# Policy — market cap bubble (arithmetic)

**Trust label:** `educational-reference`  
**Updated:** 2026-10-31

## In scope

- Pure `marketCap(supply, unitPrice, decimals)` with bigint
- Remainder on truncated division
- Offline demo / unsent usecase shapes

## Out of scope

- Live bubble charts or Alcor/Atomic price feeds in this tree
- Rounding policies beyond truncate + remainder

## Rules

- Tests never require network
- Demo does not call hosts
