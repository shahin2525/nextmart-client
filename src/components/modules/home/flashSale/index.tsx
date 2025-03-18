import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllFlashSale } from "@/services/flashSale";

import { IProduct } from "@/types";
import Link from "next/link";
import { CountdownTimer } from "./CountDown";

const FlashSale = async () => {
  const { data: products } = await getAllFlashSale();

  return (
    <div className="bg-opacity-50 py-10 bg-slate-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h2 className="font-bold text-2xl">FlashSale Products</h2>
            <CountdownTimer targetTime="23:59" />
          </div>
          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-4 my-5">
          {products?.slice(0, 5)?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
