import type { Metadata } from "next";
import { Caveat, Kalam } from "next/font/google";
import "./globals.css";

/**
 * Typography: closest “real ink on paper” option that stays top-tier on the free web stack.
 * - Kalam: pen/hand-print body (designed for natural stroke rhythm; excellent for long reading).
 * - Caveat: display / titles — includes contextual alternates (less “font grid” repetition).
 */
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aamir Naved | Backend Engineer",
  description: "Notebook-style portfolio for Aamir Naved, Backend Engineer building scalable systems and GenAI apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kalam.variable} ${caveat.variable}`}>
      <body id="top" className={kalam.className}>
        {children}
      </body>
    </html>
  );
}
