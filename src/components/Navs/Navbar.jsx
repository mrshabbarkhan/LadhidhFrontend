import MenuSvg from "../../assets/ui/MenuSvg";
import AuthButton from "../../features/auth/AuthButton";
import SideBar from "./SideBar";
import Location from "../Location";
import SearchProduct from "../SearchProduct";
import logoImage from "/logo.png";
import { useLocalStorage } from "../../features/auth/LocalStorageContext";
import { LuMapPin } from "react-icons/lu";
import ShoppingCart from "../ShoppingCart";
import { motion } from "framer-motion";

function Navbar() {
  const { user } = useLocalStorage();
  return (
    <section className="glassmorphism fixed right-0 left-0 top-0 z-20">
      <header className="bg-cover w-full h-14 sm:h-20 shadow-md">
        <div className="absolute top-0 right-0 w-full pt-3 sm:pt-4 px-2 md:px-24 lg:px-48">
          <div className="flex items-center  w-full relative  sm:gap-10 ">
            <a href={"/"}>
              <img className="h-6 sm:h-8" src={logoImage} alt="" />
            </a>
            <div className="ml-2 flex items-center justify-between w-full">
              <span className="leading-4 max-w-80 hidden sm:flex gap-3 items-center">
                <LuMapPin className="min-w-5  text-xl object-cover" />
                <Location />
              </span>
              <div className=" items-center gap-4 flex absolute right-0 sm:static">
                <SearchProduct className={"hidden sm:block "} />
                {!user ? (
                  <AuthButton />
                ) : (
                  <div className="border border-gray-300 overflow-hidden rounded-lg flex items-center shadow-sm transition-shadow duration-200 hover:shadow-md">
                    <motion.span
                      whileHover={{ backgroundColor: "#f4f4f5" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-3 py-1  cursor-pointer"
                    >
                      <ShoppingCart />
                    </motion.span>
                    <motion.span
                      whileHover={{ backgroundColor: "#f4f4f5" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-3 py-1  cursor-pointer"
                    >
                      <MenuSvg Component={SideBar} />
                    </motion.span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
