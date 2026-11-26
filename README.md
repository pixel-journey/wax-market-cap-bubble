# wax-market-cap-bubble

> **Trust label:** `educational-reference`  
> **Status:** Course-format upgrade (2026-11-26)  
> **Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

**One-sentence goal:** Teach **supply × unit price / 10^decimals** with a visible remainder — without claiming a live market-cap chart.

## Locked scene

Invariant: `value * scale + remainder === supply * unitPrice`.

| Call | Result |
| --- | --- |
| `marketCap(1000n, 200_000_000n, 8)` | value `2000n`, remainder `0n`, exact |
| `marketCap(1n, 1n, 8)` | value `0n`, remainder `1n` |
| decimals `19` | refused (cap is 18) |

```ts
import { marketCap } from "./src/cap";
marketCap(1000n, 200_000_000n, 8);
// value: 2000n, remainder: 0n
```

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/cap.ts` | `marketCap`, compare, teaching radius |
| `src/*.test.ts` | Invariants + grid |
| `src/Demo.tsx` | Interactive lab + exports |
| [EDUCATION.md](EDUCATION.md) | Beginner → Intermediate → Masterclass course |

## Quick start

```bash
npm install
npm test
npm run dev
```

## Boundaries

- Not a live market cap or Alcor scan
- Remainder is kept — do not drop it and claim conservation
- Bubble radius is a teaching clamp, not financial advice
- Decimals allowed **0..18** (same band as the FT decimal lab)

## Related

- [wax-rwa-fractional-floor-index](https://github.com/pixel-journey/wax-rwa-fractional-floor-index)
- [px-token-dust-truncation-visualizer](https://github.com/pixel-journey/px-token-dust-truncation-visualizer)
- [px-token-ft-decimal-supply-simulator](https://github.com/pixel-journey/px-token-ft-decimal-supply-simulator)

## License

MIT — Pixel Journey
