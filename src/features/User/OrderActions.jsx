import { Link } from "react-router-dom";
import ReturnPrSvg from "../../assets/ui/ReturnPrSvg";
import { TbTruckDelivery } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { MdOutlineHelpOutline } from "react-icons/md";

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
          <div className="w-fit p-1.5 sm:p-2 rounded-full text-white text-xl sm:text-2xl bg-primary m-auto">
            <MdOutlineHelpOutline />
          </div>
          <p className="text-sm sm:text-md">Support</p>
        </span>
      </>
    );
}

export default OrderActions
