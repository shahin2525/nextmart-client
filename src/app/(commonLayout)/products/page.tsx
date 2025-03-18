import AllProductsBanner from "@/components/modules/products/banner";
import NMContainer from "@/components/ui/core/NMContainer";

const ProductsPage = () => {
  return (
    <NMContainer>
      <AllProductsBanner title="All Product" path="Home Products" />
    </NMContainer>
  );
};

export default ProductsPage;
