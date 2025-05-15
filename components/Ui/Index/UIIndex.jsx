"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function UIIndex() {
  const t = useTranslations();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
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

      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 rounded-3xl">
        <div className="flex items-center justify-start w-full h-full p-2 gap-2">
          {t("howToRent")}
        </div>
        <div className="flex flex-row items-center justify-evenly w-full h-full p-2 gap-2">
          <div className="flex items-center justify-center min-w-38 min-h-38 p-2 gap-2 rounded-full bg-white shadow-md">
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
            className="flex items-center justify-center min-w-38 min-h-38 p-2 gap-2 rounded-full bg-white shadow-md animate-bounce cursor-pointer"
          >
            <Image
              src="/images/icons/contact.png"
              alt="contact"
              priority
              width={125}
              height={125}
            />
          </Link>
          <div className="flex items-center justify-center min-w-38 min-h-38 p-2 gap-2 rounded-full bg-white shadow-md">
            <Image
              src="/images/icons/po.png"
              alt="po"
              priority
              width={125}
              height={125}
            />
          </div>
        </div>
        <div className="flex items-center justify-end w-full h-full p-2 gap-2">
          <span>{t("contact")}</span>
          <span>0909075310</span>
          <span>0896995678</span>
          <span>0816444464</span>
        </div>
      </div>

      <div className="flex items-center justify-center w-full min-h-[500px] p-2 gap-2 bg-default rounded-3xl">
        <div className="w-11/12 h-full p-2 gap-2">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
            className="w-full h-[420px]"
          >
            <SwiperSlide>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => setSelectedImage("/images/floorPlan/floor1.png")}
              >
                <Image
                  src="/images/floorPlan/floor1.png"
                  alt={t("floor1")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
                  <div>{t("floor1")}</div>
                </div>
                <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                  {t("learnDetails")}
                </button>
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark text-white rounded-full shadow-md">
                  →
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => setSelectedImage("/images/floorPlan/floor2.png")}
              >
                <Image
                  src="/images/floorPlan/floor2.png"
                  alt={t("floor2")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
                  <div>{t("floor2")}</div>
                </div>
                <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                  {t("learnDetails")}
                </button>
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark text-white rounded-full shadow-md">
                  →
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => setSelectedImage("/images/floorPlan/floor3.png")}
              >
                <Image
                  src="/images/floorPlan/floor3.png"
                  alt={t("floor3")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
                  <div>{t("floor3")}</div>
                </div>
                <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                  {t("learnDetails")}
                </button>
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark text-white rounded-full shadow-md">
                  →
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => setSelectedImage("/images/floorPlan/floor4.png")}
              >
                <Image
                  src="/images/floorPlan/floor4.png"
                  alt={t("floor4")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
                  <div>{t("floor4")}</div>
                </div>
                <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                  {t("learnDetails")}
                </button>
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark text-white rounded-full shadow-md">
                  →
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => setSelectedImage("/images/floorPlan/floor5.png")}
              >
                <Image
                  src="/images/floorPlan/floor5.png"
                  alt={t("floor5")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
                  <div>{t("floor5")}</div>
                </div>
                <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                  {t("learnDetails")}
                </button>
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark text-white rounded-full shadow-md">
                  →
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => setSelectedImage("/images/floorPlan/floor6.png")}
              >
                <Image
                  src="/images/floorPlan/floor6.png"
                  alt={t("floor6")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
                  <div>{t("floor6")}</div>
                </div>
                <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                  {t("learnDetails")}
                </button>
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark text-white rounded-full shadow-md">
                  →
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => setSelectedImage("/images/floorPlan/floor7.png")}
              >
                <Image
                  src="/images/floorPlan/floor7.png"
                  alt={t("floor7")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
                  <div>{t("floor7")}</div>
                </div>
                <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                  {t("learnDetails")}
                </button>
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark text-white rounded-full shadow-md">
                  →
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => setSelectedImage("/images/floorPlan/floor8.png")}
              >
                <Image
                  src="/images/floorPlan/floor8.png"
                  alt={t("floor8")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
                  <div>{t("floor8")}</div>
                </div>
                <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                  {t("learnDetails")}
                </button>
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark text-white rounded-full shadow-md">
                  →
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => setSelectedImage("/images/floorPlan/floor9.png")}
              >
                <Image
                  src="/images/floorPlan/floor9.png"
                  alt={t("floor9")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
                  <div>{t("floor9")}</div>
                </div>
                <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                  {t("learnDetails")}
                </button>
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark text-white rounded-full shadow-md">
                  →
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
              unoptimized
              priority
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black rounded-full px-3 py-1 shadow-md z-50"
            >
              ✕
            </button>
          </div>
        </div>
      )}

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

            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ {t("room201")}
              </span>
            </div>

            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ {t("room202")}
              </span>
            </div>

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

            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ {t("room901")}
              </span>
            </div>
            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ {t("room903")}
              </span>
            </div>
            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ {t("room904")}
              </span>
            </div>
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
    </div>
  );
}
