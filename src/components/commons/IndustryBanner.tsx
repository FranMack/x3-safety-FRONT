"use client";
import { LanguageContext } from "@/context/language.context";
import {
  AgricultureIcon,
  ChemestryIcon,
  IndustryIcon,
  MineryIcon,
  OilIcon,
  PortIcon,
} from "@/icons/icons";
import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Title } from "./Title";

const industries = [
  {
    title: "Minery",
    titulo: "Minera",
    icon: <MineryIcon />,
  },
  {
    title: "Industry",
    titulo: "Metalmecánica",
    icon: <IndustryIcon />,
  },
  {
    title: "Oil",
    titulo: "Petrolera",
    icon: <OilIcon />,
  },
  {
    title: "Port",
    titulo: "Portuaría",
    icon: <PortIcon />,
  },
  {
    title: "Agriculture",
    titulo: "Agrícola",
    icon: <AgricultureIcon />,
  },
  {
    title: "Chemistry",
    titulo: "Química",
    icon: <ChemestryIcon />,
  },
];

const titulo = "Presente en las principales industrias ";
const title = "Present in the main industries";

export const IndustryBanner = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className="w-full px-[10%]">
        <Title title={language === "spanish" ? titulo : title} />
      </div>

      <div className="mx-auto w-[80%] h-[20vh] md:h-[30vh] flex justify-center gap-x-[2vw] items-center text-white stroke-primary">
        <Marquee
          speed={50}
          gradient={false}
          className="h-[80%] w-[100%]  overflow-hidden "
        >
          {industries.map((item) => {
            return (
              <div
                key={item.title}
                className="h-[10vh] md:h-[20vh] lg:h-[15vh]  flex flex-col items-center mr-[5vw]"
              >
                {item.icon}
                <br />
                <p className="text-[1.5rem] text-primary font-semibold">
                  {language === "spanish" ? item.titulo : item.title}
                </p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </>
  );
};
