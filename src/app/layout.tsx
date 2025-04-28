import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aussie Stargazers",
  description: "NASA provides the Astronomy Picture of the Day!",
  keywords: ["astronomy", "NASA", "stargazing", "space", "Australia"],
  authors: [{name: "tjmb", url: 'https://tjmb.dev'}],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ backgroundColor: "black" }}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
