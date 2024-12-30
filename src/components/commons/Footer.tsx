import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../../public/logo.png";
import { cookies } from "next/headers";

const links = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Products",
    path: "#products",
  },
  {
    title: "About Us",
    path: "#aboutUs",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const Footer = () => {
  const cookieStore=cookies()
      const language=cookieStore.get("language")?.value ?? "spanish"
  return (
    <footer className="relative z-50 bg-backgroundColor text-black  h-[90vh] lg:h-[50vh] text-[1.5rem] ">
      <div className="w-full h-[90%] md:h-[80%] flex items-center  ">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 ">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-1/2 md:w-[70%] aspect-[3.31] ">
              <Image
                fill
                src={logo}
                alt="Company Logo"
                className="absolute h-12 w-auto mb-4 rounded"
              />
            </div>
           
          </div>

          <div className="flex flex-col items-center justify-center gap-y-[1vh] text-[1.5rem] lg:text-[1.6rem] text-gray-400">
            <h3 className="text-[1.6rem]  lg:text-[1.8rem] font-bold mb-4 text-black">{language==="spanish"?"Contacto":"Contact Us"}</h3>
            <div className="flex space-x-2 items-center mb-3  ">
              <FaPhone className="mr-2 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex space-x-2 items-center mb-3">
              <FaEnvelope className="mr-2 text-primary" />
              <span>info@company.com</span>
            </div>
            <div className="flex space-x-6 mt-2">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaFacebook className="text-primary" size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter className="text-primary" size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin className="text-primary" size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-[1vh]">
            <h3 className="text-[1.6rem]  lg:text-[1.8rem] font-bold mb-4">{language==="spanish"?"Dirección":"Address"}</h3>
            <div className="flex items-start text-[1.5rem] lg:text-[1.6rem]">
              <FaMapMarkerAlt className="mr-2 mt-1 text-primary" />
              <p className="text-gray-400">
                123 Business Street
                <br />
                Suite 100
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-[1vh]">
            <h3 className="text-[1.6rem]  lg:text-[1.8rem] font-bold mb-4">{language==="spanish"?"Accesos Directos":"Quick Links"}</h3>
            <ul className="space-y-2 text-[1.5rem] lg:text-[1.6rem]">
              {links.map((item) => {
                return (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800  flex justify-center items-center h-[10%] md:h-[20%]">
        <p className="text-gray-400 text-[1.4rem]">
          © {new Date().getFullYear()} X3 Safety. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
