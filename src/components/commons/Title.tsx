import React from 'react'

interface Props{
    title:string
}

export const Title = ({title}:Props) => {
  return (
    <div className="w-[100%] mb-[2vh] lg:mb-[5vh] ">
        <h2 className="text-[2.5rem] lg:text-[3.5rem] font-bold mb-2 lg:mb-4">{title}</h2>
        <div className="w-[100px] lg:w-[150px] border-b-[3px] border-solid border-primary"></div>
      </div>
  )
}
