import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProduct } from "@/services/product";

import { IProduct } from "@/types";
import Link from "next/link";

const FeaturedProducts = async () => {
  const { data: products } = await getAllProduct();

  return (
    <div className="bg-opacity-50 py-10 bg-slate-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Featured Products</h2>
          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-4 my-5">
          {Array(5)
            .fill(products?.[0])
            .map((product: IProduct, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
