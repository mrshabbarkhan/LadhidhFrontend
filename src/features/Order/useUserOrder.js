import { useQuery } from "@tanstack/react-query";
import {  getUserOrders } from "../services/apiOrders";

export function useUserOrder() {
  const {
    data: order,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userorders"],
    queryFn: getUserOrders,
  });

  if (isError) {
    console.error("Error fetching orders:", error);
  }

  return { order, isLoading, isError };
}
