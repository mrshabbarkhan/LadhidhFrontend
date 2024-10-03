import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOrders } from "../../../Order/useOrders";
import { useAssignOrder } from "../../../Order/useAssignOrder";
import { addToSelectedOrder } from "../../../Order/orderSlice";

const OrderTable = () => {
  const dispatch = useDispatch();

  const { orders, isLoading, isError } = useOrders();
  const { selectedOrder } = useSelector((state) => state.order);

  const debouncedTerm = useSelector((state) => state.search.debouncedTerm);
  const filterOrderById = orders?.filter((order) =>
    order._id?.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  const statusColors = {
    delivered: "bg-green-400 text-green-500",
    pending: "bg-purple-700 text-white",
    process: "bg-blue-400 text-white",
    canceled: "bg-red-400 text-white",
  };

  const handleSelect = (order) => {
    dispatch(addToSelectedOrder(order));
  };

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-red-100">
            <th className="py-2">S.No</th>
            <th className="px-4 py-2">OrderId</th>
            <th className="px-4 py-2">Payment Method</th>
            <th className="px-4 py-2">Order Date</th>
            <th className="px-4 py-2">Assign Rider</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {filterOrderById?.length ? (
            filterOrderById.map((order, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 border">{index + 1}</td>
                <td className="px-4 py-2 line-clamp-1">{order._id || "N/A"}</td>
                <td className="px-4 py-2">{order.paymentMethod || "N/A"}</td>
                <td className="px-4 py-2">
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleSelect(order)}
                    className="text-sm sm:text-base mr-2 rounded-md"
                  >
                    {selectedOrder?._id === order._id ? (
                      <span className="bg-green-500 text-white px-5 rounded-md py-1 border">
                        Selected
                      </span>
                    ) : (
                      <span className="bg-gray-300 px-2 py-1 rounded-md">
                        Select Order
                      </span>
                    )}
                  </button>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-lg text-white ${
                      statusColors[order.paymentStatus?.toLowerCase()] ||
                      "bg-gray-300"
                    }`}
                  >
                    {order.paymentStatus?.toLowerCase() || "N/A"}
                  </span>
                </td>
                <td className="px-4 py-2">₹{order.totalPrice || "0"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                className="text-center py-4 text-red-600 font-medium"
              >
                No match found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
