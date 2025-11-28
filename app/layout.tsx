import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Regenlanes | Minimalist Interior Design & Architecture",
  description:
    "Regenlanes transforms residential and commercial interiors with precise, minimalist, and architectural detail.",
  keywords: [
    "Regenlanes",
    "Interior Design",
    "Minimalist",
    "Architecture",
    "Space Planning",
    "Modern Design",
  ],
  authors: [{ name: "Regenlanes" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
