"use client";
import { FilterProductsContext } from "@/context/filterProduct.context";
import { IoMdSwitch } from "react-icons/io";

import { useContext, useState } from "react";
const categories = [
  "Mostrar todos",
  "Bastón Balizador",
  "Martillo Smart",
  "Calzas Ergonómicas",
  "Equipamientos ergonómicos",
];

export const AsideBar = () => {
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
      <aside className="hidden md:flex fixed w-[22%] h-[100vh] pt-[20vh] z-100  flex-col items-center gap-y-[5vh] bg-primary bg-opacity-10 leftReveal ">
        <h3 className="text-[2.5rem] font-semibold ">Filtrar productos</h3>
        <ul className=" text-[1.8em] flex flex-col gap-y-[3vh] max-w-[90%]">
          {categories.map((category) => {
            return (
              <div key={category}>
                <input
                  onChange={() => {}}
                  type="radio"
                  id={category.toString()}
                  className="peer hidden"
                  checked={category == selectedCategories}
                />
                <label
                  onClick={() => handleSelected(category)}
                  className="transition-all duration-1000 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
                >
                  {category}
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
              openFilters ? "Ocultar Filtros" : "Mostrar Filtros"
            }`}</h3>
            <IoMdSwitch size={30} />
          </div>
   
            <ul className={ `${openFilters ? "relative efectoReveal":"absolute efectoRevealOut "} opacity-0 mt-[2vh]  flex flex-col gap-y-[1.5vh] max-w-[90%] text-[1.8em] `}>
              {categories.map((category) => {
                return (
                  <div key={category}>
                    <input
                      onChange={() => {}}
                      type="radio"
                      id={category.toString()}
                      className="peer hidden"
                      checked={category == selectedCategories}
                    />
                    <label
                      onClick={() => handleSelected(category)}
                      className="transition-all duration-1000 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
                    >
                      {category}
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
