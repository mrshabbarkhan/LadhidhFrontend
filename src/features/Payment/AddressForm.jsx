import { useState, useEffect } from "react";
import { useAddAddress } from "./useAddAddress";
import { useUpdateAddress } from "./useUpdateAddress";
import Spinner from "../../components/Spinner";
import { MdCancel } from "react-icons/md";

function AddressForm({ editableAddress, showFn }) {
  const { addNewAddress, isLoading, isSuccess } = useAddAddress();
  const { updateAddress, isPending, isSuccess: isUpdated } = useUpdateAddress();

  const [formData, setFormData] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  useEffect(() => {
    if (editableAddress) {
      setFormData({
        addressLine1: editableAddress.addressLine1 || "",
        addressLine2: editableAddress.addressLine2 || "",
        city: getCity(editableAddress.zipCode),
        state: "Gujrat",
        zipCode: editableAddress.zipCode || "",
      });
    } else {
      // Reset the form for adding a new address
      setFormData({
        addressLine1: "",
        addressLine2: "",
        zipCode: "",
        city: getCity(formData.zipCode),
        state: "Gujrat",
      });
    }
  }, [editableAddress, isUpdated, isSuccess]);

  useEffect(() => {
    if (isSuccess || isUpdated) {
      showFn(false);
    }
  }, [isSuccess, isUpdated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "zipCode" && { city: getCity(value) }),
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editableAddress) {
      updateAddress({ ...formData, addressId: editableAddress._id });
    } else {
      addNewAddress({
        ...formData,
        country: "india",
      });
    }
  };

  function getCity(pin) {
    let city;
    if (pin === "393001") return (city = "Ankleshwar");
    if (pin === "393002") return (city = "Vadodara");
    if (pin === "393010") return (city = "Bharuch");
    if (!pin) return (city = "---");

    return city;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative">
        <div
          onClick={() => showFn(false)}
          className="text-black absolute right-8 top-4 cursor-pointer"
        >
          <MdCancel className="text-xl" />
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-black/30 focus:border-black/30 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-black/30 focus:border-black/30 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 accent-primary placeholder:text-gray-400 focus:ring-2  focus:ring-black/30 focus:border-black/30 sm:text-sm sm:leading-6"
              >
                <option value="">Select ZIP Code</option>{" "}
                {/* Placeholder option */}
                <option value="393001">393001</option>
                <option value="393002">393002</option>
                <option value="393010">393010</option>
              </select>
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
                readOnly
                // onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-black/30 focus:border-black/30 sm:text-sm sm:leading-6"
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
                // onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-black/30 focus:border-black/30 sm:text-sm sm:leading-6"
              />
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
