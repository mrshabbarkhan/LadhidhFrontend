import { useSearchParams } from "react-router-dom";
import useOrderStatus from "../../../../hooks/useOrderStatus";

export default function useFilterBy(arr) {
  const [searchParams] = useSearchParams();

  let filteredOrder;
  const filterValue = searchParams.get("filter") || "all";
  if (filterValue === "all") filteredOrder = arr;
  if (filterValue === "Pending")
    filteredOrder = arr.filter((order) => useOrderStatus(order) === "Pending");
  if (filterValue === "Cancelled")
    filteredOrder = arr.filter(
      (order) => useOrderStatus(order) === "Cancelled"
    );
  if (filterValue === "Assigned")
    filteredOrder = arr.filter((order) => useOrderStatus(order) === "Assigned");
  if (filterValue === "Delivered")
    filteredOrder = arr.filter(
      (order) => useOrderStatus(order) === "Delivered"
    );

  return filteredOrder;
}
