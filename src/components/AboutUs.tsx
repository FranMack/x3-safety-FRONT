"use client";
import { LanguageContext } from "@/context/language.context";
import { useScrollReveal } from "@/hooks/useScrollReveal ";
import { CheckIcon, MarksIcon } from "@/icons/icons";
import { useContext } from "react";
import { Title } from "./commons";

const title = "About Us";
const titulo = "Quienes somos";

const cardsInfo = [
  {
    icon: "",
    titulo: "Innovación",
    title: "Innovation",
    texto:
      "Constante para llegar más lejos siempre. Estamos a la vanguardia en cada una de nuestras áreas. La innovación es uno de nuestros mayores diferenciales, ya que trabajamos con creaciones únicas y personalizadas en caso de ser necesario.",
    text: "Constantly striving to go further. We are at the forefront in each of our areas. Innovation is one of our greatest differentiators, as we work with unique and customized creations when necessary.",
  },
  {
    icon: "",
    titulo: "Compromiso",
    title: "Commitment",
    texto:
      "Con nuevas ideas, pero manteniendo los mismos ideales. Estamos comprometidos con la innovación, el medio ambiente y el crecimiento permanente, manteniendo los altos estándares de calidad, seguridad y tecnología.",
    text: "With new ideas while keeping the same ideals. We are committed to innovation, the environment, and continuous growth, maintaining high standards of quality, safety, and technology.",
  },
  {
    icon: "",
    titulo: "Orientación ",
    title: "Guidance",
    texto:
      "Con cada colaborador, en cada industria. Acompañamos a nuestros clientes en sus actividades haciendo sus operaciones más seguras.",
    text: "With each collaborator, in every industry. We support our clients in their activities, making their operations safer.",
  },
];

export const AboutUs = () => {
  const { language } = useContext(LanguageContext);
  const refAboutUs = useScrollReveal<HTMLDivElement>("efectoReveal");
  return (
    <section
      ref={refAboutUs}
      id="aboutUs"
      className="h-auto w-screen pb-[10vh] bg-gray-100 py-[10vh] "
    >
      <div className="w-[80%] mx-auto">

      <Title title={language === "spanish" ? titulo : title} />
      </div>
      <div className=" w-[80%] min-h-[80vh]  mx-auto  ">
        <div className="w-full min-h-[20vh]  flex flex-col md:flex-row  mb-[5vh] gap-y-[5vh]  ">
          <div className="w-full md:w-[32%] min-h-[20vh]  flex justify-center items-center bg-primary bg-opacity-10 ">
            <div>
              <h3 className="text-[5rem] font-semibold text-primary text-center">
                X3 <span className="text-[#454344] text-[4.5rem]">SAFETY</span>
              </h3>
            </div>
          </div>
          <div className="w-full md:w-[68%]  min-h-[20vh] flex justify-center items-center md:px-[5%] py-[3%] gap-x-[1vw] ">
            <div className="hidden md:visible w-[250px] h-full ">
              <MarksIcon />
            </div>
            <p className="text-[1.8rem] md:text-[2rem]">
              Somos una empresa especializada en el desarrollo y fabricación de
              productos diseñados para mejorar y garantizar la seguridad
              operativa en diversos entornos profesionales. Con el objetivo de
              ofrecer las mejores soluciones, fabricamos nuestros productos bajo
              los máximos estándares normativos y políticas de calidad.
            </p>
          </div>
        </div>

        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-[2%]">
          {cardsInfo.map((item) => {
            return (
              <div
                key={item.title}
                className="min-h-[50vh] flex flex-col justify-start gap-y-[2vh] px-[10%] py-[10%] border border-primary border-l-4 border-collapse "
              >
                <div className="w-[16%] aspect-square">
                  <CheckIcon />
                </div>
                <h5 className=" text-[3rem] font-semibold text-primary">
                  {" "}
                  {language === "spanish" ? item.titulo : item.title}
                </h5>{" "}
                <p className="text-[1.8rem]">
                  {language === "spanish" ? item.texto : item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
