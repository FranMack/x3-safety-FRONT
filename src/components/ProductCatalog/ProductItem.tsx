"use client";
import { LanguageContext } from "@/context/language.context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { HashLoader } from "react-spinners";
import { ProductItemProps } from "./ProductsGrid";

export const ProductItem = ({
  id,
  name,
  description,
  descripcion,
  image,
}: ProductItemProps) => {
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigate = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div
      key={name}
      className="relative h-[60vh] md:h-[70vh] lg:h-[60vh] rounded-[12px] shadow-lg overflow-hidden"
    >
      {/* Imagen con Skeleton */}
      <div className="w-full h-[70%] md:h-[55%] lg:h-[70%] overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse h-full flex justify-center items-center">
            <HashLoader color={"white"} speedMultiplier={0.4} />
          </div>
        )}
        <Image
          src={image}
          alt={name}
          className={`w-full h-full object-contain bg-[#f6fafb] hover:scale-[1.20] transition-transform duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>

      {/* Información del Producto */}
      <div className=" h-[30%] md:h-[45%] lg:h-[30%] p-4 text-[1.4rem] md:text-[1.3rem] lg:text-[1.4rem]  flex flex-col justify-center">
        <h3 className="text-[1.8rem] md:text-[1.6rem] lg:text-[1.8rem]  font-semibold mb-1 text-gray-700">
          {name}
        </h3>
        <p className="text-gray-600 mb-4">
          {language === "spanish" ? descripcion : description}
        </p>
        <button
          onClick={handleNavigate}
          className="w-fit bg-primary text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          {language === "spanish" ? "Ver más" : "View more"}
        </button>
      </div>
    </div>
  );
};
