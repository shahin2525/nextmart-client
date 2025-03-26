import Address from "@/components/modules/cart/Address";
import CartProducts from "@/components/modules/cart/CartProduct";
import Coupon from "@/components/modules/cart/Coupon";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";
import AllProductsBanner from "@/components/modules/products/banner";
import NMContainer from "@/components/ui/core/NMContainer";

const CartPage = () => {
  return (
    <NMContainer className="bg-slate-100">
      <AllProductsBanner title="Cart page" path="home cart page" />
      <div className="grid grid-cols-12 gap-8 my-5">
        <CartProducts />
        <Coupon />
        <Address />
        <PaymentDetails />
      </div>
    </NMContainer>
  );
};

export default CartPage;
