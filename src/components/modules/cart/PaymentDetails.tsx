"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  citySelector,
  grandTotalSelector,
  orderedProductsSelector,
  orderSelector,
  shippingAddressSelector,
  shippingCostSelector,
  subTotalSelector,
} from "@/redux/feature/slice";
import { useAppSelector } from "@/redux/hooks";
import { createOrder } from "@/services/cart";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// import { useAppSelector } from "@/redux/hooks";

export default function PaymentDetails() {
  const subTotal = useAppSelector(subTotalSelector);
  const shippingCost = useAppSelector(shippingCostSelector);
  const order = useAppSelector(orderSelector);
  const grandTotal = useAppSelector(grandTotalSelector);
  const city = useAppSelector(citySelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);
  const productCarts = useAppSelector(orderedProductsSelector);
  const user = useUser();
  const router = useRouter();
  const handleOrder = async () => {
    const orderLoading = toast.loading("order is loading");
    try {
      // if (user === null) {
      //   router.push("/login");
      //   throw new Error("please login first");
      // }
      if (!user.user) {
        router.push("/login");
        throw new Error("Please login first.");
      }
      if (productCarts?.length === 0) {
        throw new Error("you do not add any product cart");
      }
      if (!city) {
        throw new Error("you do not add city");
      }
      if (!shippingAddress) {
        throw new Error("you do not add shipping address");
      }
      const res = await createOrder(order);
      console.log(res);
      toast.success("order is created", { id: orderLoading });
    } catch (err: any) {
      toast.error(err?.message, { id: orderLoading });
    }
  };

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{currencyFormatter(subTotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">
            {/* {currencyFormatter(0)} */}
            0000
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">{currencyFormatter(shippingCost)}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">
          {/* {currencyFormatter(grandTotal)} */}
          {currencyFormatter(grandTotal)}
        </p>
      </div>
      <Button
        onClick={handleOrder}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
  );
}
