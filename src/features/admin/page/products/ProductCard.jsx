import EditProductPopup from "./EditProductPopup";
import { useDeleteProduct } from "./useDeleteProduct";
import Spinner from "../../../../components/Spinner";
import { useState } from "react";
import { useToggleProduct } from "./useToggleProduct";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

function ProductCard({ info }) {
  const { img, title, pack, discount, code, price, _id, inStock } = info;

  const oldPrice = discount ? Math.floor(price / (1 - discount / 100)) : null;

  const { removeProduct, isLoading } = useDeleteProduct();
  const { toggleStatus } = useToggleProduct();

  const [showEditProduct, setShowEditProduct] = useState(false);
  const [localInStock, setLocalInStock] = useState(inStock);

  const handleDelete = (id) => {
    const sure = confirm("Do you want to delete this product?");
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
    <section className="flex flex-col max-w-[16rem] min-w-[16rem] mb-4 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
      {/* Image */}
      <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={img || "/placeholder.jpg"}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Details */}
      <div className="px-2 mt-3">
        <h1 className="text-md font-semibold text-gray-900 truncate">
          {title || "Product Title"}
        </h1>
        <p className="text-sm text-gray-500 mb-1">{pack || "Single Pack"}</p>
        {discount > 0 ? (
          <p className="text-xs text-green-600 mb-2">
            FLAT {discount}% off • Code: {code}
          </p>
        ) : (
          <p className="text-xs text-gray-400 mb-2">No Discount</p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900">
              ₹{price}
            </span>
            {oldPrice && (
              <span className="text-sm line-through text-gray-400">
                ₹{oldPrice}
              </span>
            )}
          </div>
        </div>

        {/* Stock Toggle and Actions */}
        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <span className="text-sm text-gray-700">In Stock</span>
            <div
              className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
                localInStock ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={handleStockToggle}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  localInStock ? "translate-x-5" : ""
                }`}
              ></span>
            </div>
          </label>

          {/* Action Icons */}
          <div className="flex space-x-2">
            <button
              onClick={() => setShowEditProduct(true)}
              className="text-gray-500 hover:text-blue-500 p-1.5 transition duration-200 rounded-full"
            >
              <FaRegEdit className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="text-gray-500 hover:text-red-500 p-1.5 transition duration-200 rounded-full"
            >
              {isLoading ? (
                <Spinner size="small" />
              ) : (
                <FaTrashCan className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
