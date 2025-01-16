import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";
import Ads from './_components/ads'
import { LanguageProvider } from './i18n/LanguageContext'
import LanguageSelector from './_components/language-selector'

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
      <body className={`${inter.className} relative`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              {children}
            </div>
            <Navbar />
            <Footer />
          </div>
          <Ads />
          <LanguageSelector />
        </LanguageProvider>
      </body>
    </html>
  );
}
