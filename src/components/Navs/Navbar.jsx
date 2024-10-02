import MenuSvg from "../../assets/ui/MenuSvg";
import AuthButton from "../../features/auth/AuthButton";
import SideBar from "./SideBar";
import Location from "../Location";
import SearchProduct from "../SearchProduct";
// import logoImage from "../../../public/logo.png"
import { useLocalStorage } from "../../features/auth/LocalStorageContext";
import { LuMapPin } from "react-icons/lu";

function Navbar() {
  const { user } = useLocalStorage();
  return (
    <section className="glassmorphism fixed right-0 left-0 top-0 z-20">
      <header className="bg-cover w-full h-16 sm:h-20 shadow-md">
        <div className="absolute top-0 right-0 w-full pt-3 sm:pt-4 px-2 md:px-24 lg:px-36">
          <div className="flex items-center  w-full relative  sm:gap-10 ">
            <h1 className="font-bold text-3xl">
              <span className="text-primary">L</span>adh
              <span className="text-primary">i</span>dh
            </h1>
            {/* <img className="w-16" src={logoImage} alt="" /> */}
            <div className="ml-2 flex items-center justify-between w-full">
              <span className="leading-4 max-w-80 hidden sm:flex gap-3 items-center">
                {/* <Map /> */}
                <LuMapPin className="min-w-5  text-xl object-cover" />
                <Location />
              </span>
              <div className=" items-center gap-4 flex absolute right-0 sm:static">
                <SearchProduct className={"hidden sm:block"} />
                {!user ? (
                  <AuthButton />
                ) : (
                  <div className="border-2 p-0.5 rounded-lg">
                    <MenuSvg Component={SideBar} />
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

