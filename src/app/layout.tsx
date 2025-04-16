import type { Metadata } from "next";
import "./globals.css";
import {Karla, Rubik} from 'next/font/google';

export const metadata: Metadata = {
  title: "DevAdora",
  description: "Personal Portfolio",
};

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  weight: ["400", "700"],
})

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "700"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${karla.variable} antialiased`}
      >
        <div className="relative">
          {children}
          <div className="grainy-overlay pointer-events-none absolute inset-0 z-50" />
        </div>
      </body>
    </html>
  );
}
