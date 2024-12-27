import { productSliderInfo } from "@/utils/productsSlider";
import background1 from "../../../public/catalogo online.webp";
import background2 from "../../../public/ficha tecnica.webp";
import { Title } from "../commons";
import { ProductBox } from "./ProductBox";
import { ProductSlider } from "./ProductSlider";
import { cookies } from 'next/headers'

const title = "Our Products";
const titulo = "Nuestros Productos";
const introduction="Tools designed to enhance operator safety in work environments involving the handling of heavy equipment or those that may pose risks to hands and the body."
const introduccion="Herramientas diseñadas para mejorar la seguridad de los operadores en entornos de trabajo que implican manipulación de equipos pesados  o que pueden ser peligrosos para las manos y el cuerpo."

const productBox = [
  {
    title: "Online Catalog",
    titulo: "Catálogo Online",
    image: background1,
    alt: "Background catálogo",
    text: "Tools designed to improve operator safety in work environments involving the handling of heavy equipment or that may pose dangers to hands and the body.",
    texto: "Herramientas diseñadas para mejorar la seguridad de los operadores en entornos de trabajo que implican manipulación de equipos pesados o que pueden ser peligrosos para las manos y el cuerpo.",
    buttonName: "VIEW CATALOG",
    botonNombre:"VER CATÁLOGO",
    path: "/products",
  },
  {
    title: "Technical Sheet",
    titulo: "Ficha Técnica",
    image: background2,
    alt: "Background ficha técnica",
    text: "Tools designed to improve operator safety in work environments involving the handling of heavy equipment or that may pose dangers to hands and the body.",
    texto: "Herramientas diseñadas para mejorar la seguridad de los operadores en entornos de trabajo que implican manipulación de equipos pesados o que pueden ser peligrosos para las manos y el cuerpo.",
    buttonName: "DOWNLOAD TECHNICAL SHEET",
    botonNombre:"DESCARGAR FICHA TÉCNICA",
    path: "/fichas_tecnicas/ficha_productos.pdf",
  },
];

export const Products = () => {

    const cookieStore=cookies()
  const language=cookieStore.get("language")?.value ?? "spanish"
  return (
    <section
      id="products"
      className="w-screen min-h-screen py-[10vh]  bg-gray-100"
    >
      <div className="w-full md:w-[80%] mx-auto flex flex-col ">
        <div className="w-[80%] md:w-full mx-auto">
          <Title title={language==="spanish"? titulo:title} />
          <p className="w-full lg:w-1/2 mb-[5vh] lg:mb-[7vh] text-gray-600 text-[1.6rem] lg:text-[2rem] font-semibold">
          {language==="spanish"? introduccion:introduction}
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
