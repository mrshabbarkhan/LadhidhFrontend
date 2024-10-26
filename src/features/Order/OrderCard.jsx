import { useState } from "react";
import OrderBill from "./OrderBill";
import CancelOrder from "./CancelOrder";
import useOrderStatus from "../../hooks/useOrderStatus";

function OrderCard({ order = {} }) {
  const [showBill, setShowBill] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const { orderItems, createdAt } = order;

  const now = new Date();
  const createdDate = new Date(createdAt);

  // Calculate the time difference in milliseconds
  const timeDifference = now - createdDate;
  // Convert the time difference to days
  const differenceInDays = timeDifference / (1000 * 60);

  if (showCancel) {
    return <CancelOrder setShow={setShowCancel} order={order} />;
  }

  return (
    <>
      <section className="flex justify-between my-6 mr-2">
        <div className="flex items-center gap-2 sm:gap-5">
          <img
            className="w-16 sm:w-20 rounded-xl"
            src={`${orderItems[0]?.product?.img}`}
            alt="product"
          />
          <div>
            <h1 className="font-semibold text-primary ">The Ladhidh Shop</h1>
            <span className="text-sm leading-3 font-semibold">
              {orderItems?.map((order) => (
                <h1 className="mb-1 leading-3" key={order._id}>
                  {order?.product?.title}
                </h1>
              ))}
            </span>
            <span className="mt-1 mr-2">{orderItems?.length} Items</span>{" "}
            <span
              onClick={() => setShowBill(true)}
              className="hover:underline cursor-pointer"
            >
              View Bill
            </span>
          </div>
        </div>
        <div className="text-end space-y-5">
          <h3 className="text-primary font-semibold text-sm">
            {createdDate.toLocaleDateString("en-GB")}
          </h3>

          {/* Show 'Reorder' if less than 1 day has passed, otherwise show 'Cancel Order' */}
          {useOrderStatus(order) === "Pending" ? (
            <button
              onClick={() => {
                if (useOrderStatus(order) === "Pending") {
                  setShowCancel(true);
                }
              }}
              className="bg-gray-200 text-red-600 p-1 px-3 rounded-md text-sm hover:text-white hover:bg-red-600"
            >
              {useOrderStatus(order) === "Cancelled"
                ? "Cancelled"
                : "Cancel Order"}
            </button>
          ) : (
            <button className="bg-green-200 text-green-600 p-1 px-3 rounded-md text-sm ">
              {useOrderStatus(order)}
            </button>
          )}

          {/* {differenceInDays > 10 ? (
            <button></button>
          ) : (
            <button
              onClick={
                order.orderStatus === -1 ? undefined : () => setShowCancel(true)
              }
              className="bg-gray-200 text-red-600 p-1 px-3 rounded-md text-sm hover:text-white hover:bg-red-600"
            >
              {useOrderStatus(order) === "" ? "Cancelled" : "Cancel Order"}
            </button>
          )} */}
        </div>
      </section>

      {showBill && (
        <OrderBill order={order} showFn={setShowBill} showPickup={false} />
      )}
    </>
  );
}

export default OrderCard;
