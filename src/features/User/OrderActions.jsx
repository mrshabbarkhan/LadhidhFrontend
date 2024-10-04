import { Link } from "react-router-dom";
import ReturnPrSvg from "../../assets/ui/ReturnPrSvg";
import { TbTruckDelivery } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";

function OrderActions() {
    return (
      <>
        <span>
          <Link to={"/profile/orders"}>
            <div className="w-fit p-1 sm:p-2 rounded-full bg-primary m-auto text-white text-2xl">
              <TbTruckDelivery />
            </div>
            <p className="text-sm sm:text-md">My Order</p>
          </Link>
        </span>
        <span>
          <Link to={"/favorites"}>
            <div className="w-fit p-1.5 sm:p-2 rounded-full bg-primary m-auto text-white text-xl sm:text-xl">
              <FiHeart />
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
