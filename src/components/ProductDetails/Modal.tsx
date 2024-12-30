"use client";

import { ModalOpenContext } from "@/context/modal.context";
import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import YouTube from "react-youtube";

import { MoonLoader } from "react-spinners";

interface Props{
  videoId:string
}

export const Modal = ({videoId}:Props) => {
  const { modalOpen, toggleModal } = useContext(ModalOpenContext);
  const [loading, setLoading] = useState(true); // Estado de carga

  // Opciones del reproductor de YouTube
  const opts = {
    height: "100%",
    width: "100%",
  };

  const handleReady = () => {
    setLoading(false); // Cuando el reproductor está listo, desactivar la carga
  };

  const onCloseModal = () => {
    toggleModal();
    setLoading(true);
  };

  return (
    <>
      {modalOpen ? (
        <div
          className={`absolute w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30 z-50 top-0`}
        >
          <div className="w-full md:w-[55%] flex justify-end ">
            <IoMdClose onClick={onCloseModal} className="text-[2.5rem]" />
          </div>
          {loading && (
            <div className="absolute w-1/2 h-1/2 flex flex-col justify-center items-center bg-black opacity-40">
              <MoonLoader color="#ffff" size={55} />
              <p className="text-white text-[2rem]">Loading</p>
            </div>
          )}{" "}
          {/* Indicador de carga */}
          <YouTube
            className={` w-[100%] aspect-[1.77]  md:w-1/2 ${loading ? "invisible" : ""}`} // Ocultar mientras carga
            opts={opts}
            videoId={videoId}
            onReady={handleReady} // Evento para manejar el estado de carga
          />
        </div>
      ) : null}
    </>
  );
};
