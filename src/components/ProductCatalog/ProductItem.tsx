"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductItemProps } from "./ProductsGrid";

export const ProductItem = ({
  id,
  name,
  description,
  image,
}: ProductItemProps) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/products/${id}`);
  };

  
  return (
    <div
      key={name}
      className="h-[60vh] rounded-[12px] shadow-lg overflow-hidden"
    >
      <div className="w-full h-[70%] overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-contain bg-[#f6fafb] hover:scale-[1.20] transition-transform duration-500"
        />
      </div>
      <div className="p-4 text-[1.4rem]">
        <h3 className="text-[1.8rem] font-semibold mb-1 text-gray-600">{name}</h3>
        <p className=" text-gray-600 mb-4">{description}</p>
        <button
          onClick={handleNavigate}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-[#4c4c4c] transition-all duration-500"
        >
          Ver más
        </button>
      </div>
    </div>
  );
};
