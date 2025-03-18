import AllProducts from "@/components/modules/products";
import AllProductsBanner from "@/components/modules/products/banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllCategory } from "@/services/category";
import { getAllProduct } from "@/services/product";
import { ICategory } from "@/types";

const AllProductsPage = async () => {
  const { data: categories } = await getAllCategory();
  const { data: products } = await getAllProduct();

  return (
    <NMContainer>
      <AllProductsBanner title="All Product" path="Home Products" />
      <div className="grid grid-cols-6 gap-8 my-5">
        {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
      <AllProducts products={products} />
    </NMContainer>
  );
};

export default AllProductsPage;
