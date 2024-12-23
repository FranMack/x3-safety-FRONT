"use client";

import { ModalOpenContext } from "@/context/modal.context";
import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import YouTube from "react-youtube";

import { MoonLoader } from "react-spinners";

export const Modal = () => {
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
          className={`absolute w-screen h-screen flex flex-col justify-center items-center bg-black bg-opacity-30 z-50`}
        >
          <div className="w-[55%] flex justify-end ">
            <IoMdClose onClick={onCloseModal} className="text-[2.5rem]" />
          </div>
          {loading && (
            <div className="absolute w-1/2 h-1/2 flex flex-col justify-center items-center bg-black opacity-40">
              <MoonLoader color="#ffff" size={55} />
              <p className="text-white text-[2rem]">Cargando</p>
            </div>
          )}{" "}
          {/* Indicador de carga */}
          <YouTube
            className={`w-1/2 h-1/2 ${loading ? "invisible" : ""}`} // Ocultar mientras carga
            opts={opts}
            videoId="1ZHVrYpzhLg"
            onReady={handleReady} // Evento para manejar el estado de carga
          />
        </div>
      ) : null}
    </>
  );
};
