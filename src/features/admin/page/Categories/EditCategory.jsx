import { useEffect, useState } from "react";
import Spinner from "../../../../components/Spinner";
import { MdCancel } from "react-icons/md";

function EditCategory({
  title,
  isSuccess,
  isPending,
  reset,
  setShowPopup,
  showPopup,
  handleEdit,
}) {
  const [image, setImage] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState(title);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleImages = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess) {
      setShowPopup(false);
      reset();
    }
  }, [isSuccess]);

  return (
    <>
      <div>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 " />

        {/* Popup */}
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white relative rounded-lg p-6 w-full max-w-xl shadow-lg max-h-80 overflow-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Edit Category
            </h2>
            <div
              onClick={togglePopup}
              className="absolute top-5 right-5 cursor-pointerain"
            >
              <MdCancel className="text-xl" />
            </div>
            <form onSubmit={(e) => handleEdit(e, image, categoryTitle)}>
              {/* Product Name */}
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">
                  Category Name
                </label>
                <input
                  id="title"
                  value={categoryTitle}
                  onChange={(e) => setCategoryTitle(e.target.value)}
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="img"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  accept="image/*"
                  onChange={handleImages}
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  {isPending ? <Spinner className="border-white" /> : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={togglePopup}
                  className="ml-2 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCategory;
