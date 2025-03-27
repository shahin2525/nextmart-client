"use client";

import { Button } from "@/components/ui/button";
import {
  orderSelector,
  shippingCostSelector,
  subTotalSelector,
} from "@/redux/feature/slice";
import { useAppSelector } from "@/redux/hooks";

// import { useAppSelector } from "@/redux/hooks";

export default function PaymentDetails() {
  const subTotal = useAppSelector(subTotalSelector);
  const shippingCost = useAppSelector(shippingCostSelector);
  const order = useAppSelector(orderSelector);
  const handleOrder = () => {
    console.log(order);
  };
  //   const handleOrder = async () => {
  //     const orderLoading = toast.loading("Order is being placed");
  //     try {
  //       if (!user.user) {
  //         router.push("/login");
  //         throw new Error("Please login first.");
  //       }

  //       if (!city) {
  //         throw new Error("City is missing");
  //       }
  //       if (!shippingAddress) {
  //         throw new Error("Shipping address is missing");
  //       }

  //       if (cartProducts.length === 0) {
  //         throw new Error("Cart is empty, what are you trying to order ??");
  //       }

  //       const res = await createOrder(order);

  //       if (res.success) {
  //         toast.success(res.message, { id: orderLoading });
  //         dispatch(clearCart());
  //         router.push(res.data.paymentUrl);
  //       }

  //       if (!res.success) {
  //         toast.error(res.message, { id: orderLoading });
  //       }
  //     } catch (error: any) {
  //       toast.error(error.message, { id: orderLoading });
  //     }
  //   };

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">
            {/* {currencyFormatter(subTotal)} */}
            {subTotal}
          </p>
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
          <p className="font-semibold">
            {/* {currencyFormatter(shippingCost)} */}
            {shippingCost}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">
          {/* {currencyFormatter(grandTotal)} */}
          0000
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
