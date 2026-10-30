"use client";

import { useMemo, useState } from "react";
import { marketCap } from "./cap";
import { CAP_MYTHS } from "./myths";

export function Demo() {
  const [supply, setSupply] = useState("1000");
  const [unitPrice, setUnitPrice] = useState("200000000");
  const [decimals, setDecimals] = useState("8");

  const result = useMemo(() => {
    try {
      const s = BigInt(supply.trim() || "0");
      const p = BigInt(unitPrice.trim() || "0");
      const d = Number(decimals);
      return marketCap(s, p, d);
    } catch {
      return { ok: false as const, reason: "Enter integer supply, unit price, and decimals 0–18" };
    }
  }, [supply, unitPrice, decimals]);

  return (
    <main className="wrap">
      <p className="kicker">Educational reference · Pixel Journey</p>
      <h1>Supply times price, then the decimals</h1>
      <p className="lede">
        1000 at a unit price of 200000000 with 8 decimals is 2000. A unit price of 1 does
        not round up. No market was read.
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

      <label style={{ display: "block", marginBottom: "0.75rem" }}>
        Supply
        <input
          value={supply}
          onChange={(e) => setSupply(e.target.value)}
          style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "0.75rem" }}>
        Unit price (integer units)
        <input
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
          style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "1rem" }}>
        Decimals
        <input
          value={decimals}
          onChange={(e) => setDecimals(e.target.value)}
          style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
        />
      </label>

      {result.ok ? (
        <p>
          Value <strong>{result.value.toString()}</strong> · remainder{" "}
          <strong>{result.remainder.toString()}</strong>
        </p>
      ) : (
        <p>{result.reason}</p>
      )}

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.75 }}>
        See POLICY.md. Unsent request shapes live under Cases.
      </p>
    </main>
  );
}
