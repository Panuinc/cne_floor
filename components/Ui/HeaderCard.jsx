"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Right } from "../icons/icons";

export default function HeaderCard() {
  const t = useTranslations();
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full px-2 py-8 gap-2 overflow-hidden bg-white rounded-bl-3xl rounded-br-3xl">
      <Image
        src="/images/logoCompany/com-2.png"
        alt="com-2"
        width={450}
        height={450}
        className="absolute right-12 top-0 opacity-50 pointer-events-none hidden md:block"
      />

      <div className="flex items-center justify-start w-full h-full p-4 gap-2 text-5xl font-[600] bg-white bg-opacity-80 backdrop-blur lg:bg-transparent lg:backdrop-blur-none">
        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          {t("header")}
        </span>
      </div>

      <div className="flex items-center justify-start w-full h-full p-4 gap-2 text-3xl font-[600] bg-white bg-opacity-80 backdrop-blur lg:bg-transparent lg:backdrop-blur-none">
        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          {t("title")}
        </span>
      </div>

      <div className="flex items-center justify-start text-start w-full h-full p-4 gap-2 text-[16px] whitespace-pre-line bg-white bg-opacity-80 backdrop-blur lg:bg-transparent lg:backdrop-blur-none">
        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
          {t("promp")}
        </span>
      </div>

      <div className="flex items-center justify-center w-full h-full p-4 gap-2">
        <Link
          href="https://line.me/ti/p/buwWdN4vVx"
          target="_blank"
          className="flex items-center justify-center w-6/12 lg:w-2/12 h-full p-4 gap-2 rounded-lg bg-dark text-white shadow-md transition-all duration-300 hover:bg-dark-100 hover:shadow-lg hover:scale-105 active:scale-95 active:bg-dark-200"
        >
          {t("clickNow")}
        </Link>
        <div className="flex items-center justify-center p-4 gap-2 bg-white shadow-md  border-2 border-dark rounded-full">
          <Right />
        </div>
      </div>
    </div>
  );
}
