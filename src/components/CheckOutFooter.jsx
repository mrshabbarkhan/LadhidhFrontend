import { Link } from "react-router-dom";
import { useCart } from "../features/Cart/useCart";

function CheckOutFooter({ qty, total }) {

  const {cartItems} = useCart()
  if (!cartItems.length) {
    return null;
  }

  return (
    <Link to="/payment">
      <div className="flex bg-primary items-center justify-between px-4 py-2 text-white my-2 mx-2 rounded-lg">
        <div className="flex gap-2">
          <h1 className="text-lg">{qty} items |</h1>
          <h1 className="font-semibold text-lg">&#x20B9;{total}</h1>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-lg">Checkout</span>
          <span>
            <i className="fa fa-angle-right"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CheckOutFooter;
