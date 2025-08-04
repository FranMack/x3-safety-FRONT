export const Banner = () => {
  return (
    <div className="bg-primary  w-screen h-[30vh] flex justify-center gap-x-[2vw] items-center text-white">
      <div className="w-[30%]">
        <h5 className="text-[3rem] font-semibold">
          ¿Te gustaría saber más sobre nuestros productos?
        </h5>
      </div>

      <button className="bg-gray-100 px-[2%] py-[1%] text-[2rem] rounded-xl text-primary  shadow-lg">
        Descargar catalogo
      </button>
    </div>
  );
};
