import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-premier" });

export const metadata: Metadata = {
  title: "Last Man Premier League",
  description: "A unique take on Last Man Standing - Premier League edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-gradient-to-br from-[#4A1654] via-[#6B2274] to-[#4A1654] min-h-screen`}
      >
        <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.07] mix-blend-overlay pointer-events-none"></div>
        <Navigation />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
