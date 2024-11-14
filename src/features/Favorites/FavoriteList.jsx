import AddToButton from "../../components/AddToButton";
import { useNavigate } from "react-router-dom";
import OutOfStock from "../../components/OutOfStock";

function FavoriteList({ product }) {
  const { img, pack, title, discount, code, price, inStock, _id } = product;
  const oldPrice = Math.floor(price / (1 - discount / 100));

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product-details/${_id}`);
  };

  return (
    <div className="mb-5 Favorites_List drop-shadow-lg flex p-2 rounded-lg">
      <div className="grow flex flex-col justify-between">
        <div>
          <h1 className="mt-2 text-md text-gray-800 leading-6 font-medium">
            {title}
          </h1>
          {discount > 0 && (
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
        </div>

        {/* <button
          onClick={handleViewDetails}
          className="text-sm underline-offset-4 opacity-70 hover:scale-90 w-fit rounded-md hover:underline p-1 text-orange-500"
        >
          see more
        </button> */}
      </div>
      <div className="flex flex-col gap-2">
        <img
          onClick={handleViewDetails}
          className="w-24 rounded-lg object-cover hover:scale-90 cursor-pointer transition-transform duration-200"
          src={img}
          alt="product"
        />
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
