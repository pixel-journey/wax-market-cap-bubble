import { describe, expect, it } from "vitest";
import {
  assertCapInvariants,
  bubbleRadius,
  compareCaps,
  marketCap,
} from "./cap";

describe("marketCap", () => {
  it("scales by decimals and keeps a remainder", () => {
    const a = marketCap(1_000n, 200_000_000n, 8);
    expect(a).toMatchObject({ ok: true, value: 2_000n, remainder: 0n, exact: true });
    if (a.ok) assertCapInvariants(1_000n, 200_000_000n, 8, a);

    const b = marketCap(1n, 1n, 8);
    expect(b).toMatchObject({ ok: true, value: 0n, remainder: 1n, exact: false });
    if (b.ok) assertCapInvariants(1n, 1n, 8, b);
  });

  it("rejects bad decimals and negatives", () => {
    expect(marketCap(1n, 1n, 19).ok).toBe(false);
    expect(marketCap(-1n, 1n, 8).ok).toBe(false);
  });

  it("holds invariants on a small grid", () => {
    for (const supply of [0n, 1n, 7n, 1000n]) {
      for (const price of [0n, 1n, 99n, 200_000_000n]) {
        for (const decimals of [0, 4, 8]) {
          const c = marketCap(supply, price, decimals);
          expect(c.ok).toBe(true);
          if (c.ok) assertCapInvariants(supply, price, decimals, c);
        }
      }
    }
  });
});

describe("compareCaps", () => {
  it("delta between two caps", () => {
    const c = compareCaps(
      { supply: 1_000n, unitPrice: 200_000_000n, decimals: 8 },
      { supply: 500n, unitPrice: 200_000_000n, decimals: 8 }
    );
    expect(c.ok && c.valueDelta).toBe(1_000n);
  });
});

describe("bubbleRadius", () => {
  it("clamps to max and floors by unit", () => {
    expect(bubbleRadius(2_000n, 100n, 40)).toEqual({ ok: true, radius: 20 });
    expect(bubbleRadius(1_000_000n, 1n, 40)).toEqual({ ok: true, radius: 40 });
  });
});
