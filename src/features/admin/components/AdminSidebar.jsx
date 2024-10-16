import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../auth/LocalStorageContext";
import { AiOutlineLogout } from "react-icons/ai";
import { RiDashboard3Line, RiEBikeLine } from "react-icons/ri";
import { LuUsers2 } from "react-icons/lu";
import {
  IoImageOutline,
  IoListOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LiaProductHunt } from "react-icons/lia";
import { GoHomeFill } from "react-icons/go";
import { TbBellSearch } from "react-icons/tb";

const AdminSidebar = () => {
  const { logOutUser } = useLocalStorage();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <nav className="author-box h-screen w-52 bg-gray-100 relative overflow-hidden ">
      <ul className="flex flex-col  gap-4 text-left pl-5 pt-5 text-lg text-white">
        <NavLink
          to={"/"}
          className=" w-full  py-1 rounded-l-lg text-black flex items-center text-white-600 "
        >
          <span className="flex items-center gap-2">
            <GoHomeFill />
            Home
          </span>
        </NavLink>

        <NavLink
          to={"/admin"}
          end
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-black"
            }`
          }
        >
          <span className="flex items-center gap-2">
            <RiDashboard3Line />
            Dashboard
          </span>
        </NavLink>

        <NavLink
          to={"/admin/products"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-black"
            }`
          }
        >
          <span className="flex items-center gap-2">
            <LiaProductHunt />
            Products
          </span>
        </NavLink>

        <NavLink
          to={"/admin/category"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-black"
            }`
          }
        >
          <span className="flex items-center gap-2">
            <IoListOutline />
            Categories
          </span>
        </NavLink>

        <NavLink
          to={"/admin/banners"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-black"
            }`
          }
        >
          <span className="flex items-center gap-2">
            <IoImageOutline />
            Banners
          </span>
        </NavLink>

        <NavLink
          to={"/admin/users"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-black"
            }`
          }
        >
          <span className="flex items-center gap-2">
            <LuUsers2 />
            Users
          </span>
        </NavLink>

        <NavLink
          to={"/admin/riders"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-black"
            }`
          }
        >
          <span className="flex items-center gap-2">
            <span>
              {" "}
              <RiEBikeLine />
            </span>
            Riders
          </span>
        </NavLink>

        <NavLink
          to={"/admin/requests"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-black"
            }`
          }
        >
          <span className="flex items-center gap-2">
            <span>
              <TbBellSearch />
            </span>
            Requests
          </span>
        </NavLink>

        <NavLink
          to={"/admin/settings"}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                : "text-black"
            }`
          }
        >
          <span className="flex items-center gap-2">
            <span>
              <IoSettingsOutline />
            </span>
            Settings
          </span>
        </NavLink>

        {/* Loggout */}

        <NavLink
          to={"/"}
          className="bg-primary-dark w-full px-2 py-1 rounded-l-lg flex items-center text-white-600 absolute bottom-5"
        >
          <li>
            <div className="nav-link flex items-center " onClick={handleLogout}>
              <span className="dz-icon mr-2">
                <AiOutlineLogout />
              </span>
              <span>Logout</span>
            </div>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
