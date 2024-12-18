import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "../services/apiOrders";
import { toast } from "sonner";

export function useCancelOrder() {
  const queryClient = useQueryClient();
  const { mutate: cancelOrderFn, isPending } = useMutation({
    mutationFn: cancelOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userorders", "orders"],
      });
      toast.success("Order Cancelled");
    },
  });

  return { cancelOrderFn, isPending };
}
