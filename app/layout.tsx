import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "FEM - Agency Landing Page | lilKriT",
  description: "created by lilKriT using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${fraunces.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
