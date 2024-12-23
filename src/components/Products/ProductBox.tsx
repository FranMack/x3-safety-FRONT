"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal '

interface Props {
   image:StaticImageData,
  alt:string,
  title:string,
  text:string,
  buttonName:string,
  path:string
}

export const ProductBox = ({image,alt,title,buttonName,path}:Props) => {

  const refProductBox= useScrollReveal<HTMLDivElement>("efectoReveal");
  return (
    <div ref={refProductBox} className="relative w-full md:w-[48%] aspect-square h-auto sm:aspect-auto sm:h-[50vh] rounded-[15px] border border-collapse border-primary flex items-center">
    <div className="relative z-20 w-[80%] md:w-[60%] px-[5%] flex flex-col gap-y-[2vh] items-start text-backgroundColor">
      <h5 className="text-[3rem]">{title}</h5>
      <p className="text-[1.6rem] font-light">
        Desarrollamos un nuevo sitio para que rápidamente pueda
        enviarnos su pedido de cotización. Visite y descubra toda
        nuestra línea de productos disponibles.
      </p>
      <div className="mt-[2vh] w-fit border-collapse border-b-2 border-white">
      <Link href={`${path}`} className="text-[1.6rem] ">{buttonName}</Link>
        </div>
    </div>
    <div className="absolute w-full h-full z-10 bg-black opacity-70 top-0 rounded-[15px]"></div>

    <Image
      fill
      src={image}
      alt={alt}
      className="absolute object-cover rounded-[15px] z-0"
    />
  </div>
  )
}
