import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${manrope.variable} antialiased bg-white text-black`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

