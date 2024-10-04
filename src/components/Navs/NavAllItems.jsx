import { NavLink } from "react-router-dom";
import { NavItems } from "../../utils/utils";
import { GiChickenLeg } from "react-icons/gi";
import { HiOutlineSquare3Stack3D, HiOutlineUserCircle } from "react-icons/hi2";
import { LuHeart } from "react-icons/lu";
import { BsBagX } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxStack } from "react-icons/rx";

function NavAllItems() {

  const iconMap = {
    house: <GiChickenLeg />,
    box: <RxStack />,
    bagshopping: <IoBagHandleOutline />,
    user: <HiOutlineUserCircle />,
  };

  return (
    <div className=" grid grid-cols-4 transition pt-2">
      {NavItems.map((route, index) => (
        <NavLink
          key={index}
          to={route.path}
          className={({ isActive }) =>
            `hover:cursor-pointer flex flex-col text-2xl justify-center items-center px-6 py-1  ${
              isActive ? " text-primary" : "bg-white"
            }`
          }
        >
          <span className="">{iconMap[route.class]}</span>
          <span className="hover:cursor-pointer text-sm leading-6 font-semibold">
            {route.tittle}
          </span>
        </NavLink>
      ))}
    </div>
  );
}

export default NavAllItems;
