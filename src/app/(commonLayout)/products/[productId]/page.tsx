// {params:{params:Promise<{productId:string}>}}
const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <div>
      <h1>Product details Page {productId}</h1>
    </div>
  );
};

export default ProductDetailsPage;
