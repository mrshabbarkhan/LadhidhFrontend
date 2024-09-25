import { useEffect, useState } from "react";
import { useDeleteCart } from "./useDeleteCart";
import Spinner from "../../components/Spinner";
import { useCart } from "./useCart";

function CartList({ id, img, qty = 1, title, price, pack, onQtyChange }) {
  const { cartItems } = useCart()
  const [tempQty, setTempQty] = useState(qty)

  useEffect(() => {
    setTempQty(() => {
      const filterd = cartItems.find((item) => item.product._id == id);
      return filterd ? filterd.quantity : qty;
    })
  },[cartItems])


  const { removeCart, isPending } = useDeleteCart();


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
    <div className="mb-5 Favorites_List drop-shadow-lg flex p-2 rounded-lg">
      <div className="grow flex flex-col justify-between">
        <div>
          <h1 className="mt-2 text-md text-gray-800 leading-6 font-medium">
            {title}
          </h1>
          <div className="flex items-center gap-2">
            <h1 className="text-xl text-primary-dark font-semibold">
              &#x20B9; {price}
            </h1>
          </div>
          <p className="text-xs font-medium text-primary-dark">{pack}</p>
        </div>
        <div
          onClick={handleDelete}
          className="border shadow w-fit py-0.5 px-2 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer"
        >
          {isPending ? (
            <Spinner />
          ) : (
            <i className="fa fa-trash-alt text-xl"></i>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img className="w-24 rounded-lg object-cover" src={img} alt={title} />
        <div className="flex justify-between">
          <button
            onClick={handleIncrease}
            className="border border-primary-dark px-2 rounded-lg hover:text-white hover:bg-primary-dark transition font-semibold"
          >
            +
          </button>
          <h1 className="font-semibold">{tempQty}</h1>
          <button
            onClick={handleDecrease}
            className="border border-primary-dark px-2 rounded-lg hover:text-white hover:bg-primary-dark transition font-semibold"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
