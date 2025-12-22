"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const socialLinks = [
  { labelKey: "Instagram", href: "#" },
  { labelKey: "Facebook", href: "#" },
  { labelKey: "TikTok", href: "#" },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-zinc-100 bg-zinc-50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-zinc-500 md:flex-row">
        <div className="flex items-center gap-2 text-black">
          <Image
            src="/images/Logo.png"
            alt="Regenlanes logo"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="font-semibold lowercase">regenlanes</span>
        </div>

        <p className="text-center">{t("copyright")}</p>

        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a key={link.labelKey} href={link.href} className="transition hover:text-black">
              {link.labelKey}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
