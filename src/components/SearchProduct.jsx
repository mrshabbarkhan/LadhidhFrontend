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
    <div className={`text-center w-72  m-auto ${className} `}>
      <div className="border-2 pl-2 w-full h-9 rounded-xl flex items-center  focus-within:border-black/30 overflow-hidden relative">
        <FiSearch className="text-xl" />
        <div className="w-full ">
          <input
            type="text"
            className=" focus:outline-none focus:ring-0 focus:border-transparent w-full ml-2 outline-none border-none bg-gray-100"
            placeholder="Type product name to search"
            onChange={handleInputChange}
            value={searchTerm}
          ></input>
        </div>
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute top-4 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <MdOutlineCancel />
          </button>
        )}
      </div>
      {searchTerm && (
        <ul className="transition-all overflow-auto z-20 rounded-b-md px-2 py-1 bg-white border border-t-0 shadow-lg absolute top-16 w-80 h-fit min-h-fit max-h-72">
          {filteredProducts.length ? (
            filteredProducts?.map((data, index) => (
              <li
                onClick={() => handleClick(data)}
                key={index}
                className="py-1 px-2 rounded-md text-left font-medium"
              >
                <h1 className="cursor-pointer rounded-md py-2 hover:bg-primary hover:px-2 hover:text-white">
                  {data.title}
                </h1>
              </li>
            ))
          ) : (
            <li className="mb-5">No Product Found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchProduct;
