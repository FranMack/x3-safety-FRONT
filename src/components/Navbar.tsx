"use client";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../public/logo.png";
import Link from "next/link";
const navItems = {
  products: {
    label: "Products",
    items: [
      { id: 1, name: "Bastón P&P" },
      { id: 2, name: "Hit Safe" },
      {
        id: 3,
        name: "Truck Lock",
      },
      {
        id: 4,
        name: "Iron Grip",
      },
      {
        id: 5,
        name: "Roll Can Interior",
      },
    ],
  },
};

export const Navbar = () => {
  const [hoveredNav, setHoveredNav] = useState(null);
  return (
    <nav className="fixed h-[7vh] lg:h-[12vh] flex items-center bg-backgroundColor text-black  w-full z-50 text-[1.7rem]">
      <div className="w-full h-[60%] px-5 flex justify-between items-center ">
        <Link  href="/#home"className="h-full aspect-[4]  relative ">
          <Image className="absolute" src={logo} alt="logo" fill />
        </Link>
        <div className="hidden md:flex space-x-10">
          <a href="/#home" className="hover:text-primary py-2">
            Home
          </a>

     

<Link href="/products" className="hover:text-primary py-2">
            Productos
          </Link>

          <Link href="/#contact" className="hover:text-primary py-2">
            Contact
          </Link>
          <Link href="/#aboutUs" className="hover:text-primary py-2">
           About Us
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {/*isMenuOpen && (
          <div className="md:hidden bg-gray-700 p-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="hover:text-gray-300">Home</a>
              {Object.entries(navItems).map(([key, item]) => (
                <div key={key} className="space-y-1">
                  <a href={`#${key}`} className="hover:text-gray-300">{item.label}</a>
                  <div className="pl-4 space-y-1">
                    {item.items.map((subItem, index) => (
                      <a
                        key={index}
                        href={`#${key}-${index}`}
                        className="block text-sm text-gray-300 hover:text-white"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a href="#location" className="hover:text-gray-300">Location</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
              <a href="#faq" className="hover:text-gray-300">FAQ</a>
            </div>
          </div>
        )*/}
    </nav>
  );
};
