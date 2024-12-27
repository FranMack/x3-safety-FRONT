"use client";
import { LanguageContext } from "@/context/language.context";
import { MenuMobileContext } from "@/context/menuMobile.context";
import { getCookieLanguage } from "@/helpers/cookiesHelpers";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import britishFlag from "../../../public/british_flag.webp";
import logo from "../../../public/logo.png";
import spainFlag from "../../../public/spain_flag.webp";
import { FlagButton } from "./FlagButton";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const { toggleMenuMobile } = useContext(MenuMobileContext);

  const [scrollPosition, setScrolPosition] = useState<number>(0);

  const { language, setLanguage, onToggleLanguage } =
    useContext(LanguageContext);

  useEffect(() => {
    function sizeHandler() {
      setScrolPosition(window.scrollY);
    }

    setLanguage(getCookieLanguage() as string);
    window.addEventListener("scroll", sizeHandler);
    return window.addEventListener("scroll", sizeHandler);
  }, []);

  return (
    <nav
      className={`fixed ${
        scrollPosition > 1 ? "bg-opacity-90" : "lg:h-[12vh]"
      } transition-height  duration-500 h-[7vh]  flex items-center bg-backgroundColor text-black  w-full z-50 text-[1.7rem]`}
    >
      <div className="w-full h-[60%] px-5 flex justify-between items-center ">
        <Link href="/#home" className="h-full aspect-[4]  relative ">
          <Image className="absolute" src={logo} alt="logo" fill />
        </Link>
        <div className="hidden md:flex space-x-10 items-center text-[1.8rem]">
          <Link href="/#home" className="hover:text-primary py-2">
            {language === "spanish" ? "Inicio" : "Home"}
          </Link>

          <Link href="/products" className="hover:text-primary py-2">
            {language === "spanish" ? "Productos" : "Products"}
          </Link>
          <Link href="/#aboutUs" className="hover:text-primary py-2">
            {language === "spanish" ? "Nosotros" : "About Us"}
          </Link>

          <Link href="/#contact" className="hover:text-primary py-2">
            {language === "spanish" ? "Contacto" : "Contact"}
          </Link>
          <div className="flex space-x-5 h-[4.5vh] ">
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
        </div>

        <button
          className="md:hidden text-[2.5rem]"
          onClick={() => {
            toggleMenuMobile();
          }}
        >
          ☰
        </button>
      </div>
      <MobileMenu />
    </nav>
  );
};
