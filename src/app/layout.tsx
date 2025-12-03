import type { Metadata } from "next";
import "./globals.css";
import { Karla, Rubik } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DevAdora",
  description: "Personal Portfolio",
};

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  weight: ["400", "700"],
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${rubik.variable} ${karla.variable} antialiased`}>
        <div className="relative">
          {children}
          <SpeedInsights />
          <div className="grainy-overlay pointer-events-none absolute inset-0 z-50" />
        </div>

        {/* Analytics Tracking Script */}
        <Script
          src="https://web-analytics-tan.vercel.app/api/track.js"
          data-site-id="portfolio"
          async
        ></Script>
      </body>
    </html>
  );
}
