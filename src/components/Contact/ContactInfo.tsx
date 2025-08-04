"use client";
import { LanguageContext } from "@/context/language.context";
import { useScrollReveal } from "@/hooks/useScrollReveal ";
import Link from "next/link";
import { useContext } from "react";
import { FaEnvelope /*FaWhatsapp*/ } from "react-icons/fa";

const titulo = "Comunicate con nosotros";

const texto =
  "Envianos tu consulta y a la brevedad nos comunicaremos. Si necesitas más información sobre nuestras herramientas o tenes alguna consulta, no dudes en contactarnos. Podes comunicarte a nuestros teléfonos y correos.";

const title = "Contact us";

const text =
  "Send us your query and we will contact you as soon as possible. If you need more information about our tools or have any questions, do not hesitate to contact us. You can contact our phones and emails.";

export const ContactInfo = () => {
  const { language } = useContext(LanguageContext);
  const refContactInfo = useScrollReveal<HTMLDivElement>("efectoReveal");

  return (
    <div ref={refContactInfo}>
      <h3 className="text-[2.5rem] text-primary font-semibold">
        {language === "spanish" ? titulo : title}
      </h3>
      <br />
      <p className="text-[1.8rem]">{language === "spanish" ? texto : text}</p>
      <br />
      <h5 className="text-[1.8rem] font-semibold text-primary">
        {" "}
        {language === "spanish" ? "Contacto" : "Contact"}
      </h5>
      <ul className="flex flex-col gap-y-[2vh] mt-[2vh] text-[1.5rem]">
        {/*<li className="flex gap-x-[1vw]">
          <MdPhone size={20} className="text-primary" />{" "}
          <span>+54 9 3417-459785</span>
        </li>
        <Link href="https://wa.me/5493417459785" className="flex gap-x-[1vw]">
          <FaWhatsapp size={20} className="text-primary" />{" "}
          <span>+54 9 3417-459785</span>
        </Link>*/}
        <Link href="mailto:sales@x3safety.com" className="flex gap-x-[1vw]">
          <FaEnvelope size={20} className="text-primary" />{" "}
          <span>sales@x3safety.com</span>
        </Link>
      </ul>
    </div>
  );
};
