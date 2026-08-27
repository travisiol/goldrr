import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

// Fonts are loaded via a <link> tag below instead of next/font/google.
// next/font downloads and self-hosts the font files at BUILD time, which
// requires outbound access to fonts.googleapis.com from wherever `next
// build` runs; that access isn't guaranteed in every build environment.
// A runtime <link> is more portable and is how most production sites pull
// Google Fonts anyway.

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Trade Memes. Stack Gold.`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.seoDescription,
  keywords: [
    "GOLDR",
    "Robinhood Chain",
    "PONS",
    "memecoin",
    "gold",
    "RWA",
    "crypto",
  ],
  openGraph: {
    title: `${siteConfig.name} — Trade Memes. Stack Gold.`,
    description: siteConfig.seoDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Trade Memes. Stack Gold.`,
    description: siteConfig.seoDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#060504",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/*
          The no-page-custom-font rule targets the Pages Router's per-page
          _document convention; a shared font <link> in the App Router root
          layout is the correct, recommended place for it.
        */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-warm-white">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
