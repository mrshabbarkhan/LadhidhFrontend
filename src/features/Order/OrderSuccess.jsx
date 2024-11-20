import { Link } from "react-router-dom";
import ShippingAddress from "./ShippingAddress";

const OrderSuccess = ({ order }) => {
  console.log(order);
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold text-green-600">
          🎉 Order Placed Successfully!
        </h2>
        <p className="text-gray-700">
          Your Delivery Password is * : {order.deliveryPassword}{" "}
        </p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 w-full max-w-3xl">
        <h3 className="text-lg font-bold">Order Details</h3>
        <p className="mt-2">
          Order ID: <span className="font-semibold">{order._id}</span>
        </p>
        <h1>Delivery Password : {order.deliveryPassword}</h1>
        <p>
          Status: <span className="font-semibold text-yellow-500">Pending</span>
        </p>

        {/* Order Items */}
        <div className="mt-4">
          <h3 className="text-lg font-bold">Items Ordered:</h3>
          {order.orderItems?.map((item, index) => (
            <div key={index} className="flex items-center mt-4 bg-white">
              <img
                src={item.product.img} // Assuming item.image exists for each product
                alt={item.product.title}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>
                  Price:{" "}
                  <span className="font-semibold">
                    ₹{item.price.toFixed(2)} x {item.quantity}
                  </span>
                </p>
              </div>

              <div>
                {item?.couponCode && item.couponCode.discount > 0 && (
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <p>Coupan Code : {`"${item.couponCode.code}"`}</p>
                    <p className="font-semibold">
                      - {`₹${item.couponCode.discount}`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Address */}
        <p className="mt-4">Shipping Address:</p>
        <p className="font-semibold">
          <ShippingAddress order={order} />
        </p>
        {order?.orderNotes && (
          <p className="font-semibold text-gray-700 mb-2">
            Order Note: " {order.orderNotes} "
          </p>
        )}

        {/* Payment and Total */}
        <p className="mt-4">
          Payment Method:{" "}
          <span className="font-semibold">{order.paymentMethod}</span>
        </p>

        {/* Charges */}

        <div className="border-t pt-4 mb-6">
          {order?.discountedPrice && order.discountedPrice.discount > 0 && (
            <div className="flex justify-between text-sm text-gray-600 my-2">
              <p>Coupan Code : {`"${order.discountedPrice.code}"`}</p>
              <p className="font-semibold">
                - ₹ {`${order.discountedPrice.discount}`}
              </p>
            </div>
          )}

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

        <p className="mt-4">
          Total Price:{" "}
          <span className="font-semibold"> ₹{order.totalPrice.toFixed(2)}</span>
        </p>
      </div>

      <div className="mt-6 ">
        <Link
          to="/profile/orders" // Link to the user's orders page
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition duration-200 "
        >
          View Your Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
