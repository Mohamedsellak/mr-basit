import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/navbar";
import Image from "next/image";

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
        {/* Fixed Image */}
        <div className="fixed left-0 top-0 bottom-0 w-[200px] z-50 pointer-events-none
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/80 before:to-transparent before:z-10">
          <Image
            src="/99.png"
            alt="Decorative Pattern"
            fill
            className="object-cover object-left"
            priority
            sizes="200px"
          />
        </div>
        {/* Main Content with padding for fixed image */}
        <div className="pl-[200px]">
          {children}
        </div>
        <Navbar />
      </body>
    </html>
  );
}
