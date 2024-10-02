import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../services/apiOrders";

export function useOrders() {
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });

  if (isError) {
    console.error("Error fetching orders:", error); 
  }

  return { orders, isLoading, isError };
}
