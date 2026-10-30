export const CAP_MYTHS = [
  {
    myth: "This is a live market-cap chart",
    reality:
      "Pure arithmetic: supply × unitPrice / 10^decimals. No host is read.",
  },
  {
    myth: "Remainders round up to a full unit",
    reality:
      "Integer division truncates. Remainder is exposed so dust is visible.",
  },
  {
    myth: "Unit price is always in the same units as display price",
    reality:
      "Caller chooses decimals to match their token precision. Wrong decimals → wrong scale.",
  },
] as const;
