"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function UIIndex() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <div className="flex flex-col items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed rounded-[40px]">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <span>1</span>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <span>{t("header")}</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <span>3</span>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <span>4</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed bg-default rounded-[40px]">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <Swiper
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
            className="flex items-center justify-center w-full h-[400px] p-2 gap-2 overflow-auto border-2 border-dark border-dashed"
          >
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
              <SwiperSlide key={num}>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 bg-white rounded-3xl shadow-md border-2 border-dark border-dashed relative">
                  <Image
                    src={`/images/floorPlan/floor${num}.png`}
                    alt={`floor${num}`}
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    priority
                    unoptimized
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed rounded-[40px]">
        1
      </div>
    </div>
  );
}
