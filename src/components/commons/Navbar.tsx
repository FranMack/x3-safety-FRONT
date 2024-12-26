"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import britishFlag from "../../../public/british_flag.webp";
import spainFlag from "../../../public/spain_flag.webp";
import { FlagButton } from "./FlagButton";
import { MobileMenu } from "./MobileMenu";
import { MenuMobileContext } from "@/context/menuMobile.context";

export const Navbar = () => {

  const {toggleMenuMobile}=useContext(MenuMobileContext)


  const [scrollPosition, setScrolPosition] = useState<number>(0);
  useEffect(() => {
    function sizeHandler() {
      setScrolPosition(window.scrollY);
    }
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
            Inicio
          </Link>

          <Link href="/products" className="hover:text-primary py-2">
            Productos
          </Link>
          <Link href="/#aboutUs" className="hover:text-primary py-2">
            Nosotros
          </Link>

          <Link href="/#contact" className="hover:text-primary py-2">
            Contacto
          </Link>
          <div className="flex space-x-5 h-[4.5vh] ">
            <FlagButton flag={spainFlag} country="span" />
            <FlagButton flag={britishFlag} country="england" />
          </div>
        </div>

        <button
          className="md:hidden text-[2.5rem]"
          onClick={()=>{toggleMenuMobile()}}
        >
          ☰
        </button>
      </div>
      <MobileMenu />
    </nav>
  );
};
