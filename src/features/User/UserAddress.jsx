import { useLocalStorage } from "../auth/LocalStorageContext";
import { useState } from "react";
import AddressForm from "../Payment/AddressForm";
import { useAddress } from "../Payment/useAddress";
import { useDeleteAddress } from "../Payment/useDeleteAddress";
import AuthButton from "../auth/AuthButton";

function UserAddress() {
  const [showForm, setShowForm] = useState(false);
  const [editableAddress, setEditableAddress] = useState(null);

  const { deleteAddress, isPending } = useDeleteAddress();

  const { address } = useAddress();
  const { addresses = [] } = address || [];

  const handleEdit = (index) => {
    setEditableAddress(addresses[index]);
    setShowForm(true);
  };

  const handleNewAddress = () => {
    setEditableAddress(null);
    setShowForm(true);
  };

  const { user } = useLocalStorage();

  return (
    <>
      {user ? (
        <div className="overflow-auto max-h-96 min-h-40">
          <h1 className="font-semibold text-lg">Your Address</h1>
          <form>
            {addresses?.map((address, index) => (
              <div key={address._id} className="my-2 p-3 rounded-lg border">
                <label
                  htmlFor={`address-${index}`}
                  className="font-medium cursor-pointer ml-2"
                >
                  {address.addressLine1}, {address.addressLine2}, {address.city}
                  , {address.state}, {address.zipCode}
                </label>

                {/* Responsive button group */}
                <div className="flex flex-col sm:flex-row justify-start mt-2 sm:mt-2 ">
                  <button
                    type="button"
                    onClick={() => deleteAddress(address._id)}
                    style={{ cursor: isPending ? "not-allowed" : "pointer" }}
                    className="mb-2 sm:mb-0 sm:ml-2 border px-2 py-0.5 font-medium bg-primary-dark text-white rounded hover:bg-primary-dark hover:text-white transition-colors"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEdit(index)}
                    className="sm:ml-5 border px-2 font-medium rounded bg-primary-dark text-white transition-colors"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleNewAddress}
              className="border px-2 py-1 mt-2 font-medium text-primary border-primary rounded hover:bg-primary-dark hover:text-white transition-colors"
            >
              + Add new
            </button>
          </form>

          {showForm && (
            <AddressForm
              showFn={setShowForm}
              editableAddress={editableAddress}
              handleSubmit={editableAddress ? handleEdit : handleNewAddress}
            />
          )}
        </div>
      ) : (
        <AuthButton />
      )}
    </>
  );
}

export default UserAddress;
