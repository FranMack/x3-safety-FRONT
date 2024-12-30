"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import britishFlag from "../../../public/british_flag.webp";
import logo from "../../../public/favicon.png";
import spainFlag from "../../../public/spain_flag.webp";
import { FlagButton } from "./FlagButton";

import { MenuMobileContext } from "@/context/menuMobile.context";
import { useContext } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LanguageContext } from "@/context/language.context";

const menuItems = [
  { section:"Home",seccion: "Inicio", href: "/#home" },
  { section:"Products",seccion: "Productos", href: "/products" },
  { section:"About Us",seccion: "Nosotros", href: "/#aboutUs" },
  { section:"Contact",seccion: "Contacto", href: "/#contact" },
];

export const MobileMenu = () => {
  const { menuMobileOpen, toggleMenuMobile } = useContext(MenuMobileContext);
  const { language, onToggleLanguage } =
    useContext(LanguageContext);

  return (
    <>
      <div
        onClick={toggleMenuMobile}
        className={`top-0 w-screen h-screen fixed ${
          menuMobileOpen ? "translate-x-0" : "translate-x-[200vw]"
        } bg-black opacity-50`}
      ></div>
      <div
        className={`fixed lg:hidden w-1/2 h-screen flex flex-col justify-center items-center bg-backgroundColor z-50 top-0 ${
          menuMobileOpen ? "translate-x-0" : "translate-x-[200vw]"
        } right-0 transition-transform duration-1000`}
      >
        <IoMdClose
          onClick={toggleMenuMobile}
          className="absolute top-0 right-0 text-[3rem]"
        />

        <Image
          src={logo}
          alt="logo"
          className="absolute w-[60%] aspect-square bottom-0  -z-0 opacity-20"
        />
        <hr className="w-[80%] border-b-1 border-primary" />
        <br />
        <ul className="flex flex-col items-center gap-y-[3vh] text-[2rem] ">
          {menuItems.map((item) => {
            return (
              <Link
                onClick={toggleMenuMobile}
                key={item.href}
                href={item.href}
                className="hover:text-primary py-2"
              >
                {language==="spanish"?item.seccion:item.section}
              </Link>
            );
          })}

        
          <div className="flex space-x-8 h-[5vh] md:h-[8vh]">
            <div
              className={`h-full ${language !== "spanish" ? "opacity-50" : ""}`}
            >
              <FlagButton
                onClick={onToggleLanguage}
                flag={spainFlag}
                country="span"
              />
            </div>
            <div
              className={`h-full ${language === "spanish" ? "opacity-50" : ""}`}
            >
              <FlagButton
                onClick={onToggleLanguage}
                flag={britishFlag}
                country="england"
              />
            </div>
          </div>

          
        </ul>
        <br />
        <hr className="w-[80%] border-b-1 border-primary" />
        <br />
        <div className=" w-[80%] md:w-[50%] flex justify-between mt-2">
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaFacebook className="text-primary text-[3rem]" />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter className="text-primary text-[3rem]" />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin className="text-primary text-[3rem]" />
          </a>
        </div>
      </div>
    </>
  );
};
