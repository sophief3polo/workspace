import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sophie.f3polo.com.au"),
  title: "Sophie Mission Control",
  description:
    "Private mission control for Urban Events, built to run revenue, operations, and custom internal tools.",
  applicationName: "Sophie Mission Control",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sophie Mission Control",
    description:
      "A private operating layer for revenue, operations, and custom internal tools.",
    url: "https://sophie.f3polo.com.au",
    siteName: "Sophie Mission Control",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophie Mission Control",
    description:
      "Private mission control for Urban Events, built in Next.js and ready for custom tools.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NZ"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
