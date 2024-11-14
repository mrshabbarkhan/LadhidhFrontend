import { AnimatePresence, motion } from "framer-motion";
import CartList from "./CartList";
import { useEffect, useMemo, useState } from "react";
import Loader from "../../components/Loader";
import AuthButton from "../auth/AuthButton";
import CheckOutFooter from "../../components/CheckOutFooter";
import { useLocalStorage } from "../auth/LocalStorageContext";
import { useCart } from "./useCart";
import { toast } from "sonner";
import { useSettings } from "../admin/page/settings/useSettings";
import emptyImg from "/empty-cart.gif";
import ApplyCoupan from "./ApplyCoupan";

function CartPage() {
  const [updatedCart, setUpdatedCart] = useState([]);
  const [coupanDiscount, setCoupanDiscount] = useState(null);
  const { settings } = useSettings();
  const { user } = useLocalStorage();
  const { cartItems, isPending: isLoading } = useCart();

  useEffect(() => {
    setUpdatedCart(cartItems);
  }, [cartItems]);

  const handleQtyChange = (id, newQty) => {
    setUpdatedCart((prevCart) =>
      prevCart.map((item) =>
        item.product._id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const subtotal = updatedCart?.reduce(
    (acc, item) => acc + item.product?.price * item.quantity,
    0
  );

  const memoizedUpdatedCart = useMemo(() => {
    return updatedCart?.map((product) => (
      <CartList
        product={product}
        key={product.product._id}
        onQtyChange={handleQtyChange}
      />
    ));
  }, [updatedCart]);

  if (isLoading) {
    return <Loader className={"h-80"} />;
  }

  if (!user) {
    toast.error("Please log in");
    return <AuthButton onClickOverlyHide="true" initial="true" />;
  }

  if (!updatedCart?.length) {
    return (
      <>
        <img className="m-auto mt-10" src={emptyImg} alt="cart is empty" />
        <h1 className="text-center mt-20 text-xl font-semibold">
          Your cart is empty
        </h1>
      </>
    );
  }

  const hasDeliveryCharge =
    subtotal >= settings?.freeDeliveryOrderValue ? 0 : settings?.deliveryCharge;

  return (
    <section className="mb-20">
      <AnimatePresence>
        {memoizedUpdatedCart.map((product) => (
          <motion.div
            key={product.key}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            {product}
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="p-3 rounded-lg border-2 border-dashed border-primary ">
        <h1 className="font-semibold text-lg">Bill Details</h1>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <h1 className="font-semibold">&#x20B9;{subtotal}</h1>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <h6 className="font-semibold">
            {hasDeliveryCharge ? `₹${hasDeliveryCharge}` : "Free"}
          </h6>
        </div>

        <div className="flex justify-between">
          <p>Handle Fee</p>
          <h6 className="font-semibold">
            {settings?.handlingFee ? `₹${settings.handlingFee}` : "Free"}
          </h6>
        </div>

        {coupanDiscount > 0 && (
          <div className="flex justify-between">
            <p>Coupan Discount </p>
            <h6 className="font-semibold">- ₹{coupanDiscount}</h6>
          </div>
        )}

        <div className="flex justify-between border-t mt-2">
          <h1 className="font-semibold text-lg">Total</h1>
          <h1 className="font-semibold text-lg">
            &#x20B9;
            {subtotal +
              hasDeliveryCharge +
              settings?.handlingFee -
              coupanDiscount}
          </h1>
        </div>
      </div>

      <ApplyCoupan setCoupan={setCoupanDiscount} />

      <section className="w-full fixed bottom-0 left-0 md:px-24 lg:px-48 overflow-hidden text-xs sm:text-sm bg-white">
        <CheckOutFooter
          qty={updatedCart?.length}
          total={
            subtotal +
            hasDeliveryCharge +
            settings?.handlingFee -
            coupanDiscount
          }
          cart={updatedCart}
        />
      </section>
    </section>
  );
}

export default CartPage;
