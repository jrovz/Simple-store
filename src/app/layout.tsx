import { Roboto } from 'next/font/google'
import { Inter } from "next/font/google";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";
import 'app/sass/globals.sass'

const roboto = Roboto({
  weight: ["100","300","500", "700"],
  subsets: ["latin"]
})

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
