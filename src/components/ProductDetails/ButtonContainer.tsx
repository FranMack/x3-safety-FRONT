"use client"

import { ModalOpenContext } from "@/context/modal.context"
import { useContext } from "react"
import Link from "next/link"
import { LanguageContext } from "@/context/language.context"

interface Props{
  videoId:string,
  pdf:string
}

export const ButtonContainer = ({videoId,pdf}:Props) => {
  const {language}=useContext(LanguageContext)

    const{toggleModal}=useContext(ModalOpenContext)

  return (
    <div className="w-full mt-[2vh] flex flex-col md:flex-row justify-center text-[1.5rem] gap-x-[4vw] gap-y-[2vh] ">
          <Link href={pdf}  target="_blank" className="flex items-center justify-center bg-[#4c4c4c] text-white text-center h-[6vh] md:h-[10vh] lg:h-[6vh] rounded-xl px-[5%] hover:bg-primary transition-colors duration-500">
           {language==="spanish"?"Descargar Ficha Técnica":"Download Technical Sheet"} 
          </Link>
         { videoId &&<button onClick={toggleModal} className="bg-[#4c4c4c] text-white h-[6vh] md:h-[10vh] lg:h-[6vh] rounded-xl px-[5%] hover:bg-primary transition-colors duration-500">
         {language==="spanish"?"Video Demostración":"Video Demo"} 
          </button>}
        </div>
  )
}
