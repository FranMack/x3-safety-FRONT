import React from 'react'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import { Title } from './commons'
import operario from "../../public/operario.png"

const title="About Us"
export const Safety = () => {
  return (
    <section id="aboutUs" className="h-auto w-screen pb-[10vh] bg-gray-100">
    <div className=" w-[80%] h-auto mx-auto px-4">
      <Title title={title}/>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary bg-opacity-20 shadow-lg  rounded-br-[50px]">
        <div className='relative w-full  h-[40vh] lg:h-[80vh]'>
          <Image
            src={operario}
            alt="Safe Load Handling"
          fill
            className="absolute"
          />
        </div>
        <div className=' h-auto flex flex-col justify-start gap-y-[2vh] items-start py-[10%] px-[10%] '>
          <h3 className="text-[2.4rem] md:text-[3rem] font-bold ">Eliminate the risk of operational accidents</h3>
          <p className='mb-2 ms:mb-4 text-[1.5rem] '>X3Safety is a company specialized in developing and manufacturing products to improve and guarantee operational safety in various economic activities.Aimed at providing better operating conditions, the products are manufactured in accordance with the main technical standards and follow strict quality control to guarantee manufacturing excellence.</p>
          <ul className="space-y-8 text-[1.5rem]">
            <li className="flex items-center">
              <FaChevronRight className=" mr-2 text-primary" />
              <span>Prevents workplace accidents and injuries</span>
            </li>
            <li className="flex items-center">
              <FaChevronRight className=" mr-2 text-primary" />
              <span>Increases operational efficiency</span>
            </li>
            <li className="flex items-center">
              <FaChevronRight className=" mr-2 text-primary" />
              <span>Reduces equipment damage and maintenance costs</span>
            </li>
            <li className="flex items-center">
              <FaChevronRight className=" mr-2 text-primary" />
              <span>Ensures compliance with safety regulations</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
