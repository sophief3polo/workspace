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
  metadataBase: new URL("https://sophie.justpay.co.nz"),
  title: "Just Pay Mission Control",
  description:
    "Private mission control for Just Pay, built to run merchant referrals, partner operations, and lead conversion systems.",
  applicationName: "Just Pay Mission Control",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Just Pay Mission Control",
    description:
      "A private operating layer for merchant referrals, Fiserv partner operations, and lead conversion.",
    url: "https://sophie.justpay.co.nz",
    siteName: "Just Pay Mission Control",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Pay Mission Control",
    description:
      "Private mission control for Just Pay, built in Next.js for referral flow and conversion operations.",
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
