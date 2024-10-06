import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../auth/LocalStorageContext";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiMapPin2Line } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

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
              Click to see orders
            </p>
          </span>
          <IoIosArrowForward />
        </span>
      </Link>

      <Link
        to={"/profile/address"}
        className="flex items-center gap-3 border-b py-3 cursor-pointer"
      >
        <RiMapPin2Line className="text-2xl " />
        <span className="flex justify-between items-center grow">
          <span>
            <h1 className="font-medium text-lg cursor-pointer">Address</h1>
            <p className="text-sm text-slate-400 cursor-pointer">
              Add new address
            </p>
          </span>
          <IoIosArrowForward />
        </span>
      </Link>

      <div className="flex items-center gap-3 border-b py-3">
        <GoBell className="text-xl" />
        <span className="flex justify-between items-center grow">
          <span>
            <h1 className="font-medium text-lg">Notification</h1>
            <p className="text-sm text-slate-400 leading-3">
              No notification yet
            </p>
          </span>
          <IoIosArrowForward />
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
              <IoIosArrowForward />
            </span>
          </div>
        </Link>
      )}
    </>
  );
}

export default UserFooter;
