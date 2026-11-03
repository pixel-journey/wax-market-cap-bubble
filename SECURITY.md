# Security notes

**Trust label:** `educational-reference`

## What this package does not do

- No private keys, wallets, or signing
- No market / Alcor / Atomic APIs on the measure path
- No claim that educational values are investable market caps

## Host-product guidance

- Treat `value` / `remainder` as teaching arithmetic only.
- Share URLs only encode demo numbers.
- localStorage holds last inputs on the same origin; clear on shared devices.
- Prefer **WharfKit** if a future host adds intentional chain actions.

## Supply-chain

Correctness is locked by pure unit tests (including a small grid). Pin dependencies for any public deploy.
