"use client";

import { createContext, ReactNode, useState } from "react";

interface FilterProductsContextValue {
  selectedCategories: string;
  setSelectedCategories: (value: string) => void;
  handleCategoryChange: (category: string) => void;
}

interface FilterProductsContextProviderProps {
  children: ReactNode;
}

const filterProductsDefaultValue: FilterProductsContextValue = {
  selectedCategories:"Mostrar todos",
  setSelectedCategories: () => {},
  handleCategoryChange: () => {},
};

export const FilterProductsContext = createContext<FilterProductsContextValue>(
  filterProductsDefaultValue
);

export const FilterProductsContextProvider = ({
  children,
}: FilterProductsContextProviderProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string>("Mostrar todos");

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(category)
  };
  const value: FilterProductsContextValue = {
    selectedCategories,
    setSelectedCategories,
    handleCategoryChange,
  };

  return (
    <FilterProductsContext.Provider value={value}>
      {children}
    </FilterProductsContext.Provider>
  );
};
