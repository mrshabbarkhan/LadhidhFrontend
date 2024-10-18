import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOrders } from "../../../Order/useOrders";
import { useAssignOrder } from "../../../Order/useAssignOrder";
import { addToSelectedOrder } from "../../../Order/orderSlice";
import OrderBill from "../../../Order/OrderBill";
import Spinner from "../../../../components/Spinner";
import Loader from "../../../../components/Loader";
import useOrderStatus from "../../../../hooks/useOrderStatus";

const OrderTable = () => {
  const dispatch = useDispatch();

  const [showBill, setShowBill] = useState(false);
  const [selectedBillOrder, setSelectedBillOrder] = useState(null);

  const { orders, isLoading } = useOrders();
  const { selectedOrder } = useSelector((state) => state.order);

  const debouncedTerm = useSelector((state) => state.search.debouncedTerm);
  const filterOrderById = orders?.filter((order) =>
    order._id?.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  const statusColors = {
    Delivered: "bg-green-200 text-green-700",
    Pending: "bg-purple-200 text-purple-700",
    PickedUp: "bg-blue-200 text-blue-700",
    Cancelled: "bg-red-200 text-red-700",
  };

  const handleSelect = (order) => {
    dispatch(addToSelectedOrder(order));
  };

  const handleViewOrder = (order) => {
    setSelectedBillOrder(order);
    setShowBill(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-red-100">
            <th className="py-2">S.No</th>
            <th className="px-4 py-2">OrderId</th>
            <th className="px-4 py-2">View Details</th>
            <th className="px-4 py-2">Order Date</th>
            <th className="px-4 py-2">Assign Rider</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {filterOrderById?.length ? (
            filterOrderById
              .map((order, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 line-clamp-1">
                    {order._id || "N/A"}
                  </td>
                  <td
                    onClick={() => handleViewOrder(order)}
                    className="px-4 py-2 cursor-pointer hover:scale-95 text-red-500"
                  >
                    <span className="bg-red-200 px-2 rounded-md py-0.5">
                      View
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2">
                    {useOrderStatus(order) === "Cancelled" ? (
                      <button className="bg-red-200 text-red-700 px-4 rounded-md py-1 border">
                        Cancelled
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSelect(order)}
                        className="text-sm sm:text-base mr-2 rounded-md"
                      >
                        {selectedOrder?._id === order._id ? (
                          <span className="bg-green-500 text-white px-5 rounded-md py-1 border">
                            Selected
                          </span>
                        ) : (
                          <span className="bg-gray-300 px-2 py-1 rounded-md inline-block text-nowrap">
                            Select Order
                          </span>
                        )}
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-lg font-medium ${
                        statusColors[useOrderStatus(order)] || "bg-gray-300"
                      }`}
                    >
                      {useOrderStatus(order) || "N/A"}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-semibold">
                    ₹{order.totalPrice || "0"}
                  </td>
                </tr>
              ))
              .reverse()
          ) : (
            <tr className="text-center w-full py-4 text-red-600 font-medium">
              <h1>No Data Found</h1>
            </tr>
          )}
        </tbody>
      </table>

      {showBill && selectedBillOrder && (
        <OrderBill order={selectedBillOrder} showFn={setShowBill} />
      )}
    </div>
  );
};

export default OrderTable;
