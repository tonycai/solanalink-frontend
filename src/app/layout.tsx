import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ソラナリンク株式会社 — 公式サイト (Official Website)",
  description:
    "クラウド、EC、Web、ブロックチェーン、AML/KYC支援を提供。End-to-endで設計・実装・運用・セキュリティを支援します。",
  icons: "/solanalink-logo.png",
  openGraph: {
    title: "ソラナリンク株式会社 — 公式サイト (Official Website)",
    description:
      "クラウド、EC、Web、ブロックチェーン、AML/KYC支援を提供。End-to-endで設計・実装・運用・セキュリティを支援します。",
    images: ["/solanalink-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "ソラナリンク株式会社 — 公式サイト (Official Website)",
    description:
      "クラウド、EC、Web、ブロックチェーン、AML/KYC支援を提供。End-to-endで設計・実装・運用・セキュリティを支援します。",
    images: ["/solanalink-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
