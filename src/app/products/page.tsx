import { Title } from "@/components/commons";
import { ProductsGrid } from "@/components/ProductCatalog/ProductsGrid";
import { productsInfo } from "@/utils/productsInfo";
import { AsideBar } from "@/components/ProductCatalog/AsideBar";



const ProductsPage = () => {
  return (
    <section id="products" className=" w-screen min-h-[100vh]  bg-gray-100 ">
     <AsideBar/>

      <div className="w-[78%] ml-[22%] py-[20vh]  flex flex-col items-center ">
        <div className="w-[90%] ml-[10%]">
          <Title title="Productos" />
        </div>
        <ProductsGrid products={productsInfo} />
      </div>
    </section>
  );
};

export default ProductsPage;
