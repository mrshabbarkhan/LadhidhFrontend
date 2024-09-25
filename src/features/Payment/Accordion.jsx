import React, { useRef } from "react";
import EditUserDetails from "../User/EditUserDetails";
import { useSelector } from "react-redux";
import AddressLayout from "./AddressLayout";
import { useLocalStorage } from "../auth/LocalStorageContext";

const Accordion = ({
  title,
  content,
  icon,
  element,
  isSelected,
  onSelect,
  handleSubmit,
}) => {
  const contentRef = useRef(null);
  const { user } = useLocalStorage();

  return (
    <div className="Favorites_List rounded-xl my-5 px-2 transition-all ">
      <div
        className="w-full flex justify-between items-center py-2 focus:outline-none "
        onClick={onSelect} // Trigger onSelect when clicked
      >
        <span className="text-sm font-semibold">
          <i className={icon}></i>
          {title}
        </span>
        <input
          type="radio"
          checked={isSelected} // Radio button is checked if accordion is selected
          onChange={onSelect} // Trigger selection when the radio button changes
        />
      </div>
      {/* Content only shows when selected */}
      <div
        ref={contentRef}
        className="transition-max-height duration-200 ease-in-out overflow-hidden"
        style={{
          maxHeight: isSelected
            ? `${contentRef.current.scrollHeight}px`
            : "0px",
        }}
      >
        <div className="pb-2 pl-5 text-sm text-gray-600">
          {content ? <p>{content || element}</p> : <AddressLayout />}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
