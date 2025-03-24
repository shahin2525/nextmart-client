import ManageProducts from "@/components/modules/shop/product";
import { getAllProduct } from "@/services/product";
import React from "react";

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const products = await getAllProduct(page, "2");
  const { data, meta } = products;
  return (
    <div>
      <ManageProducts products={data} meta={meta} />
    </div>
  );
};

export default ProductPage;
