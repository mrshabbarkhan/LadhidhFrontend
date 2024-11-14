import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDebouncedTerm, setSearchTerm } from "../page/searchSlice";
import { MdOutlineCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ placeholder }) {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setDebouncedTerm(searchTerm));
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, dispatch]);

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClear = () => {
    dispatch(setSearchTerm(""));
  };

  return (
    <div className="relative w-full max-w-lg h-fit rounded-lg shadow-md focus-within:shadow-md flex items-center border pl-2">
      <FiSearch className="text-xl" />
      <input
        type="text"
        className={`w-full py-1.5 px-4 bg-white text-gray-900 rounded-lg  outline-none border-none
                    focus:outline-none focus:ring-0 focus:border-gray-500 transition-all `}
        placeholder={`${placeholder}`}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute top-5 right-4 transform -translate-y-1/2  focus:outline-none"
        >
          <MdOutlineCancel className="text-lg cursor-pointer" />
        </button>
      )}
    </div>
  );
}
