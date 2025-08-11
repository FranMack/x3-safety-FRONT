"use client";
import { StaticImageData } from "next/image";
import { ProductItem } from "./ProductItem";
import { FilterProductsContext } from "@/context/filterProduct.context";

import { useContext, useEffect, useState } from "react";

export interface ProductItemProps {
  id: string | number;
  slug:string;
  image: StaticImageData;
  name: string;
  description: string;
  descripcion:string;
  category:string
  
}

interface Props {
  products: ProductItemProps[];
}

export const ProductsGrid = ({ products }: Props) => {

  const { selectedCategories } = useContext(
    FilterProductsContext
  );

  const [filterProducts,setFilterProducts]=useState(products)

  useEffect(()=>{

    const filteredProducts = !selectedCategories.length || selectedCategories==="Mostrar todos"
    ? products 
    : products.filter((product) => selectedCategories.includes(product.category));


    setFilterProducts(filteredProducts)


  },[selectedCategories])



  return (
    <div className=" w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 efectoReveal ">
      {filterProducts.map((product,i) => (
        <ProductItem key={i} {...product} />
      ))}
    </div>
  );
};
