"use client";

import { useState, createContext, ReactNode } from "react";

interface ModalOpenContextValue {
  modalOpen: boolean;
    setModalOpen:(value:boolean)=>void
    toggleModal:()=>void
  
}

interface ModalOpenContextProviderProps {
  children: ReactNode;
}

const modalOpenContextDefaultValue: ModalOpenContextValue = {
    modalOpen: false,
    setModalOpen: () => {},
    toggleModal: () => {},
};

export const ModalOpenContext = createContext<ModalOpenContextValue>(
  modalOpenContextDefaultValue
);

export const ModalOpenContextProvider = ({
  children,
}: ModalOpenContextProviderProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal=()=>{
    setModalOpen(!modalOpen)
  }

  const value: ModalOpenContextValue = {
    modalOpen,
    setModalOpen,
    toggleModal
  };

  return (
    <ModalOpenContext.Provider value={value}>
      {children}
    </ModalOpenContext.Provider>
  );
};
