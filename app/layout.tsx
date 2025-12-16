import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: "Aaron Heine",
  description: "Life and designs of a dad in Atlanta Georgia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
