"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useScrollReveal } from "@/hooks/useScrollReveal ";
import Link from "next/link";

interface ProductImage {
  image: StaticImageData;
  title:string,
  text?:string
  path:string
}

interface Props {
  gallery: ProductImage[];
 
}

export const ProductSlider = ({ gallery }: Props) => {
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

  const refProductSlider=useScrollReveal<HTMLDivElement>("revealFromBottom");
  const refTitle=useScrollReveal<HTMLDivElement>("title-reveal");

  return (
    <div ref={refProductSlider} className="md:w-[100%] h-[80vh] flex flex-col justify-center items-center  ">
      <div className="relative overflow-hidden rounded-[15px]  flex items-center w-[100%] h-[100%] border-[1px] border-primary border-collapse bg-black bg-opacity-80">
        
        <div className="h-[50%] w-[40%] ml-[5%] flex flex-col justify-center gap-y-[2vh] z-10 text-white">
          <strong ref={refTitle} className="bg-primary w-fit px-3 py-3 text-[2rem] text-black font-medium">Destacado</strong>
          <h4 className="text-[4rem]">{gallery[currentSlide].title}</h4>
          <p  className="text-[1.6rem] w-[80%]">{gallery[currentSlide].text}</p>

          <div className="mt-[3vh] w-fit border-collapse border-b-2 border-white">

          <Link href={gallery[currentSlide].path} className="text-[1.6rem] "> VER PRODUCTO</Link>
          </div>

        </div>
        
        <Image
          fill
          src={gallery[currentSlide].image}
          alt={gallery[currentSlide].title}
          className="absolute w-full h-full object-cover rounded-[15px]"
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

        <div className="absolute bottom-3 right-4 flex justify-center mt-5 space-x-3">
        {gallery.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full  ${
              currentSlide === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      </div>

     
    </div>
  );
};
