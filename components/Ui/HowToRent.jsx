"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HowToRent() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 bg-default">
      <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-3xl font-[600]">
        . . . {t("howToRent")} . . .
      </div>
      <div className="flex flex-row items-center justify-evenly w-full h-full p-2 gap-2">
        <div className="flex items-center justify-center min-w-40 min-h-40 p-2 gap-2 rounded-full bg-white shadow-md">
          <Image
            src="/images/icons/web.png"
            alt="web"
            priority
            width={125}
            height={125}
          />
        </div>
        <Link
          href="https://line.me/ti/p/buwWdN4vVx"
          target="_blank"
          className="flex items-center justify-center min-w-40 min-h-40 p-2 gap-2 rounded-full bg-white shadow-md animate-bounce cursor-pointer"
        >
          <Image
            src="/images/icons/contact.png"
            alt="contact"
            priority
            width={125}
            height={125}
          />
        </Link>
        <div className="flex items-center justify-center min-w-40 min-h-40 p-2 gap-2 rounded-full bg-white shadow-md">
          <Image
            src="/images/icons/po.png"
            alt="po"
            priority
            width={125}
            height={125}
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-2xl font-[600]">
        {t("description")}
      </div>

      <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-xl font-[600]">
        <span>{t("contact")}</span>
        <span>0909075310</span>
        <span>0896995678</span>
        <span>0816444464</span>
      </div>
    </div>
  );
}
