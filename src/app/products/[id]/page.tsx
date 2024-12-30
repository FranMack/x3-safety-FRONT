import { ButtonContainer } from "@/components/ProductDetails/ButtonContainer";
import { Modal } from "@/components/ProductDetails/Modal";
import { Slider } from "@/components/Slider";
import { productsInfo } from "@/utils/productsInfo";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import logo from "../../../../public/favicon.png";
interface Props {
  params: { id: number }; // 'params' es un objeto que contiene el 'id'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const product = productsInfo[id - 1];

  return {
    title: product.name,
    description: product.description,
    keywords:
      "herramientas de seguridad, protección laboral, ergonomía, prevención de accidentes, seguridad industrial, protección de operarios, X3 Safety, seguridad en el trabajo",
    robots: "index, follow",

    viewport: "width=device-width, initial-scale=1.0", // Optimización para dispositivos móviles.

    // Author information
    authors: { name: "X3 Safety", url: "https://x3safety.com" },
  };
}

const ProductPage = ({ params }: Props) => {
  const { id } = params;

  const product = productsInfo[id - 1];
  const cookieStore = cookies();
  const language = cookieStore.get("language")?.value ?? "spanish";
  return (
    <main className="relative min-h-screen w-screen  flex flex-col lg:flex-row items-center justify-center  pb-[10vh] ">
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="absolute bottom-0 right-10 -z-0 opacity-20"
      />
      <Modal videoId={product.videoId} />
      <div className="w-[80%] pt-[10vh] lg:w-[40%] h-full  flex justify-center items-center">
        <figure className="relative w-full md:w-[50%] lg:w-[90%]   aspect-square flex items-center">
          <Slider gallery={product.gallery} />
        </figure>
      </div>

      <div className="w-[80%] lg:w-[40%] h-full  px-[2%]  flex flex-col justify-center items-start gap-y-[1vh] ">
        <h1 className="w-full text-[3rem] md:text-[4rem] font-semibold">
          {product.name}
        </h1>
        <p className="mb-[1vh] text-[1.6rem] md:text-[1.8rem]  text-gray-600">
          {language === "spanish" ? product.descripcion2 : product.description2}
        </p>
        <h2 className="w-full text-[2rem] md:text-[2.5rem] font-bold ">
          {language === "spanish" ? "Características" : "Characteristics"}
        </h2>
        <ul className="text-[1.5rem] flex flex-col gap-y-[2vh]">
          {language === "spanish"
            ? product.descripcionItems.map((item, i) => {
                return (
                  <div key={i} className="flex items-center gap-x-[1.5rem]">
                    <FaCheck className="text-primary text-[1.5rem]" />
                    <li className="text-[1.5rem] font-semibold">{item}</li>
                  </div>
                );
              })
            : product.descriptionItems.map((item, i) => {
                return (
                  <div key={i} className="flex items-center gap-x-[1.5rem]">
                    <FaCheck className="text-primary text-[1.5rem]" />
                    <li className="text-[1.5rem] font-semibold">{item}</li>
                  </div>
                );
              })}
        </ul>
        <hr className="w-full  my-4  border-primary border-t-2" />

        <ButtonContainer videoId={product.videoId} pdf={product.pdf} />
      </div>
    </main>
  );
};

export default ProductPage;
