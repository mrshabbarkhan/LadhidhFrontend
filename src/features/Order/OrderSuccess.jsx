import { Link } from "react-router-dom";

const OrderSuccess = ({ order }) => {
    console.log(order)
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold text-green-600">
          🎉 Order Placed Successfully!
        </h2>
        <p className="text-gray-700">Thank you for your order!</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
        <h3 className="text-lg font-bold">Order Details</h3>
        <p className="mt-2">
          Order ID: <span className="font-semibold ">{order._id}</span>
        </p>
        <p>
          Status:{" "}
          <span className="font-semibold text-green-500">{order.orderStatus}</span>
        </p>
        <p className="mt-4">Shipping Address:</p>
        <p className="font-semibold">
          {order.shippingAddress.addressLine1},{" "}
          {order.shippingAddress.addressLine2}, {order.shippingAddress.city},{" "}
          {order.shippingAddress.state}, {order.shippingAddress.zipCode},{" "}
          {order.shippingAddress.country}
        </p>
        <p className="mt-4">
          Payment Method:{" "}
          <span className="font-semibold">{order.paymentMethod}</span>
        </p>
        <p className="mt-4">
          Total Price: <span className="font-semibold">{order.totalPrice}</span>
        </p>
      </div>
      <div className="mt-6">
        <Link
          href="/profile/orders" // Link to the user's orders page
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          View Your Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
