import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/navbar";
import Ads from './_components/ads'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr. Basit's Moroccan Treasures",
  description: "Discover authentic Moroccan craftsmanship and tradition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} pb-16 relative`}>
        <div>
          {children}
        </div>
        <Navbar />
        <Ads />
      </body>
    </html>
  );
}
