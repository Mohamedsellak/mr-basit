import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Ads from './_components/ads'
import { LanguageProvider } from './i18n/LanguageContext'
import LanguageSelector from './_components/language-selector'
import ScrollingBanner from "./_components/scrolling-banner";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
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
              {/* Scrolling Banner */}
              <ScrollingBanner />
              {/* Children */}
              {children}
            </div>

            {/* Navbar */}
            <Navbar />
            {/* Footer */}
            <Footer />

          </div>

          {/* Ads */}
          <Ads />
          {/* Language Selector */}
          <LanguageSelector />
        </LanguageProvider>
      </body>
    </html>
  );
}
