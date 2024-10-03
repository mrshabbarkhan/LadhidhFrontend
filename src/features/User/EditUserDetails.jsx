import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLocalStorage } from "../auth/LocalStorageContext";
import { useUpdateUser } from "../auth/useUpdateUser";

function EditUserDetails({ user, onSubmit }) {
  const { pathname } = useLocation();
  const isInPaymentPage = pathname == "/payment";
  const { user: localUser } = useLocalStorage()
  const {updateUser, isPending} = useUpdateUser()

  const [formData, setFormData] = useState({
    firstName: user.name || "",
    lastName: user.lastName || "",
    email: user.email || "",
    number: user.number || "",
    Addres: user.Addres || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form data submitted: ", formData);
    updateUser(user._id)
  };

  return (
    <form onSubmit={handleSubmit} className="mb-16">
      <div className="">
        {isInPaymentPage || (
          <div className="">
            {/* <p className="mt-1 text-center font-semibold text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p> */}
          </div>
        )}

        <div className=" pb-12">
          {isInPaymentPage || (
            <>
              <h2 className="text-lg font-semibold leading-4 ">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </>
          )}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 "
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6 "
              >
                Contact Number
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="tel"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-x-6">
        <button
          onClick={() => {}}
          type="button"
          className="text-sm font-semibold leading-6 "
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-primary px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EditUserDetails;
