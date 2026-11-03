export const CAP_MYTHS = [
  {
    myth: "This is a live market-cap bubble chart",
    reality:
      "Pure supply × price / 10^decimals. No exchange feed is read.",
  },
  {
    myth: "Remainder is rounded into the displayed cap",
    reality: "Floor division; remainder is exposed so dust is visible.",
  },
  {
    myth: "bubbleRadius is production pixel geometry",
    reality: "Educational clamp for teaching scale — not a chart library.",
  },
] as const;

export const GLOSSARY = [
  {
    term: "value",
    meaning: "floor(supply * unitPrice / 10^decimals).",
  },
  {
    term: "remainder",
    meaning: "(supply * unitPrice) % 10^decimals.",
  },
  {
    term: "bubbleRadius",
    meaning: "Teaching radius from value/unit, clamped to maxRadius.",
  },
] as const;
