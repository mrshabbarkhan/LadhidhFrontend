import { RxCrossCircled } from "react-icons/rx";

function OrderBill({ order, showFn, showPickup = true }) {
  return (
    <section className="bg-black/20 flex justify-center h-[100vh] fixed top-0 left-0 right-0  ">
      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 w-full max-w-3xl m-auto overflow-scroll relative">
        <span
          onClick={() => showFn(false)}
          className="absolute right-8 text-xl cursor-pointer"
        >
          <RxCrossCircled />
        </span>
        <h3 className="text-lg font-bold">Order Details</h3>
        <p className="mt-2">
          Order ID: <span className="font-semibold">{order._id}</span>
        </p>
        <p>
          Status:
          <span className="font-semibold text-red-500">
            {order.paymentStatus.toLowerCase()}
          </span>
        </p>

        {showPickup ? <p>Pickup Password : {order?.pickupPassword}</p> : null}

        {/* Shipping Address */}
        <p className="mt-4">Shipping Address:</p>
        <p className="font-semibold">
          {order.shippingAddress.addressLine1},{" "}
          {order.shippingAddress.addressLine2}, {order.shippingAddress.city},{" "}
          {order.shippingAddress.state}, {order.shippingAddress.zipCode},{" "}
          {order.shippingAddress.country}
        </p>

        {/* Order Items */}
        <div className="mt-4">
          <h3 className="text-lg font-bold bg-white py-3 pl-2 ">
            Bill Details :
          </h3>
          {order.orderItems?.map((item, index) => (
            <div key={index} className="flex items-center justify-between my-4">
              <div className="flex items-center">
                <img
                  src={item.product.img}
                  alt={"product"}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <h1 className="mr-2">{item.product.title}</h1>
                <span className="text-gray-400"> x {item.quantity}</span>
                <span className="ml-2 text-gray-400">
                  {" "}
                  HSN : {item?.product.hsn}
                </span>
              </div>
              <div className="float-end ">
                <span className="font-semibold">₹{item.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        <hr className="border border-gray-200" />

        {/* Payment and Total */}
        <div className="flex justify-between ">
          <p className="mt-4">
            Payment Method:{" "}
            <span className="font-semibold">{order.paymentMethod}</span>
          </p>
          <p className="mt-4 ">
            Total Bill:{" "}
            <span className="font-semibold ml-2">
              ₹{order.totalPrice.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default OrderBill;
