"use client";
import { FilterProductsContext } from "@/context/filterProduct.context";
import { IoMdSwitch } from "react-icons/io";

import { LanguageContext } from "@/context/language.context";
import { useContext, useState } from "react";
const categories = [
  {
    articulo: "Mostrar todos",
    item: "Show all",
  },
  {
    articulo: "Bastón Balizador",
    item: "Signaling Stick",
  },
  {
    articulo: "Martillo Smart",
    item: "Smart Hammer",
  },
  {
    articulo: "Calzas Ergonómicas",
    item: "Ergonomic Wedges",
  },
  {
    articulo: "Equipamientos ergonómicos",
    item: "Ergonomic Equipment",
  },
];

const titulo = "Filtrar productos";
const title = "Filter products";

export const AsideBar = () => {
  const { language } = useContext(LanguageContext);
  const { selectedCategories, handleCategoryChange } = useContext(
    FilterProductsContext
  );

  const handleSelected = (tab: string) => {
    handleCategoryChange(tab);
  };

  const [openFilters, setOpenFilters] = useState<boolean>(false);

  const toggleOpenFilters = () => {
    setOpenFilters(!openFilters);
  };

  return (
    <>
      <aside className="hidden md:flex fixed w-[22%] md:w-[30%] lg:w-[22%] h-[100vh] pt-[20vh] z-100  flex-col items-center gap-y-[5vh] bg-primary bg-opacity-10 leftReveal ">
        <h3 className="text-[2rem] lg:text-[2.5rem] font-semibold  w-[70%] ">
          {language === "spanish" ? titulo : title}{" "}
        </h3>
        <ul className=" text-[1.5rem] lg:text-[2rem] flex flex-col gap-y-[3vh] w-[70%]">
          {categories.map((category) => {
            return (
              <div key={category.item}>
                <input
                  onChange={() => {}}
                  type="radio"
                  id={category.toString()}
                  className="peer hidden "
                  checked={category.articulo == selectedCategories}
                />
                <label
                  onClick={() => handleSelected(category.articulo)}
                  className=" transition-all duration-1000 block cursor-pointer select-none rounded-xl p-2 pl-4 text-start peer-checked:bg-primary peer-checked:font-semibold peer-checked:text-white"
                >
                  {language === "spanish" ? category.articulo : category.item}
                </label>
              </div>
            );
          })}
        </ul>
      </aside>

      <aside className=" w-[80%]  mx-auto pt-[12vh] mb-[5vh]   rounded-lg  flex md:hidden flex-col items-center leftReveal">
        <div className="w-full flex flex-col items-center bg-primary bg-opacity-10  rounded-xl ">
          <div
            onClick={toggleOpenFilters}
            className="flex justify-center items-center space-x-[2vw] w-full p-2"
          >
            <h3 className="text-[2rem] font-semibold ">{`${
              openFilters
                ? `${language === "spanish" ? titulo : title}`
                : `${
                    language === "spanish" ? "Ocultar filtros" : "Hide filter"
                  }`
            }`}</h3>
            <IoMdSwitch size={30} />
          </div>

          <ul
            className={`${
              openFilters
                ? "relative efectoReveal"
                : "absolute efectoRevealOut "
            } opacity-0 mt-[2vh]  flex flex-col gap-y-[1.5vh] w-[90%] text-[1.8em] `}
          >
            {categories.map((category) => {
              return (
                <div key={category.item}>
                  <input
                    onChange={() => {}}
                    type="radio"
                    id={category.toString()}
                    className="peer hidden"
                    checked={category.articulo == selectedCategories}
                  />
                  <label
                    onClick={() => handleSelected(category.articulo)}
                    className="transition-all duration-1000 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-semibold peer-checked:text-white"
                  >
                    {language === "spanish" ? category.articulo : category.item}
                  </label>
                </div>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};
