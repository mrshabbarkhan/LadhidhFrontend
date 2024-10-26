import { useLocation, useNavigate, useParams } from "react-router-dom";
import BackButton from "../BackButton";
import ShoppingCart from "../ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../features/Favorites/favoriteSlice";
import { useLocalStorage } from "../../features/auth/LocalStorageContext";
import { MdLogout } from "react-icons/md";
import { useProducts } from "../../features/admin/page/products/useProducts";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useSingleProduct } from "../../features/admin/page/products/useSingleProduct";
import { useEffect, useState } from "react";

function InnerNavbar({ children }) {
  const location = useLocation();
  const pathName4 = location.pathname === "/profile" && "Profile";
  const pathName5 = location.pathname.startsWith("/product-details");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product, singleProduct, isPending, isSuccess, isIdle } =
    useSingleProduct();
  const { id } = useParams();

  const { favoriteProducts } = useSelector((state) => state.favoriteProducts);
  const { user, logOutUser } = useLocalStorage();

  useEffect(() => {
    if (id) {
      singleProduct(id);
    }
  }, [id]);

  const isInFavoriteProduct =
    favoriteProducts.length > 0 &&
    favoriteProducts.some((item) => item._id === product?._id);

  const handleFavorite = () => {
    if (isInFavoriteProduct) {
      dispatch(removeFromFavorite(product));
    } else {
      dispatch(addToFavorite(product));
    }
  };

  const handleLogOut = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <nav
      className={`glassmorphism shadow-md flex justify-between w-full py-4 px-4 sm:px-2 pr-4 md:px-24 lg:px-48 fixed left-0 top-0 z-30 ${
        pathName5 ? "" : "opacity-100 bg-white border-b"
      }`}
    >
      {pathName5 && isSuccess ? (
        <div className="flex justify-between items-center w-full">
          <div className="font-bold w-fit  text-center py-1 px-1.5 rounded-full border-none flex justify-between">
            <BackButton>{children}</BackButton>
          </div>
          <div
            onClick={() => handleFavorite()}
            className={`bg-black/30 py-1.5 px-1.5 rounded-full text-xl cursor-pointer ${
              isInFavoriteProduct ? "text-primary" : "text-white"
            }`}
          >
            {isInFavoriteProduct ? <FaHeart /> : <FaRegHeart />}
          </div>
        </div>
      ) : (
        <BackButton>{children}</BackButton>
      )}
      <div className="flex items-center sm:gap-3">
        {user && pathName4 && (
          <span
            className="text-xl mx-4 flex items-center gap-2 cursor-pointer"
            onClick={handleLogOut}
          >
            <MdLogout className="text-xl" />
            logout
          </span>
        )}
        {pathName4 && <ShoppingCart />}
      </div>
    </nav>
  );
}

export default InnerNavbar;
