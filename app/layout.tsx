import type { Metadata } from "next";
import { Fresca } from "next/font/google";
import "./globals.css";

const fresca = Fresca({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bushfire Brigade",
  description: "TA30",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fresca.className}>{children}</body>
    </html>
  );
}
