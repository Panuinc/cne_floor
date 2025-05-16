"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeaderCard from "@/components/Ui/HeaderCard";
import HowToRent from "@/components/Ui/HowToRent";
import FloorPlanSlider from "@/components/Ui/FloorPlanSlider";
import RoomsSection from "@/components/Ui/RoomsSection";

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
      <HowToRent />

      <RoomsSection />
    </div>
  );
}
