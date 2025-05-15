"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function UIIndex() {
  const t = useTranslations();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { subtitle: "Floor 1", img: "1" },
    { subtitle: "Floor 2", img: "2" },
    { subtitle: "Floor 3", img: "3" },
    { subtitle: "Floor 4", img: "4" },
    { subtitle: "Floor 5", img: "5" },
    { subtitle: "Floor 6", img: "6" },
    { subtitle: "Floor 7", img: "7" },
    { subtitle: "Floor 8", img: "8" },
    { subtitle: "Floor 9", img: "9" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
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
      <div className="flex items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed bg-default rounded-3xl">
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
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-full p-2 gap-2 rounded-3xl overflow-auto shadow-md group bg-white cursor-pointer"
                  onClick={() =>
                    setSelectedImage(`/images/floorPlan/floor${item.img}.png`)
                  }
                >
                  <Image
                    src={`/images/floorPlan/floor${item.img}.png`}
                    alt={item.subtitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-xl rounded-t-3xl bg-dark text-white">
                    <div>{item.subtitle}</div>
                  </div>
                  <button className="absolute top-3 left-3 px-3 py-1 bg-dark text-white rounded-full shadow-md">
                    LEARN DETAILS
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

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl">
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
      <div className="flex flex-col items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed rounded-[40px]">
        1
      </div>
    </div>
  );
}
