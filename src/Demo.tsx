"use client";

import { marketCap } from "./cap";

export function Demo() {
  const whole = marketCap(1_000n, 200_000_000n, 8);
  const dust = marketCap(1n, 1n, 8);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Supply times price, then the decimals</h1>
      <p className="lede">1000 at a unit price of 200000000 with 8 decimals is 2000. A unit price of 1 does not round up. No market was read.</p>
      {whole.ok && dust.ok ? (
        <p>
          Value {whole.value.toString()}. The dust case is value {dust.value.toString()} with remainder {dust.remainder.toString()}.
        </p>
      ) : (
        <p>The sample failed.</p>
      )}
    </main>
  );
}
