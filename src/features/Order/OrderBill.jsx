import { RxCrossCircled } from "react-icons/rx";
import { useUser } from "../admin/page/users/useUser";
import useOrderStatus from "../../hooks/useOrderStatus";
import ShippingAddress from "./ShippingAddress";

function OrderBill({ order, showFn, showPickup = true }) {
  const { users } = useUser();
  const filterUser = users?.find((u) => u._id === order.user);

  console.log(order);

  return (
    <section className="bg-black/50 flex justify-center items-center fixed inset-0 z-[999999]">
      {/* Modal Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full max-w-3xl h-full sm:h-auto max-h-screen overflow-y-auto relative mx-4">
        {/* Close Icon */}
        <span
          onClick={() => showFn(false)}
          className="absolute right-4 top-4 text-2xl cursor-pointer text-gray-600 hover:text-gray-800 z-10"
        >
          <RxCrossCircled />
        </span>

        {/* Order Details Header */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center sm:text-left">
          Order Details
        </h3>

        {/* Order ID and Status */}
        <p className="mb-2">
          Order ID:{" "}
          <span className="font-semibold text-gray-700">{order._id}</span>
        </p>
        <p className="mb-4">
          Status:
          <span className="font-semibold ml-2 text-red-500">
            {useOrderStatus(order)}
          </span>
        </p>

        {/* Cancellation Reason and Pickup Password */}
        {showPickup && order?.cancellationReason && (
          <p className="mb-4">
            Cancellation Reason:{" "}
            <span className="font-semibold text-gray-700">
              {order.cancellationReason}
            </span>
          </p>
        )}

        {showPickup && order?.pickupPassword && (
          <p className="mb-4">
            Pickup Password:{" "}
            <span className="font-semibold text-gray-700">
              {order.pickupPassword}
            </span>
          </p>
        )}

        {/* Delivery Password */}
        <p className="mb-4">
          Delivery Password:{" "}
          <span className="font-semibold text-gray-700">
            {order.deliveryPassword}
          </span>
        </p>

        {/* Shipping Address */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Shipping Address:
          </h4>
          <div className="text-gray-700">
            <ShippingAddress order={order} />
          </div>
        </div>

        {/* User Information */}
        {showPickup && filterUser && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              User Information:
            </h4>
            <p className="text-gray-700">Name: {filterUser?.name}</p>
            <p className="text-gray-700">Email: {filterUser?.email}</p>
            <p className="text-gray-700">Phone: {filterUser?.number}</p>
          </div>
        )}

        {/* Order Items */}
        <div className="mb-6">
          <h4 className="text-lg font-bold bg-gray-100 p-2 rounded-md">
            Bill Details:
          </h4>
          {order.orderItems?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between my-4 p-2 bg-gray-50 rounded-md"
            >
              <div className="flex items-center">
                <img
                  src={item.product.img}
                  alt={"product"}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h5 className="font-medium text-gray-800">
                    {item.product.title}
                  </h5>
                  <p className="text-sm text-gray-600">
                    HSN Code: {item?.product.hsn}
                  </p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
              <span className="font-semibold text-gray-800">
                ₹{item.price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 my-6" />

        {/* Charges Summary */}
        <div className="mb-6">
          <div className="flex justify-between text-gray-800">
            <div>
              <p>Delivery Charge</p>
              <p>Handling Fee</p>
            </div>
            <div>
              <p className="font-semibold">
                {order.deliveryCharge === 0
                  ? "Free"
                  : `₹${order.deliveryCharge}`}
              </p>
              <p className="font-semibold">₹{order.handlingFee}</p>
            </div>
          </div>
        </div>

        {/* Payment and Total */}
        <div className="flex justify-between items-center text-gray-800">
          <p className="text-lg">
            Payment Method:{" "}
            <span className="font-semibold">{order.paymentMethod}</span>
          </p>
          <p className="text-lg">
            Total Bill:{" "}
            <span className="font-semibold text-green-600">
              ₹{order.totalPrice.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default OrderBill;
