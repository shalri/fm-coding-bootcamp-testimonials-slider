import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Coding Bootcamp Testimonials Slider",
  description: "Challenge solution by FScode | Shalri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-size-40 sm:bg-size-50 bg-footer-curve bg-left-bottom bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
