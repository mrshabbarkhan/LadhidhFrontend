import * as XLSX from "xlsx";
import { useUser } from "../page/users/useUser";

function ExportUserData({ className }) {
  const { users } = useUser();

  const exportToExcel = () => {
    const data = users?.map((user, index) => ({
      "S.No": index + 1,
      Name: user.name,
      Address:
        user.addresses?.length > 0
          ? `${user.addresses[0].addressLine1}, ${user.addresses[0].city}, ${user.addresses[0].zipCode}`
          : "No initial address",
      Email: user.email,
      Phone: user.number,
    }));

    // Create a worksheet from the JSON data
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    // Export the workbook as an Excel file
    XLSX.writeFile(workbook, "UserData.xlsx");
  };

  return (
    <button
      onClick={exportToExcel}
      className={`block sm:w-full mt-2 px-3 -translate-y-1 text-white h-10 border border-gray-300 bg-primary rounded-md shadow-lg hover:bg-red-500  focus:outline-none text-sm transition ease-in-out duration-200 cursor-pointer ${className}`}
    >
      Export
    </button>
  );
}

export default ExportUserData;
