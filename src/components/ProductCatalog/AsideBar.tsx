"use client";

import { FilterProductsContext } from "@/context/filterProduct.context";

import { useContext } from "react";
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

  

  return (
    <aside className=" fixed w-[22%] h-[100vh] pt-[20vh] z-100 flex flex-col items-center gap-y-[5vh] bg-primary bg-opacity-10 leftReveal ">
     
      <h3 className="text-[2.5rem] font-semibold ">Categorías</h3>
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
  );
};
