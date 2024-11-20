import useOrderStatus from "../../../hooks/useOrderStatus";
import { useOrders } from "../../Order/useOrders";
import * as XLSX from "xlsx";

function ExportOrderData() {
  const { orders } = useOrders();

  const exportToExcel = () => {
    // Convert data to JSON format suitable for Excel
    const data = orders?.map((order, index) => ({
      "S.No": index + 1,
      "Order ID": order._id || "N/A",
      "Order Date": order.createdAt
        ? new Date(order.createdAt).toLocaleDateString()
        : "N/A",
      Status: useOrderStatus(order) || "N/A",
      Amount: `₹${order.totalPrice || "0"}`,
    }));

    // Create a worksheet from the JSON data
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");

    // Export the workbook as an Excel file
    XLSX.writeFile(workbook, "OrderData.xlsx");
  };

  return (
    <button
      onClick={exportToExcel}
      className="block ml-auto w-full h-9 text-white  border border-gray-300 bg-primary rounded-md shadow-lg hover:bg-red-500 focus:outline-none text-sm transition ease-in-out duration-200 cursor-pointer"
    >
      Export
    </button>
  );
}

export default ExportOrderData;
