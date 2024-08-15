"use client"

import { Inter } from "next/font/google";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";
import 'app/sass/globals.sass'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
