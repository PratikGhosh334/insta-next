import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Children } from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Instagram clone',
  description: 'A clone of instagram built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

      {children}
      </body>
    </html>
  );
}
