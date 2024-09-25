import { useLocation, useNavigate } from "react-router-dom";


function Categories({ product, redirect }) {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  
  const isInCategoryPage =
    pathname === "/category"
      ? "h-12 w-12 min-h-12 min-w-12 "
      : "h-20 w-20 min-h-20 min-w-20";

  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`${redirect}`)}
    >
    <img
      className={`${isInCategoryPage} sm:h-24 sm:w-24 object-center m-auto sm:min-h-24 sm:min-w-24 drop-shadow-xl`}
      src={product?.img}
      alt={product?.name}
    />

    <p className="font-medium text-center text-sm sm:text-lg line-clamp-1">{product?.name}</p>
    </div>
  );
}

export default Categories;
