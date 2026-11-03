import { describe, expect, it } from "vitest";
import { decodeShareState, encodeShareState } from "./shareState";

describe("shareState", () => {
  it("round-trips", () => {
    const raw = encodeShareState({ supply: "1000", price: "200000000", decimals: "8" });
    const d = decodeShareState(raw);
    expect(d.supply).toBe("1000");
    expect(d.decimals).toBe("8");
  });
});
