import { useState, useEffect } from "react";
import { useAddAddress } from "./useAddAddress";
import { useUpdateAddress } from "./useUpdateAddress";
import Spinner from "../../components/Spinner";
import { useLogin } from "../auth/useLogin";
import { useLocalStorage } from "../auth/LocalStorageContext";

function AddressForm({ editableAddress, handleSubmit, showFn }) {
  const { addNewAddress, isLoading, isSuccess } = useAddAddress();
  const { updateAddress, isPending, isSuccess: isUpdated } = useUpdateAddress();
  const { loginUser } = useLogin()
  const {user} = useLocalStorage()

  const [formData, setFormData] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state:  "",
    zipCode: "",
  });

  // Populate form fields if editableAddress is provided
  useEffect(() => {
    if (editableAddress) {
      setFormData({
        addressLine1: editableAddress.addressLine1 || "",
        addressLine2: editableAddress.addressLine2 || "",
        city: editableAddress.city || "",
        state: editableAddress.state || "",
        zipCode: editableAddress.zipCode || "Gujrat",
      });
    } else {
      // Reset the form for adding a new address
      setFormData({
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "" || "Gujrat",
        zipCode: "",
      });
    }
  }, [editableAddress, isUpdated, isSuccess]);

  useEffect(() =>{
    if (isSuccess || isUpdated) {
        showFn(false); // Close the form after submission
      }
  },[isSuccess , isUpdated])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editableAddress) {
      updateAddress({ ...formData, addressId: editableAddress._id });
     
    } else {
      addNewAddress({ ...formData, country: "india" });
      
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative">
        <div
          onClick={() => showFn(false)}
          className="text-black absolute right-10 top-4"
        >
          <i className="fa-regular fa-circle-xmark text-lg cursor-pointer"></i>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="col-span-full">
            <label
              htmlFor="addressLine1"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Street Address
            </label>
            <div className="mb-2">
              <input
                type="text"
                name="addressLine1"
                id="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="addressLine2"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Landmark
            </label>
            <div className="mb-2">
              <input
                type="text"
                name="addressLine2"
                id="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mb-2">
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="state"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              State
            </label>
            <div className="mb-2">
              <input
                type="text"
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ZIP / Postal Code
            </label>
            <div className="mb-2">
              <select
                name="zipCode"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 accent-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select ZIP Code</option>{" "}
                {/* Placeholder option */}
                <option value="393001">393001</option>
                <option value="393002">393002</option>
                <option value="393010">393010</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary-dark focus:outline-none  flex items-center justify-center gap-2"
            >
              <>
                {(isLoading || isPending) && (
                  <Spinner className="border-white" />
                )}
                {editableAddress ? "Update Address" : "Add Address"}
              </>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressForm;
