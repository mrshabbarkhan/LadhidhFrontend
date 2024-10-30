import { RxCrossCircled } from "react-icons/rx";
import { useUser } from "../admin/page/users/useUser";
import useOrderStatus from "../../hooks/useOrderStatus";
import ShippingAddress from "./ShippingAddress";

function OrderBill({ order, showFn, showPickup = true }) {
  const { users } = useUser();
  const filterUser = users?.find((u) => u._id === order.user);

  return (
    <section className="bg-black/60 flex justify-center items-center fixed inset-0 z-[9999]">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-full max-w-3xl max-h-[90vh] overflow-y-auto mx-4 p-6">
        {/* Header */}
        <header className="flex items-center justify-between border-b pb-4 mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Order Summary
          </h3>
          <button
            onClick={() => showFn(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <RxCrossCircled size={26} />
          </button>
        </header>

        {/* Order Info */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <p className="text-gray-500 font-medium">Order ID:</p>
            <p className="font-semibold text-gray-700">{order._id}</p>
          </div>
          <div>
            <p className="text-gray-500 font-medium">Order Received:</p>
            <p className="font-semibold text-gray-700">
              {new Date(order.createdAt).toLocaleDateString()} at{" "}
              {new Date(order.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="inline-flex gap-2">
            <p className="text-gray-500 font-medium">Status:</p>
            <p
              className={`font-semibold ${
                useOrderStatus(order) === "Delivered"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {useOrderStatus(order)}
            </p>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="border-t pt-4 mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Shipping Address
          </h4>
          <ShippingAddress order={order} />
        </div>

        {/* User Info */}
        {showPickup && filterUser && (
          <div className="border-t pt-4 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              User Information
            </h4>
            <p className="text-sm text-gray-700">
              Name: <span className="font-semibold">{filterUser?.name}</span>
            </p>
            <p className="text-sm text-gray-700">
              Email: <span className="font-semibold">{filterUser?.email}</span>
            </p>
            <p className="text-sm text-gray-700">
              Phone: <span className="font-semibold">{filterUser?.number}</span>
            </p>
          </div>
        )}

        {/* Order Items */}
        <div className="border-t pt-4 mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Items Ordered
          </h4>
          {order.orderItems?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mt-3 py-2 border-b last:border-b-0"
            >
              <div className="flex items-center">
                <img
                  src={item.product?.img}
                  alt="product"
                  className="w-12 h-12 rounded-lg object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.product.title}
                  </p>
                  <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800">
                ₹{item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Charges */}
        <div className="border-t pt-4 mb-6">
          <div className="flex justify-between text-sm text-gray-600">
            <p>Delivery Charge</p>
            <p className="font-semibold">
              {order.deliveryCharge === 0 ? "Free" : `₹${order.deliveryCharge}`}
            </p>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <p>Handling Fee</p>
            <p className="font-semibold">
              {order?.handlingFee ? `₹${order.handlingFee}` : "Free"}
            </p>
          </div>
        </div>

        {/* Payment & Total */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center text-gray-800 font-medium">
            <p>Payment Method</p>
            <p className="font-semibold">{order.paymentMethod}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-semibold">Total</p>
            <p className="text-xl font-semibold text-green-600">
              ₹{order.totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderBill;
