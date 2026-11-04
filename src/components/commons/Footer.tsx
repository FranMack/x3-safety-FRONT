"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/logo.png";

/*const links = [
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
];*/

export const Footer = () => {
  const pathname = usePathname();
  const isProductsPage = pathname === "/products";

  //const cookieStore = cookies();
  //const language = cookieStore.get("language")?.value ?? "spanish";
  return (
    <footer className="relative bg-backgroundColor text-black  lg:h-[40vh] xs:h-[40vh] text-[1.5rem] ">
      <div
        className={`h-full ${
          isProductsPage
            ? "md:ml-[30%] md:w-[70%] lg:ml-[22%] lg:w-[78%]"
            : "w-full"
        }`}
      >
        <div className="w-full h-[60%] md:h-[80%] flex flex-col items-center justify-center">
          <div className="relative xs:w-[70%] md:w-[40%] lg:w-[35%] aspect-[4.48]">
            <Image
              fill
              src={logo}
              alt="Company Logo"
              className="absolute h-12 w-auto mb-4 rounded"
            />
          </div>
          <h5 className="xs:text-[1.5rem] lg:text-[2.2rem] font-semibold text-[#404042]">
            PROTEGE LO MÁS IMPORTANTE
          </h5>
        </div>
        <div className="flex justify-center items-center h-[40%] md:h-[20%] ">
          <p className="text-gray-400 text-[1.4rem]">
            © {new Date().getFullYear()} X3 Safety. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
