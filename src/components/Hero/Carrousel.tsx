"use client";
import { LanguageContext } from "@/context/language.context";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import banner3 from "../../../public/hero/banner1.webp";
import banner2 from "../../../public/hero/banner2.webp";
import banner1 from "../../../public/hero/banner3.webp";
import mobileBanner1 from "../../../public/mobile/homeSlider/banner1_mobiile.webp";
import mobileBanner2 from "../../../public/mobile/homeSlider/banner2_mobiile.webp";
import mobileBanner3 from "../../../public/mobile/homeSlider/banner3_mobiile.webp";


const carouselImages = [
  {
    path: banner1,
    pathMobile: mobileBanner1,
    title: "Herramientas que cuidan tus mano",
    secondTitle: "From Argentina to the world",
    titulo: "Herramientas que cuidan tus manos",
    segundoTitulo: "De Argentina, al mundo",
  },
  {
    path: banner2,
    pathMobile: mobileBanner2,
    title: "Design, precision and protection",
    secondTitle: "We develop solutions for demanding environments",
    titulo: "Diseño, precisión y protección",
    segundoTitulo: "Desarrollamos soluciones para entornos exigentes",
  },
  {
    path: banner3,
    pathMobile: mobileBanner3,
    title: "For every task, a tool to protect you",
    secondTitle: "Design thought to protect what matters most.",
    titulo: "Protección a medida para cada tarea",
    segundoTitulo: "Diseñadas para proteger lo esencial",
  },
];

export const Carrousel = () => {
  const { language } = useContext(LanguageContext);

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
          <figure className="absolute hidden md:block inset-0 w-full h-full brightness-800 ">
            <Image
              fill
              className="w-full h-full object-cover"
              src={image.path}
              alt={image.title}
            />
          </figure>
          <figure className="absolute md:hidden inset-0 w-full h-full brightness-800 ">
            <Image
              fill
              className="w-full h-full object-cover"
              src={image.pathMobile}
              alt={image.title}
            />
          </figure>

          {/* Texto superpuesto */}
          <div className="relative h-[40%] flex flex-col justify-center px-[5%] pt-[10vh] z-20 text-white  ">
            <h2 className="mb-[1vh] text-[2rem] text-primary text-opacity-75 font-medium">
              X3-SAFETY
            </h2>
            <h3 className="text-[4rem] lg:text-[6rem] lg:leading-[6.5rem]  font-semibold  uppercase ">
              {language === "spanish" ? image.titulo : image.title}
            </h3>
            <h3 className="text-[3rem] lg:text-[4rem] text-gray-400 font-extralight ">
              {" "}
              {language === "spanish" ? image.segundoTitulo : image.secondTitle}
            </h3>
            <Link
              href="/#contact"
              className="bg-primary mt-[4vh] w-fit px-6 py-4 rounded-lg text-[1.8rem] hover:bg-opacity-60 transition-all duration-500"
            >
              {language === "spanish" ? "Contactanos" : "Contact Us"}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
