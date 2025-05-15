"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeaderCard() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-2 py-20 gap-2 border-2 border-default rounded-3xl">
      <div className="flex items-center justify-end w-full h-full p-4 gap-2 text-5xl font-[600]">
        <span>{t("header")}</span>
      </div>
      <div className="flex items-center justify-center w-full h-full p-4 gap-2 text-3xl font-[600]">
        <span>{t("title")}</span>
      </div>
      <div className="flex items-center justify-end w-full h-full p-4 gap-2 text-xl font-[600]">
        <span>{t("description")}</span>
      </div>
      <div className="flex items-center justify-center w-full h-full p-4 gap-2">
        <span className="flex items-center justify-start w-full h-full p-4 gap-2 text-sm whitespace-pre-line">
          {t("promp")}
        </span>
      </div>
      <div className="flex items-center justify-center w-full h-full p-4 gap-2">
        <Link
          href="https://line.me/ti/p/buwWdN4vVx"
          target="_blank"
          className="flex items-center justify-center w-2/12 h-full p-4 gap-2 rounded-lg bg-white shadow-md transition-all duration-300 hover:bg-dark-100 hover:shadow-lg hover:scale-105 active:scale-95 active:bg-dark-200"
        >
          {t("clickNow")}
        </Link>
      </div>
    </div>
  );
}
