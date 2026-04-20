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
  metadataBase: new URL("https://sophie.urbanpolo.co.nz"),
  title: "Lexus Urban Polo | Polo Event Auckland, Christchurch, VIP Hospitality & Private Marquees",
  description:
    "Explore Lexus Urban Polo in Auckland and Christchurch, with VIP tickets, private marquees, corporate hospitality and a premium polo event experience.",
  keywords: [
    "polo event auckland",
    "polo event christchurch",
    "vip event tickets auckland",
    "vip event tickets christchurch",
    "corporate hospitality auckland",
    "corporate hospitality christchurch",
    "private marquee auckland",
    "private marquee christchurch",
    "luxury event auckland",
    "luxury event christchurch",
    "lexus urban polo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lexus Urban Polo | Premium Polo Event in Auckland and Christchurch",
    description:
      "VIP tickets, private marquees, corporate hospitality and premium polo event experiences in Auckland and Christchurch.",
    url: "https://sophie.urbanpolo.co.nz",
    siteName: "Lexus Urban Polo",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexus Urban Polo | Premium Polo Event in Auckland and Christchurch",
    description:
      "VIP tickets, private marquees, corporate hospitality and premium polo event experiences in Auckland and Christchurch.",
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
