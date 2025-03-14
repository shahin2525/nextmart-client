import ManageBrands from "@/components/modules/shop/brand";
import { getAllBrand } from "@/services/brand";
import React from "react";

const BrandPage = async () => {
  const brands = await getAllBrand();

  const { data } = brands;
  return (
    <div>
      <ManageBrands brands={data} />
    </div>
  );
};

export default BrandPage;
