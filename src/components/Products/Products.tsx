import { productSliderInfo } from "@/utils/productsSlider";
import background1 from "../../../public/background_catalogo.webp";
import background2 from "../../../public/background_shop.webp";
import { Title } from "../commons";
import { ProductBox } from "./ProductBox";
import { ProductSlider } from "./ProductSlider";
const title = "Nuestros Productos";

const productBox = [
  {
    title: "Catalogo Online",
    image: background1,
    alt: "Backgroun catálogo",
    text: "Herramientas diseñadas para mejorar la seguridad de los operadores en  entornos de trabajo que implican manipulación de equipos pesados o que  pueden ser peligrosos para las manos y el cuerpo.",
    buttonName: "VER CATÁLOGO",
    path: "/products",
  },
  {
    title: "Ficha Técnica",
    image: background2,
    alt: "Backgroun ficha técnica",
    text: "Herramientas diseñadas para mejorar la seguridad de los operadores en  entornos de trabajo que implican manipulación de equipos pesados o que  pueden ser peligrosos para las manos y el cuerpo.",
    buttonName: "DESCARGAR FICHA TÉCNICA",
    path: "/fichas_tecnicas/ficha_productos.pdf",
  },
];

export const Products = () => {
  return (
    <section
      id="products"
      className="w-screen min-h-screen py-[10vh]  bg-gray-100"
    >
      <div className="w-full md:w-[80%] mx-auto flex flex-col ">
        <div className="w-[80%] md:w-full mx-auto">

        <Title title={title} />
        <p className="w-full lg:w-1/2 mb-[5vh] lg:mb-[7vh] text-gray-600 text-[1.6rem] lg:text-[2rem] font-semibold">
          Herramientas diseñadas para mejorar la seguridad de los operadores en
          entornos de trabajo que implican manipulación de equipos pesados o que
          pueden ser peligrosos para las manos y el cuerpo.{" "}
        </p>
        </div>
        
        <ProductSlider gallery={productSliderInfo} />
        <div className="w-[100%]   mt-[5vh] flex flex-col md:flex-row  md:justify-between gap-y-[3vh] ">
          {productBox.map((item) => {
            return <ProductBox key={item.path} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
