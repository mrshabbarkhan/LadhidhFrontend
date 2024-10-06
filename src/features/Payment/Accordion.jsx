import React, { useRef } from "react";
import AddressSelector from "./AddressSelector";
import { BsCashCoin } from "react-icons/bs";

const Accordion = ({ isSelected, onSelect }) => {
  const contentRef = useRef(null);

  return (
    <div className="Favorites_List rounded-xl my-5 px-2 transition-all ">
      <div
        className="w-full flex justify-between items-center py-2 focus:outline-none "
        onClick={onSelect}
      >
        <span className="text-md font-semibold px-4 flex items-center gap-2 cursor-pointer">
          <BsCashCoin />
          Cash on Delivery
        </span>
        <input type="radio" checked={isSelected} onChange={onSelect} />
      </div>

      <div
        ref={contentRef}
        className="transition-max-height duration-200 ease-in-out overflow-hidden min-h-fit"
      >
        {isSelected && (
          <div className="pb-2 sm:pl-5 text-sm text-gray-600 ">
            <AddressSelector />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
