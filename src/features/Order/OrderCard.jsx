import { useState } from "react";
import OrderBill from "./OrderBill";

function OrderCard({ order = {} }) {
  const [showBill, setShowBill] = useState(false);

  const { orderItems, createdAt } = order;

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
            {new Date(createdAt).toLocaleDateString("en-GB")}
          </h3>
          <button className="bg-red-200 text-primary-dark p-1 px-3 rounded-md text-sm hover:text-white hover:bg-primary">
            Reorder
          </button>
        </div>
      </section>

      {showBill && (
        <OrderBill order={order} showFn={setShowBill} showPickup={false} />
      )}
    </>
  );
}

export default OrderCard;
