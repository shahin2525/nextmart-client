import React from "react";
import FilterSidebar from "./filterSidebar";
import { IProduct } from "@/types";
import ProductCard from "@/components/ui/core/ProductCard";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex gap-8 my-5">
      <FilterSidebar />
      <div>
        <div className="grid grid-cols-3 gap-4 ">
          {products?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
