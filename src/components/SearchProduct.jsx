import { useDispatch, useSelector } from "react-redux";
import {
  setDebouncedTerm,
  setSearchTerm,
} from "../features/admin/page/searchSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../features/admin/page/products/useProducts";
import { FiSearch } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";

function SearchProduct({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const debouncedTerm = useSelector((state) => state.search.debouncedTerm);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const { products } = useProducts();

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setDebouncedTerm(searchTerm));
    }, 300); // 300ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, dispatch]);

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClick = async (product) => {
    navigate(`/product-details/${product._id}`);
    handleClear();
  };

  const handleClear = () => {
    dispatch(setSearchTerm(""));
  };

  const filteredProducts = products?.filter((prod) =>
    prod?.title?.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  return (
    <div
      className={`text-center w-72 shadow-sm rounded-xl focus-within:shadow-md  m-auto ${className} `}
    >
      <div
        className={`border-2 pl-2 w-full h-9 rounded-xl ${
          searchTerm && "rounded-b-none"
        } flex items-center overflow-hidden relative`}
      >
        <FiSearch className="text-xl" />
        <div className="w-full">
          <input
            type="text"
            className=" focus:outline-none text-black focus:ring-0 focus:border-transparent w-full ml-2 outline-none border-none placeholder:text-black"
            placeholder="Type product name to search"
            onChange={handleInputChange}
            value={searchTerm}
          ></input>
        </div>
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute top-4 right-4 transform -translate-y-1/2 text-lg focus:outline-none"
          >
            <MdOutlineCancel />
          </button>
        )}
      </div>
      {searchTerm && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-y-auto z-20 rounded-b-md px-2 py-1 bg-white border border-t-0 shadow-lg absolute top-9 w-72 max-h-72"
        >
          {filteredProducts.length ? (
            filteredProducts?.map((data, index) => (
              <motion.li
                whileHover={{ backgroundColor: "#fe1313", color: "white" }}
                onClick={() => handleClick(data)}
                key={index}
                className="py-1 px-2 rounded-md text-left font-medium "
              >
                <h1 className="cursor-pointer rounded-md py-1 line-clamp-1">
                  {data.title}
                </h1>
              </motion.li>
            ))
          ) : (
            <li className="mb-5">No Product Found</li>
          )}
        </motion.ul>
      )}
    </div>
  );
}

export default SearchProduct;
