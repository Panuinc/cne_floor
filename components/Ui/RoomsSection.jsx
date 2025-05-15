"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function RoomsSection() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 rounded-3xl">
      <div className="flex flex-col lg:flex-row items-start justify-center w-full lg:w-11/12 h-full p-2 gap-2">
        <div className="group flex items-center justify-center w-full lg:w-4/12 h-full p-2 overflow-hidden">
          <Image
            src="/images/floorPlan/floor2.png"
            alt="floor2"
            width={300}
            height={300}
            priority
            className="transition-transform duration-300 group-hover:scale-150 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-8/12 h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-xl font-[600]">
            {t("secondFloor")}
          </div>
          <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
            {t("dividedOffice")}
          </div>
          {["room201", "room202"].map(key => (
            <div
              key={key}
              className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg"
            >
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ {t(key)}
              </span>
            </div>
          ))}
          <div className="relative flex items-center justify-start w-full h-full p-4 gap-2 border-2 border-red-400 bg-red-50 text-md font-[600] rounded-lg">
            ❌ {t("room203")}
            <div className="absolute -top-2 right-2 bg-red-500 text-white text-sm font-[600] px-4 py-2 rounded-lg">
              {t("rented")}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center w-full lg:w-11/12 h-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full lg:w-8/12 h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-xl font-[600]">
            {t("thirdFloor")}
          </div>
          <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
            {t("wholeFloorOffice")}
          </div>
          <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
            <span className="flex items-center justify-start w-full h-full p-2 gap-2">
              ✅ {t("wholeFloorDesc")}
            </span>
          </div>
        </div>
        <div className="group flex items-center justify-center w-full lg:w-4/12 h-full p-2 overflow-hidden">
          <Image
            src="/images/floorPlan/floor4.png"
            alt="floor4"
            width={300}
            height={300}
            priority
            className="transition-transform duration-300 group-hover:scale-150 rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center w-full lg:w-11/12 h-full p-2 gap-2">
        <div className="group flex items-center justify-center w-full lg:w-4/12 h-full p-2 overflow-hidden">
          <Image
            src="/images/floorPlan/floor2.png"
            alt="floor2"
            width={300}
            height={300}
            priority
            className="transition-transform duration-300 group-hover:scale-150 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-8/12 h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-xl font-[600]">
            {t("fourthFloor")}
          </div>
          <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
            {t("wholeFloorOffice")}
          </div>
          <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
            <span className="flex items-center justify-start w-full h-full p-2 gap-2">
              ✅ {t("wholeFloorDesc")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center w-full lg:w-11/12 h-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full lg:w-8/12 h-full p-2 gap-2">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-xl font-[600]">
            {t("ninthFloor")}
          </div>
          <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
            {t("dividedOffice")}
          </div>
          {["room901", "room903", "room904"].map(key => (
            <div
              key={key}
              className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg"
            >
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ {t(key)}
              </span>
            </div>
          ))}
          <div className="relative flex items-center justify-start w-full h-full p-4 gap-2 border-2 border-red-400 bg-red-50 text-md font-[600] rounded-lg">
            ❌ {t("room905")}
            <div className="absolute -top-2 right-2 bg-red-500 text-white text-sm font-[600] px-4 py-2 rounded-lg">
              {t("rented")}
            </div>
          </div>
        </div>
        <div className="group flex items-center justify-center w-full lg:w-4/12 h-full p-2 overflow-hidden">
          <Image
            src="/images/floorPlan/floor9.png"
            alt="floor9"
            width={300}
            height={300}
            priority
            className="transition-transform duration-300 group-hover:scale-150 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
