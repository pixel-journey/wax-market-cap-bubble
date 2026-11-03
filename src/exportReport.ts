import type { CapOk } from "./cap";

export function exportCapMarkdown(
  supply: string,
  price: string,
  decimals: string,
  c: CapOk
): string {
  return [
    "# Market-cap arithmetic (educational)",
    "",
    "> Not a live chart.",
    "",
    `supply: ${supply}`,
    `unitPrice: ${price}`,
    `decimals: ${decimals}`,
    "",
    `value: ${c.value.toString()}`,
    `remainder: ${c.remainder.toString()}`,
    `exact: ${c.exact}`,
    "",
  ].join("\n");
}

export function exportCapCsv(row: {
  supply: string;
  price: string;
  decimals: string;
  value: string;
  remainder: string;
}): string {
  return [
    "supply,unit_price,decimals,value,remainder",
    `${row.supply},${row.price},${row.decimals},${row.value},${row.remainder}`,
    "",
  ].join("\n");
}

export function downloadText(
  filename: string,
  content: string,
  mime = "text/plain;charset=utf-8"
): void {
  if (typeof document === "undefined") return;
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
