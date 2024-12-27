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

const menuItems = [
  { section: "Inicio", href: "/#home" },
  { section: "Productos", href: "/products" },
  { section: "Nosotros", href: "/#aboutUs" },
  { section: "Contacto", href: "/#contact" },
];

export const MobileMenu = () => {
  const { menuMobileOpen, toggleMenuMobile } = useContext(MenuMobileContext);

  return (
    <>
      <div
        onClick={toggleMenuMobile}
        className={`top-0 w-screen h-screen fixed ${
          menuMobileOpen ? "translate-x-0" : "translate-x-[200vw]"
        } bg-black opacity-50`}
      ></div>
      <div
        className={`fixed md:hidden w-1/2 h-screen flex flex-col justify-center items-center bg-backgroundColor z-50 top-0 ${
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
                {item.section}
              </Link>
            );
          })}

          <div className="flex space-x-8 h-[5vh] ">
            <FlagButton
              onClick={()=>{}}
              flag={spainFlag}
              country="span"
            />
            <FlagButton
               onClick={()=>{}}
              flag={britishFlag}
              country="england"
            />
          </div>
        </ul>
        <br />
        <hr className="w-[80%] border-b-1 border-primary" />
        <br />
        <div className=" w-[80%] flex justify-between mt-2">
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
