"use client";

import { usePathname, useRouter } from "next/navigation";
import { En, Th } from "@/components/icons/icons";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const [, locale, ...rest] = pathname.split("/");

  const other = locale === "en" ? "th" : "en";

  const switchTo = "/" + [other, ...rest].join("/");

  return (
    <button
      type="button"
      onClick={() => router.push(switchTo)}
      className="flex items-center justify-center gap-2"
      aria-label="Switch language"
    >
      <En className={locale === "en" ? "opacity-100" : "opacity-30"} />
      <Th className={locale === "th" ? "opacity-100" : "opacity-30"} />
    </button>
  );
}
