"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Interior() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-2 bg-white rounded-tl-3xl rounded-tr-3xl">
      <div className="flex items-center justify-start h-full p-3 gap-2 bg-primary text-white text-xl font-[600] rounded-3xl">
        บรรยากาศภายใน
      </div>
      <div className="flex items-center justify-end w-full h-full p-2 gap-2 relative">
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
          className="max-w-[1200px] h-[450px]"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                onClick={() => onSelect(`/images/floorPlan/floor${i + 1}.png`)}
              >
                <Image
                  src={`/images/interior/interior-${i + 1}.jpg`}
                  alt={t(`interior-${i + 1}`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
