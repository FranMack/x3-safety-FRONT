import { Slider } from "@/components/Slider";
import { productsInfo } from "@/utils/productsInfo";
import { FaCheck } from "react-icons/fa";
import { Modal } from "@/components/ProductDetails/Modal";
import { ButtonContainer } from "@/components/ProductDetails/ButtonContainer";
import logo from "../../../../public/favicon.png"
import Image from "next/image";
interface Props {
  params: { id: number }; // 'params' es un objeto que contiene el 'id'
}

const ProductPage = ({ params }: Props) => {
  const { id } = params;

  const product = productsInfo[id - 1];




  return (
    <main className="h-screen w-screen  flex items-center justify-center pt-[10vh]  ">
      <Image src={logo} alt="logo" width={100} height={100} className="absolute bottom-0 right-0 -z-0 opacity-20"/>
      <Modal/>
      <div className="w-[40%] h-full  flex justify-center items-center ">
        <figure className="relative w-[90%]  aspect-square flex items-center">
          <Slider gallery={product.gallery} />
        </figure>
      </div>

      <div className="w-[40%] h-full px-[2%]  flex flex-col justify-center items-center gap-y-[1vh] ">
        <h1 className="w-full text-[4rem] font-semibold">{product.name}</h1>
        <p className="mb-[1vh] text-[1.8rem]  text-gray-600">
          {product.description2}
        </p>
        <h2 className="w-full text-[2.5rem] font-bold ">Características</h2>
        <ul className="text-[1.5rem] flex flex-col gap-y-[2vh]">
          {product.descriptionItems.map((item, i) => {
            return (
              <div key={i} className="flex items-center gap-x-[1.5rem]">
                <FaCheck className="text-primary text-[1.5rem]" />
                <li className="text-[1.5rem] font-semibold">{item}</li>
              </div>
            );
          })}
        </ul>
        <hr className="w-full  my-4  border-primary border-t-2" />

       <ButtonContainer/>
      </div>
    </main>
  );
};

export default ProductPage;
