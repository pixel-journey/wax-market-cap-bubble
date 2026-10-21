import { describe, expect, it } from "vitest";
import { marketCap } from "./cap";

describe("market cap", () => {
  it("scales by decimals and keeps a remainder", () => {
    expect(marketCap(1_000n, 200_000_000n, 8)).toEqual({ ok: true, value: 2_000n, remainder: 0n });
    expect(marketCap(1n, 1n, 8)).toEqual({ ok: true, value: 0n, remainder: 1n });
    expect(marketCap(1n, 1n, 19).ok).toBe(false);
  });
});
