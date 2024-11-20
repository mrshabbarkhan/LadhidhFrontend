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
import { MdOutlineChecklist } from "react-icons/md";
import { motion } from "framer-motion";

const AdminSidebar = () => {
  const { logOutUser } = useLocalStorage();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };

  const links = [
    { to: "/", icon: GoHomeFill, label: "Home" },
    { to: "/admin", icon: RiDashboard3Line, label: "Dashboard" },
    { to: "/admin/products", icon: LiaProductHunt, label: "Products" },
    { to: "/admin/category", icon: IoListOutline, label: "Categories" },
    {
      to: "/admin/subcategory",
      icon: MdOutlineChecklist,
      label: "Sub Category",
    },
    { to: "/admin/banners", icon: IoImageOutline, label: "Banners" },
    { to: "/admin/users", icon: LuUsers2, label: "Users" },
    { to: "/admin/riders", icon: RiEBikeLine, label: "Riders" },
    { to: "/admin/requests", icon: TbBellSearch, label: "Requests" },
    { to: "/admin/settings", icon: IoSettingsOutline, label: "Settings" },
  ];

  return (
    <motion.nav
      initial={{ translateX: -270 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.5, ease: "anticipate" }}
      className="h-screen w-52 bg-gray-100 shadow-lg relative"
    >
      <ul className="flex flex-col gap-2 pt-5 text-lg text-gray-800 overflow-y-auto">
        {links.map(({ to, icon: Icon, label }, index) => (
          <NavLink
            key={index}
            to={to}
            end
            className={({ isActive }) =>
              `w-full flex items-center px-4 py-2 gap-2 rounded-l-lg transition-colors  ${
                isActive
                  ? "bg-white w-full px-2 py-1 rounded-l-xl flex items-center text-gray-900"
                  : "text-black hover:bg-white"
              }`
            }
          >
            <Icon />
            <span>{label}</span>
          </NavLink>
        ))}

        {/* Logout Button */}
        <div
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-2 gap-2 rounded-l-lg text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer absolute bottom-5"
        >
          <AiOutlineLogout />
          <span>Logout</span>
        </div>
      </ul>
    </motion.nav>
  );
};

export default AdminSidebar;
