import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ReviewerModeProvider } from "@/context/ReviewerModeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Veteran Transition Journey | VA.gov",
  description: "A personalized guide for separating service members — from 12 months out through your first year as a veteran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <ReviewerModeProvider>
          {children}
        </ReviewerModeProvider>
      </body>
    </html>
  );
}
