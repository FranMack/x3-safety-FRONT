"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProductImage {
  path: StaticImageData;
  title: string;
}

interface Props {
  gallery: ProductImage[];
}

export const Slider = ({ gallery }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full h-[90%] flex flex-col justify-center items-center  ">
      <div className="relative overflow-hidden rounded-[15px]  flex items-center w-[90%] h-[100%] border-[1px] border-primary border-collapse">
        <Image
          fill
          src={gallery[currentSlide].path}
          alt={gallery[currentSlide].title}
          className="absolute w-full h-full object-contain rounded-[15px]"
        />

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <FaChevronLeft className="text-2xl text-blue-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <FaChevronRight className="text-2xl text-blue-600" />
        </button>
      </div>

      <div className="flex justify-center mt-5 space-x-3">
        {gallery.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
