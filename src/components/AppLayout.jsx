import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navs/Navbar";
import InnerNavbar from "./Navs/InnerNavbar";
import NavigationBar from "./Navs/NavigationBar";

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const pathName1 = location.pathname === "/category" && "Categories";
  const pathName2 = location.pathname === "/favorites" && "Favorite";
  const pathName3 = location.pathname === "/cart" && "Cart";
  const pathName4 = location.pathname === "/profile" && "Profile";
  const pathName5 = location.pathname === "/product-list" && "Product List";
  const pathName6 = location.pathname === "/profile/orders" && "Orders";
  const pathName7 = location.pathname === "/payment" && "Payment";
  const pathName8 = location.pathname.startsWith("/product-list") && "Product-list";
  const pathname9 = location.pathname ==="/profile/address" && "Address"

  return (
    <>
      <div className="pt-16 pl-2 md:px-24 lg:px-36 reletive top-0 overflow-hidden">
        {isHomePage ? (
          <Navbar />
        ) : (
          <InnerNavbar>
            {pathName1 || pathName2 || pathName3 || pathName4 || pathName5 || pathName6 || pathName7 || pathName8 || pathname9}
          </InnerNavbar>
        )}

        <main className="sm:pt-5 ">
          <Outlet />
        </main>
        
        {!pathName5 ? <NavigationBar /> : null}
      </div>
    </>
  );
}

export default AppLayout;
