import type { Metadata } from "next";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

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

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'th' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}

