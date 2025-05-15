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
        <div className="flex items-center justify-end w-full h-full p-4 gap-2">
          <span className="flex items-center justify-center w-1/2 h-full p-4 gap-2 text-center text-sm">
            {t("promp")}
          </span>
        </div>
        <div className="flex items-center justify-center w-full h-full p-4 gap-2">
          <Link
            href="https://line.me/ti/p/buwWdN4vVx"
            target="_blank"
            className="flex items-center justify-center w-2/12 h-full p-4 gap-2 rounded-lg bg-white shadow-md transition-all duration-300 hover:bg-dark-100 hover:shadow-lg hover:scale-105 active:scale-95 active:bg-dark-200"
          >
            Click Now!
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 rounded-3xl">
        <div className="flex items-center justify-start w-full h-full p-2 gap-2">
          How To Rent
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
          <span>Contact : </span>
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
                  <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg rounded-t-3xl bg-dark text-white">
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
              2nd Floor
            </div>
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
              สำนักงานแบบแบ่งเช่า ที่จอดรถห้องละ 1 คัน
            </div>

            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ ห้อง 201 พื้นที่ 65.5 ตรม. *300 / ตร.ม. ไม่รวมไฟฟ้า
              </span>
            </div>

            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ ห้อง 202 พื้นที่ 35 ตรม. *400 / ตร.ม. รวมไฟฟ้า
              </span>
            </div>

            <div className="relative flex items-center justify-start w-full h-full p-4 gap-2 border-2 border-red-400 bg-red-50 text-md font-[600] rounded-lg">
              ❌ ห้อง 203 พื้นที่ 30 ตรม. *300 / ตร.ม. ไม่รวมไฟฟ้า
              <div className="absolute -top-2 right-2 bg-red-500 text-white text-sm font-[600] px-4 py-2 rounded-lg">
                เช่าแล้ว
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-center w-full lg:w-11/12 h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full lg:w-8/12 h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-xl font-[600]">
              3rd Floor
            </div>
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
              สำนักงานแบบเช่าทั้งชั้น ที่จอดรถ 2 คัน
            </div>

            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ สำนักงานแบบเช่าทั้งชั้น บนพื้นที่กว่า 368 ตร.ม เริ่มต้นเพียง
                300 / ตร.ม ไม่รวมค่าไฟฟ้า
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
              4th Floor
            </div>
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
              สำนักงานแบบเช่าทั้งชั้น ที่จอดรถ 2 คัน
            </div>

            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ สำนักงานแบบเช่าทั้งชั้น บนพื้นที่กว่า 368 ตร.ม เริ่มต้นเพียง
                300 / ตร.ม ไม่รวมค่าไฟฟ้า
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-center w-full lg:w-11/12 h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full lg:w-8/12 h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-xl font-[600]">
              9th Floor
            </div>
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
              สำนักงานแบบแบ่งเช่า ที่จอดรถห้องละ 1 คัน
            </div>

            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ ห้อง 901 พื้นที่ 27 ตรม. *400 / ตร.ม. รวมไฟฟ้า
              </span>
            </div>
            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ ห้อง 903 พื้นที่ 77.5 ตรม. *400 / ตร.ม. รวมไฟฟ้า
              </span>
            </div>
            <div className="relative flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-green-400 bg-green-50 text-md font-[600] rounded-lg">
              <span className="flex items-center justify-start w-full h-full p-2 gap-2">
                ✅ ห้อง 904 พื้นที่ 77 ตรม. *400 / ตร.ม. รวมไฟฟ้า
              </span>
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
