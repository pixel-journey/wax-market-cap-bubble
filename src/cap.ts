/**
 * supply × unit price / 10^decimals with visible remainder.
 * Not a chart and not a live market cap.
 */

export type CapOk = {
  ok: true;
  value: bigint;
  remainder: bigint;
  product: bigint;
  scale: bigint;
  exact: boolean;
};

export type CapErr = { ok: false; reason: string };
export type Cap = CapOk | CapErr;

export function marketCap(
  supply: bigint,
  unitPrice: bigint,
  decimals: number
): Cap {
  if (typeof supply !== "bigint" || typeof unitPrice !== "bigint") {
    return { ok: false, reason: "supply and unitPrice must be bigint" };
  }
  if (supply < 0n || unitPrice < 0n) {
    return { ok: false, reason: "supply and price must be non-negative" };
  }
  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 18) {
    return { ok: false, reason: "decimals must be an integer from 0 to 18" };
  }
  const scale = 10n ** BigInt(decimals);
  const product = supply * unitPrice;
  const value = product / scale;
  const remainder = product % scale;
  return {
    ok: true,
    value,
    remainder,
    product,
    scale,
    exact: remainder === 0n,
  };
}

export function assertCapInvariants(
  supply: bigint,
  unitPrice: bigint,
  decimals: number,
  c: CapOk
): void {
  const scale = 10n ** BigInt(decimals);
  if (c.scale !== scale) throw new Error("scale mismatch");
  if (c.product !== supply * unitPrice) throw new Error("product mismatch");
  if (c.value * scale + c.remainder !== c.product) {
    throw new Error("value * scale + remainder must equal product");
  }
}

export function compareCaps(
  a: { supply: bigint; unitPrice: bigint; decimals: number },
  b: { supply: bigint; unitPrice: bigint; decimals: number }
): { ok: false; reason: string } | { ok: true; a: CapOk; b: CapOk; valueDelta: bigint } {
  const ca = marketCap(a.supply, a.unitPrice, a.decimals);
  const cb = marketCap(b.supply, b.unitPrice, b.decimals);
  if (!ca.ok) return ca;
  if (!cb.ok) return cb;
  return { ok: true, a: ca, b: cb, valueDelta: ca.value - cb.value };
}

/**
 * Educational display radius: clamp(value, 1..maxRadius) after dividing by unit.
 * Not a physical pixel recommendation for production charts.
 */
export function bubbleRadius(
  value: bigint,
  unit: bigint,
  maxRadius: number
): { ok: false; reason: string } | { ok: true; radius: number } {
  if (unit <= 0n) return { ok: false, reason: "unit must be positive" };
  if (!Number.isInteger(maxRadius) || maxRadius < 1 || maxRadius > 500) {
    return { ok: false, reason: "maxRadius must be 1..500" };
  }
  if (value < 0n) return { ok: false, reason: "value must be non-negative" };
  const raw = value / unit;
  const n = raw > BigInt(maxRadius) ? maxRadius : Number(raw);
  const radius = Math.max(1, n === 0 && value > 0n ? 1 : n);
  return { ok: true, radius };
}

export const SAMPLE_CAPS = [
  { id: "exact", label: "1000 × 2e8 @ 8", supply: "1000", price: "200000000", decimals: "8" },
  { id: "dust", label: "1 × 1 @ 8", supply: "1", price: "1", decimals: "8" },
  { id: "mid", label: "5e6 × 1e4 @ 4", supply: "5000000", price: "10000", decimals: "4" },
] as const;
