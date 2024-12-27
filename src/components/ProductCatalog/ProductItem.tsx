"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ProductItemProps } from "./ProductsGrid";
import { HashLoader
} from "react-spinners";

export const ProductItem = ({
  id,
  name,
  description,
  image,
}: ProductItemProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigate = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div
      key={name}
      className="relative h-[60vh] rounded-[12px] shadow-lg overflow-hidden"
    >
      {/* Imagen con Skeleton */}
      <div className="w-full h-[70%] overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse h-full flex justify-center items-center">
          <HashLoader
 color={"white"} speedMultiplier={0.4} />
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
      <div className="p-4 text-[1.4rem]">
        <h3 className="text-[1.8rem] font-semibold mb-1 text-gray-600">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={handleNavigate}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ver más
        </button>
      </div>
    </div>
  );
};
