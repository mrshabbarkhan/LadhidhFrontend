import { useEffect, useState } from "react";
import { useDeleteCart } from "./useDeleteCart";
import Spinner from "../../components/Spinner";
import { useCart } from "./useCart";
import { useAOS } from "../../hooks/useAOS";
import { FaRegTrashCan, FaTrashArrowUp } from "react-icons/fa6";

function CartList({ product, onQtyChange }) {
  const {
    _id: id,
    img,
    qty = 1,
    title,
    price,
    pack,
    discount,
    inStock,
    quantity,
  } = product.product;

  const { cartItems } = useCart();
  const { removeCart, isPending } = useDeleteCart();
  const [tempQty, setTempQty] = useState(qty);

  useAOS(id);

  const oldPrice = Math.floor(price / (1 - discount / 100));

  useEffect(() => {
    setTempQty(() => {
      const filterd = cartItems.find((item) => item.product._id == id);
      return filterd ? filterd.quantity : qty;
    });
  }, [cartItems]);

  const handleIncrease = () => {
    const newQty = tempQty + 1;
    setTempQty(newQty);
    onQtyChange(id, newQty);
  };

  const handleDecrease = () => {
    if (tempQty > 1) {
      const newQty = tempQty - 1;
      setTempQty(newQty);
      onQtyChange(id, newQty);
    }
  };

  const handleDelete = async () => {
    removeCart(id);
  };

  return (
    <div
      data-aos="fade-up"
      className="mb-5 Favorites_List drop-shadow-lg flex p-2 rounded-lg"
    >
      <div className="grow flex flex-col justify-between">
        <div>
          <h1 className="mt-2 text-md  leading-6 font-medium flex items-center gap-2">
            {title}{" "}
            <p className="text-sm border px-2 w-fit rounded-md">{quantity}</p>
          </h1>

          <div className="flex items-center gap-2">
            <h1 className="text-xl text-primary font-semibold">
              &#x20B9; {price}
            </h1>
            <span className="line-through">&#x20B9;{oldPrice}</span>
          </div>
          <p className="text-xs font-medium text-primary-dark">{pack}</p>
        </div>
        <div
          onClick={handleDelete}
          className="border shadow w-fit hover:scale-95 px-1 rounded-lg text-black hover:text-white hover:bg-primary transition-size cursor-pointer"
        >
          {isPending ? (
            <Spinner className="my-1 border-black" />
          ) : (
            <FaRegTrashCan className="text-xl my-0.5" />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative w-fit ">
          <img
            className={`w-24 rounded-lg object-cover ${
              inStock || "opacity-40"
            }`}
            src={img}
            alt={title}
          />
          {inStock || (
            <span className="absolute top-0 w-24 h-full rounded-full font-medium flex items-center">
              Out of Stock
            </span>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleIncrease}
            className="border border-primary px-2 rounded-lg hover:text-white hover:bg-primary hover:scale-90 transition font-semibold"
          >
            +
          </button>
          <h1 className="font-semibold">{tempQty}</h1>
          <button
            onClick={handleDecrease}
            className="border border-primary px-2 rounded-lg hover:text-white hover:bg-primary hover:scale-90 transition font-semibold"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
