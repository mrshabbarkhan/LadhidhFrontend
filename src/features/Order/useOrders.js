import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../services/apiOrders";
import { toast } from "sonner";

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
    toast.error(error.response?.data?.Expired || "Something went wrong");
  }

  return { orders, isLoading, isError };
}
