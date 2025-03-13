import ManageCategories from "@/components/modules/shop/category";
import { getAllCategory } from "@/services/category";
import React from "react";

const ProductCategory = async () => {
  const allCategory = await getAllCategory();
  console.log(allCategory);
  return (
    <div>
      <ManageCategories />
    </div>
  );
};

export default ProductCategory;
