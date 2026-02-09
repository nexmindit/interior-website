import type { Metadata } from "next";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title:
    "Regen Lanes | Interior Construction Services. On Time. On Budget. Beyond Expectations",
  description:
    "Regenlanes transforms residential and commercial interiors with precise, minimalist, and architectural detail.",
  keywords: [
    "Regen Lanes",
    "Interior Construction",
    "Interior Renovation",
    "Interior Design",
    "Minimalist",
    "Architecture",
    "Space Planning",
    "Modern Design",
  ],
  authors: [{ name: "Regenlanes" }],
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "th" }];
}

export default async function LocaleLayout({
  children,
  params,
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
      <FloatingButtons />
    </NextIntlClientProvider>
  );
}
