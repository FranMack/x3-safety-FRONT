import { ButtonContainer } from "@/components/ProductDetails/ButtonContainer";
import { Modal } from "@/components/ProductDetails/Modal";
import { Slider } from "@/components/Slider";
import { envs } from "@/config/envs";
import { productsInfo } from "@/utils/productsInfo";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import logo from "../../../../public/favicon.png";
interface Props {
  params: { id: number; slug: string }; // 'params' es un objeto que contiene el 'id'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const product = productsInfo.find((item) => {
    return item.slug.trim() === slug.trim();
  });

  if (!product) {
    return {
      title: "Producto no encontrado | X3 Safety",
      description: "Este producto no existe o ha sido eliminado.",
    };
  }

  const imageUrl = `${envs.DOMAIN}/${product.image.src}`;

  return {
    title: `${product.name} | X3 Safety`,
    description: product.description,
    keywords:
      "herramientas de seguridad, protección laboral, ergonomía, prevención de accidentes, seguridad industrial, protección de operarios, X3 Safety, seguridad en el trabajo",
    robots: "index, follow",
    authors: [{ name: "X3 Safety", url: `${envs.DOMAIN}` }],
    openGraph: {
      title: `${product.name} | X3 Safety`,
      description: product.description,
      images: [
        {
          url: imageUrl,
          width: product.image.width,
          height: product.image.height,
          alt: product.name,
        },
      ],
      url: `${envs.DOMAIN}/products/${slug}`,
      type: "website", // ← "product" no está permitido en el tipo de Next.js
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | X3 Safety`,
      description: product.description,
      images: [imageUrl],
    },
    category: product.category,
    alternates: {
      canonical: `${envs.DOMAIN}/products/${slug}`,
    },
  };
}

// 👇 Mover viewport a un export separado
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const ProductPage = ({ params }: Props) => {
  const { slug } = params;

  const product = productsInfo.find((item) => {
    return item.slug.trim() === slug.trim();
  });
  if (!product) return notFound();
  const cookieStore = cookies();

  const language = cookieStore.get("language")?.value ?? "spanish";
  return (
    <main className="relative min-h-screen w-screen  flex flex-col lg:flex-row items-center justify-center  py-[10vh] ">
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
