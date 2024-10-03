import { useLocation } from "react-router-dom";
import BackButton from "../BackButton";
import ShoppingCart from "../ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../features/Favorites/favoriteSlice";
import { useLocalStorage } from "../../features/auth/LocalStorageContext";
import { AiOutlineLogout } from "react-icons/ai";

function InnerNavbar({ children }) {
  const location = useLocation();
  const pathName4 = location.pathname === "/profile" && "Profile";
  const pathName5 = location.pathname === "/product-details";
  
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productDetails);
  const { favoriteProducts } = useSelector((state) => state.favoriteProducts);
  const {user, logOutUser } = useLocalStorage();

  const isInFavoriteProduct = favoriteProducts.some(
    (item) => item._id === product._id
  );

  const handleFavorite = () => {
     if (isInFavoriteProduct) {
       dispatch(removeFromFavorite(product));
     } else {
       dispatch(addToFavorite(product)); 
     }
  };

  return (
    <nav
      className={`glassmorphism shadow-md flex justify-between w-full py-4 px-4 sm:px-2 pr-4 md:px-24 lg:px-36 fixed left-0 top-0 z-30 ${
        pathName5 ? "" : "opacity-100 bg-white border-b"
      }`}
    >
      {pathName5 ? (
        <div className="flex justify-between items-center w-full">
          <div className="font-bold w-fit  bg-black/30  text-center py-1 px-1.5 rounded-full text-white border-none flex justify-between">
            <BackButton>{children}</BackButton>
          </div>
          <i
            onClick={() => handleFavorite()}
            className={`cursor-pointer fa-${
              isInFavoriteProduct ? "solid" : "regular"
            } fa-heart ${
              isInFavoriteProduct ? "text-primary" : "text-white"
            } bg-black/30  px-1.5 rounded-full text-lg`}
          ></i>
        </div>
      ) : (
        <BackButton>{children}</BackButton>
      )}
      <div className="flex items-center">
        {user && pathName4 && (
          <span
            className="text-lg mx-4 flex items-center gap-2 cursor-pointer"
            onClick={() => logOutUser()}
          >
            <AiOutlineLogout className="text-xl " /> logout
          </span>
        )}
        {pathName4 && <ShoppingCart />}
      </div>
    </nav>
  );
}

export default InnerNavbar;
