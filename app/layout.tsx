import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Supply times price',
  description: '1000 at 200000000 with 8 decimals is 2000. A remainder is not rounded up. Not a chart.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
