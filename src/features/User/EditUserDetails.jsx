import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useUpdateUser } from "../auth/useUpdateUser";
import Spinner from "../../components/Spinner";

function EditUserDetails({ user, seterFn }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isInPaymentPage = pathname === "/payment";

  console.log(user);

  const { updateUser, isPending, isSuccess } = useUpdateUser();

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    number: user.number || "",
    addresses: Array.isArray(user.addresses) ? user.addresses : [{}],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAddresses = [...formData.addresses];
    updatedAddresses[index] = {
      ...updatedAddresses[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      addresses: updatedAddresses,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { ...formData, _id: user._id };
    try {
      await updateUser(updatedData);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(-1);
    }
  }, [isSuccess, navigate]);

  return (
    <form onSubmit={handleSubmit} className="mb-20 mt-5 max-w-4xl mx-auto">
      <div className="pb-12">
        {!isInPaymentPage && (
          <>
            <h2 className="text-lg font-semibold leading-4">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </>
        )}

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          {/* Name Field */}
          <div className="col-span-full sm:col-span-1">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-gray-300 py-1.5 shadow-sm focus:ring-2 focus:ring-black/30"
            />
          </div>

          {/* Email Field */}
          <div className="col-span-full sm:col-span-1">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-gray-300 py-1.5 shadow-sm focus:ring-2 focus:ring-black/30"
            />
          </div>

          {/* Number Field */}
          <div className="col-span-full sm:col-span-1">
            <label htmlFor="number" className="block text-sm font-medium">
              Number
            </label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-gray-300 py-1.5 shadow-sm focus:ring-2 focus:ring-black/30"
            />
          </div>

          {/* Address Fields */}
          {formData.addresses.map((address, index) => (
            <div key={index} className="col-span-full">
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                {/* Street Address */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor={`addressLine1-${index}`}
                    className="block text-sm font-medium"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    id={`addressLine1-${index}`}
                    name="addressLine1"
                    value={address.addressLine1 || ""}
                    onChange={(e) => handleAddressChange(index, e)}
                    placeholder="Street 120"
                    required
                    className="block w-full rounded-md border-gray-300 py-1.5 shadow-sm focus:ring-2 focus:ring-black/30"
                  />
                </div>

                {/* City */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor={`city-${index}`}
                    className="block text-sm font-medium"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id={`city-${index}`}
                    name="city"
                    value={address.city || ""}
                    placeholder="Ankleshwar "
                    onChange={(e) => handleAddressChange(index, e)}
                    required
                    className="block w-full rounded-md border-gray-300 py-1.5 shadow-sm focus:ring-2 focus:ring-black/30"
                  />
                </div>

                {/* State */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor={`state-${index}`}
                    className="block text-sm font-medium"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id={`state-${index}`}
                    name="state"
                    value={address.state || ""}
                    placeholder="Gujrat"
                    onChange={(e) => handleAddressChange(index, e)}
                    required
                    className="block w-full rounded-md border-gray-300 py-1.5 shadow-sm focus:ring-2 focus:ring-black/30"
                  />
                </div>

                {/* Zip Code */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor={`zipCode-${index}`}
                    className="block text-sm font-medium"
                  >
                    Zip Code
                  </label>
                  <select
                    id={`zipCode-${index}`}
                    name="zipCode"
                    value={address.zipCode || ""}
                    onChange={(e) => handleAddressChange(index, e)}
                    required
                    className="block w-full rounded-md border-gray-300 py-1.5 shadow-sm focus:ring-2 focus:ring-black/30"
                  >
                    <option value="" disabled>
                      Select a zip code
                    </option>
                    <option value="393001">393001</option>
                    <option value="393002">393002</option>
                    <option value="393010">393010</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-4 flex items-center justify-end gap-x-6">
        <button
          onClick={() => seterFn(false)}
          type="button"
          className="text-sm font-semibold"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-black/30"
        >
          {isPending ? <Spinner /> : "Save"}
        </button>
      </div>
    </form>
  );
}

export default EditUserDetails;
