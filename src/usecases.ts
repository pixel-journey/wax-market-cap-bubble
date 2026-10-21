import { CHAIN_ORIGIN, currencyBalance } from "./api";
import { marketCap } from "./cap";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const whole = marketCap(1_000n, 200_000_000n, 8);
if (!whole.ok) throw new Error(whole.reason);
const cap = whole;

export const USE_CASES: UseCase[] = [
  {
    title: "A balance is not a market cap",
    detail: `1000 times 200000000 at 8 decimals is ${cap.value.toString()}. get_currency_balance is one account. The request is not sent.`,
    request: currencyBalance(CHAIN_ORIGIN, "alice"),
    transaction: null,
  },
  {
    title: "Markets are not multiplied here",
    detail: "A unit price of 1 at 8 decimals is value 0 with remainder 1. No trade is built.",
    request: { method: "GET", url: "https://wax.alcor.exchange/api/markets", executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (cap.value !== 2_000n || cap.remainder !== 0n) throw new Error("cap");
}
