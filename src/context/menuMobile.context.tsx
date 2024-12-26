"use client";

import { useState, createContext, ReactNode } from "react";

interface MenuMobileContextValue {
  menuMobileOpen: boolean;
    setMenuMobileOpen:(value:boolean)=>void
    toggleMenuMobile:()=>void
  
}

interface MenuMobileContextProviderProps {
  children: ReactNode;
}

const menuMobileContextDefaultValue: MenuMobileContextValue = {
    menuMobileOpen: false,
    setMenuMobileOpen: () => {},
    toggleMenuMobile: () => {},
};

export const MenuMobileContext = createContext<MenuMobileContextValue>(
  menuMobileContextDefaultValue
);

export const MenuMobileContextProvider = ({
  children,
}: MenuMobileContextProviderProps) => {
  const [menuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);

  const toggleMenuMobile=()=>{
    setMenuMobileOpen(!menuMobileOpen)
  }

  const value: MenuMobileContextValue = {
    menuMobileOpen: menuMobileOpen,
    setMenuMobileOpen: setMenuMobileOpen,
    toggleMenuMobile: toggleMenuMobile
  };

  return (
    <MenuMobileContext.Provider value={value}>
      {children}
    </MenuMobileContext.Provider>
  );
};
