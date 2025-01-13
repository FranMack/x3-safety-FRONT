"use client";
import { LanguageContext } from "@/context/language.context";
import { useScrollReveal } from "@/hooks/useScrollReveal ";
import Image from "next/image";
import { useContext } from "react";
import { FaChevronRight } from "react-icons/fa";
import operario from "../../public/operario.png";
import { Title } from "./commons";

const title = "About Us";
const titulo = "Quienes somos";

const secondTitle = "Eliminate the risk of operational accidents";
const segundotitulo = "Eliminar el riesgo de accidentes operativos.";

const text =
  "X3Safety is a company specialized in developing and manufacturing products to improve and guarantee operational safety in various economic activities.Aimed at providing better operating conditions, the products are manufactured in accordance with the  main technical standards and follow strict quality control to guarantee manufacturing excellence.";
const texto =
  "X3Safety es una empresa especializada en el desarrollo y fabricación de productos para mejorar y garantizar la seguridad operativa en diversas actividades económicas. Con el objetivo de brindar mejores condiciones de operación, los productos se fabrican de acuerdo con los principales estándares técnicos y siguen un estricto control de calidad para garantizar la excelencia en la fabricación.";

const misionItems = [
  {
    item: "Prevents workplace accidents and injuries",
    articulo: "Previene accidentes e incidentes en el lugar de trabajo",
  },
  {
    item: "Increases operational efficiency",
    articulo: "Incrementa la eficiencia operativa",
  },
  {
    item: "Reduces equipment damage and maintenance costs",
    articulo: "Reduce daños al equipo y costos de mantenimiento",
  },
  {
    item: "Ensures compliance with safety regulations",
    articulo: "Garantiza el cumplimiento de las normativas de seguridad",
  },
];

export const AboutUs = () => {
  const { language } = useContext(LanguageContext);
  const refAboutUs = useScrollReveal<HTMLDivElement>("efectoReveal");
  return (
    <section id="aboutUs" className="h-auto w-screen pb-[10vh] bg-gray-100">
      <div className="w-[80%] mx-auto">
        <Title title={language === "spanish" ? titulo : title} />
      </div>
      <div className=" w-full md:w-[80%] h-auto mx-auto ">
        <div
          ref={refAboutUs}
          className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-primary bg-opacity-20 shadow-lg  rounded-br-[50px]"
        >
          <div className="relative w-full  h-[40vh] md:h-[80vh]">
            <Image
              src={operario}
              alt="Safe Load Handling"
              fill
              className="absolute"
            />
          </div>
          <div className=" h-auto flex flex-col justify-start gap-y-[2vh] items-start py-[5%] lg:py-[10%] px-[10%] md:px[5%] ">
            <h3 className="text-[2.4rem] lg:text-[3rem] font-bold ">
              {language === "spanish" ? segundotitulo : secondTitle}
            </h3>
            <p className="mb-2 md:mb-4 text-[1.5rem] ">
              {language === "spanish" ? texto : text}
            </p>
            <ul className="space-y-8 text-[1.5rem]">
              {misionItems.map((item) => {
                return (
                  <li key={item.articulo} className="flex items-center">
                    <FaChevronRight className=" mr-2 text-primary" />
                    <span>
                      {language === "spanish" ? item.articulo : item.item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
