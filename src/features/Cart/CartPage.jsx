import CartList from "./CartList";
import { useEffect, useMemo, useState } from "react";
import Loader from "../../components/Loader";
import AuthButton from "../auth/AuthButton";
import CheckOutFooter from "../../components/CheckOutFooter";
import { useLocalStorage } from "../auth/LocalStorageContext";
import { useCart } from "./useCart";
import toast from "react-hot-toast";

function CartPage() {
  const [updatedCart, setUpdatedCart] = useState([]); // Store updated quantities

  const { user } = useLocalStorage();
  const { cartItems, isPending: isLoading } = useCart();

  useEffect(() => {
    setUpdatedCart(cartItems);
  }, [cartItems]);

  useEffect(() => {
    if (!user) {
      toast.error("Please log in");
    }
  }, [user]);

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
    return updatedCart
      ?.map((dts, index) => (
        <CartList
          qty={dts.quantity}
          key={index}
          img={dts.product.img}
          title={dts.product.title}
          price={dts.product.price}
          discount={dts.product.discount}
          id={dts.product._id}
          pack={dts.product.pack}
          onQtyChange={handleQtyChange} // Pass the handler
        />
      ))
      .reverse();
  }, [updatedCart]);


  if (isLoading) {
    return <Loader className={"h-80"} />;
  }

  if (!user) {
    return <AuthButton onClickOverlyHide="true" />;
  }

  if (!updatedCart?.length) {
    return (
      <>
        <img
          className="m-auto mt-10"
          src="src/assets/empty-cart.gif"
          alt="cart is empty"
        />
        <h1 className="text-center mt-20 text-xl font-semibold">
          Your cart is empty
        </h1>
      </>
    );
  }

  return (
    <section>

      {memoizedUpdatedCart}

      <div className="p-3 rounded-lg border-2 border-dashed border-primary mb-20">
        <h1 className="font-semibold text-lg">Bill Details</h1>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <h1 className="font-semibold">&#x20B9;{subtotal}</h1>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <h6 className="font-semibold">Free</h6>
        </div>
        <div className="flex justify-between border-t mt-2">
          <h1 className="font-semibold text-lg">Total</h1>
          <h1 className="font-semibold text-lg">&#x20B9;{subtotal}</h1>
        </div>
      </div>

      <section  className="w-full fixed bottom-0 left-0 md:px-24 lg:px-36 overflow-hidden text-xs sm:text-sm bg-white">
        <CheckOutFooter qty={updatedCart?.length} total={subtotal} cart={updatedCart} />
      </section>
    </section>
  );
}

export default CartPage;
