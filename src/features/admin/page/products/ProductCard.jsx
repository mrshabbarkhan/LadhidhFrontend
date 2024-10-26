import EditProductPopup from "./EditProductPopup";
import { useDeleteProduct } from "./useDeleteProduct";
import Spinner from "../../../../components/Spinner";
import { useState } from "react";
import { useToggleProduct } from "./useToggleProduct";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

function ProductCard({ info }) {
  const {
    img,
    cat_id,
    pack,
    title,
    discount,
    code,
    price,
    oldPrice,
    _id,
    inStock,
  } = info;
  const { removeProduct, isLoading } = useDeleteProduct();
  const { toggleStatus, isPending } = useToggleProduct();

  const [showEditProduct, setShowEditProduct] = useState(false);

  const [localInStock, setLocalInStock] = useState(inStock);

  const handleDelete = (id) => {
    const sure = confirm("Do you want to delete product this may cause error");
    if (!sure) return;
    removeProduct(id);
  };

  const handleStockToggle = () => {
    const newInStockStatus = !localInStock;
    setLocalInStock(newInStockStatus);

    toggleStatus(_id);
  };

  if (showEditProduct) {
    return <EditProductPopup setShow={setShowEditProduct} product={info} />;
  }

  return (
    <section className="flex flex-col justify-between max-w-[16rem] min-w-[16rem] mb-3 text-wrap rounded-xl p-4 pb-2 bg-white shadow-lg">
      <img
        src={img}
        alt={img}
        className="object-cover object-center  m-auto rounded-t-xl"
      />
      <div className="px-2 mt-1">
        <h1 className="text-md text-gray-800 leading-6 font-medium">{title}</h1>
        <p className="text-xs font-medium text-gray-800">{pack}</p>
        {discount > 0 && (
          <p className="text-xs mt-2 text-green-500">
            FLAT {discount} off Code: {code}
          </p>
        )}
        <div className="flex justify-between items-center mt-2">
          <span className="flex gap-2 items-center">
            <h1 className="text-xl text-primary-dark font-semibold">
              &#x20B9; {price}
            </h1>
            <span className="line-through text-gray-500 font-medium">
              {oldPrice}
            </span>
          </span>
        </div>

        {/* Stock toggle switch */}
        <div className="flex justify-between items-center mt-3">
          <label className="flex items-center space-x-3">
            <span className="text-sm text-gray-700">In Stock</span>
            <div
              className={`relative inline-block w-10 h-5 px-0.5 cursor-pointer rounded-full 
              ${localInStock ? "bg-primary-dark" : "bg-gray-400"}`}
              onClick={handleStockToggle}
            >
              <span
                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-md transition-transform 
                ${localInStock ? "translate-x-5" : "translate-x-0"}`}
              ></span>
            </div>
          </label>

          <span className="flex space-x-2">
            <div
              onClick={() => setShowEditProduct(true)}
              className="border shadow w-fit p-1.5 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer"
            >
              <FaRegEdit />
            </div>
            <div
              onClick={() => handleDelete(_id)}
              className="border shadow w-fit p-1.5 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer"
            >
              {isLoading ? <Spinner /> : <FaTrashCan />}
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
