import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="stylesheet" href="/vads/stylesheets/core.css" />
        <link rel="stylesheet" href="/vads/stylesheets/utilities.css" />
      </head>
      <body className="vads-u-font-family--sans">
        {children}
      </body>
    </html>
  );
}
