import { useState } from "react";
import AddressForm from "./AddressForm";
import { useDeliveryAddress } from "./DeliveryAddressContext";
import { useDeleteAddress } from "./useDeleteAddress";
import { useAddress } from "./useAddress";

function AddressSelector() {
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editableAddress, setEditableAddress] = useState(null);

  const { updateAddress } = useDeliveryAddress();
  const { deleteAddress, isPending } = useDeleteAddress();

  const { address } = useAddress();
  const { addresses = [] } = address || [];

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

  const handleNewAddress = () => {
    setEditableAddress(null);
    setShowForm(true);
  };

  return (
    <div className="overflow-auto max-h-96 min-h-40">
      <h1 className="font-medium">Your Address</h1>
      <form>
        {addresses?.map((address, index) => (
          <div
            key={address._id}
            className={`my-2 p-3 rounded-lg border ${
              selectedAddressIndex === index
                ? "shadow-md"
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
            <div className="flex items-center  mt-2 sm:mt-2 ml-2">
              <button
                type="button"
                onClick={() => deleteAddress(address._id)}
                style={{ cursor: isPending ? "not-allowed" : "pointer" }}
                className="sm:mb-0 sm:ml-5 border px-2 py-0.5 font-medium bg-primary-dark text-white rounded hover:scale-90 hover:bg-primary-dark hover:text-white transition-colors"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => handleEdit(index)}
                className="sm:ml-5 border px-2 font-medium py-0.5 rounded bg-primary-dark text-white transition-colors hover:scale-90"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleNewAddress}
          className="border px-2 py-1 mt-2 font-medium text-primary border-primary rounded hover:bg-primary-dark hover:scale-90 hover:text-white transition-colors"
        >
          + Add new
        </button>
      </form>

      <div className="mt-4">
        <p className="font-medium">Selected Address:</p>
        {selectedAddressIndex !== null ? (
          <p className="font-semibold text-black text-md">
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
