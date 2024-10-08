import { useNavigate } from "react-router-dom";
import AddToButton from "../../components/AddToButton";

import { useAOS } from "../../hooks/useAOS";
import OutOfStock from "../../components/OutOfStock";

function Card({ product, isOnTrand }) {
  const { img, pack, title, discount, code, price, inStock, _id } = product;
  const oldPrice = Math.floor(price / (1 - discount / 100));

  useAOS(product);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-details/${_id}`);
  };

  const sectionStyle = isOnTrand
    ? "min-w-[18rem] sm:min-w-[16rem] "
    : "min-w-[14rem] sm:min-w-[16rem]";
  const imgStyle = isOnTrand ? "h-36 w-36" : "h-28 w-28";

  return (
    <section
      data-aos="fade-up"
      className={` max-w-[16rem] ${sectionStyle} m-auto sm:m-0 sm:min-w-[16rem] mb-3 text-wrap rounded-xl p-4 pb-2 bg-white `}
    >
      <div className="bg-red-50 rounded-xl cursor-pointer transition-transform ">
        <img
          src={img}
          alt={title}
          className={`object-cover object-center m-auto ${imgStyle} sm:w-40 sm:h-40 rounded-t-xl hover:scale-90`}
          onClick={handleClick}
        />
      </div>
      <div className="px-2 mt-1 flex flex-col justify-between ">
        <h1 className="mt-2 text-lg leading-6 font-semibold">{title}</h1>
        <p className="text-xs font-medium text-primary py-2 leading-3">
          {pack}
        </p>
        {discount ? (
          <p className="text-xs leading-3">
            FLAT {discount}% off Code: {code}
          </p>
        ) : (
          <p className="mt-3"></p>
        )}
        <div className="flex  justify-between items-center mt-2">
          <span className="flex gap-2 items-center">
            <h1 className="text-xl text-primary font-medium">
              &#x20B9; {price}
            </h1>
            {
              <span className=" sm:inline line-through text-gray-500 font-medium">
                &#8377;{oldPrice || null}
              </span>
            }
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
