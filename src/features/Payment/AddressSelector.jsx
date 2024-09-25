import { useState } from "react";
import AddressForm from "./AddressForm";
import { useDeliveryAddress } from "./DeliveryAddressContext";
import { useLocalStorage } from "../auth/LocalStorageContext";
import { useDeleteAddress } from "./useDeleteAddress";

function AddressSelector() {
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editableAddress, setEditableAddress] = useState(null);

  const { updateAddress } = useDeliveryAddress();
  const { deleteAddress } = useDeleteAddress();
  const { user } = useLocalStorage();

  const addresses = user?.address || [];

  const handleAddressChange = (e) => {
    const selectedIndex = parseInt(e.target.value);
    const selected = addresses[selectedIndex];
    setSelectedAddressIndex(selectedIndex);
    updateAddress(selected);
  };

  const handleEdit = (index) => {
    setEditableAddress(addresses[index]);
    setShowForm(true);
  };

  const handleNewAddress = (formData) => {
    setEditableAddress(null);
    setShowForm(true);
  };

  return (
    <div className="overflow-auto max-h-96 min-h-40">
      <h1 className="font-medium">Your Address</h1>
      <form>
        {addresses.map((address, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-lg border ${
              selectedAddressIndex === index
                ? "bg-slate-100 border-gray-200 border-2"
                : "bg-white border-gray-300"
            }`}
          >
            <input
              type="radio"
              id={`address-${index}`}
              name="address"
              value={index}
              checked={selectedAddressIndex === index}
              onChange={handleAddressChange}
              className="mr-2 checked:accent-primary cursor-pointer"
            />
            <label
              htmlFor={`address-${index}`}
              className="font-medium cursor-pointer ml-2"
            >
              {address.addressLine1}, {address.addressLine2}, {address.city},{" "}
              {address.state}, {address.zipCode}
            </label>

            {/* Responsive button group */}
            <div className="flex flex-col sm:flex-row justify-start mt-2 sm:mt-2 ml-2">
              <button
                type="button"
                onClick={() => deleteAddress(address._id)}
                className="mb-2 sm:mb-0 sm:ml-5 border px-2 font-medium bg-primary-dark text-white rounded hover:bg-primary-dark hover:text-white transition-colors"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => handleEdit(index)}
                className="sm:ml-5 border px-2 font-medium   rounded bg-primary-dark text-white transition-colors"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleNewAddress}
          className="border px-2 py-1 font-medium text-primary border-primary rounded hover:bg-primary-dark hover:text-white transition-colors"
        >
          + Add new
        </button>
      </form>

      <div className="mt-4">
        <p className="font-medium">Selected Address:</p>
        {selectedAddressIndex !== null ? (
          <p className="text-gray-700 font-semibold">
            {addresses[selectedAddressIndex].addressLine1},{" "}
            {addresses[selectedAddressIndex].addressLine2},{" "}
            {addresses[selectedAddressIndex].city},{" "}
            {addresses[selectedAddressIndex].state},{" "}
            {addresses[selectedAddressIndex].zipCode}
          </p>
        ) : (
          <p className="font-semibold">No address selected.</p>
        )}
      </div>

      {showForm && (
        <AddressForm
          showFn={setShowForm}
          editableAddress={editableAddress}
          handleSubmit={editableAddress ? handleEdit : handleNewAddress}
        />
      )}
    </div>
  );
}

export default AddressSelector;
