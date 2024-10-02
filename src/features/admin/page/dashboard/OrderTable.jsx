import React from "react";
import { useSelector } from "react-redux";
import { useOrders } from "../../../Order/useOrders";

const OrderTable = () => {

  const {orders, isLoading, isError} = useOrders()

  const debouncedTerm = useSelector((state) => state.search.debouncedTerm);

  const filterOrderById = orders?.filter((order) =>
    order._id.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

   const statusColors = {
     delivered: "bg-green-400 text-green-500 ",
     pending: "bg-purple-700 text-white",
     process: "bg-blue-400 text-white",
     canceled: "bg-red-400 text-white", 
   };

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full table-auto border-collapse  ">
        <thead>
          <tr className="bg-red-100">
            <th className=" py-2  ">S.No</th>
            <th className="px-4 py-2  ">OrderId</th>
            <th className="px-4 py-2  ">Payment Method</th>
            <th className="px-4 py-2  ">Order Date</th>
            <th className="px-4 py-2  ">Assign Rider</th>
            <th className="px-4 py-2  ">Status</th>
            <th className="px-4 py-2  ">Total</th>
          </tr>
        </thead>
        <tbody>
          {filterOrderById?.length ? (
            filterOrderById.map((order, index) => (
              <tr key={index} className="text-center">
                <td className=" py-2 border">{index+1}</td>
                <td className="px-4 py-2  line-clamp-1">{order._id}</td>
                <td className="px-4 py-2  ">{order.paymentMethod}</td>
                <td className="px-4 py-2  ">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2  ">-</td>
                <td className="px-4 py-2  ">
                  <span
                    className={`inline-block px-3 py-1 rounded-lg text-white ${
                      statusColors[order.paymentStatus.toLowerCase()]
                    }`}
                  >
                    {order.paymentStatus.toLowerCase()}
                  </span>
                </td>
                <td className="px-4 py-2 ">₹{order.totalPrice}</td>
              </tr>
            ))
          ) : (
            <h1 className="text-center text-red-600 font-medium">
              No match found
            </h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
