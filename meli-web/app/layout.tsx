import Header from "@/layouts/header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./main.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado Libre",
  description: "MELI Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
