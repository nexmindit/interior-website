"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const switchLocale = (newLocale: string) => {
        startTransition(() => {
            document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
            window.location.reload();
        });
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-zinc-600 hover:text-black transition-colors"
                disabled={isPending}
                aria-label="Select language"
                aria-expanded={isOpen}
            >
                <Globe className="h-4 w-4" />
                <span className="font-medium uppercase">{locale}</span>
                <svg
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div
                className={`absolute right-0 top-full mt-0 w-32 pt-2 transition-all duration-200 ease-in-out z-50 ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
            >
                <div className="rounded-xl border border-zinc-100 bg-white p-1 shadow-lg ring-1 ring-black/5">
                    <button
                        onClick={() => switchLocale("en")}
                        className={`w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${locale === "en"
                            ? "bg-zinc-100 text-black font-medium"
                            : "text-zinc-600 hover:bg-zinc-50 hover:text-black"
                            }`}
                    >
                        <span className="text-base">🇬🇧</span>
                        English
                    </button>
                    <button
                        onClick={() => switchLocale("th")}
                        className={`w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${locale === "th"
                            ? "bg-zinc-100 text-black font-medium"
                            : "text-zinc-600 hover:bg-zinc-50 hover:text-black"
                            }`}
                    >
                        <span className="text-base">🇹🇭</span>
                        ไทย
                    </button>
                </div>
            </div>
        </div>
    );
}
