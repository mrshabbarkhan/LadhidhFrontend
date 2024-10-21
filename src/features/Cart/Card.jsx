import { useNavigate } from "react-router-dom";
import AddToButton from "../../components/AddToButton";

import { useAOS } from "../../hooks/useAOS";
import OutOfStock from "../../components/OutOfStock";
import { GiSpoon } from "react-icons/gi";

function Card({ product, isOnTrand }) {
  const { img, pack, title, discount, code, price, inStock, _id, quantity } =
    product;
  const oldPrice = Math.floor(price / (1 - discount / 100));

  useAOS(product);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-details/${_id}`);
  };

  const sectionStyle = isOnTrand
    ? "sm:min-w-[14rem] min-w-[14rem]  " // Use responsive sizes
    : "sm:min-w-[14rem] min-w-[14rem]"; // Smaller width for regular cards

  const imgStyle = isOnTrand
    ? "h-28 w-28 sm:h-28 sm:w-28" // Responsive image size
    : "h-28 w-28 sm:h-28 sm:w-28";

  return (
    <section
      data-aos="fade-up"
      className={`max-w-[16rem] ${sectionStyle} m-auto mb-3 text-wrap rounded-xl p-4 pb-2 bg-white transition-all duration-300 hover:shadow-xl cursor-pointer`} // Adjust with hover effects
    >
      <div className="bg-red-50 rounded-xl cursor-pointer">
        <img
          src={img}
          alt={title}
          onClick={handleClick}
          className={`object-cover object-center m-auto ${imgStyle} sm:w-40 sm:h-40 rounded-t-xl hover:scale-95 transition-transform duration-200`}
        />
      </div>
      <div className="px-2 mt-1 flex flex-col justify-between cursor-pointer">
        <h1 className="mt-2 text-lg leading-6 font-semibold cursor-pointer">
          {title}
        </h1>
        <p className="flex items-center my-1 bg-gray-50 border text-sm w-fit gap-2 rounded-md px-2">
          <GiSpoon className="text-xs" /> {quantity}
        </p>
        <p className="text-xs font-medium text-primary  pb-2 pt-1 leading-3 cursor-pointer">
          {pack}
        </p>
        {discount ? (
          <p className="text-xs leading-3">
            FLAT {discount}% off Code: {code}
          </p>
        ) : (
          <p className="mt-3"></p>
        )}
        <div className="flex justify-between items-center mt-2">
          <span className="flex gap-2 items-center ">
            <h1 className="text-xl text-primary font-medium cursor-pointer">
              &#x20B9; {price}
            </h1>
            <span className="sm:inline line-through text-gray-500 font-medium">
              &#8377;{oldPrice || null}
            </span>
          </span>
          {inStock ? (
            <AddToButton {...product} redirect={"/cart"} />
          ) : (
            <OutOfStock product={product} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Card;
