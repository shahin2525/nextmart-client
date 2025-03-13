import ManageCategories from "@/components/modules/shop/category";
import { getAllCategory } from "@/services/category";
import React from "react";

const ProductCategory = async () => {
  const allCategory = await getAllCategory();
  const { data } = allCategory;

  return (
    <div>
      <ManageCategories categories={data} />
    </div>
  );
};

export default ProductCategory;
