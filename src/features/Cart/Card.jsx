import { useNavigate } from "react-router-dom";
import AddToButton from "../../components/AddToButton";
import OutOfStock from "../../components/OutOfStock";
import { GiSpoon } from "react-icons/gi";
import { motion } from "framer-motion";

function Card({ product }) {
  const { img, pack, title, discount, code, price, inStock, _id, quantity } =
    product;
  const oldPrice = discount ? Math.floor(price / (1 - discount / 100)) : null;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-details/${_id}`);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-w-64 m-auto mb-4 p-3 bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative rounded-lg w-full h-36 mb-3 overflow-hidden">
        {img ? (
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "linear" }}
            src={img}
            alt={title}
            onClick={handleClick}
            className="object-cover h-full w-full  "
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-100">
            <span>No Image Available</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="px-2 flex flex-col justify-between">
        {/* Title */}
        <h1 className="text-lg font-medium mb-1  hover:text-gray-900 transition-colors line-clamp-1">
          {title || <span className="text-gray-400">No title available</span>}
        </h1>

        {/* Quantity */}
        <p className="flex items-center mb-1 bg-gray-50 shadow-sm text-xs rounded-md px-2 py-1">
          <GiSpoon className="text-sm text-gray-600" />
          {quantity ? (
            <span className="text-gray-700 ml-2">{quantity}</span>
          ) : (
            <span className="text-gray-400 ml-2">N/A</span>
          )}
        </p>

        {/* Pack */}
        <p className="text-xs font-medium text-gray-600 mb-1">
          {pack || <span className="text-gray-400">N/A</span>}
        </p>

        {/* Discount (conditionally rendered) */}
        {discount ? (
          <p className="text-xs font-medium text-orange-600 mb-1">
            FLAT {discount}% off Code: {code || "No code"}
          </p>
        ) : (
          <p className="h-4"></p>
        )}

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold text-gray-800">
              &#x20B9; {price || "N/A"}
            </h1>
            {oldPrice && (
              <span className="line-through text-gray-400 text-sm translate-y-1">
                &#8377;{oldPrice}
              </span>
            )}
          </div>

          {/* Stock & Add to Cart Button */}
          <div>
            {inStock ? (
              <AddToButton {...product} redirect="/cart" />
            ) : (
              <OutOfStock product={product} />
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Card;
