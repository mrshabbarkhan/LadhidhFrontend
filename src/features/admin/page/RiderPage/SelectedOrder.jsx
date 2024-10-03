import { useSelector } from "react-redux";

function SelectedOrder() {
  const { selectedOrder } = useSelector((state) => state.order);
  const { totalPrice, _id, user, shippingAddress } = selectedOrder || {};

  return (
    selectedOrder && (
      <section className="p-4">
        <h1 className="text-lg font-semibold mb-4">Selected Order :</h1>
        <div className="bg-green-500 p-4 rounded-lg text-white space-y-3 md:space-y-0 md:flex md:space-x-4 md:items-center">
          <div className="flex-1">
            <p className="text-sm md:text-base">
              <span className="font-semibold">Order ID:</span>{" "}
              <span className="mr-3">{_id}</span>
            </p>
          </div>

          <div className="flex-1">
            <p className="text-sm md:text-base">
              <span className="font-semibold">User ID:</span>{" "}
              <span className="mr-3">{user}</span>
            </p>
          </div>

          <div className="flex-1">
            <p className="text-sm md:text-base">
              <span className="font-semibold">Address:</span>{" "}
              <span className="mr-3">
                {shippingAddress?.addressLine1}, {shippingAddress?.addressLine2}
                , {shippingAddress?.city}, {shippingAddress?.zipCode}
              </span>
            </p>
          </div>

          <div className="flex-1">
            <p className="text-sm md:text-base">
              <span className="font-semibold">Total Price:</span>{" "}
              <span className="mr-3">₹ {totalPrice}</span>
            </p>
          </div>
        </div>
      </section>
    )
  );
}

export default SelectedOrder;
