"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal ";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

export const ContactInfo = () => {
  const refContactInfo = useScrollReveal<HTMLDivElement>("efectoReveal");

  return (
    <div ref={refContactInfo}>
      <h3 className="text-[2.5rem] text-primary font-semibold">
        ¡Estamos aquí para ayudarte!
      </h3>
      <br />
      <p className="text-[1.8rem]">
        Si necesitas más información sobre nuestras herramientas o tienes alguna
        consulta, no dudes en contactarnos. Puedes hacerlo a través del
        formulario de contacto o, si prefieres, por los teléfonos y correos
        electrónicos que encontrarás a continuación. Nuestro equipo estará
        encantado de atenderte.
      </p>
      <br />
      <h5 className="text-[1.8rem] font-semibold text-primary">Contacto</h5>
      <ul className="flex flex-col gap-y-[2vh] mt-[2vh] text-[1.5rem]">
        <li className="flex gap-x-[1vw]">
          <MdPhone size={20} className="text-primary" />{" "}
          <span>+34 345 12548</span>
        </li>
        <li className="flex gap-x-[1vw]">
          <FaWhatsapp size={20} className="text-primary" />{" "}
          <span>+34 345 12548</span>
        </li>
        <li className="flex gap-x-[1vw]">
          <FaEnvelope size={20} className="text-primary" />{" "}
          <span>info@x3safety.com</span>
        </li>
      </ul>
    </div>
  );
};
