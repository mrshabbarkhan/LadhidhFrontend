import { useState } from "react";
import OrderBill from "./OrderBill";
import CancelOrder from "./CancelOrder";
import TrackOrder from "./TrackOrder";

function OrderCard({ order = {} }) {
  const [showBill, setShowBill] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [showTrack, setShowTrack] = useState(false);
  const { orderItems, createdAt } = order;

  const createdDate = new Date(createdAt);

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
              className=" cursor-pointer hover:bg-gray-100 px-2"
            >
              View Bill
            </span>
          </div>
        </div>
        <div className="text-end space-y-5">
          <h3 className="text-primary font-semibold text-sm">
            {createdDate.toLocaleDateString("en-GB")}
          </h3>

          {/* Order Status */}

          {/* {orderStatus === "Pending" ? (
            <button
              onClick={() => setShowCancel(true)}
              className="bg-gray-200 text-red-600 p-1 px-3 rounded-md text-sm hover:text-white hover:bg-red-600"
            >
              {orderStatus === "Cancelled" ? "Cancelled" : "Cancel Order"}
            </button>
          ) : (
            <button className="bg-green-200 text-green-600 p-1 px-3 rounded-md text-sm ">
              {orderStatus}
            </button>
          )} */}

          <button
            onClick={() => setShowTrack((prev) => !prev)}
            className="block ml-auto sm:w-full px-2 py-1 border border-gray-300 bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none text-sm transition ease-in-out duration-200 cursor-pointer"
          >
            {showTrack ? "Hide Tracking" : "Track Order"}
          </button>
        </div>
      </section>

      {showBill && (
        <OrderBill order={order} showFn={setShowBill} showPickup={false} />
      )}
      {showTrack && <TrackOrder order={order} />}
    </>
  );
}

export default OrderCard;
