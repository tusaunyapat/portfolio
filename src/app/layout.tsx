import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tus Aunyapat",
  description: "computer engineering student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
