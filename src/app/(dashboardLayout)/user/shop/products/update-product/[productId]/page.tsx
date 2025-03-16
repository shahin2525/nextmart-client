import UpdateProductForm from "@/components/modules/shop/product/UpdateProductForm";
import { getSingleProduct } from "@/services/product";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data } = await getSingleProduct(productId);

  return (
    <div>
      <UpdateProductForm product={data} />
    </div>
  );
};

export default UpdateProductPage;
