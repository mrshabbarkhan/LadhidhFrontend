import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCart } from "../features/Cart/useCart";

function ShoppingCart() {
  const { cartItems } = useCart();
  return (
    <Link to={"/cart"}>
      <i className="fa fa-shopping-cart text-xl relative">
        <span className="absolute -top-3 -translate-x-1/2 w-6 text-center border-white border-2 text-white font-normal text-sm bg-primary rounded-full">
          {cartItems?.length || 0}
        </span>
      </i>
    </Link>
  );
}

export default ShoppingCart;
