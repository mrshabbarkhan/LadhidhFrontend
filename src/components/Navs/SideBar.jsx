import UserImage from "../../assets/images/avatar/5.jpg";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../features/auth/LocalStorageContext";
import { GiChickenLeg } from "react-icons/gi";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineSquare3Stack3D, HiOutlineUserCircle } from "react-icons/hi2";
import { MdLogout, MdOutlineAdminPanelSettings } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import NavItem from "../NavItem";

function SideBar({ on, setOn }) {
  const { user, logOutUser } = useLocalStorage();

  return (
    <>
      <div
        className={`dark-overlay ${on ? "active" : ""} h-[100vh]`}
        onClick={() => setOn(!on)}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 h-[100vh] w-[260px] sm:w-[260px] z-[999999] transition-all duration-2000 ${
          on ? "flex" : "hidden"
        } flex-col overflow-y-scroll bg-white`}
        onClick={() => setOn(!on)}
      >
        <Link to={"/profile"}>
          <div className="author-box flex items-center bg-primary p-4">
            <div className="dz-media border-2 rounded-full h-10 w-12 overflow-hidden object-cover object-center mr-3">
              <img src={UserImage} alt="" className="rounded-full" />
            </div>
            <div className="dz-info">
              <h5 className="name text-white mb-0 font-bold text-xl leading-5 line-clamp-1">
                {user?.name || "Logged in"}
              </h5>
              <div className="text-white text-sm w-40 line-clamp-1">
                {user?.email || "No email found"}
              </div>
            </div>
          </div>
        </Link>

        <ul className="p-4 mb-7 pl-6">
          <li className="nav-label uppercase text-sm font-normal text-black/50">
            Main Menu
          </li>

          <NavItem to="/" icon={GiChickenLeg} label="Home" />
          <NavItem to="/profile" icon={HiOutlineUserCircle} label="Profile" />
          <NavItem to="/cart" icon={IoBagHandleOutline} label="Cart" />
          <NavItem
            to="/category"
            icon={HiOutlineSquare3Stack3D}
            label="Category"
          />

          {user?.isAdmin && (
            <li>
              <Link
                to="/admin"
                className="nav-link flex items-center text-black py-2 relative"
              >
                <span className="dz-icon mr-4 text-xl">
                  <MdOutlineAdminPanelSettings />
                </span>
                <span className="font-medium text-lg">Dashboard</span>
                <span className="badge bg-info text-white absolute top-0 right-0 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </Link>
            </li>
          )}

          {user && (
            <li className="absolute bottom-5">
              <button
                className="nav-link flex items-center text-black py-2"
                onClick={logOutUser}
              >
                <span className="dz-icon mr-4 text-xl">
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
