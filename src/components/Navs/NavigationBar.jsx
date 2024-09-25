import { useLocation } from "react-router-dom";
import NavAllItems from "./NavAllItems";


function NavigationBar() {
  const location = useLocation()
  const isOnCart = location.pathname === "/cart"

  return (
    <section className="w-full sm:hidden fixed bottom-0 left-0 md:px-24 lg:px-36 overflow-hidden text-xs sm:text-sm bg-white">
      {isOnCart || <NavAllItems/>}
    </section>
  );
}

export default NavigationBar;
