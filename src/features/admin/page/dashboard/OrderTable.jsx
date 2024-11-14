import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOrders } from "../../../Order/useOrders";
import { addToSelectedOrder } from "../../../Order/orderSlice";
import OrderBill from "../../../Order/OrderBill";
import Loader from "../../../../components/Loader";
import useOrderStatus from "../../../../hooks/useOrderStatus";
import useFilterBySearch from "../../../../hooks/useFilterBySearch";
import useFilterBy from "./useFilterBy";

const OrderTable = () => {
  const dispatch = useDispatch();
  const [showBill, setShowBill] = useState(false);
  const [selectedBillOrder, setSelectedBillOrder] = useState(null);

  const { orders, isLoading } = useOrders();
  const { selectedOrder } = useSelector((state) => state.order);

  const { filteredProducts: filterOrderById } = useFilterBySearch(
    orders,
    "_id"
  );

  const filteredOrder = useFilterBy(filterOrderById);

  const statusColors = {
    Delivered: " text-green-700",
    Pending: " text-purple-700",
    Cancelled: " text-red-700",
    Assigned: " text-blue-700",
    Pickup: " text-blue-700",
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
      <table className="min-w-full table-auto  border-collapse ">
        <thead>
          <tr className="shadow-md ">
            <th className="py-2">S.No</th>
            <th className="px-4 py-2">OrderId</th>
            <th className="px-4 py-2">View Details</th>
            <th className="px-4 py-2">Order Date</th>
            <th className="px-4 py-2">Assign Rider</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrder?.length ? (
            filteredOrder
              .map((order, index) => {
                const orderStatus = useOrderStatus(order);

                return (
                  <tr key={index} className="text-center">
                    <td className="py-2">{index + 1}.</td>
                    <td className="px-4 py-2 line-clamp-1">
                      {order._id || "N/A"}
                    </td>
                    <td className="px-4 py-2 cursor-pointer ">
                      <span
                        onClick={() => handleViewOrder(order)}
                        className="border shadow-sm px-2 hover:shadow-md rounded-md py-0.5"
                      >
                        View
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-4 py-2">
                      {[
                        "Cancelled",
                        "Delivered",
                        "Pickup",
                        "Assigned",
                      ].includes(orderStatus) ? (
                        <button
                          className={` shadow-sm ${statusColors[orderStatus]} px-4 rounded-md py-1 border`}
                        >
                          {orderStatus}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSelect(order)}
                          className="text-sm sm:text-base mr-2 rounded-md"
                        >
                          {selectedOrder?._id === order._id ? (
                            <span
                              className="bg-green-500 text-white
                            border shadow-md px-5 rounded-md py-1 "
                            >
                              Selected
                            </span>
                          ) : (
                            <span className="border bg-slate-200 shadow-sm px-2 py-1 rounded-md inline-block text-nowrap">
                              Select Order
                            </span>
                          )}
                        </button>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`inline-block px-3 py-1 rounded-lg font-medium shadow-sm border ${
                          statusColors[orderStatus] || "bg-gray-300"
                        }`}
                      >
                        {orderStatus || "N/A"}
                      </span>
                    </td>
                    <td className="px-4 py-2 font-semibold">
                      ₹{order.totalPrice || "0"}
                    </td>
                  </tr>
                );
              })
              .reverse()
          ) : (
            <tr className="text-center w-full py-4 text-red-600 font-medium">
              <td colSpan="7">No Data Found</td>
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
