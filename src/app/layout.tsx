import type { Metadata } from "next";
import { Handjet } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const font = Handjet({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vici Online",
  description: "2D MMO RPGs for players by players",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
