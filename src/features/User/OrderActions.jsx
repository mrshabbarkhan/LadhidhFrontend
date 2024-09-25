import { Link } from "react-router-dom";
import MyOrderSvg from "../../assets/ui/MyOrderSvg";
import MyWishlistSvg from "../../assets/ui/MyWishlistSvg";
import ReturnPrSvg from "../../assets/ui/ReturnPrSvg";

function OrderActions() {
    return (
      <>
        <span>
          <Link to={"/orders"}>
            <div className="w-fit p-2 sm:p-3 rounded-full bg-primary m-auto ">
              <MyOrderSvg />
            </div>
            <p className="text-sm sm:text-md">My Order</p>
          </Link>
        </span>
        <span>
          <Link to={"/favorites"}>
            <div className="w-fit p-2 sm:p-3 rounded-full bg-primary m-auto">
              <MyWishlistSvg />
            </div>
            <p className="text-sm sm:text-md">My Wishlist</p>
          </Link>
        </span>
        <span>
          <div className="w-fit p-2 sm:p-3 rounded-full bg-primary m-auto">
            <ReturnPrSvg />
          </div>
          <p className="text-sm sm:text-md">Return Pr.</p>
        </span>
      </>
    );
}

export default OrderActions
