"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Right } from "../icons/icons";

export default function HeaderCard() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-2 py-20 gap-2 border-2 border-dark">
      <div className="flex items-center justify-center w-full h-full p-4 gap-2 border-2 border-dark text-5xl font-[600]">
        <span>{t("header")}</span>
      </div>
      <div className="flex items-center justify-center w-full h-full p-4 gap-2 border-2 border-dark text-3xl font-[600]">
        <span>{t("title")}</span>
      </div>
      <div className="flex items-center justify-center w-full h-full p-4 gap-2 border-2 border-dark text-xl font-[600]">
        <span>{t("description")}</span>
      </div>
      <div className="flex items-center justify-center w-full h-full p-4 gap-2 border-2 border-dark text-sm text-center">
        {t("promp")}
      </div>
      <div className="flex items-center justify-center w-full h-full p-4 gap-2 border-2 border-dark">
        <Link
          href="https://line.me/ti/p/buwWdN4vVx"
          target="_blank"
          className="flex items-center justify-center w-2/12 h-full p-4 gap-2 border-2 border-dark rounded-lg bg-dark text-white shadow-md transition-all duration-300 hover:bg-dark-100 hover:shadow-lg hover:scale-105 active:scale-95 active:bg-dark-200"
        >
          {t("clickNow")}
        </Link>
        <div className="flex items-center justify-center p-4 gap-2 border-2 border-dark bg-white shadow-md rounded-full">
          <Right />
        </div>
      </div>
    </div>
  );
}
