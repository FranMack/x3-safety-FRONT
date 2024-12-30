import { Title } from "@/components/commons";
import { AsideBar } from "@/components/ProductCatalog/AsideBar";
import { ProductsGrid } from "@/components/ProductCatalog/ProductsGrid";
import { productsInfo } from "@/utils/productsInfo";
import { cookies } from "next/headers";

const titulo = "Productos";
const title = "Products";
const ProductsPage = () => {
  const cookieStore = cookies();
  const language = cookieStore.get("language")?.value ?? "spanish";
  return (
    <section id="products" className=" w-screen min-h-[100vh]  bg-gray-100 ">
      <AsideBar />

      <div className="w-full md:w-[70%] lg:w-[78%] md:ml-[30%] lg:ml-[22%] lg:ml-[22%] pb-[5vh] md:py-[20vh]   flex flex-col items-center ">
        <div className="w-[90%] ml-[10%]">
          <Title title={language === "spanish" ? titulo : title} />
        </div>
        <ProductsGrid products={productsInfo} />
      </div>
    </section>
  );
};

export default ProductsPage;
