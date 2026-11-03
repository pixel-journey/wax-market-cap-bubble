"use client";

const CASES = [
  {
    title: "Exact scale",
    body: "1000 × 2e8 at 8 decimals → value 2000, remainder 0.",
  },
  {
    title: "Dust remainder",
    body: "1 × 1 at 8 decimals → value 0, remainder 1.",
  },
  {
    title: "Teaching radius",
    body: "bubbleRadius clamps value/unit into 1..maxRadius — not production layout.",
  },
  {
    title: "Not a live chart",
    body: "No market feed is read; numbers are arguments.",
  },
] as const;

export function Cases() {
  return (
    <section aria-label="Teaching cases" style={{ marginTop: "2rem" }}>
      <h2 style={{ fontSize: "1rem" }}>Cases</h2>
      <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem" }}>
        {CASES.map((c) => (
          <li key={c.title} style={{ marginBottom: "0.5rem" }}>
            <strong>{c.title}.</strong> {c.body}
          </li>
        ))}
      </ul>
    </section>
  );
}
