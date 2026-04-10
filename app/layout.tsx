import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body id="top">{children}</body>
    </html>
  );
}
