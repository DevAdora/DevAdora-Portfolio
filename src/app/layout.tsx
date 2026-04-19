import type { Metadata } from "next";
import { Karla, Rubik } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import FloatingControls from "../components/FloatingControls";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('devadora-theme')==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${rubik.variable} ${karla.variable} antialiased`}>
        <div className="relative">
          {children}
          <SpeedInsights />
          <FloatingControls />
          <div className="grainy-overlay pointer-events-none absolute inset-0 z-50" />
        </div>

        <Script
          src="https://web-analytics-tan.vercel.app/api/track.js"
          data-site-id="portfolio"
          async
        />
      </body>
    </html>
  );
}