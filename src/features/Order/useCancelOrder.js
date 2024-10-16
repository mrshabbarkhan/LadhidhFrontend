import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "../services/apiOrders";
import toast from "react-hot-toast";

export function useCancelOrder() {
  const queryClient = useQueryClient();
  const { mutate: cancelOrderFn, isPending } = useMutation({
    mutationFn: cancelOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userorders"],
      });

      toast.success("Order will be updated");
    },
  });

  return { cancelOrderFn, isPending };
}
