"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FloorPlanSlider({ onSelect }) {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-center w-full min-h-[500px] p-2 gap-2 bg-default rounded-tl-3xl rounded-tr-3xl">
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
          className="w-[1200px] h-[450px]"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => onSelect(`/images/floorPlan/floor${i + 1}.png`)}
              >
                <Image
                  src={`/images/floorPlan/floor${i + 1}.png`}
                  alt={t(`floor${i + 1}`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
                  <div>{t(`floor${i + 1}`)}</div>
                </div>
                <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                  {t("learnDetails")}
                </button>
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark text-white rounded-full shadow-md">
                  →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
