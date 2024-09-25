
import ComponentsSvg from "../../assets/ui/ComponentsSvg";
import HomeSvg from "../../assets/ui/HomeSvg";
import LogoutSvg from "../../assets/ui/LogoutSvg";
import ProfileSvg from "../../assets/ui/ProfileSvg";
import UserImage from "../../assets/images/avatar/5.jpg";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../features/auth/LocalStorageContext";

function SideBar({ on, setOn }) {
  
   const { user, logOutUser } = useLocalStorage();

  return (
    <>
      <div
        className={`dark-overlay ${!on || "active"} h-[100vh]`} //changed
        onClick={() => setOn(!on)}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 h-[100vh] w-[260px] z-[999999] transition-all duration-500 ${
          on ? "flex" : "hidden" // changed
        } flex-col overflow-y-scroll bg-white`}
        onClick={() => setOn(!on)}
      >
        <Link to={"/profile"}>
          <div className="author-box flex items-center bg-primary p-4">
            <div className="dz-media  w-12 h-12 overflow-hidden object-cover object-center rounded-md mr-3">
              <img src={UserImage} alt="" className="rounded-full border" />
            </div>
            <div className="dz-info ">
              <h5 className="name text-white mb-0 font-bold text-lg leading-4">
                {user ? user.name : "Logged in"}
              </h5>
              <div className="text-white text-sm text-balance w-40 line-clamp-1 font-light">
                {user ? user.email : "No email found"}
              </div>
            </div>
          </div>
        </Link>

        <ul className=" p-4 mb-7">
          <li className="nav-label uppercase text-md font-semibold text-black ">
            Main Menu
          </li>

          <li>
            <Link
              to={"/"}
              className="nav-link flex items-center text-black py-2"
            >
              <span className="dz-icon mr-2">
                <HomeSvg />
              </span>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              to={"/profile"}
              className="nav-link flex items-center text-black py-2"
            >
              <span className="dz-icon mr-2">
                <ProfileSvg />
              </span>
              <span>Profile</span>
            </Link>
          </li>

          <li className="pl-1">
            <Link
              to={"/cart"}
              className="nav-link flex items-center text-black py-2"
            >
              <span className="dz-icon mr-2">
                <i className="fa-solid fa-bag-shopping mr-1 text-gray-200"></i>
              </span>
              <span>Cart</span>
            </Link>
          </li>

          <li>
            <Link
              to={"/category"}
              className="nav-link flex items-center text-black py-2"
            >
              <span className="dz-icon mr-2">
                <ComponentsSvg />
              </span>
              <span>Category</span>
            </Link>
          </li>

          {user?.isAdmin && (
            <li>
              <Link
                to={"/admin"}
                className="nav-link flex items-center text-black py-2 relative"
              >
                <span className="dz-icon mr-2">
                  <i className="fa-solid fa-gauge mr-2 text-gray-300"></i>
                </span>
                <span>Dashboard</span>
                <span className="badge bg-info text-white absolute top-0 right-0 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </Link>
            </li>
          )}

          {user && (
            <li className="absolute bottom-5">
              <a
                className="nav-link flex items-center text-black py-2"
                onClick={() => logOutUser()}
              >
                <span className="dz-icon mr-2">
                  <LogoutSvg />
                </span>
                <span>Logout</span>
              </a>
            </li>
          )}
          </ul>
      </div>
    </>
  );
}

export default SideBar;
