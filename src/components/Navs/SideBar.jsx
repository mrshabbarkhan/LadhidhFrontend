import UserImage from "../../assets/images/avatar/5.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../features/auth/LocalStorageContext";
import { GiChickenLeg } from "react-icons/gi";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdLogout, MdOutlineAdminPanelSettings } from "react-icons/md";
import NavItem from "../NavItem";
import { RxStack } from "react-icons/rx";

function SideBar({ on, setOn }) {
  const navigate = useNavigate();
  const { user, logOutUser } = useLocalStorage();

  const handleLogOut = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <>
      <div
        className={`dark-overlay ${on ? "active" : ""} h-[100vh]`}
        onClick={() => setOn(!on)}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 h-[100vh] w-52 sm:w-64 z-[999999] transition-transform duration-1000  ${
          on ? "translate-x-0" : "-translate-x-full"
        } flex-col overflow-hidden bg-white`}
      >
        <Link to={"/profile"}>
          <div className="flex items-center bg-primary p-4">
            <div className="border-2 rounded-full w-10 h-10 min-w-10 bg-red-700 overflow-hidden mr-3 flex-shrink-0">
              <img
                src={UserImage}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 sm:w-40">
              <h5 className="text-white font-bold text-xl leading-5 line-clamp-1 w-full overflow-hidden">
                {user?.name || "Logged in"}
              </h5>
              <div className="text-white text-sm line-clamp-1 w-full overflow-hidden">
                {user?.email || "No email found"}
              </div>
            </div>
          </div>
        </Link>

        <ul className="p-4 mb-7 pl-6 ">
          <li className="nav-label uppercase text-sm font-normal text-black/50">
            Main Menu
          </li>

          <NavItem to="/" icon={GiChickenLeg} label="Home" />
          <NavItem to="/profile" icon={HiOutlineUserCircle} label="Profile" />
          <NavItem to="/cart" icon={IoBagHandleOutline} label="Cart" />
          <NavItem to="/category" icon={RxStack} label="Category" />

          {user?.isAdmin && (
            <li>
              <Link
                to="/admin"
                className="nav-link flex items-center text-black py-1 my-2 hover:px-2 hover:bg-gray-200 rounded-lg relative transition-padding transition-background-color duration-200"
              >
                <span className=" mr-4 text-xl">
                  <MdOutlineAdminPanelSettings />
                </span>
                <span className="font-medium text-lg">Dashboard</span>
              </Link>
            </li>
          )}

          {user && (
            <li className="absolute bottom-5 px-2  border hover:bg-gray-50 rounded-lg ">
              <button
                className="nav-link flex items-center text-black py-1 hover:scale-95 "
                onClick={handleLogOut}
              >
                <span className="dz-icon mr-4 text-xl transition-transform transition-background-color duration-200">
                  <MdLogout />
                </span>
                <span className="font-medium text-lg">Logout</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default SideBar;
