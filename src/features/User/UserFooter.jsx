import { MdOutlineDashboardCustomize } from "react-icons/md";
import AddressSvg from "../../assets/ui/AddressSvg";
import NotifiactionSvg from "../../assets/ui/NotifiactionSvg";
import OrderBagSvg from "../../assets/ui/OrderBagSvg";
import RewardSvg from "../../assets/ui/RewardSvg";
import WalletSvg from "../../assets/ui/WalletSvg";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../auth/LocalStorageContext";

function UserFooter() {

  const { user } = useLocalStorage()

  return (
    <>
      {/* <div className="flex items-center gap-3 border-b py-4">
          <RewardSvg />
          <span className="flex justify-between items-center grow">
            <span >
              <h1 className="font-medium text-lg">Rewards</h1>
              <p className="text-sm text-slate-400">Get Exiting rewards</p>
            </span>
            <i className="fa fa-angle-right"></i>
          </span>
        </div> */}
      <div className="flex items-center gap-3 border-b py-3 ">
        <OrderBagSvg />
        <span className="flex justify-between items-center grow">
          <span>
            <h1 className="font-medium text-lg">Orders</h1>
            <p className="text-sm text-slate-400">Order Placed: 1</p>
          </span>
          <i className="fa fa-angle-right"></i>
        </span>
      </div>
      <div className="flex items-center gap-3 border-b py-3">
        <AddressSvg />
        <span className="flex justify-between items-center grow">
          <span>
            <h1 className="font-medium text-lg">Address</h1>
            <p className="text-sm text-slate-400">Sector E, R.K. Puram,Kota</p>
          </span>
          <i className="fa fa-angle-right"></i>
        </span>
      </div>
      {/* <div className="flex items-center gap-3 border-b py-3">
          <WalletSvg/> 
          <span className="flex justify-between items-center grow">
            <span >
              <h1 className="font-medium text-lg">Wallet</h1>
              <p className="text-sm text-slate-400">Add Cash+</p>
            </span>
            <i className="fa fa-angle-right"></i>
          </span>
        </div> */}
      <div className="flex items-center gap-3 border-b py-3">
        <NotifiactionSvg />
        <span className="flex justify-between items-center grow">
          <span>
            <h1 className="font-medium text-lg">Notification</h1>
            <p className="text-sm text-slate-400">3 unread notification</p>
          </span>
          <i className="fa fa-angle-right"></i>
        </span>
      </div>

     {user?.isAdmin && <Link to={"/admin"}>
      <div className="flex items-center gap-3 border-b py-3">
        <MdOutlineDashboardCustomize className="text-gray-300" />
        <span className="flex justify-between items-center grow">
          <span>
            <h1 className="font-medium text-lg">Dashboard</h1>
            <p className="text-sm text-slate-400">Hello ladhidh </p>
          </span>
          <i className="fa fa-angle-right"></i>
        </span>
      </div>
      </Link>}
    </>
  );
}

export default UserFooter;
