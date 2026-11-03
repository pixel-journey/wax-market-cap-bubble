export type ShareState = {
  supply: string;
  price: string;
  decimals: string;
};

export function encodeShareState(s: ShareState): string {
  const q = new URLSearchParams();
  q.set("s", s.supply);
  q.set("p", s.price);
  q.set("d", s.decimals);
  return q.toString();
}

export function decodeShareState(search: string): Partial<ShareState> {
  const q = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const out: Partial<ShareState> = {};
  if (q.has("s")) out.supply = q.get("s") ?? undefined;
  if (q.has("p")) out.price = q.get("p") ?? undefined;
  if (q.has("d")) out.decimals = q.get("d") ?? undefined;
  return out;
}
