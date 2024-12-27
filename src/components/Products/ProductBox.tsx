"use client";
import { LanguageContext } from "@/context/language.context";
import { useScrollReveal } from "@/hooks/useScrollReveal ";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useContext } from "react";

interface Props {
  image: StaticImageData;
  alt: string;
  title: string;
  text: string;
  titulo: string;
  texto: string;
  botonNombre: string;
  buttonName: string;
  path: string;
}

export const ProductBox = ({
  image,
  alt,
  title,
  titulo,
  texto,
  text,
  buttonName,
  botonNombre,
  path,
}: Props) => {
  const { language } = useContext(LanguageContext);
  const refProductBox = useScrollReveal<HTMLDivElement>("efectoReveal");
  return (
    <div
      ref={refProductBox}
      className="relative w-full md:w-[48%] aspect-square h-auto sm:aspect-auto sm:h-[50vh] rounded-[15px] border border-collapse border-primary flex items-center"
    >
      <div className="relative z-20 w-[80%] md:w-[60%] px-[5%] flex flex-col gap-y-[2vh] items-start text-backgroundColor">
        <h5 className="text-[3rem]">
          {language === "spanish" ? titulo : title}
        </h5>
        <p className="text-[1.6rem] font-light">
          {language === "spanish" ? texto : text}
        </p>
        <div className="mt-[2vh] w-fit border-collapse hover-border">
          <Link
            href={`${path}`}
            className="text-[1.6rem]"
            target={path.includes("ficha") ? "_blank" : ""}
          >
            {language === "spanish" ? botonNombre : buttonName}
          </Link>
        </div>
      </div>
      <div className="absolute w-full h-full z-10 bg-black opacity-50 top-0 rounded-[15px]"></div>

      <Image
        fill
        src={image}
        alt={alt}
        className="absolute object-cover rounded-[15px] z-0"
      />
    </div>
  );
};
