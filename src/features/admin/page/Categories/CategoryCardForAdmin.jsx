import { useState } from "react";
import EditCategory from "./EditCategory";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useUpdateCategory } from "./useUpdateCategory";
import { useUpdateSub } from "../subCategory/useUpdateSub";

function CategoryCardForAdmin({
  id,
  img,
  title,
  handleDelete,
  isFromSubCat,
  categoryId,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const {
    editSingleCategory,
    isPending,
    isSuccess,
    reset: resetSuccess,
  } = useUpdateCategory();
  const {
    editSubCatFn,
    isPending: isLoading,
    isSuccess: isUpdated,
    reset,
  } = useUpdateSub();

  const toggleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  const handleEditCat = (e, image, newTitle) => {
    e.preventDefault();
    const data = new FormData();
    data.append("img", image);
    data.append("cat_id", id);
    data.append("name", newTitle);

    const formData = {
      id,
      data,
    };

    editSingleCategory(formData);
  };

  const handleUpdateSub = (e, image, newTitle) => {
    e.preventDefault();
    if (!categoryId || !categoryId || !title || !image) return;

    const data = new FormData();
    data.append("image", image);
    data.append("categoryId", categoryId);
    data.append("name", newTitle);
    data.append("subCategoryId", id);

    editSubCatFn(data);
  };

  return (
    <section className="w-full sm:w-[14rem] mb-3 text-wrap rounded-xl p-4 pb-2 bg-white shadow-lg relative">
      {showPopup && (
        <div className="mt-10 sm:mt-0 flex w-fit items-center gap-3 absolute right-5 sm:right-14 top-6">
          <EditCategory
            title={title}
            isPending={isPending || isLoading}
            isSuccess={isSuccess || isUpdated}
            reset={reset && resetSuccess}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            handleEdit={isFromSubCat ? handleUpdateSub : handleEditCat}
          />
        </div>
      )}
      <div className="object-fit flex items-center justify-between">
        <img src={img} alt={img} className="w-16" />

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
                onClick={() => handleDelete(id)}
                className="border shadow w-fit p-1 rounded-lg hover:text-white hover:bg-primary-dark transition-all cursor-pointer flex items-center justify-center"
              >
                <FaTrashCan />
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryCardForAdmin;
