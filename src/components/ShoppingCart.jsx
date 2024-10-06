import { Link } from "react-router-dom";
import { useCart } from "../features/Cart/useCart";
import { FiShoppingCart } from "react-icons/fi";

function ShoppingCart() {
  const { cartItems } = useCart();
  return (
    <Link to={"/cart"}>
      <div className="relative mt-1">
        <FiShoppingCart className="text-xl" />
        <span className="absolute -top-2 translate-x-1/2 w-5  text-center border-white border-2 text-white font-normal text-xs bg-primary rounded-full">
          {cartItems?.length || 0}
        </span>
      </div>
    </Link>
  );
}

export default ShoppingCart;
