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
  metadataBase: new URL("https://justpay.co.nz"),
  title: "Just Pay | Payment solutions for merchants",
  description:
    "Just Pay helps merchants access payment solutions through a Fiserv referral partnership across New Zealand and Australia.",
  applicationName: "Just Pay",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Just Pay | Payment solutions for merchants",
    description:
      "A commercial website for merchants looking for payment solutions through the Just Pay and Fiserv referral pathway.",
    url: "https://justpay.co.nz",
    siteName: "Just Pay",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Pay | Payment solutions for merchants",
    description:
      "Payment solutions for merchants across New Zealand and Australia through the Just Pay referral pathway.",
  },
  robots: {
    index: true,
    follow: true,
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
