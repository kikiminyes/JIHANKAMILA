import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Tenor_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tenor",
});

export const metadata: Metadata = {
  title: "Jihan Kamila | Petualang Alam",
  description:
    "Jiwa bebas yang menemukan ketenangan di alam terbuka. Portfolio fotografi dan petualangan alam Jihan Kamila dari Jawa Tengah, Indonesia.",
};

export const viewport: Viewport = {
  themeColor: "#0e0c0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${cormorant.variable} ${tenor.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
