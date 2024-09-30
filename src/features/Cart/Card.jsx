import { useNavigate } from "react-router-dom";
import AddToButton from "../../components/AddToButton";
import { useDispatch } from "react-redux";
import { addToProductDetails } from "../Product-list/productDetailSlice";

import { useAOS } from "../../hooks/useAOS";

function Card({ product, isOnTrand, redirect }) {
  const { img, pack, title, discount, code, price } = product;
  const oldPrice = Math.floor(price / (1 - discount / 100));

  useAOS(product)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToProductDetails(product));
    navigate(redirect);
  };

  const sectionStyle = isOnTrand
    ? "min-w-[18rem] sm:min-w-[16rem] "
    : "min-w-[12rem] sm:min-w-[16rem]";
  const imgStyle = isOnTrand ? "h-36 w-36" : "h-28 w-28";

  return (
    <section
      data-aos="fade-up"
      className={` max-w-[16rem] ${sectionStyle} m-auto sm:m-0 sm:min-w-[16rem] mb-3 text-wrap rounded-xl p-4 pb-2 bg-white shadow-md`}
    >
      <div className="bg-gray-50 rounded-xl cursor-pointer">
        <img
          src={img}
          alt={title}
          className={`object-cover object-center m-auto ${imgStyle} sm:w-40 sm:h-40 rounded-t-xl`}
          onClick={handleClick}
        />
      </div>
      <div className="px-2 mt-1">
        <h1 className="mt-2 text-lg leading-6 font-semibold">{title}</h1>
        <p className="text-xs font-medium text-primary py-2">{pack}</p>
        {discount && (
          <p className="text-xs ">
            FLAT {discount}% off Code: {code}
          </p>
        )}
        <div className="flex justify-between items-center mt-2">
          <span className="flex gap-2 items-center">
            <h1 className="text-xl text-primary font-medium">
              &#x20B9; {price}
            </h1>
            {isOnTrand && (
              <span className=" sm:inline line-through text-gray-500 font-medium">
                &#8377;{oldPrice || null}
              </span>
            )}
          </span>
          <AddToButton {...product} redirect={"/cart"} />
        </div>
      </div>
    </section>
  );
}

export default Card;
