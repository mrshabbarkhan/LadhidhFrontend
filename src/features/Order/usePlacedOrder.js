import { useMutation } from "@tanstack/react-query";
import { placeOrder } from "../services/apiOrders";
import { toast } from "sonner";

export function usePlacedOrder() {
  const {
    mutate: postOrder,
    isPending,
    isSuccess,
    data,
  } = useMutation({
    mutationFn: placeOrder,
    onSuccess: (data) => {
      toast.success("🎉 Order Placed Successfully");
    },
    onError: (error) => {
      toast.error(
        "Something went wrong: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Order Placement Error:", error);
    },
  });

  return { postOrder, isPending, isSuccess, data };
}
