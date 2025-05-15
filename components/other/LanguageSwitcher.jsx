"use client";

import { usePathname, useRouter } from "next/navigation";
import { En, Th } from "@/components/icons/icons";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const [, locale, ...rest] = pathname.split("/");

  const nextLocale = locale === "en" ? "th" : "en";
  const switchTo = "/" + [nextLocale, ...rest].join("/");

  const Icon = locale === "en" ? En : Th;

  return (
    <button
      type="button"
      onClick={() => router.push(switchTo)}
      className="flex items-center justify-center px-2"
      aria-label="Switch language"
    >
      <Icon />
    </button>
  );
}
