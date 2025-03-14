import ManageProducts from "@/components/modules/shop/product";
import { getAllProduct } from "@/services/product";
import React from "react";

const ProductPage = async () => {
  const products = await getAllProduct();
  const { data } = products;
  return (
    <div>
      <ManageProducts products={data} />
    </div>
  );
};

export default ProductPage;
