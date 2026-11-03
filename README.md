# wax-market-cap-bubble

> **Trust label:** `educational-reference`  
> **Status:** Full-thrust + polish (2026-11-03)  
> **Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

**One-sentence goal:** Teach **supply × unit price / 10^decimals** with a visible remainder — without claiming a live market-cap chart.

## What is actually in the repo

| Piece | Role |
|-------|------|
| `src/cap.ts` | `marketCap`, compare, teaching radius |
| `src/*.test.ts` | Invariants + grid |
| `src/Demo.tsx` | Interactive lab + exports |
| Docs | EDUCATION · ARCHITECTURE · POLICY · SECURITY |

## Quick start

```bash
npm install
npm test
npm run dev
```

```ts
import { marketCap } from "./src/cap";

marketCap(1000n, 200_000_000n, 8);
// value: 2000n, remainder: 0n
```

## Related

- `wax-rwa-fractional-floor-index` · `px-token-dust-truncation-visualizer`

## License

MIT — Pixel Journey
