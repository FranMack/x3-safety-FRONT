"use client"

import { ModalOpenContext } from "@/context/modal.context"
import { useContext } from "react"

export const ButtonContainer = () => {

    const{toggleModal}=useContext(ModalOpenContext)

  return (
    <div className="w-full mt-[2vh] flex justify-center text-[1.5rem] gap-x-[4vw] h-[6vh]">
          <button className="bg-[#4c4c4c] text-white h-full rounded-xl px-[5%] hover:bg-primary transition-colors duration-500">
            Descargar Ficha Técnica
          </button>
          <button onClick={toggleModal} className="bg-[#4c4c4c] text-white h-full rounded-xl px-[5%] hover:bg-primary transition-colors duration-500">
            Video Demostración
          </button>
        </div>
  )
}
