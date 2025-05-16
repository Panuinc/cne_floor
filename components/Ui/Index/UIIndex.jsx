"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeaderCard from "@/components/Ui/HeaderCard";
import HowToRent from "@/components/Ui/HowToRent";
import FloorPlanSlider from "@/components/Ui/FloorPlanSlider";
import RoomsSection from "@/components/Ui/RoomsSection";
import Interior from "../Interior";

export default function UIIndex() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <HeaderCard />
      <FloorPlanSlider onSelect={setSelectedImage} />
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl">
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
              className="absolute top-4 right-4 rounded-3xl w-10 h-10 p-2 bg-dark text-white shadow-md z-50"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center w-full h-full p-10 gap-2 bg-white">
        {""}
      </div>
      <HowToRent />

      <RoomsSection />

      <Interior />
    </div>
  );
}
