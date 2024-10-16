import React, { useEffect, useState } from "react";
import { useCategory } from "../Categories/useCategory";
import { useUpdateProduct } from "./useUpdateProduct";
import Spinner from "../../../../components/Spinner";
import { RxCrossCircled } from "react-icons/rx";
import InputField from "../../../../components/InputField";

export default function EditProductPopup({ setShow, product }) {
  const [image, setImage] = useState(null);

  const { _id } = product;

  const { categories } = useCategory();
  const { editSingleProduct, isLoading, isSuccess } = useUpdateProduct();

  const togglePopup = () => {
    setShow(false);
  };

  const [formData, setFormData] = useState({
    pack: "single pack",
    title: product.title || "",
    code: product.code || "",
    price: product.price || "",
    discount: product.discount || "",
    category: product.cat_id || "Fish & Seafood",
    quantity: product.quantity || "",
    description: product.description || "",
    hsn: product.hsn || "",
  });

  const handleImages = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("img", image);
    data.append("pack", formData.pack);
    data.append("title", formData.title);
    data.append("code", formData.code);
    data.append("price", formData.price);
    data.append("discount", formData.discount);
    data.append("cat_id", formData.category);
    data.append("quantity", formData.quantity);
    data.append("description", formData.description);
    data.append("hsn", formData.hsn);

    const submitedData = {
      _id,
      data,
    };

    editSingleProduct(submitedData);
  };

  useEffect(() => {
    if (isSuccess) {
      togglePopup();
    }
  }, [isSuccess]);

  return (
    <>
      <div>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 " />

        {/* Popup */}
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white relative rounded-lg p-6 w-full max-w-xl shadow-lg max-h-80 overflow-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Update Product
            </h2>
            <div
              onClick={togglePopup}
              className="absolute top-5 right-5 cursor-pointer text-xl"
            >
              <RxCrossCircled />
            </div>
            <form onSubmit={handleSubmit}>
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

              {/* Product Name */}

              <InputField
                id={"title"}
                value={formData.title}
                handleChange={handleChange}
                type={"text"}
                required={true}
                label={"Product Name"}
                placeholder={"Product"}
              />

              <InputField
                id={"hsn"}
                value={formData.hsn}
                handleChange={handleChange}
                type={"number"}
                required={true}
                label={"HSN No."}
                minLength={6}
                placeholder={"HSN Number"}
              />

              {/* Pack Type Dropdown */}
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">
                  Pack Type
                </label>
                <select
                  id="pack"
                  value={formData.pack}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                >
                  <option value="single pack">Single pack</option>
                  <option value="combo pack">Combo pack</option>
                </select>
              </div>

              {/* Discount Field */}
              <InputField
                id={"discount"}
                value={formData.discount}
                handleChange={handleChange}
                type={"number"}
                required={true}
                label={"Discount (%)"}
                maxLength={10}
                placeholder={"Discount in percent"}
              />

              {/* Coupon Code Field (Conditional) */}
              {formData.discount > 0 && (
                <InputField
                  id={"code"}
                  value={formData.code}
                  handleChange={handleChange}
                  type={"text"}
                  required={true}
                  label={"Coupon Code"}
                />
              )}

              {/* Price */}
              <InputField
                id={"price"}
                value={formData.price}
                handleChange={handleChange}
                type={"number"}
                required={true}
                label={"Price ₹"}
              />

              {/* Product Description */}

              <InputField
                id={"description"}
                value={formData.description}
                handleChange={handleChange}
                type={"text"}
                required={true}
                label={"Product Description"}
                rows="3"
              />

              {/* Category Dropdown */}
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                >
                  {categories?.map((category) => (
                    <>
                      <option key={categories._id} value={category.cat_id}>
                        {category.name}
                      </option>
                    </>
                  ))}
                </select>
              </div>

              {/* Quantity */}

              <InputField
                id={"quantity"}
                value={formData.quantity}
                handleChange={handleChange}
                type={"text"}
                required={true}
                label={"Quantity"}
                minLength={1}
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  {isLoading ? <Spinner className="border-white" /> : "Submit"}
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
