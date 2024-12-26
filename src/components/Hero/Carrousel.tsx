"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
const carouselImages = [

    {
      path: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc",
      title: "Ergonomía y seguridad",
      secondTitle:"Pensado para proteger lo esencial."
    },
    {
      path: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
      title: "Herramientas que cuidan",
      secondTitle:"Diseño pensado para proteger lo esencial."
    },
    {
      path: "https://images.unsplash.com/photo-1581783898377-1c85bf937427",
      title: "Protege lo más importante",
      secondTitle:"Diseño pensado para proteger lo esencial."
    },
  ];
export const Carrousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
     useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(timer);
      }, []);
    
  return (
    <>
     {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-start transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {/* Imagen de fondo */}
                <figure className="absolute inset-0 w-full h-full brightness-50 ">
                  <Image
                    fill
                    className="w-full h-full object-cover"
                    src={image.path}
                    alt={image.title}
                  />
                </figure>
    
                {/* Texto superpuesto */}
                <div className="relative h-[40%] flex flex-col justify-center px-[5%] pt-[10vh] z-20 text-white  ">
                  <h2 className="mb-[1vh] text-[2rem] text-primary text-opacity-75 font-medium">X3-SAFETY</h2>
                  <h3 className="text-[4rem] lg:text-[6rem] lg:leading-[6.5rem]  font-semibold  uppercase ">
                    {image.title}
                  </h3>
                  <h3 className="text-[3rem] lg:text-[4rem] text-gray-400 font-extralight ">{image.secondTitle}</h3>
                  <Link href="/#contact" className="bg-primary mt-[4vh] w-fit px-6 py-4 rounded-lg text-[1.8rem] hover:bg-opacity-60 transition-all duration-500">Contactanos</Link>
                </div>
              </div>
            ))}</>
  )
}
