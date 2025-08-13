import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fufootea \u8336\u6ee1\u6ee1\uff5cBe Real to Fruits & Tea",
  description: "Fufootea \u8336\u6ee1\u6ee1 \u2014 Malaysia local brand, the finest handcrafted tea. Muslim-friendly. Mount Austin & Paradigm Mall JB.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..800&family=Playfair+Display:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
