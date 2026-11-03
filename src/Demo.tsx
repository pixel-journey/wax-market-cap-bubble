"use client";

import { useMemo, useState } from "react";
import {
  bubbleRadius,
  compareCaps,
  marketCap,
  SAMPLE_CAPS,
} from "./cap";
import { CAP_MYTHS, GLOSSARY } from "./myths";

export function Demo() {
  const [supply, setSupply] = useState("1000");
  const [price, setPrice] = useState("200000000");
  const [decimals, setDecimals] = useState("8");
  const [unit, setUnit] = useState("100");
  const [maxR, setMaxR] = useState("40");
  const [compare, setCompare] = useState(false);
  const [supplyB, setSupplyB] = useState("500");

  const cap = useMemo(() => {
    try {
      return marketCap(
        BigInt(supply.trim() || "0"),
        BigInt(price.trim() || "0"),
        Number(decimals)
      );
    } catch {
      return { ok: false as const, reason: "Invalid inputs" };
    }
  }, [supply, price, decimals]);

  const radius = useMemo(() => {
    if (!cap.ok) return null;
    try {
      return bubbleRadius(cap.value, BigInt(unit.trim() || "1"), Number(maxR));
    } catch {
      return null;
    }
  }, [cap, unit, maxR]);

  const cmp = useMemo(() => {
    if (!compare) return null;
    try {
      return compareCaps(
        {
          supply: BigInt(supply.trim() || "0"),
          unitPrice: BigInt(price.trim() || "0"),
          decimals: Number(decimals),
        },
        {
          supply: BigInt(supplyB.trim() || "0"),
          unitPrice: BigInt(price.trim() || "0"),
          decimals: Number(decimals),
        }
      );
    } catch {
      return null;
    }
  }, [compare, supply, supplyB, price, decimals]);

  return (
    <main className="wrap">
      <p className="kicker">Educational reference · Pixel Journey</p>
      <h1>Market-cap arithmetic lab</h1>
      <p className="lede">
        Supply × unit price / 10^decimals with remainder. Not a live chart.
      </p>

      <section
        style={{
          marginBottom: "1.5rem",
          padding: "1rem",
          border: "1px solid #a855f744",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ fontSize: "1rem", marginTop: 0 }}>Myths vs reality</h2>
        {CAP_MYTHS.map((m) => (
          <div key={m.myth} style={{ marginBottom: "0.75rem", fontSize: "0.9rem" }}>
            <p style={{ margin: 0 }}>
              <strong>Myth:</strong> {m.myth}
            </p>
            <p style={{ margin: "0.25rem 0 0" }}>
              <strong>Reality:</strong> {m.reality}
            </p>
          </div>
        ))}
      </section>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
        {SAMPLE_CAPS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              setSupply(s.supply);
              setPrice(s.price);
              setDecimals(s.decimals);
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Supply
        <input
          value={supply}
          onChange={(e) => setSupply(e.target.value)}
          style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Unit price (integer)
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "1rem" }}>
        Decimals (0–18)
        <input
          value={decimals}
          onChange={(e) => setDecimals(e.target.value)}
          style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
        />
      </label>

      {cap.ok ? (
        <>
          <p>
            Cap value <strong>{cap.value.toString()}</strong> · remainder{" "}
            <strong>{cap.remainder.toString()}</strong>
            {cap.exact ? " · exact" : ""}
          </p>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Radius unit
            <input
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
            />
          </label>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>
            Max radius
            <input
              value={maxR}
              onChange={(e) => setMaxR(e.target.value)}
              style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
            />
          </label>
          {radius && radius.ok && (
            <p style={{ fontSize: "0.9rem" }}>
              Teaching bubble radius: <strong>{radius.radius}</strong>
            </p>
          )}
        </>
      ) : (
        <p>{cap.reason}</p>
      )}

      <label style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "1rem" }}>
        <input
          type="checkbox"
          checked={compare}
          onChange={(e) => setCompare(e.target.checked)}
        />
        Compare against second supply (same price/decimals)
      </label>
      {compare && (
        <label style={{ display: "block", margin: "0.5rem 0" }}>
          Supply B
          <input
            value={supplyB}
            onChange={(e) => setSupplyB(e.target.value)}
            style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
          />
        </label>
      )}
      {cmp && cmp.ok && (
        <p style={{ fontSize: "0.9rem" }}>
          A {cmp.a.value.toString()} · B {cmp.b.value.toString()} · Δ{" "}
          {cmp.valueDelta.toString()}
        </p>
      )}

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1rem" }}>Glossary</h2>
        <dl>
          {GLOSSARY.map((g) => (
            <div key={g.term} style={{ marginBottom: "0.5rem" }}>
              <dt>
                <strong>{g.term}</strong>
              </dt>
              <dd style={{ margin: 0 }}>{g.meaning}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.75 }}>
        See EDUCATION.md · POLICY.md · SECURITY.md · companion: rwa-fractional-floor-index
      </p>
    </main>
  );
}
