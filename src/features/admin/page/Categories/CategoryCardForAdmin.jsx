import { useState } from "react";
import EditCategory from "./EditCategory";
import { useDeleteCategory } from "./useDeleteCategory";
import Spinner from "../../../../components/Spinner";
import { useCategory } from "./useCategory";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

function CategoryCardForAdmin({ id, img, title }) {
  const [showPopup, setShowPopup] = useState(false);
  const { removeCategory, isPending } = useDeleteCategory();
  const { isPending: isLoading } = useCategory();

  const toggleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className="w-full sm:w-[14rem] mb-3 text-wrap rounded-xl p-4 pb-2 bg-white shadow-lg relative">
      {showPopup && (
        <div className="mt-10 sm:mt-0 flex w-fit items-center gap-3 absolute right-5 sm:right-14 top-6">
          <EditCategory
            id={id}
            title={title}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />
        </div>
      )}
      <div className="object-fit flex items-center justify-between">
        <img src={img} alt={img} className="" />

        <div className="px-2 mt-1 flex flex-col items-end">
          <h1 className="mt-2 text-md text-gray-800 leading-6 font-medium line-clamp-1">
            {title}
          </h1>
          <div className="flex justify-between items-center mt-2 ">
            <span className="flex space-x-2">
              <div
                onClick={toggleShowPopup}
                className="border shadow w-fit p-1  rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer"
              >
                <FaRegEdit />
              </div>
              <div
                onClick={() => removeCategory(id)}
                className="border shadow w-fit p-1 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer flex items-center justify-center"
              >
                {isPending || isLoading ? <Spinner /> : <FaTrashCan />}
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryCardForAdmin;
