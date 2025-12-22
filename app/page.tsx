"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Simple cookie parser
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const savedLocale = getCookie('NEXT_LOCALE');

    // Redirect to saved locale or default to 'en'
    if (savedLocale === 'th') {
      router.replace("/th");
    } else {
      router.replace("/en");
    }
  }, [router]);

  return null;
}
