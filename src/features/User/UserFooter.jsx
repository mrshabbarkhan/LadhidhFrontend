import { MdOutlineDashboardCustomize } from "react-icons/md";
import AddressSvg from "../../assets/ui/AddressSvg";
import NotifiactionSvg from "../../assets/ui/NotifiactionSvg";
import OrderBagSvg from "../../assets/ui/OrderBagSvg";
import RewardSvg from "../../assets/ui/RewardSvg";
import WalletSvg from "../../assets/ui/WalletSvg";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../auth/LocalStorageContext";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { RiMapPin2Line } from "react-icons/ri";
import { GoBell } from "react-icons/go";

function UserFooter() {
  const { user } = useLocalStorage();

  return (
    <>
      <Link
        to={"/profile/orders"}
        className="flex items-center gap-3 border-b py-3 cursor-pointer"
      >
        <IoBagHandleOutline className="text-2xl" />
        <span className="flex justify-between items-center grow">
          <span>
            <h1 className="font-medium text-lg cursor-pointer">Orders</h1>
            <p className="text-sm text-slate-400 cursor-pointer">
              Order Placed: 1
            </p>
          </span>
          <i className="fa fa-angle-right"></i>
        </span>
      </Link>

      <Link to={"/profile/address"} className="flex items-center gap-3 border-b py-3">
        <RiMapPin2Line className="text-2xl " />
        <span className="flex justify-between items-center grow">
          <span>
            <h1 className="font-medium text-lg">Address</h1>
            <p className="text-sm text-slate-400">Sector E, R.K. Puram,Kota</p>
          </span>
          <i className="fa fa-angle-right"></i>
        </span>
      </Link>

      <div className="flex items-center gap-3 border-b py-3">
        <GoBell className="text-xl" />
        <span className="flex justify-between items-center grow">
          <span>
            <h1 className="font-medium text-lg">Notification</h1>
            <p className="text-sm text-slate-400">3 unread notification</p>
          </span>
          <i className="fa fa-angle-right"></i>
        </span>
      </div>

      {user?.isAdmin && (
        <Link to={"/admin"}>
          <div className="flex items-center gap-3 border-b py-3">
            <MdOutlineDashboardCustomize className=" text-2xl" />
            <span className="flex justify-between items-center grow">
              <span>
                <h1 className="font-medium text-lg">Dashboard</h1>
                <p className="text-sm text-slate-400">Hello ladhidh </p>
              </span>
              <i className="fa fa-angle-right"></i>
            </span>
          </div>
        </Link>
      )}
    </>
  );
}

export default UserFooter;
