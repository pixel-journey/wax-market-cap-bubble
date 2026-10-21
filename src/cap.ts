/**
 * supply times a unit price, scaled by decimals.
 * Not a chart and not a live market cap.
 */

export type Cap = { ok: false; reason: string } | { ok: true; value: bigint; remainder: bigint };

export function marketCap(supply: bigint, unitPrice: bigint, decimals: number): Cap {
  if (supply < 0n || unitPrice < 0n) return { ok: false, reason: "supply and price must be non-negative" };
  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 18) return { ok: false, reason: "decimals must be an integer from 0 to 18" };
  const scale = 10n ** BigInt(decimals);
  const product = supply * unitPrice;
  return { ok: true, value: product / scale, remainder: product % scale };
}
