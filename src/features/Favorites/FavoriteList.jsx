import { useDispatch } from "react-redux";
import AddToButton from "../../components/AddToButton";
import { addToProductDetails } from "../Product-list/productDetailSlice";
import { useNavigate } from "react-router-dom";
import OutOfStock from "../../components/OutOfStock";

function FavoriteList({ product }) {
  const { img, pack, title, discount, code, price, inStock } = product;
  const oldPrice = Math.floor(price / (1 - discount / 100));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViewDetails = () => {
    dispatch(addToProductDetails(product));
    navigate("/product-details");
  };

  return (
    <div className="mb-5 Favorites_List drop-shadow-lg flex p-2 rounded-lg">
      <div className="grow ">
        <h1 className="mt-2 text-md text-gray-800 leading-6 font-medium">
          {title}
        </h1>
        {discount && (
          <p className="text-xs mt-2 text-orange-500">
            FLAT {discount} off Code: {code}
          </p>
        )}
        <div className="flex items-center gap-2">
          <h1 className="text-xl text-primary-dark font-semibold">
            &#x20B9; {price}
          </h1>
          <span className="line-through text-gray-500 font-medium">
            &#8377;{oldPrice}
          </span>
        </div>
        <p className="text-xs font-medium text-primary-dark">{pack}</p>
        <button
          onClick={handleViewDetails}
          className="text-sm hover:scale-90 mt-5 border p-1"
        >
          View Details
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <img className="w-24 rounded-lg object-cover" src={img} alt="" />
        {inStock ? (
          <AddToButton {...product} redirect={"/cart"} />
        ) : (
          <OutOfStock product={product} />
        )}
      </div>
    </div>
  );
}

export default FavoriteList;
