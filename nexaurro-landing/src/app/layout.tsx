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
  title: "Nexaurro | Digital Growth Partner",
  description:
    "Nexaurro is a full-stack digital services studio delivering marketing, web development, UI/UX, and business solutions for modern brands.",
  openGraph: {
    title: "Nexaurro | Digital Growth Partner",
    description:
      "Amplify your next era of growth with Nexaurro's integrated digital marketing, development, and design services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexaurro | Digital Growth Partner",
    description:
      "Integrated digital marketing, product design, and engineering for companies ready to scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
