import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Spinner from "../../components/Spinner";
import { useCart } from "./useCart";
import { useDeleteCart } from "./useDeleteCart";

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

  const oldPrice = Math.floor(price / (1 - discount / 100));

  useEffect(() => {
    setTempQty(() => {
      const filterd = cartItems.find((item) => item.product._id == id);
      return filterd ? filterd.quantity : qty;
    });
  }, [cartItems, id, qty]);

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-5 Favorites_List drop-shadow-lg flex p-2 rounded-lg"
    >
      <div className="grow flex flex-col justify-between">
        <div>
          <h1 className="mt-2 text-md  leading-6 font-medium flex items-center flex-wrap gap-2 ">
            {title}{" "}
            <p className="text-sm border px-2 w-fit rounded-md text-nowrap">
              {quantity}
            </p>
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
          className="mt-3 border shadow-sm w-fit  px-1 py-0.5 rounded-lg text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          {isPending ? (
            <Spinner className="my-1 border-black" />
          ) : (
            <FaRegTrashCan className="text-xl my-0.5" />
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2">
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
            onClick={handleDecrease}
            className="border px-2 rounded-lg shadow-sm  font-semibold"
          >
            -
          </button>
          <h1 className="font-semibold">{tempQty}</h1>
          <button
            onClick={handleIncrease}
            className="border px-2 rounded-lg shadow-sm hover:shadow-md font-semibold"
          >
            +
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default CartList;
