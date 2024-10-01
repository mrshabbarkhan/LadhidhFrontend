import { useQuery } from "@tanstack/react-query";
import { getPreviousOrder } from "../services/apiOrders";

export function useOrders() {
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getPreviousOrder,
  });

  if (isError) {
    console.error("Error fetching orders:", error); 
  }

  return { orders, isLoading, isError };
}
