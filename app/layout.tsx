import type { Metadata } from "next";
import { Ysabeau, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const geistYsabeau = Ysabeau({
  variable: "--font-geist-ysabeau",
  subsets: ["latin"],
  display: "swap"
});

const geistMontserrat = Montserrat({
  variable: "--font-geist-montserrat",
  subsets: ["latin"],
    display: "swap"
});

export const metadata: Metadata = {
  title: "БелТекс",
  description: "Белорусский Текстиль",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistYsabeau.variable}  ${geistMontserrat.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
