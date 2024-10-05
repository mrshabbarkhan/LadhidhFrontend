import { useSelector } from "react-redux";
import FavoriteList from "./FavoriteList";

import datanotfound from "../../../public/notdatafound.jfif";

function FavoritesPage() {
  const { favoriteProducts } = useSelector((state) => state.favoriteProducts);
  if (favoriteProducts.length == 0) {
    return (
      <div className="flex justify-center object-cover">
        <img src={datanotfound} className="object-cover object-center -translate-y-6" alt="data not found" />
      </div>
    );
  }

  return (
    <>
      {favoriteProducts.map((prod, index) => (
        <FavoriteList
          key={prod._id}
          product={prod}
        />
      ))}
    </>
  );
}

export default FavoritesPage;
